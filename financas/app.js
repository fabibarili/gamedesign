(() => {
  'use strict';

  const TAGS = ['Mercado', 'Farmácia', 'Gasolina', 'Lazer', 'Casa', 'Padel', 'Outros'];
  const TAGS_LIMITE = [...TAGS, 'Parcelas'];
  const TABELAS = ['salarios', 'lancamentos', 'contas', 'pagamentos', 'parcelamentos', 'limites'];
  const MENU = [['resumo', 'Resumo'], ['extrato', 'Extrato'], ['pagar', 'Contas a pagar'], ['fixas', 'Contas fixas'], ['parcelas', 'Parcelas'], ['guardado', 'Guardado'], ['limites', 'Limites por tag'], ['salario', 'Salário']];
  const CARTAO = 'Cartão de crédito';
  const LISTA_PAGAR = ['Luz', CARTAO, 'Unimed', 'Internet + Telefone', 'Condomínio', 'Contabilidade', 'Imposto', 'INSS'];
  const CONTAS_CREDITO = ['Academia', 'Spotify + Youtube'];
  const MESES = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  const CURTOS = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];

  const $root = document.getElementById('root');
  const $sheet = document.getElementById('sheet');
  const $toast = document.getElementById('toast');

  /* ---------- utilidades ---------- */
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const cents = (v) => Math.round(Number(v) * 100);
  const moeda = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
  let oculto = false;
  try { oculto = localStorage.getItem('fin_oculto') === '1'; } catch { /* sem armazenamento */ }
  document.documentElement.classList.toggle('oculto', oculto);
  const brl = (c) => (oculto ? 'R$ •••••' : moeda.format(c / 100));
  const inputMoney = (c) => (c / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  function parseMoney(txt) {
    let s = String(txt || '').replace(/R\$|\s/g, '');
    if (!s) return null;
    if (s.includes(',')) s = s.replace(/\./g, '').replace(',', '.');
    else if (/^\d{1,3}(\.\d{3})+$/.test(s)) s = s.replace(/\./g, '');
    if (!/^\d+(\.\d{1,2})?$/.test(s)) return null;
    const c = Math.round(Number(s) * 100);
    return c <= 99999999999 ? c : null;
  }

  const pad = (n) => String(n).padStart(2, '0');
  const hoje = () => { const d = new Date(); return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`; };
  const MES_INICIAL = '2026-12';
  const DATA_INICIAL = '2026-11-26';
  const mesAtual = () => (mesDe(hoje()) < MES_INICIAL ? MES_INICIAL : mesDe(hoje()));
  const idxMes = (m) => { const [a, b] = m.split('-').map(Number); return a * 12 + b - 1; };
  const deIdx = (i) => `${Math.floor(i / 12)}-${pad((i % 12) + 1)}`;
  const addMes = (m, n) => deIdx(idxMes(m) + n);
  // O mês vai do dia 26 do mês anterior até o dia 25: 27/12 já conta em janeiro.
  const mesDe = (d) => (Number(d.slice(8, 10)) > 25 ? addMes(d.slice(0, 7), 1) : d.slice(0, 7));
  const nomeMes = (m) => `${MESES[idxMes(m) % 12]} ${m.slice(0, 4)}`;
  const soMes = (m) => MESES[idxMes(m) % 12];
  const curtoMes = (m) => `${CURTOS[idxMes(m) % 12]}/${m.slice(2, 4)}`;
  const dataBr = (d) => { const [a, m, dia] = d.split('-'); return `${dia}/${m}/${a.slice(2)}`; };
  const dataCurta = (d) => `${d.slice(8)} ${CURTOS[Number(d.slice(5, 7)) - 1]}`;

  /* ---------- acesso aos dados ---------- */
  const lembrar = () => { try { return localStorage.getItem('fin_lembrar') !== '0'; } catch { return true; } };
  const authStorage = {
    getItem(k) { try { return localStorage.getItem(k) ?? sessionStorage.getItem(k); } catch { return null; } },
    setItem(k, v) {
      try {
        const [usar, outro] = lembrar() ? [localStorage, sessionStorage] : [sessionStorage, localStorage];
        usar.setItem(k, v); outro.removeItem(k);
      } catch { /* armazenamento bloqueado: sessão dura só nesta aba */ }
    },
    removeItem(k) { try { localStorage.removeItem(k); sessionStorage.removeItem(k); } catch { /* idem */ } }
  };

  function apiSupabase(url, key) {
    const c = window.supabase.createClient(url, key, { auth: { storage: authStorage, persistSession: true, autoRefreshToken: true, detectSessionInUrl: false } });
    const ok = ({ data, error }) => { if (error) throw error; return data; };
    return {
      async userId() { const { data } = await c.auth.getSession(); return data.session?.user?.id || null; },
      async entrar(email, senha) { const { data, error } = await c.auth.signInWithPassword({ email, password: senha }); if (error) throw error; return data.user.id; },
      async sair() { await c.auth.signOut(); },
      aoSair(fn) { c.auth.onAuthStateChange((ev) => { if (ev === 'SIGNED_OUT') fn(); }); },
      async todos(t) {
        const linhas = [];
        for (let de = 0; ; de += 1000) {
          const parte = ok(await c.from(t).select('*').range(de, de + 999));
          linhas.push(...parte);
          if (parte.length < 1000) return linhas;
        }
      },
      async inserir(t, row) { return ok(await c.from(t).insert(row).select().single()); },
      async atualizar(t, id, patch) { return ok(await c.from(t).update(patch).eq('id', id).select().single()); },
      async gravar(t, row, chaves) { return ok(await c.from(t).upsert(row, { onConflict: chaves }).select().single()); },
      async apagar(t, filtro) { ok(await c.from(t).delete().match(filtro)); }
    };
  }

  // Dados fictícios em memória. Só liga em localhost com ?demo na URL.
  function apiDemo() {
    const m = mesAtual();
    const dia = (n) => `${m}-${pad(n)}`;
    const db = { salarios: [], lancamentos: [], contas: [], pagamentos: [], parcelamentos: [], limites: [] };
    let n = 0;
    const id = () => `demo-${++n}`;
    [[-5, 7800, 3400], [-4, 7800, 3300], [-3, 8000, 3300], [-2, 7800, 3200], [-1, 8200, 3200], [0, 8000, 0]].forEach(([o, s, g]) => {
      const mm = addMes(m, o);
      db.salarios.push({ mes: mm, valor: s });
      if (g) db.lancamentos.push({ id: id(), tipo: 'debito', valor: g, descricao: 'Gastos do mês', data: `${mm}-15`, tag: 'Outros' });
    });
    [['Mercado', 920], ['Casa', 310], ['Gasolina', 290], ['Lazer', 240], ['Padel', 180], ['Farmácia', 110], ['Outros', 70]].forEach(([tag, valor], i) => {
      db.lancamentos.push({ id: id(), tipo: 'debito', valor, descricao: `Compra ${tag}`, data: dia(10 + i), tag });
    });
    db.lancamentos.push({ id: id(), tipo: 'credito', valor: 600, descricao: 'Freela', data: dia(5), tag: 'Entradas' });
    [['Mercado', 340, 'Mercado do mês'], ['Lazer', 160, 'Restaurante']].forEach(([tag, valor, descricao], i) => {
      db.lancamentos.push({ id: id(), tipo: 'credito', valor, descricao, data: dia(18 + i), tag });
    });
    [['Condomínio', 480, 8], ['Internet + Telefone', 180, 10], ['Unimed', 300, 12], ['Luz', 180, 25], ['Academia', 100, 10], ['Spotify + Youtube', 40, 10], ['Vaga do carro', 60, 10]].forEach(([nome, valor, d]) => {
      db.contas.push({ id: id(), nome, valor, dia: d, inicio: addMes(m, -5), fim: null });
    });
    [['Notebook', 4800, -2, 12], ['Geladeira', 3000, -6, 10], ['Raquete de padel', 1200, -1, 4]].forEach(([descricao, total, o, vezes]) => {
      db.parcelamentos.push({ id: id(), descricao, total, data: `${addMes(m, o)}-14`, vezes });
    });
    [['Mercado', 2000], ['Casa', 500], ['Gasolina', 400], ['Lazer', 400], ['Padel', 400], ['Farmácia', 200], ['Outros', 50]].forEach(([tag, valor]) => db.limites.push({ tag, valor }));
    let logado = false;
    const casa = (r, f) => Object.entries(f).every(([k, v]) => r[k] === v);
    return {
      async userId() { return logado ? 'demo' : null; },
      async entrar() { logado = true; return 'demo'; },
      async sair() { logado = false; },
      aoSair() {},
      async todos(t) { return db[t].map((r) => ({ ...r })); },
      async inserir(t, row) { const r = { id: id(), ...row }; db[t].push(r); return { ...r }; },
      async atualizar(t, i, patch) { const r = db[t].find((x) => x.id === i); Object.assign(r, patch); return { ...r }; },
      async gravar(t, row, chaves) {
        const ks = chaves.split(',').filter((k) => k !== 'user_id');
        const r = db[t].find((x) => ks.every((k) => x[k] === row[k]));
        if (r) Object.assign(r, row); else db[t].push({ ...row });
        return { ...row };
      },
      async apagar(t, f) { db[t] = db[t].filter((r) => !casa(r, f)); }
    };
  }

  const cfg = window.FINANCAS_CONFIG || {};
  const local = ['localhost', '127.0.0.1'].includes(location.hostname);
  const demo = local && new URLSearchParams(location.search).has('demo');
  const configurado = !!(cfg.supabaseUrl && cfg.supabaseKey && window.supabase);
  const api = demo ? apiDemo() : configurado ? apiSupabase(cfg.supabaseUrl, cfg.supabaseKey) : null;

  let uid = null;
  let db = {};
  const ui = { view: 'resumo', mes: mesAtual(), filtro: 'Todos', erroLogin: '' };

  async function carregar() {
    const res = await Promise.all(TABELAS.map((t) => api.todos(t)));
    db = {};
    TABELAS.forEach((t, i) => { db[t] = res[i]; });
  }

  /* ---------- cálculos ---------- */
  function salario(m) {
    let melhor = null;
    db.salarios.forEach((s) => { if (s.mes <= m && (!melhor || s.mes > melhor.mes)) melhor = s; });
    return melhor ? cents(melhor.valor) : 0;
  }
  const lancDoMes = (m) => db.lancamentos.filter((l) => mesDe(l.data) === m);
  const contasDoMes = (m) => db.contas.filter((c) => c.inicio <= m && (!c.fim || c.fim >= m)).sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR'));
  // Conta com percentual (ex.: imposto) acompanha o salário do mês.
  const valorConta = (c, m) => (c.percentual == null ? cents(c.valor) : Math.round(salario(m) * Math.round(Number(c.percentual) * 100) / 10000));
  const pctTexto = (c) => (oculto ? 'calculado do salário' : `${Number(c.percentual).toLocaleString('pt-BR', { maximumFractionDigits: 2 })}% do salário`);

  const normaliza = (s) => String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').trim().toLowerCase();
  const ehCredito = (c) => CONTAS_CREDITO.some((n) => normaliza(n) === normaliza(c.nome));

  function parcelaNoMes(p, m) {
    const n = idxMes(m) - idxMes(mesDe(p.data)) + 1;
    if (n < 1 || n > p.vezes) return null;
    const t = cents(p.total);
    const base = Math.floor(t / p.vezes);
    return { n, valor: base + (n <= t - base * p.vezes ? 1 : 0) };
  }
  const totalParcelas = (m) => db.parcelamentos.reduce((s, p) => s + (parcelaNoMes(p, m)?.valor || 0), 0);

  function restanteDepois(p, m) {
    let soma = 0;
    const inicio = idxMes(mesDe(p.data));
    for (let i = Math.max(idxMes(m) + 1, inicio); i < inicio + p.vezes; i++) soma += parcelaNoMes(p, deIdx(i)).valor;
    return soma;
  }

  // No banco, tipo 'credito' com a tag Entradas é dinheiro que entrou;
  // com qualquer outra tag é compra no cartão de crédito, que vai para a fatura.
  const ehEntrada = (l) => l.tipo === 'credito' && l.tag === 'Entradas';
  const noCartao = (l) => l.tipo === 'credito' && l.tag !== 'Entradas';
  const somaLanc = (lista) => lista.reduce((s, x) => s + cents(x.valor), 0);

  // Fatura do cartão: parcelas do mês, contas fixas no crédito e compras no crédito.
  function fatura(m) {
    const contas = contasDoMes(m).filter(ehCredito);
    const parcelas = totalParcelas(m);
    const compras = somaLanc(lancDoMes(m).filter(noCartao));
    return { contas, parcelas, compras, total: parcelas + compras + contas.reduce((s, c) => s + valorConta(c, m), 0) };
  }

  function contaMes(m) {
    const l = lancDoMes(m);
    const sal = salario(m);
    const creditos = somaLanc(l.filter(ehEntrada));
    const gastos = somaLanc(l.filter((x) => x.tipo === 'debito'));
    const compras = somaLanc(l.filter(noCartao));
    const fixas = contasDoMes(m).reduce((s, c) => s + valorConta(c, m), 0);
    const parcelas = totalParcelas(m);
    const entradas = sal + creditos;
    const despesas = gastos + compras + fixas + parcelas;
    return { sal, creditos, gastos, compras, fixas, parcelas, entradas, despesas, saldo: entradas - despesas };
  }

  // Do primeiro mês com dados até o mês atual: o saldo de cada mês é o que foi guardado.
  function mesesGuardado() {
    const marcos = [...db.salarios.map((s) => s.mes), ...db.lancamentos.map((l) => mesDe(l.data))].sort();
    if (!marcos.length) return [];
    const fim = idxMes(mesAtual());
    const lista = [];
    for (let i = fim; i >= Math.max(idxMes(marcos[0]), idxMes(MES_INICIAL)); i--) {
      const m = deIdx(i);
      lista.push({ m, saldo: contaMes(m).saldo });
    }
    return lista;
  }
  const totalGuardado = () => mesesGuardado().reduce((s, x) => s + x.saldo, 0);

  function itensAPagar(m) {
    const itens = [];
    const contas = contasDoMes(m);
    const f = fatura(m);
    LISTA_PAGAR.forEach((nome) => {
      if (nome === CARTAO) {
        const partes = [f.parcelas && 'Parcelas', f.compras && 'Compras no crédito', ...f.contas.map((c) => c.nome)].filter(Boolean);
        if (f.total > 0) itens.push({ chave: 'cartao', nome, sub: partes.join(', '), valor: f.total });
        return;
      }
      contas.filter((c) => normaliza(c.nome) === normaliza(nome)).forEach((c) => itens.push({ chave: c.id, nome: c.nome, sub: '', valor: valorConta(c, m), conta: c }));
    });
    return itens.map((i) => ({ ...i, pago: db.pagamentos.some((p) => p.mes === m && p.chave === i.chave) }));
  }

  /* ---------- telas ---------- */
  const barraMes = () => `<div class="month"><button class="icon" data-act="mes" data-n="-1" aria-label="Mês anterior" ${ui.mes <= MES_INICIAL ? 'disabled' : ''}>‹</button><strong>${nomeMes(ui.mes)}<span class="periodo">26/${addMes(ui.mes, -1).slice(5)} a 25/${ui.mes.slice(5)}</span></strong><button class="icon" data-act="mes" data-n="1" aria-label="Próximo mês">›</button></div>`;
  const cabeca = (titulo, extra = '') => `<header class="head"><h1 class="title">${titulo}</h1>${extra}</header>${barraMes()}`;
  const linhaLink = (view, nome, valor, cls = '', extra = '') => `<button class="row" data-act="ir" data-view="${view}"><span>${nome}</span><span class="val ${cls}">${valor}${extra}</span></button>`;

  function vResumo() {
    const c = contaMes(ui.mes);
    const lim = Object.fromEntries(db.limites.map((l) => [l.tag, cents(l.valor)]));
    const l = lancDoMes(ui.mes).filter((x) => !ehEntrada(x));
    const fat = fatura(ui.mes);
    const tags = [...TAGS.map((t) => ({ t, v: l.filter((x) => x.tag === t).reduce((s, x) => s + cents(x.valor), 0), lim: lim[t] || 0 })), { t: 'Parcelas', v: c.parcelas, lim: lim.Parcelas || 0 }].sort((a, b) => (oculto ? 0 : b.v - a.v));
    const refMax = Math.max(1, ...tags.map((x) => x.v));
    const linhasTag = tags.map(({ t, v, lim: m }) => {
      const acima = m > 0 && v > m;
      const perto = m > 0 && !acima && v / m >= 0.9;
      const cls = acima ? 'red' : perto ? 'amber' : '';
      const fill = acima ? 'r' : perto ? 'a' : '';
      const pct = m > 0 ? Math.min(100, v / m * 100) : v / refMax * 100;
      return `<div class="tagline"><div><span>${t}</span><span class="muted"><strong class="${cls}">${brl(v)}</strong>${m > 0 ? ` de ${brl(m)}` : ''}</span></div><div class="track"><div class="fill ${fill}" data-w="${pct}"></div></div></div>`;
    }).join('');
    return `${barraMes()}
      <section class="card"><span class="lab">Saldo do mês</span><span class="big hero ${c.saldo < 0 ? 'red' : ''}">${brl(c.saldo)}</span>
        <div class="two"><button class="stat" data-act="ir" data-view="salario"><span class="lab">Entradas</span><span class="val green">${brl(c.entradas)}</span></button>
        <button class="stat" data-act="ir" data-view="extrato"><span class="lab">Despesas</span><span class="val">${brl(c.despesas)}</span></button></div></section>
      <div class="cols">
        <section class="card list">
          ${linhaLink('salario', `Salário de ${soMes(ui.mes).toLowerCase()}`, brl(c.sal), '', ' <span class="green">· Editar</span>')}
          ${linhaLink('fixas', 'Contas fixas', brl(c.fixas))}
          ${linhaLink('parcelas', 'Parcelas do cartão', brl(c.parcelas))}
          ${linhaLink('pagar', 'Fatura do cartão', brl(fat.total))}
        </section>
        <section class="card"><div class="head"><h2 class="h2">Gastos por tag</h2><button class="link" data-act="ir" data-view="limites">Editar limites</button></div>
          <div class="tags-list">${linhasTag}</div></section>
      </div>
      <button class="ghost only-mobile" data-act="sair">Sair</button>`;
  }

  function vExtrato() {
    const todos = lancDoMes(ui.mes).sort((a, b) => b.data.localeCompare(a.data));
    const lista = todos.filter((x) => ui.filtro === 'Todos' || x.tag === ui.filtro);
    const chips = ['Todos', 'Entradas', ...TAGS].map((t) => `<button class="chip ${t === ui.filtro ? 'on' : ''}" data-act="filtro" data-tag="${t}" aria-pressed="${t === ui.filtro}">${t}</button>`).join('');
    const sal = salario(ui.mes);
    const mostraSal = sal > 0 && (ui.filtro === 'Todos' || ui.filtro === 'Entradas');
    const linhas = lista.map((l) => {
      const cred = ehEntrada(l);
      return `<button class="row" data-act="editar-lanc" data-id="${esc(l.id)}"><span class="grow"><span class="name">${esc(l.descricao)}</span><p class="sub">${esc(l.tag)}${noCartao(l) ? ' · Crédito' : ''} · ${dataCurta(l.data)}</p></span><span class="val ${cred ? 'green' : ''}">${cred ? '+' : '−'} ${brl(cents(l.valor))}</span></button>`;
    }).join('');
    const linhaSal = mostraSal ? `<button class="row" data-act="ir" data-view="salario"><span class="grow"><span class="name">Salário</span><p class="sub">Entradas · ${nomeMes(ui.mes)}</p></span><span class="val green">+ ${brl(sal)}</span></button>` : '';
    const corpo = linhas + linhaSal || '<p class="empty">Nenhum lançamento aqui.</p>';
    return `${cabeca('Extrato')}<div class="chips">${chips}</div><section class="card list">${corpo}</section>`;
  }

  function vPagar() {
    const itens = itensAPagar(ui.mes);
    const pago = itens.filter((i) => i.pago).reduce((s, i) => s + i.valor, 0);
    const total = itens.reduce((s, i) => s + i.valor, 0);
    const linhas = itens.map((i) => `<div class="row ${i.pago ? 'paid' : ''}"><button class="check" role="checkbox" aria-checked="${i.pago}" aria-label="${i.pago ? 'Desmarcar' : 'Marcar como paga:'} ${esc(i.nome)}" data-act="pagar" data-chave="${esc(i.chave)}"><span>${i.pago ? '✓' : ''}</span></button><span class="grow"><span class="name">${esc(i.nome)}</span>${i.sub ? `<p class="sub">${esc(i.sub)}</p>` : ''}</span><span class="val">${brl(i.valor)}</span></div>`).join('');
    return `${cabeca('Contas a pagar')}
      <div class="stats"><section class="card"><span class="lab">Já paguei</span><span class="big green">${brl(pago)}</span></section><section class="card"><span class="lab">Falta pagar</span><span class="big amber">${brl(total - pago)}</span></section></div>
      <section class="card list">${linhas || '<p class="empty">Nenhuma conta para pagar neste mês.</p>'}</section>
      <button class="link" data-act="ir" data-view="fixas">Ver contas fixas</button>`;
  }

  function vFixas() {
    const contas = contasDoMes(ui.mes);
    const total = contas.reduce((s, c) => s + valorConta(c, ui.mes), 0);
    const linhas = contas.map((c) => `<button class="row" data-act="editar-conta" data-id="${esc(c.id)}"><span class="grow"><span class="name">${esc(c.nome)}</span>${ehCredito(c) || c.percentual != null ? `<p class="sub">${ehCredito(c) ? 'No cartão de crédito' : pctTexto(c)}</p>` : ''}</span><span class="val">${brl(valorConta(c, ui.mes))}</span></button>`).join('');
    return `${cabeca('Contas fixas', '<button class="ghost" data-act="nova-conta">Adicionar</button>')}
      <section class="card"><span class="lab">Total por mês</span><span class="big">${brl(total)}</span></section>
      <section class="card list">${linhas || '<p class="empty">Nenhuma conta fixa cadastrada.</p>'}</section>`;
  }

  function vParcelas() {
    const ativas = db.parcelamentos.map((p) => ({ p, a: parcelaNoMes(p, ui.mes) })).filter((x) => x.a);
    const falta = db.parcelamentos.reduce((s, p) => s + restanteDepois(p, ui.mes), 0);
    const prox = [1, 2, 3, 4].map((n) => { const m = addMes(ui.mes, n); return `<div><span class="lab">${curtoMes(m)}</span><span class="val">${brl(totalParcelas(m))}</span></div>`; }).join('');
    const cards = ativas.map(({ p, a }) => `<article class="card"><div class="head"><div class="grow"><h2 class="h2">${esc(p.descricao)}</h2><p class="sub">${dataBr(p.data)} · total ${brl(cents(p.total))}</p></div><strong>${brl(a.valor)}</strong></div>
      <div class="track"><div class="fill g" data-w="${a.n / p.vezes * 100}"></div></div>
      <div class="head"><span class="sub">Parcela ${a.n} de ${p.vezes} · termina em ${curtoMes(addMes(mesDe(p.data), p.vezes - 1))}</span><button class="danger" data-act="apagar-parcela" data-id="${esc(p.id)}">Excluir</button></div></article>`).join('');
    return `${cabeca('Parcelas', '<button class="ghost" data-act="nova-parcela">Nova compra</button>')}
      <section class="card"><div class="two"><div><span class="lab">Neste mês</span><span class="big">${brl(totalParcelas(ui.mes))}</span></div><div><span class="lab">Ainda falta pagar</span><span class="big">${brl(falta)}</span></div></div>
      <div class="prox">${prox}</div></section>
      ${ativas.length ? `<div class="cols">${cards}</div>` : '<section class="card"><p class="empty">Nenhuma parcela neste mês.</p></section>'}`;
  }

  function vGuardado() {
    const atual = mesAtual();
    const c = contaMes(atual);
    const fechados = mesesGuardado().filter((x) => x.m !== atual);
    const total = totalGuardado();
    const linhas = fechados.map((x) => `<div class="row"><span>${nomeMes(x.m)}</span><span class="val ${x.saldo < 0 ? 'red' : ''}">${brl(x.saldo)}</span></div>`).join('');
    return `<header class="head"><h1 class="title">Guardado</h1></header>
      <section class="card"><span class="lab">Total guardado</span><span class="big hero ${total < 0 ? 'red' : 'green'}">${brl(total)}</span></section>
      <div class="cols"><section class="card list"><h2 class="h2">${soMes(atual)}, mês em andamento</h2>
        <div class="row"><span>Entradas</span><span class="val">${brl(c.entradas)}</span></div>
        <div class="row"><span>Despesas</span><span class="val">− ${brl(c.despesas)}</span></div>
        <div class="row"><strong>Saldo do mês</strong><strong class="val ${c.saldo < 0 ? 'red' : 'green'}">${brl(c.saldo)}</strong></div></section>
      <section class="card list"><h2 class="h2">Meses fechados</h2>${linhas || '<p class="empty">O primeiro mês entra aqui quando fechar.</p>'}</section></div>`;
  }

  function vLimites() {
    const lim = Object.fromEntries(db.limites.map((l) => [l.tag, cents(l.valor)]));
    const total = TAGS_LIMITE.reduce((s, t) => s + (lim[t] || 0), 0);
    const linhas = TAGS_LIMITE.map((t) => `<label class="limit-row"><span>${t}</span><span class="money">R$<input name="${t}" inputmode="decimal" autocomplete="off" aria-label="Limite mensal de ${t}" placeholder="0,00" value="${lim[t] ? inputMoney(lim[t]) : ''}"></span></label>`).join('');
    return `<header class="head"><h1 class="title">Limites por tag</h1></header>
      <section class="card"><span class="lab">Limite por mês</span><span class="big">${brl(total)}</span></section>
      <form data-form="limites" novalidate><section class="card list">${linhas}</section><button class="btn">Salvar limites</button></form>`;
  }

  function vSalario() {
    const c = contaMes(ui.mes);
    return `${cabeca('Salário')}
      <div class="cols"><section class="card"><form data-form="salario" novalidate>
        <label class="field">Salário de ${soMes(ui.mes).toLowerCase()} (R$)<input class="inp" name="valor" inputmode="decimal" autocomplete="off" value="${c.sal ? inputMoney(c.sal) : ''}" placeholder="0,00"></label>
        <label class="toggle"><span>Aplicar também aos próximos meses</span><input type="checkbox" name="proximos"></label>
        <button class="btn">Salvar</button></form></section>
      <section class="card list"><h2 class="h2">Entradas de ${soMes(ui.mes).toLowerCase()}</h2>
        <div class="row"><span>Salário</span><span class="val">${brl(c.sal)}</span></div>
        <div class="row"><span>Outras entradas</span><span class="val">${brl(c.creditos)}</span></div>
        <div class="row"><strong>Total</strong><strong class="val green">${brl(c.entradas)}</strong></div></section></div>`;
  }

  const VIEWS = { resumo: vResumo, extrato: vExtrato, pagar: vPagar, fixas: vFixas, parcelas: vParcelas, guardado: vGuardado, limites: vLimites, salario: vSalario };

  function aplicarBarras() {
    $root.querySelectorAll('[data-w]').forEach((el) => { el.style.width = `${el.dataset.w}%`; });
  }

  // Olho: esconde os valores na tela, sem alterar o que está salvo.
  const botaoOlho = () => `<button class="icon eye" data-act="olho" aria-label="${oculto ? 'Mostrar valores' : 'Ocultar valores'}" title="${oculto ? 'Mostrar valores' : 'Ocultar valores'}"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z"/><circle cx="12" cy="12" r="3"/>${oculto ? '<path d="M4 4l16 16"/>' : ''}</svg></button>`;

  function render() {
    if (!uid) return renderLogin();
    const menu = MENU.map(([id, nome]) => `<button class="${ui.view === id ? 'on' : ''}" data-act="ir" data-view="${id}" ${ui.view === id ? 'aria-current="page"' : ''}>${nome}</button>`).join('');
    const baixo = [['resumo', 'Resumo'], ['extrato', 'Extrato'], null, ['pagar', 'Pagar'], ['parcelas', 'Parcelas']].map((x) => x
      ? `<button class="${ui.view === x[0] ? 'on' : ''}" data-act="ir" data-view="${x[0]}">${x[1]}</button>`
      : '<button class="add" data-act="novo" aria-label="Novo lançamento">+</button>').join('');
    const y = window.scrollY;
    $root.innerHTML = `<div class="app">
      <aside class="side"><div class="side-top"><div class="brand">Minhas finanças</div>${botaoOlho()}</div><button class="btn" data-act="novo">Novo lançamento</button><nav class="menu" aria-label="Navegação principal">${menu}</nav><button class="logout" data-act="sair">Sair</button></aside>
      <main class="content"><div class="wrap"><div class="topbar only-mobile"><span class="brand">Minhas finanças</span>${botaoOlho()}</div>${VIEWS[ui.view]()}</div></main>
      <nav class="nav" aria-label="Navegação principal">${baixo}</nav></div>`;
    aplicarBarras();
    window.scrollTo(0, y);
  }

  function renderLogin() {
    const semConfig = !api;
    $root.innerHTML = `<main class="login"><div class="login-box"><div class="mark">R$</div><h1>Minhas finanças</h1><p>Entre para ver o seu mês.</p>
      <form data-form="login" novalidate>
        <label class="field">Login<input class="inp" type="email" name="email" autocomplete="username" autocapitalize="none" placeholder="Seu e-mail" required></label>
        <label class="field">Senha<input class="inp" type="password" name="senha" autocomplete="current-password" placeholder="Sua senha" required></label>
        <label class="keep"><input type="checkbox" name="lembrar" ${lembrar() ? 'checked' : ''}>Manter conectado neste aparelho</label>
        ${ui.erroLogin ? `<p class="error" role="alert">${esc(ui.erroLogin)}</p>` : ''}
        ${semConfig ? '<p class="error" role="alert">O app ainda não foi conectado ao banco de dados.</p>' : ''}
        <button class="btn" ${semConfig ? 'disabled' : ''}>Entrar</button>
      </form></div></main>`;
  }

  /* ---------- formulários em folha ---------- */
  const dataPadrao = () => (ui.mes === mesDe(hoje()) ? hoje() : `${ui.mes}-01`);
  const topoSheet = (t) => `<div class="sheet-head"><h2>${t}</h2><button type="button" class="close" data-act="fechar">Fechar</button></div>`;
  const pickTags = (atual) => `<fieldset class="only-gasto"><legend>Tag</legend><div class="picks">${TAGS.map((t) => `<label class="pick"><input type="radio" name="tag" value="${t}" ${t === atual ? 'checked' : ''}><span>${t}</span></label>`).join('')}</div></fieldset>`;

  function abrirSheet(html) { $sheet.innerHTML = html; if (!$sheet.open) $sheet.showModal(); }
  function fecharSheet() { if ($sheet.open) $sheet.close(); $sheet.innerHTML = ''; }

  function sheetLanc(l) {
    const forma = !l ? 'debito' : ehEntrada(l) ? 'entrada' : l.tipo;
    // Entrada só aparece ao editar um lançamento antigo de entrada.
    const formas = [['debito', 'Débito'], ['credito', 'Crédito'], ...(forma === 'entrada' ? [['entrada', 'Entrada']] : [])];
    abrirSheet(`<form data-form="lanc" data-id="${esc(l?.id || '')}" novalidate>${topoSheet(l ? 'Editar lançamento' : 'Novo lançamento')}
      <fieldset><legend>Pagamento</legend><div class="picks">${formas.map(([v, t]) => `<label class="pick"><input type="radio" name="tipo" value="${v}" ${v === forma ? 'checked' : ''}><span>${t}</span></label>`).join('')}</div></fieldset>
      <label class="field">Valor (R$)<input class="inp" name="valor" inputmode="decimal" autocomplete="off" placeholder="0,00" value="${l ? inputMoney(cents(l.valor)) : ''}"></label>
      <label class="field">Descrição<input class="inp" name="descricao" maxlength="120" placeholder="Ex.: compras da semana" value="${esc(l?.descricao || '')}"></label>
      <label class="field">Data<input class="inp" type="date" name="data" min="${DATA_INICIAL}" value="${l?.data || dataPadrao()}"></label>
      ${pickTags(l && l.tag !== 'Entradas' ? l.tag : 'Mercado')}
      <button class="btn">Salvar</button>
      ${l ? `<button type="button" class="danger" data-act="apagar-lanc" data-id="${esc(l.id)}">Excluir lançamento</button>` : ''}</form>`);
  }

  function sheetConta(c, nome = '') {
    abrirSheet(`<form data-form="conta" data-id="${esc(c?.id || '')}" novalidate>${topoSheet(c ? 'Editar conta' : 'Nova conta')}
      <label class="field">Nome da conta<input class="inp" name="nome" maxlength="60" placeholder="Ex.: academia" value="${esc(c?.nome || nome)}"></label>
      <label class="field">${c && c.percentual != null ? `Valor (${pctTexto(c)})` : 'Valor (R$)'}<input class="inp" name="valor" inputmode="decimal" autocomplete="off" placeholder="0,00" ${c && c.percentual != null ? 'readonly' : ''} value="${c ? inputMoney(valorConta(c, ui.mes)) : ''}"></label>      ${c && c.percentual == null ? `<p class="sub">O novo valor vale de ${soMes(ui.mes).toLowerCase()} em diante. Meses já editados mantêm o próprio valor.</p>` : ''}
      <button class="btn">Salvar</button>
      ${c ? `<button type="button" class="danger" data-act="apagar-conta" data-id="${esc(c.id)}">Remover a partir deste mês</button>` : ''}</form>`);
  }

  function sheetParcela() {
    abrirSheet(`<form data-form="parcela" novalidate>${topoSheet('Nova compra parcelada')}
      <label class="field">O que você comprou<input class="inp" name="descricao" maxlength="120" placeholder="Ex.: tênis"></label>
      <div class="two"><label class="field">Valor total (R$)<input class="inp" name="total" inputmode="decimal" autocomplete="off" placeholder="0,00"></label>
      <label class="field">Data da compra<input class="inp" type="date" name="data" value="${dataPadrao()}"></label></div>
      <div class="stepper"><span>Número de parcelas</span><div><button type="button" data-act="vezes" data-n="-1" aria-label="Menos uma parcela">−</button><input type="number" name="vezes" min="1" max="48" value="2" aria-label="Número de parcelas"><button type="button" data-act="vezes" data-n="1" aria-label="Mais uma parcela">+</button></div></div>
      <section class="preview" aria-live="polite"><span>Vai somar às despesas</span><strong data-prev="valor"></strong><span data-prev="periodo"></span></section>
      <button class="btn">Salvar parcelamento</button></form>`);
    atualizaPrevia();
  }

  function atualizaPrevia() {
    const f = $sheet.querySelector('form[data-form=parcela]');
    if (!f) return;
    const t = parseMoney(f.total.value) || 0;
    const v = Math.min(48, Math.max(1, Number(f.vezes.value) || 1));
    const m = mesDe(f.data.value || hoje());
    f.querySelector('[data-prev=valor]').textContent = `${v}x de ${brl(Math.ceil(t / v))}`;
    f.querySelector('[data-prev=periodo]').textContent = v === 1 ? `Em ${curtoMes(m)}` : `De ${curtoMes(m)} até ${curtoMes(addMes(m, v - 1))}`;
  }

  /* ---------- ações ---------- */
  let toastT;
  function toast(msg) {
    $toast.textContent = msg; $toast.hidden = false;
    clearTimeout(toastT); toastT = setTimeout(() => { $toast.hidden = true; }, 3200);
  }
  // Com o diálogo aberto, o aviso precisa ficar dentro dele para aparecer por cima.
  function erro(e) {
    console.error(e);
    const f = $sheet.open ? $sheet.querySelector('form') : null;
    if (f) { let p = f.querySelector('.error'); if (!p) { p = document.createElement('p'); p.className = 'error'; p.setAttribute('role', 'alert'); f.querySelector('.btn').before(p); } p.textContent = 'Não foi possível salvar. Tente de novo.'; }
    else toast('Não foi possível salvar. Tente de novo.');
  }
  function invalido(f, msg) {
    let p = f.querySelector('.error');
    if (!p) { p = document.createElement('p'); p.className = 'error'; p.setAttribute('role', 'alert'); f.querySelector('.btn').before(p); }
    p.textContent = msg;
  }
  const trocaLinha = (t, row) => { db[t] = db[t].map((x) => (x.id === row.id ? row : x)); };

  async function pagar(chave) {
    const m = ui.mes;
    const pago = db.pagamentos.some((p) => p.mes === m && p.chave === chave);
    const antes = db.pagamentos;
    db.pagamentos = pago ? antes.filter((p) => !(p.mes === m && p.chave === chave)) : [...antes, { mes: m, chave }];
    render();
    try {
      if (pago) await api.apagar('pagamentos', { mes: m, chave });
      else await api.inserir('pagamentos', { mes: m, chave });
    } catch (e) { db.pagamentos = antes; render(); erro(e); }
  }

  // Uma conta pode ter vários trechos seguidos, cada um com o seu valor.
  function serieConta(c) {
    const serie = [c];
    for (let a = c, ant; (ant = db.contas.find((x) => x.nome === a.nome && x.fim && addMes(x.fim, 1) === a.inicio)); a = ant) serie.unshift(ant);
    for (let a = c, prox; a.fim && (prox = db.contas.find((x) => x.nome === a.nome && x.inicio === addMes(a.fim, 1))); a = prox) serie.push(prox);
    return serie;
  }

  // Mudar o valor vale do mês aberto em diante, até o próximo mês com valor próprio.
  async function salvarConta(c, dados, valor) {
    const m = ui.mes;
    for (const x of serieConta(c)) {
      if (x.id !== c.id && x.nome !== dados.nome) trocaLinha('contas', await api.atualizar('contas', x.id, dados));
    }
    if (c.percentual != null || valor === cents(c.valor)) return trocaLinha('contas', await api.atualizar('contas', c.id, dados));
    if (c.inicio === m) return trocaLinha('contas', await api.atualizar('contas', c.id, { ...dados, valor: valor / 100 }));

    const fimOriginal = c.fim;
    trocaLinha('contas', await api.atualizar('contas', c.id, { ...dados, fim: addMes(m, -1) }));
    let nova;
    try {
      nova = await api.inserir('contas', { ...dados, valor: valor / 100, inicio: m, fim: fimOriginal });
    } catch (e) {
      trocaLinha('contas', await api.atualizar('contas', c.id, { fim: fimOriginal }));
      throw e;
    }
    db.contas.push(nova);
    // Os pagamentos já marcados acompanham o novo trecho.
    for (const p of db.pagamentos.filter((x) => x.chave === c.id && x.mes >= m && (!fimOriginal || x.mes <= fimOriginal))) {
      await api.inserir('pagamentos', { mes: p.mes, chave: nova.id });
      await api.apagar('pagamentos', { mes: p.mes, chave: c.id });
      p.chave = nova.id;
    }
  }

  const FORMS = {
    async login(f) {
      const email = f.email.value.trim();
      const senha = f.senha.value;
      if (!email || !senha) { ui.erroLogin = 'Preencha login e senha.'; return renderLoginMantendo(email); }
      try { localStorage.setItem('fin_lembrar', f.lembrar.checked ? '1' : '0'); } catch { /* sem armazenamento */ }
      try {
        uid = await api.entrar(email, senha);
        ui.erroLogin = '';
        await carregar();
        render();
      } catch (e) {
        uid = null;
        ui.erroLogin = e?.status === 400 ? 'Login ou senha incorretos.' : 'Não foi possível entrar. Tente de novo.';
        renderLoginMantendo(email);
      }
    },
    async lanc(f) {
      const valor = parseMoney(f.valor.value);
      const descricao = f.descricao.value.trim();
      if (!valor) return invalido(f, 'Informe um valor válido.');
      if (!descricao) return invalido(f, 'Informe uma descrição.');
      if (!f.data.value) return invalido(f, 'Informe a data.');
      if (f.data.value < DATA_INICIAL) return invalido(f, 'Use uma data a partir de 26/11/2026.');
      const forma = f.tipo.value;
      const row = { tipo: forma === 'entrada' ? 'credito' : forma, valor: valor / 100, descricao, data: f.data.value, tag: forma === 'entrada' ? 'Entradas' : f.tag.value };
      const id = f.dataset.id;
      if (id) trocaLinha('lancamentos', await api.atualizar('lancamentos', id, row));
      else db.lancamentos.push(await api.inserir('lancamentos', row));
      ui.mes = mesDe(row.data);
      fecharSheet(); render(); toast('Lançamento salvo.');
    },
    async conta(f) {
      const valor = parseMoney(f.valor.value);
      const nome = f.nome.value.trim();
      if (!nome) return invalido(f, 'Informe o nome da conta.');
      if (valor === null) return invalido(f, 'Informe um valor válido.');
      const id = f.dataset.id;
      if (id) await salvarConta(db.contas.find((x) => String(x.id) === id), { nome }, valor);
      // O banco ainda exige um dia, mas o app não usa mais vencimento.
      else db.contas.push(await api.inserir('contas', { nome, dia: 1, valor: valor / 100, inicio: ui.mes, fim: null }));
      fecharSheet(); render(); toast('Conta salva.');
    },
    async parcela(f) {
      const total = parseMoney(f.total.value);
      const descricao = f.descricao.value.trim();
      const vezes = Number(f.vezes.value);
      if (!descricao) return invalido(f, 'Informe o que você comprou.');
      if (!total) return invalido(f, 'Informe o valor total.');
      if (!f.data.value) return invalido(f, 'Informe a data da compra.');
      if (!Number.isInteger(vezes) || vezes < 1 || vezes > 48) return invalido(f, 'Use de 1 a 48 parcelas.');
      db.parcelamentos.push(await api.inserir('parcelamentos', { descricao, total: total / 100, data: f.data.value, vezes }));
      fecharSheet(); render(); toast('Parcelamento salvo.');
    },
    async salario(f) {
      const valor = parseMoney(f.valor.value);
      if (valor === null) return invalido(f, 'Informe um valor válido.');
      const m = ui.mes;
      const prox = addMes(m, 1);
      const salarioProx = salario(prox);
      const temProx = db.salarios.some((s) => s.mes === prox);
      if (f.proximos.checked) {
        for (const s of db.salarios.filter((x) => x.mes > m)) await api.apagar('salarios', { mes: s.mes });
        db.salarios = db.salarios.filter((x) => x.mes <= m);
      } else if (!temProx && salarioProx > 0) {
        // Preserva o valor do mês seguinte, que antes herdava deste mês.
        const r = { mes: prox, valor: salarioProx / 100 };
        await api.gravar('salarios', { ...r, user_id: uid }, 'user_id,mes');
        db.salarios.push(r);
      }
      const row = { mes: m, valor: valor / 100 };
      await api.gravar('salarios', { ...row, user_id: uid }, 'user_id,mes');
      db.salarios = [...db.salarios.filter((x) => x.mes !== m), row];
      render(); toast('Salário salvo.');
    },
    async limites(f) {
      const novos = [];
      for (const t of TAGS_LIMITE) {
        const txt = f.elements[t].value.trim();
        const c = txt ? parseMoney(txt) : 0;
        if (c === null) return invalido(f, `Valor inválido em ${t}.`);
        novos.push({ tag: t, valor: c / 100 });
      }
      await Promise.all(novos.map((r) => api.gravar('limites', { ...r, user_id: uid }, 'user_id,tag')));
      db.limites = novos;
      render(); toast('Limites salvos.');
    }
  };

  function renderLoginMantendo(email) {
    renderLogin();
    const i = $root.querySelector('input[name=email]');
    if (i) i.value = email;
  }

  const ACOES = {
    ir(b) { ui.view = b.dataset.view; window.scrollTo(0, 0); render(); },
    mes(b) { const m = addMes(ui.mes, Number(b.dataset.n)); ui.mes = m < MES_INICIAL ? MES_INICIAL : m; render(); },
    filtro(b) { ui.filtro = b.dataset.tag; render(); },
    olho(b) {
      const lateral = !!b.closest('.side');
      oculto = !oculto;
      try { localStorage.setItem('fin_oculto', oculto ? '1' : '0'); } catch { /* vale só nesta visita */ }
      document.documentElement.classList.toggle('oculto', oculto);
      render();
      $root.querySelector(lateral ? '.side .eye' : '.topbar .eye')?.focus();
    },
    novo() { sheetLanc(null); },
    fechar() { fecharSheet(); },
    'editar-lanc'(b) { sheetLanc(db.lancamentos.find((x) => String(x.id) === b.dataset.id)); },
    'nova-conta'(b) { sheetConta(null, b.dataset.nome || ''); },
    'editar-conta'(b) { sheetConta(db.contas.find((x) => String(x.id) === b.dataset.id)); },
    'nova-parcela'() { sheetParcela(); },
    vezes(b) {
      const i = $sheet.querySelector('input[name=vezes]');
      i.value = Math.min(48, Math.max(1, (Number(i.value) || 1) + Number(b.dataset.n)));
      atualizaPrevia();
    },
    pagar(b) { return pagar(b.dataset.chave); },
    async 'apagar-lanc'(b) {
      if (!confirm('Excluir este lançamento?')) return;
      await api.apagar('lancamentos', { id: b.dataset.id });
      db.lancamentos = db.lancamentos.filter((x) => String(x.id) !== b.dataset.id);
      fecharSheet(); render(); toast('Lançamento excluído.');
    },
    async 'apagar-conta'(b) {
      if (!confirm('Remover esta conta a partir deste mês? Os meses anteriores continuam iguais.')) return;
      const c = db.contas.find((x) => String(x.id) === b.dataset.id);
      for (const x of serieConta(c)) {
        if (x.inicio >= ui.mes) {
          await api.apagar('contas', { id: x.id });
          db.contas = db.contas.filter((y) => y.id !== x.id);
        } else if (!x.fim || x.fim >= ui.mes) {
          trocaLinha('contas', await api.atualizar('contas', x.id, { fim: addMes(ui.mes, -1) }));
        }
      }
      fecharSheet(); render(); toast('Conta removida.');
    },
    async 'apagar-parcela'(b) {
      if (!confirm('Excluir este parcelamento? Todas as parcelas saem das despesas.')) return;
      await api.apagar('parcelamentos', { id: b.dataset.id });
      db.parcelamentos = db.parcelamentos.filter((x) => String(x.id) !== b.dataset.id);
      render(); toast('Parcelamento excluído.');
    },
    async sair() {
      await api.sair();
      uid = null; db = {}; ui.view = 'resumo'; ui.mes = mesAtual();
      fecharSheet(); render();
    }
  };

  document.addEventListener('click', async (ev) => {
    const b = ev.target.closest('[data-act]');
    if (!b) return;
    try { await ACOES[b.dataset.act]?.(b); } catch (e) { erro(e); }
  });

  document.addEventListener('submit', async (ev) => {
    const f = ev.target.closest('form[data-form]');
    if (!f) return;
    ev.preventDefault();
    const btn = f.querySelector('.btn');
    if (btn) btn.disabled = true;
    try { await FORMS[f.dataset.form](f); } catch (e) { erro(e); }
    if (btn && btn.isConnected) btn.disabled = false;
  });

  $sheet.addEventListener('input', atualizaPrevia);
  $sheet.addEventListener('click', (ev) => { if (ev.target === $sheet) fecharSheet(); });
  $sheet.addEventListener('close', () => { $sheet.innerHTML = ''; });

  /* ---------- início ---------- */
  (async () => {
    $root.innerHTML = '<div class="loading">Carregando…</div>';
    if (!api) return renderLogin();
    api.aoSair(() => { uid = null; db = {}; fecharSheet(); render(); });
    try {
      uid = await api.userId();
      if (uid) await carregar();
    } catch (e) {
      console.error(e);
      uid = null;
      ui.erroLogin = 'Não foi possível carregar. Entre de novo.';
    }
    render();
  })();
})();

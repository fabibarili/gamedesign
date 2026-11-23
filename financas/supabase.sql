-- Finanças: estrutura do banco e regras de acesso.
-- Rode uma vez no SQL Editor do Supabase. Pode rodar de novo sem perder dados.

create table if not exists public.salarios (
  user_id uuid not null default auth.uid() references auth.users on delete cascade,
  mes char(7) not null check (mes ~ '^\d{4}-(0[1-9]|1[0-2])$'),
  valor numeric(12,2) not null check (valor >= 0),
  primary key (user_id, mes)
);

create table if not exists public.lancamentos (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null default auth.uid() references auth.users on delete cascade,
  tipo text not null check (tipo in ('debito','credito')),
  valor numeric(12,2) not null check (valor > 0),
  descricao text not null check (char_length(descricao) between 1 and 120),
  data date not null,
  tag text not null check (tag in ('Mercado','Farmácia','Gasolina','Lazer','Casa','Padel','Outros','Entradas')),
  created_at timestamptz not null default now()
);
create index if not exists lancamentos_user_data on public.lancamentos (user_id, data desc);

create table if not exists public.contas (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null default auth.uid() references auth.users on delete cascade,
  nome text not null check (char_length(nome) between 1 and 60),
  valor numeric(12,2) not null check (valor >= 0),
  dia smallint not null check (dia between 1 and 31),
  inicio char(7) not null check (inicio ~ '^\d{4}-(0[1-9]|1[0-2])$'),
  fim char(7) check (fim ~ '^\d{4}-(0[1-9]|1[0-2])$'),
  percentual numeric(5,2) check (percentual between 0 and 100)
);

create table if not exists public.pagamentos (
  user_id uuid not null default auth.uid() references auth.users on delete cascade,
  mes char(7) not null check (mes ~ '^\d{4}-(0[1-9]|1[0-2])$'),
  chave text not null check (char_length(chave) <= 40),
  primary key (user_id, mes, chave)
);

create table if not exists public.parcelamentos (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null default auth.uid() references auth.users on delete cascade,
  descricao text not null check (char_length(descricao) between 1 and 120),
  total numeric(12,2) not null check (total > 0),
  data date not null,
  vezes smallint not null check (vezes between 1 and 48),
  tag text
);

create table if not exists public.limites (
  user_id uuid not null default auth.uid() references auth.users on delete cascade,
  tag text not null check (tag in ('Mercado','Farmácia','Gasolina','Lazer','Casa','Padel','Outros','Parcelas')),
  valor numeric(12,2) not null check (valor >= 0),
  primary key (user_id, tag)
);

-- Cada usuário só enxerga e altera as próprias linhas. Visitantes sem login não têm acesso.
do $$
declare t text;
begin
  foreach t in array array['salarios','lancamentos','contas','pagamentos','parcelamentos','limites'] loop
    execute format('alter table public.%I enable row level security', t);
    execute format('revoke all on public.%I from anon', t);
    execute format('grant select, insert, update, delete on public.%I to authenticated', t);
    execute format('drop policy if exists dono on public.%I', t);
    execute format('create policy dono on public.%I for all to authenticated using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()))', t);
  end loop;
end $$;

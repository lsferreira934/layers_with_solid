
create table transaction (
    code text primary key,
    amout numeric,
    number_installments integer,
    payment_method text,
    date timestamp default now()
);
create table installments (
    code text references transaction(code),
    number integer,
    amout numeric,
    primary key (code, number),
)
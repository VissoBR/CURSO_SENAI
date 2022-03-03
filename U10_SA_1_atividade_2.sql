create schema coma_bem;

create table item (
idItem int NOT NULL auto_increment primary key,
idUnityItem int,
itemNome char(10),
unidItem char(10)
);

create table precoitem (
idItem int NOT NULL,
precoItem int,
quantItem int,
valorCompra int
);
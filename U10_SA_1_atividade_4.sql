create role if not exists usuario;

create user analista identified by 'senhaBemForte'
default role usuario;

GRANT SELECT, INSERT, UPDATE, DELETE ON coma_bem.* TO usuario;
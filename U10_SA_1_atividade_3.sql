use coma_bem;

alter table item
drop column idUnityItem;

 ALTER TABLE item 
 ADD COLUMN idUnityItem INT AFTER itemNome;
 
 insert into item values (
 "1", "Carne", "1", "Kg"
 );
 
 Select itemNome from item;
 
 UPDATE `item` SET `itemNome` = "carne_Mod" WHERE `idItem` = 1;

 
 
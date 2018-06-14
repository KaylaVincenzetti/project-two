drop database if exists products_db;
create database products_db;
use products_db;

create table inventory (
    id int(11) not null auto_increment,
    title varchar(255),
    gender varchar(1),
    size varchar(10),
    color varchar(255),
    quantity int(11) not null,
    price dec(10,2) not null,
    primary key(id)
);

create table cart (
	id int(11)not null auto_increment,
	product_id int(11),
	primary key(id)
);

select * from inventory;
select * from cart;

insert into inventory (title, gender, size, color, quantity, price) values ("Mens Shirt", "M" , "S", "Black", 10, 24.90), ("Mens Shirt", "M" , "M", "Blue", 3, 25.99), ("Mens Shirt", "M" , "L", "Tan", 16, 28.39), ("Womens Shirt", "F" , "S", "Black", 5, 16.99), ("Womens Shirt", "F" , "M", "Purple", 20, 18.45), ("Womens Shirt", "F" , "L", "Pink", 8, 20.99);
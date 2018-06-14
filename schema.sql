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
    image_url text,
    primary key(id)
);

create table cart (
	id int(11)not null auto_increment,
	product_id int(11),
	primary key(id)
);

select * from inventory;
select * from cart;

insert into inventory (title, gender, size, color, quantity, price, image_url) values ("Mens Shirt", "M" , "S", "Black", 10, 24.90, "https://cdni.llbean.net/is/image/wim/224547_1_41?hei=200&amp;wid=174"), ("Mens Shirt", "M" , "M", "Blue", 3, 25.99, "https://cdn.shopclues.com/images/thumbnails/89313/320/320/131867100129790511129737353Bluedott150763055315078769611513012902.jpg"), ("Mens Shirt", "M" , "L", "Tan", 16, 28.39, "http://www.jcgstore.com/products/20160907113356_b.jpg"), ("Womens Shirt", "F" , "S", "Black", 5, 16.99, "https://i.pinimg.com/originals/c9/ac/cb/c9accbf75bee4d3b557d9a863591841c.jpg"), ("Womens Shirt", "F" , "M", "Purple", 20, 18.45, "https://ae01.alicdn.com/kf/HTB1oS6UPVXXXXX7XVXXq6xXFXXXl/Kate-Kasin-T-Shirt-Women-Long-Sleeve-Purple-Long-Tunic-T-Shirts-Office-Work-Tee-Shirt.jpg_640x640.jpg"), ("Womens Shirt", "F" , "L", "Pink", 8, 20.99, "https://s7d4.scene7.com/is/image/JCPenney/f9e6f78d-3ce9-11e8-89c2-0ba4331e827f.jpg?wid=350&hei=350&op_usm=.4,.8,0,0&resmode=sharp2");

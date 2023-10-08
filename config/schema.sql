-- Buat Database havenmarket_be
CREATE DATABASE havenmarket_be;
USE havenmarket_be;

-- Buat Table User
CREATE TABLE user (
	id_user INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
	username VARCHAR(30) NOT NULL,
	kata_sandi VARCHAR(10) DEFAULT NULL,
	email VARCHAR(30), 

	UNIQUE INDEX user_email_key(email)
);

-- Buat Table Items
CREATE TABLE items (
    id_items  INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    productname VARCHAR(255) NOT NULL,
    brandname VARCHAR(255) NOT NULL,
    price DOUBLE NOT NULL,
    image VARCHAR(255) NOT NULL,
    descripsi TEXT(500) NOT NULL,

    UNIQUE INDEX product_productname_key(productname)
    );
    
    -- Buat Table article
CREATE TABLE article (
    id_article INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    image VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    content VARCHAR(500) NOT NULL
     );
     
     -- Buat Table cart items 
CREATE TABLE cart_items (
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_user VARCHAR(30) NOT NULL,
    id_items VARCHAR(191) NOT NULL,
    quantity INT NOT NULL
     );
     
     -- Buat Table user address
CREATE TABLE user_address (
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_user VARCHAR(30) NOT NULL,
    address VARCHAR(255) NOT NULL,
    province VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    phone_number VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
     );
     
     -- Buat Table order details
CREATE TABLE order_details (
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_user VARCHAR(30) NOT NULL,
    subtotal DECIMAL(10, 2) NOT NULL,
    shipping_cost DECIMAL(8, 2) NOT NULL, 
    handling_cost DECIMAL(8, 2) NOT NULL,
    taxes DECIMAL(10, 2) NOT NULL,
	total DECIMAL(10, 2) NOT NULL
     );
     
ALTER TABLE cart_items
ADD FOREIGN KEY (id_user)
REFERENCES user(id_user);

ALTER TABLE cart_items
ADD FOREIGN KEY (id_items)
REFERENCES items(id_items);

ALTER TABLE order_details
ADD FOREIGN KEY (id_user)
REFERENCES user(id_user);

-- Error Code: 1005. Can't create table `havenmarket_be`.`cart_items` (errno: 150 "Foreign key constraint is incorrectly formed") ???

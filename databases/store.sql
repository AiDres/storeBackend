SET NAMES UTF8;

DROP DATABASE IF EXISTS ccstore;

CREATE DATABASE ccstore CHARSET=UTF8; 

USE ccstore;

CREATE TABLE store_manage(
	pid INT PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(255),
	logo VARCHAR(3000),
	distance VARCHAR(255),
	address VARCHAR(255),
	phone varchar(16),
	detail_area VARCHAR(255),
	image VARCHAR(255)
);


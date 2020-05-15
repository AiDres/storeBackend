SET NAMES UTF8;

DROP DATABASE IF EXISTS sjg2016_com;

CREATE DATABASE sjg2016_com CHARSET=UTF8; 

USE sjg2016_com;

-- 门店管理
CREATE TABLE store_manage(
	store_id INT PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(255),
	logo VARCHAR(3000),
	distance VARCHAR(255),
	address VARCHAR(255),
	phone varchar(16),
	detail_area VARCHAR(255),
	image VARCHAR(255)
);


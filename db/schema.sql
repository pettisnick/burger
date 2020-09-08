-- Create the DB
CREATE DATABASE burgers_db;

-- Switch to or use the 'burgers_db
USE burgers_db;

-- Create the table 'burgers'
CREATE TABLE burgers (
    id int AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(30) NOT NULL,
    devoured BOOLEAN DEFAULT false, 
    PRIMARY KEY(id)
);
-- Create a new database named 'Lection21'
CREATE DATABASE Lection21;

-- Create a table named 'Table1' with columns for ID, first name, last name, and city
CREATE TABLE Table1 (
    id INT,
    firstname VARCHAR(20),
    lastname VARCHAR(20),
    city VARCHAR(20),
    PRIMARY KEY (id)  -- 'id' is the unique identifier for each record
);

-- Add a new column 'age' to 'Table1'
ALTER TABLE Table1
ADD age INT;

-- Remove the 'age' column from 'Table1'
ALTER TABLE Table1
DROP COLUMN age;

-- Insert a new row into Table1 with all columns specified
INSERT INTO Table1
VALUES (1, 'Ivan', 'Petrov', 'Kyiv');

-- Insert a row without specifying the 'city' column (it will be NULL)
INSERT INTO Table1 (id, firstname, lastname)
VALUES (2, 'Petro', 'Petrov');

-- Insert a row without the 'city' column again
INSERT INTO Table1 (id, firstname, lastname)
VALUES (3, 'Yuliia', 'Fonaskova');

-- Insert a row without the 'lastname' column (it will be NULL)
INSERT INTO Table1 (id, firstname, city)
VALUES (4, 'Yuliia', 'Sokal');

-- Retrieve all data from Table1
SELECT * FROM Table1;

-- Retrieve rows where the city is 'Kyiv'
SELECT * FROM Table1
WHERE city = 'Kyiv';

-- Retrieve only the firstname and lastname where the last name is 'Fonaskova'
SELECT firstname, lastname FROM Table1
WHERE lastname = 'Fonaskova';

-- Retrieve all rows (repeated for visibility)
SELECT * FROM Table1;

-- Retrieve first and last names where the first name is 'Yuliia'
SELECT firstname, lastname FROM Table1
WHERE firstname = 'Yuliia';

-- Update the city to 'Lviv' for the row with id = 1
UPDATE Table1
SET city = 'Lviv'
WHERE id = 1;

-- Show updated table
SELECT * FROM Table1;

-- Delete the record where id = 4
DELETE FROM Table1
WHERE id = 4;

-- Show table after deletion
SELECT * FROM Table1;

-- Insert new rows with all columns filled
INSERT INTO Table1
VALUES (4, 'Viktoriia', 'Beskus', 'Kyiv');

INSERT INTO Table1
VALUES (5, 'Viktoriia', 'Grach', 'Lviv');

INSERT INTO Table1
VALUES (6, 'Frederick', 'Branches', 'Lviv');

INSERT INTO Table1
VALUES (7, 'Mike', 'Bodghi', 'Krakow');

-- View updated table
SELECT * FROM Table1;

-- Update the city to 'Frankfurt' for the record with id = 2
UPDATE Table1
SET city = 'Frankfurt'
WHERE id = 2;

-- View updated table
SELECT * FROM Table1;

-- Update the city to 'Krakow' for id = 3
UPDATE Table1
SET city = 'Krakow'
WHERE id = 3;

-- View updated table
SELECT * FROM Table1;

-- Select distinct cities from the table (no duplicates)
SELECT DISTINCT city FROM Table1;

-- Select id (as student_class) and firstname
SELECT id AS student_class, firstname
FROM Table1;

-- View full table
SELECT * FROM Table1;

-- Select rows where city is NOT 'Kyiv'
SELECT * FROM Table1
WHERE city != 'Kyiv';

-- Select rows where id is NOT 1
SELECT * FROM Table1
WHERE id != 1;

-- Select rows where id is greater than 2
SELECT * FROM Table1
WHERE id > 2;

-- Select rows where firstname is alphabetically after 'x'
SELECT * FROM Table1
WHERE firstname > 'x';

-- Select rows where firstname is alphabetically 'y' or after
SELECT * FROM Table1
WHERE firstname >= 'y';

-- Select rows where firstname is after 'a' AND city is 'Krakow'
SELECT * FROM Table1
WHERE firstname > 'a' AND city = 'Krakow';

-- Select rows where firstname is after 'x' OR id is greater than 4
SELECT * FROM Table1
WHERE firstname > 'x' OR id > 4;

-- Add the 'age' column again
ALTER TABLE Table1
ADD age INT;

-- Insert a row including age
INSERT INTO Table1
VALUES (8, 'Jon', 'White', 'Szczecin', 21);

-- View updated table
SELECT * FROM Table1;

-- Update 'age' for 'Ivan' (no WHERE clause by id yet)
UPDATE Table1
SET age = 44
WHERE firstname = 'Ivan';

-- View updated table
SELECT * FROM Table1;

-- Update 'age' for specific ids
UPDATE Table1 SET age = 44 WHERE id = 1;
UPDATE Table1 SET age = 21 WHERE id = 2;
UPDATE Table1 SET age = 26 WHERE id = 3;
UPDATE Table1 SET age = 26 WHERE id = 4;
UPDATE Table1 SET age = 26 WHERE id = 5;

-- Select records where age is NULL
SELECT id, firstname, lastname FROM Table1
WHERE age IS NULL;

-- View all records
SELECT * FROM Table1;

-- Update age for more records
UPDATE Table1 SET age = 18 WHERE id = 6;
UPDATE Table1 SET age = 46 WHERE id = 7;

-- Select the minimum age in the table
SELECT MIN(age) FROM Table1;

-- Select full details of person(s) with the maximum age
SELECT id, firstname, lastname, city, age FROM Table1
WHERE age = (SELECT MAX(age) FROM Table1);

-- Calculate the average age
SELECT AVG(age) FROM Table1;

-- Select full details of person(s) whose age equals the average
SELECT id, firstname, lastname, city, age FROM Table1
WHERE age = (SELECT AVG(age) FROM Table1);

-- Get the alphabetically first firstname
SELECT MIN(firstname) FROM Table1;

-- Get the alphabetically last firstname
SELECT MAX(firstname) FROM Table1;

-- Count how many records have a non-null firstname
SELECT COUNT(firstname) FROM Table1;

-- Order table by lastname (A-Z)
SELECT * FROM Table1
ORDER BY lastname ASC;

-- Order table by lastname (Z-A)
SELECT * FROM Table1
ORDER BY lastname DESC;

-- Count the number of people in each city
SELECT COUNT(id), city FROM Table1
GROUP BY city;

-- Select names where lastname starts with 'f' (case-sensitive)
SELECT firstname, lastname FROM Table1
WHERE lastname LIKE 'f%';



CREATE DATABASE Lection21;
CREATE TABLE Table1 (
id int,
firstname varchar(20),
lastname varchar(20),
city varchar(20),
PRIMARY KEY (id)
);
ALTER TABLE table1
ADD age int;
ALTER TABLE table1
Drop column age;
INSERT INTO Table1
VALUES (1, 'Ivan','Petrov','Kyiv');
INSERT INTO Table1 (id, firstname, lastname)
VALUES (2, 'Petro','Petrov');
INSERT INTO Table1 (id, firstname, lastname)
VALUES (3, 'Yuliia','Fonaskova');
INSERT INTO Table1 (id, firstname, city)
VALUES (4, 'Yuliia','Sokal');
SELECT * FROM table1;
SELECT * FROM table1
where city = 'Kyiv';
SELECT firstname, lastname From Table1
where lastname = 'Fonaskova';
SELECT * FROM table1;
SELECT firstname, lastname From Table1
where firstname = 'Yuliia';
UPDATE table1
SET city = 'Lviv'
WHERE id = 1;
SELECT * FROM table1;
Delete from table1 
where id = 4;
SELECT * FROM table1;
INSERT INTO Table1
VALUES (4, 'Viktoriia','Beskus','Kyiv');
INSERT INTO Table1
VALUES (5, 'Viktoriia','Grach','Lviv');
INSERT INTO Table1
VALUES (6, 'Frederick','Branches','Lviv');
INSERT INTO Table1
VALUES (7, 'Mike','Bodghi','Krakow');
SELECT * FROM table1;
UPDATE table1
SET city= 'Frankfurt'
WHERE id = 2;
SELECT * FROM table1;
UPDATE table1
SET city= 'Krakow'
WHERE id = 3;
SELECT * FROM table1;
SELECT DISTINCT city From Table1;
SELECT id AS student_class, firstname
FROM Table1;
SELECT * FROM table1;
SELECT * FROM table1
where city != 'Kyiv';
SELECT * FROM table1
where id != 1;
SELECT * FROM table1
where id > 2;
SELECT * FROM table1
where firstname > 'x';
SELECT * FROM table1
where firstname >= 'y';
SELECT * FROM table1
where firstname > 'a' and 
city = 'Krakow';
SELECT * FROM table1
where firstname > 'x' or 
id > 4;
ALTER TABLE table1
ADD age int;
INSERT INTO Table1
VALUES (8, 'Jon','White','Szczecin', 21);
SELECT * FROM table1;
UPDATE table1
SET age = 44
WHERE firstname = 'Ivan';
SELECT * FROM table1;
SELECT * FROM table1;
UPDATE table1
SET age = 44
WHERE id = 1;
UPDATE table1
SET age = 21
WHERE id = 2;
UPDATE table1
SET age = 26
WHERE id = 3;
UPDATE table1
SET age = 26
WHERE id = 4;
UPDATE table1
SET age = 26
WHERE id = 5;
SELECT id, firstname, lastname From Table1
where age is null;
SELECT * FROM table1;
UPDATE table1
SET age = 18
WHERE id = 6;
UPDATE table1
SET age = 46
WHERE id = 7;
SELECT MIN(age) FROM Table1;
SELECT id, firstname, lastname, city, age FROM Table1
WHERE age = (SELECT MAX(age) FROM Table1);
SELECT AVG(age) FROM Table1;
SELECT id, firstname, lastname, city, age FROM Table1
WHERE age = (SELECT AVG(age) FROM Table1);
SELECT MIN(firstname) FROM Table1;
SELECT MAX(firstname) FROM Table1;
Select count(firstname) FROM Table1;
SELECT * FROM table1
ORDER BY lastname ASC;
SELECT * FROM table1
ORDER BY lastname DESC;
SELECT count(id), city FROM table1
group by city; 
SELECT firstname, lastname FROM table1
where lastname like 'f%';
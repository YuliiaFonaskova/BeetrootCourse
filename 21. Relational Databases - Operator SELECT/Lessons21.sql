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

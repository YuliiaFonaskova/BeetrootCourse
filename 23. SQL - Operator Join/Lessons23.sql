
-- Використовувати певну бд
USE Lection21;

-- Вивести всі унікальні значення стовпця firstname
SELECT distinct firstname FROM table1;

-- Вивести колонки firstname. lastname, city, в якій city перейменована на town
SELECT firstname, lastname, city AS town FROM table1;

-- Вивести всіх віком від 18
SELECT * FROM table1
WHERE age > 18;

-- Вивести таблицю студентів, імена яких не Іван та вік яких не менше 20 років
SELECT * FROM table1
WHERE firstname !='Ivan' AND age >=20;

-- Порахувати сумарний вік всіх
SELECT SUM(age) from table1;

-- Вивести найменший вік
SELECT MIN(age) from table1;

-- Порахувати кількість людей
SELECT COUNT(*) FROM table1;

-- Знайти всіх людей, імена яких починаються на Y
SELECT firstname, lastname FROM table1
WHERE firstname like 'Y%';

-- Вивести дані про найстаршу людину. Сортуємо список через поле вік і лімітом виводимо один
SELECT firstname, lastname, age FROM table1
ORDER BY age DESC limit 1;

-- Вивести дані про найстаршу людину через вкладений запит
SELECT firstname, lastname, age FROM table1
WHERE age = (
SELECT max(age) FROM table1);

-- Створити нову таблицю
CREATE TABLE table2 (
id int,
salary float,
firstday date,
foreign key (id) references table1 (id) 
);

-- Видалити таблицю
DROP table table2;

-- Перевірити наявність ключа у 1 таблиці
SELECT COLUMN_NAME
FROM INFORMATION_SCHEMA.KEY_COLUMN_USAGE
WHERE TABLE_NAME = 'table1'
  AND CONSTRAINT_NAME = 'PRIMARY';
  
-- Заповнити таблицю
INSERT INTO table2 
Values 

(6, 10000, '2023-01-15'),
(7, 13000, '2022-01-15'),
(8, 16000, '2022-11-15');

-- Показати таблицю
SELECT * FROM Table2;

-- Показати таблицю, що містить ім"я, прізвище (дані з таблиці 1) та перший день роботи (дані з таблиці 2) з inner join
SELECT firstname, lastname, firstday
FROM table1
INNER Join table2
ON table1.id = table2.id;

-- Показати таблицю, що містить ім"я, прізвище (дані з таблиці 1) та перший день роботи (дані з таблиці 2) з left join
SELECT firstname, lastname, firstday
FROM table1
LEFT Join table2
ON table1.id = table2.id;

-- Показати таблицю, що містить ім"я, прізвище (дані з таблиці 1) та перший день роботи (дані з таблиці 2) з righ join
SELECT firstname, lastname, firstday
FROM table1
RIGHT Join table2
ON table1.id = table2.id;

-- Показати таблицю, що містять всі дані з 1 таблиці і всі дані з 2 таблиці з inner join
SELECT *
FROM table1
INNER Join table2 
ON table1.id = table2.id;



 



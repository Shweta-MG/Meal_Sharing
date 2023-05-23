--Create database
CREATE DATABASE MealSharing;


--use database while creating tables
USE MealSharing;
CREATE TABLE `meals` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY, 
  `title` VARCHAR(255) NOT NULL, 
  `description` TEXT DEFAULT NULL, 
  `location` VARCHAR(255) NOT NULL, 
  `when` DATETIME NOT NULL, 
  `max_reservations` INT(10) NOT NULL, 
  `price` DECIMAL(19, 2) NOT NULL, 
  `created_date` DATE NOT NULL
);


--Inser values into Meal table
USE MealSharing;
INSERT INTO meals (
  `id`, `title`, `description`, `location`, 
  `when`, `max_reservations`, `price`, 
  `created_date`)

VALUES 
(1, 'Kadai Paneer', 'A traditional indian dish', 'Aarhus', '2023-04-08 11:30:00', 3, 150, '2023-01-01'),
(2, 'Chicken Curry', 'Delicious Indian dish', 'Aarhus', '2023-04-01 11:30:00', 3, 100, '2023-01-01'),
(3, 'Butter Chicken Curry', 'Delicious buttery Indian dish', 'Aarhus', '2023-04-07 09:30:00', 10, 250, '2023-02-01'),
(4, 'Paneer Butter Masala', 'Paneer cooked in creamy and mildly spiced tomato-based curry topped with lots of butter.', 'Aarhus', '2023-04-17 09:30:00', 10, 150, '2023-02-01'),
(5, 'Daal Curry', 'Delicious Indian lentil soup served with spiced rice', 'Aarhus', '2023-03-17 09:30:00', 10, 350, '2023-03-01'),
(6, 'Palak Paneer', 'Juicy chunks of paneer cooked in a creamy gravy of nutritious spinach and rich spices.', 'Aarhus', '2023-04-17 09:30:00', 10, 500, '2023-03-21'),
(7, 'Chhappan Bhog Peda', 'Delicious Indian desert', 'Aarhus', '2023-05-07 09:30:00', 100, 50, '2023-02-03'),
(8, 'Kaju Katli', 'Delicious Indian Cashew nut sweet.', 'Aarhus', '2023-04-17 09:30:00', 100, 50, '2023-02-01'),
(9, 'Jodhpuri Samosa', 'Delicious Indian snacks', 'Aarhus', '2023-03-17 09:30:00', 50, 35, '2023-03-03'),
(10, 'Pav Bhaji', 'Mashed form of vegetables in thick gravy with loads of butter on top. Served along with bun , small pieces of onion and cubes of lemon', 'Aarhus', '2023-04-17 09:30:00', 10, 500, '2023-03-21'),
(11, 'Kadai Paneer', 'A traditional indian dish', 'Aarhus', '2023-07-01 11:30:00', 3, 150, '2023-05-15'),
(12, 'Chicken Curry', 'Delicious Indian dish', 'Aarhus', '2023-08-01 11:30:00', 3, 100, '2023-06-01'),
(13, 'Butter Chicken Curry', 'Delicious buttery Indian dish', 'Aarhus', '2023-08-07 09:30:00', 10, 250, '2023-02-01'),
(14, 'Paneer Butter Masala', 'Paneer cooked in creamy and mildly spiced tomato-based curry topped with lots of butter.', 'Aarhus', '2023-06-17 09:30:00', 10, 150, '2023-07-01'),
(15, 'Daal Curry', 'Delicious Indian lentil soup served with spiced rice', 'Aarhus', '2023-08-17 09:30:00', 10, 350, '2023-06-01'),
(16, 'Palak Paneer', 'Juicy chunks of paneer cooked in a creamy gravy of nutritious spinach and rich spices.', 'Aarhus', '2023-07-17 09:30:00', 10, 500, '2023-03-21')




--Checking on the updated table
USE MealSharing;
SELECT * FROM meals


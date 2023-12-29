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
(16, 'Palak Paneer', 'Juicy chunks of paneer cooked in a creamy gravy of nutritious spinach and rich spices.', 'Aarhus', '2023-07-17 09:30:00', 10, 500, '2023-03-21'),
(17, 'Malai Kofta', 'Juicy chunks of paneer cooked in a creamy gravy of nutritious spinach and rich spices.', 'Aarhus', '2023-07-17 09:30:00', 10, 500, '2023-03-21'),
(18, 'Nargishi Kofta', 'Juicy chunks of paneer cooked in a creamy gravy of nutritious spinach and rich spices.', 'Aarhus', '2023-07-17 09:30:00', 10, 500, '2023-03-21')






--Checking on the updated table
USE MealSharing;
SELECT * FROM meals



-- Reservation
USE MealSharing;
CREATE TABLE `reservations` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY, 
  `number_of_guests` INT(10) NOT NULL, 
  `meals_id` INT(10) UNSIGNED NOT NULL, 
  `created_date` DATE NOT NULL, 
  `contact_phonenumber` VARCHAR(255) NOT NULL, 
  `contact_name` VARCHAR(255) NOT NULL, 
  `contact_email` VARCHAR(255) NOT NULL, 
  CONSTRAINT `fk_meals` FOREIGN KEY (`meals_id`) REFERENCES `meals` (`id`) ON DELETE CASCADE
);

--Inser values into Reservation table
USE MealSharing;
INSERT INTO reservations (
  `id`, `number_of_guests`, `meals_id`, 
  `created_date`, `contact_phonenumber`, 
  `contact_name`, `contact_email`
) 
VALUES 
(1, 2, 5, '2023-03-01', '22334455', 'Shweta', 'Shwetas@gmail.com'),
(2, 1, 6, '2023-04-04', '52634755', 'Katerine', 'Katerine@gmail.com'),
(3, 3, 7, '2023-03-02', '51624055', 'Paulimi', 'Paulimi@gmail.com'),
(4, 1, 7, '2023-01-04', '52634755', 'Katerine', 'Katerine@gmail.com'),
(5, 3, 9, '2023-05-02', '51624055', 'Paulimi', 'Paulimi@gmail.com')



--Checking on the updated table
USE MealSharing;
SELECT * FROM  reservations;


USE MealSharing;
CREATE TABLE `reviews` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY, 
  `title` VARCHAR(255) NOT NULL, 
  `description` TEXT NOT NULL, 
  `meals_id` INT(10) UNSIGNED NOT NULL, 
  `stars` INT UNSIGNED NOT NULL, 
  `created_date` DATE NOT NULL, 
  CONSTRAINT `fk_meal_2` FOREIGN KEY (`meals_id`) REFERENCES `meals` (`id`) ON DELETE CASCADE
);


--Insert values into review table
USE MealSharing;
INSERT INTO reviews (`id`, `title`, `description`, `meals_id`, `stars`, `created_date`) 
VALUES 
(1, 'Amazingly good', 'Awesome food and wecoming host', 1, 5, '2022-02-02'),
(2, 'Super tasty', 'Exactly like on Alex in Berlin', 3, 5, '2021-12-01'),
(3, 'Nice', 'Liked it!', 2, 4, '2021-12-02'),
(4, 'Perfect', 'Best sandwich ever', 2, 5, '2021-12-02'),
(5, 'Perfect', 'Best indian food ever', 2, 5, '2021-11-02'),
(6, 'Nice', 'Liked it!', 2, 4, '2021-11-02');

--Checking on the updated reservation table
USE MealSharing;
SELECT * FROM reviews



--Drop tables
USE MealSharing;
DROP TABLE meals


USE MealSharing;
DROP TABLE reservations

USE MealSharing;
DROP TABLE reviews
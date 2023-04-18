-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Apr 18, 2023 at 09:50 PM
-- Server version: 5.7.39
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `recipe roadmap`
--

-- --------------------------------------------------------

--
-- Table structure for table `Recipe`
--

CREATE TABLE `Recipe` (
  `Name` text NOT NULL,
  `Time` int(11) NOT NULL,
  `Ingredients` text NOT NULL,
  `Instructions` text NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Recipe`
--

INSERT INTO `Recipe` (`Name`, `Time`, `Ingredients`, `Instructions`, `id`) VALUES
('Garlic Butter Shrimp', 15, '1 lb shrimp, peeled and deveined 4 tbsp butter 4 cloves garlic, mincedMilk, pasta, pasta sauce, salt, pepper, brocolli', 'Melt butter in a skillet over medium heat.\r\nAdd minced garlic and cook for 1-2 minutes.\r\nAdd shrimp to the skillet and cook for 2-3 minutes on each side or until pink and cooked through.', 10),
('Tomato Bruschetta', 10, '1 baguette, sliced 3 ripe tomatoes, diced 2 cloves garlic, minced', 'Toast the baguette slices in the oven or on a grill until lightly browned.\r\nMix together the diced tomatoes and minced garlic in a bowl.\r\nSpoon the tomato mixture onto the toasted baguette slices and serve.\r\nBalsamic Vinaigrette: (5 minutes)\r\nIngredients:\r\n1/4 cup balsamic vinegar\r\n1/2 cup olive oil\r\n1 tsp Dijon mustard', 11),
('Berry Smoothie', 5, '1 cup frozen mixed berries 1 cup vanilla yogurt 1 tbsp honey', 'Combine all ingredients in a blender and blend until smooth.\r\nPour into a glass and serve.', 12);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Recipe`
--
ALTER TABLE `Recipe`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Recipe`
--
ALTER TABLE `Recipe`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 14, 2023 at 01:45 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `utsav`
--

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(64) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `profilepic` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `username`, `email`, `password`, `createdAt`, `updatedAt`, `profilepic`) VALUES
(14, 'modi', 'modi@gmail.com', '$2b$20$a78Xgbj7rFh1E21LDk04ROky2HG0qSWWdKtaiG9w5M74EPyTu/TRu\0\0\0\0', '2023-02-14 07:01:28', '2023-02-14 07:01:28', NULL),
(15, 'papu', 'papu@gmail.com', '$2b$20$VuJewvAIoRvGEFtZRY5gqOe.iQeNQiYuBYkxYKJdD2KMMX2o3JK.u', '2023-02-14 07:28:39', '2023-02-14 07:28:39', NULL),
(16, 'ravi', 'ravi@gmail.com', '$2b$20$FFWYzbO3QJrGgLVF4IDNHubrlfd9CHrBfjyk9PoIXmygEMCFjG2Qe', '2023-02-14 07:32:01', '2023-02-14 07:32:01', NULL),
(17, 'marshal', 'marshal@gmail.com', '$2b$20$3//911Gf56otA3tIBGtoM.G9OdFFD9.5BBa4BGsPtxbVEx2JDsMsm', '2023-02-14 08:15:17', '2023-02-14 08:15:17', NULL),
(18, 'anuj', 'anuj@gmail.com', '$2b$10$SHBtqIHiGukHxIOxDxd2T.eDoQGkjxS3R/9tSPC0czRxCUGrbUMpm', '2023-02-14 08:57:20', '2023-02-14 08:57:20', NULL),
(19, 'jetha', 'jetha@gmail.com', '$2b$10$VvhzV.npdPF3Z6v2QQ5QE.N69jP3PHOap/mGIDEid6JYKgQpeat6e', '2023-02-14 11:04:18', '2023-02-14 11:04:18', NULL),
(21, 'rahim', 'rahim@gmail.com', '$2b$10$5kcb5761nVctgbONHBOrIekEb5vmGSY0.FHuEfAdDGub6N78CC.QO', '2023-02-14 11:47:51', '2023-02-14 11:47:51', NULL),
(22, 'rajesh', 'rajesh@gmail.com', '$2b$10$kUA.t26g9y97zfSE09urDuSFgoO164BZY7UV8gVissLnkPuKLClEa', '2023-02-14 12:29:44', '2023-02-14 12:29:44', NULL),
(23, 'krupal', 'krupal@gmail.com', '$2b$10$gzs6fK7Jkd08pkIPUDVTCuyxB5mkETiv8spF5fjyy7iPauuFDqZQ.', '2023-02-14 12:37:49', '2023-02-14 12:37:49', 'path');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 04, 2023 at 10:14 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `passarinhoslda`
--

-- --------------------------------------------------------

--
-- Table structure for table `armazem`
--

CREATE TABLE `armazem` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `localizacao` varchar(255) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `armazem`
--

INSERT INTO `armazem` (`id`, `nome`, `localizacao`, `createdAt`, `updatedAt`) VALUES
(1, 'Armazem Geral', 'Porto', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `artigoarmazem`
--

CREATE TABLE `artigoarmazem` (
  `artigoId` int(11) DEFAULT NULL,
  `armazemId` int(11) DEFAULT NULL,
  `stock` int(11) NOT NULL DEFAULT 0,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `artigoarmazem`
--

INSERT INTO `artigoarmazem` (`artigoId`, `armazemId`, `stock`, `createdAt`, `updatedAt`) VALUES
(1, 1, 50, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 1, 50, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 1, 33, '2023-11-27 01:57:26', '2023-11-27 01:57:26'),
(4, 1, 33, '2023-11-27 01:57:57', '2023-11-27 01:57:57'),
(5, 1, 30, '2023-11-27 02:02:09', '2023-11-27 02:02:09'),
(6, 1, 55, '2023-11-27 02:08:18', '2023-11-27 02:08:18'),
(7, 1, 55, '2023-11-27 02:10:38', '2023-11-27 02:10:38'),
(8, 1, 55, '2023-11-27 02:13:52', '2023-11-27 02:13:52'),
(9, 1, 55, '2023-11-27 02:14:46', '2023-11-27 02:14:46'),
(10, 1, 22, '2023-11-27 02:21:46', '2023-11-27 02:21:46'),
(11, 1, 55, '2023-11-27 02:23:57', '2023-11-27 02:23:57'),
(12, 1, 55, '2023-11-27 11:23:20', '2023-11-27 11:23:20'),
(13, 1, 55, '2023-11-27 18:50:57', '2023-11-27 18:50:57'),
(14, 1, 55, '2023-11-29 11:22:04', '2023-11-29 11:22:04'),
(7, 1, 0, '2023-12-04 16:29:20', '2023-12-04 16:29:20'),
(15, 1, 111, '2023-12-04 16:31:30', '2023-12-04 16:31:30'),
(16, 1, 100, '2023-12-04 20:05:35', '2023-12-04 20:05:35');

-- --------------------------------------------------------

--
-- Table structure for table `artigos`
--

CREATE TABLE `artigos` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `descricao` text DEFAULT NULL,
  `preco` decimal(10,2) DEFAULT NULL,
  `fornecedorId` int(11) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `artigos`
--

INSERT INTO `artigos` (`id`, `nome`, `descricao`, `preco`, `fornecedorId`, `createdAt`, `updatedAt`) VALUES
(1, 'lampada', '100w', 1.20, 1, '2023-11-27 00:57:48', '2023-11-27 00:57:55'),
(2, 'lampada', '150w', 1.20, 1, '2023-11-27 00:58:00', '2023-11-27 00:58:02'),
(3, 'Cabo', 'cabo de 1.5 ', 2.20, 1, '2023-11-27 01:57:26', '2023-11-27 01:57:26'),
(4, 'cabo 5 ', 'Cabo 5 especial', 1.20, 1, '2023-11-27 01:57:57', '2023-11-27 01:57:57'),
(5, 'cabo 2', 'cabo especial', 1.20, 1, '2023-11-27 02:02:09', '2023-11-27 02:02:09'),
(6, 'test1', 'test3', 1.20, 1, '2023-11-27 02:08:18', '2023-11-27 02:08:18'),
(7, 'cabo teste', 'test22', 1.20, 1, '2023-11-27 02:10:38', '2023-11-27 02:10:38'),
(8, 'cabo 10', 'cabo 88', 1.30, 1, '2023-11-27 02:13:52', '2023-11-27 02:13:52'),
(9, 'cabo   100', 'cabo para testes', 1.20, 5, '2023-11-27 02:14:46', '2023-11-27 02:14:46'),
(10, 'cabo 22', 'cabo 22', 1.20, 1, '2023-11-27 02:21:46', '2023-11-27 02:21:46'),
(11, 'cabo pedro', 'cabo', 1.20, 1, '2023-11-27 02:23:57', '2023-11-27 02:23:57'),
(12, 'wqdwq', 'qwdqw', 1.20, 5, '2023-11-27 11:23:20', '2023-11-27 11:23:20'),
(13, 'tatiana', 'qwdqwqd', 1.20, 1, '2023-11-27 18:50:57', '2023-11-27 18:50:57'),
(14, 'Cabo 10M', '10mm', 1.30, 1, '2023-11-29 11:22:04', '2023-11-29 11:22:04'),
(15, 'Cabo 20 ', 'Cabo pedro', 1.20, 5, '2023-12-04 16:31:30', '2023-12-04 16:31:30'),
(16, 'lampada 99', 'Descrição do Artigo de post', 10.99, 1, '2023-12-04 20:05:35', '2023-12-04 20:05:35');

-- --------------------------------------------------------

--
-- Table structure for table `clientes`
--

CREATE TABLE `clientes` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `morada` varchar(255) NOT NULL,
  `nif` int(11) NOT NULL,
  `telefone` int(11) NOT NULL,
  `password` varchar(255) NOT NULL,
  `localidade` varchar(255) NOT NULL,
  `codigoPostal` int(11) NOT NULL,
  `userTypeId` int(11) DEFAULT NULL,
  `tipopagamentoId` int(11) DEFAULT NULL,
  `statusId` int(11) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `tokenIdentifier` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `clientes`
--

INSERT INTO `clientes` (`id`, `username`, `email`, `morada`, `nif`, `telefone`, `password`, `localidade`, `codigoPostal`, `userTypeId`, `tipopagamentoId`, `statusId`, `createdAt`, `updatedAt`, `tokenIdentifier`) VALUES
(1, 'pedrosilva', 'carretas2@gmail.com', 'bairro nossa', 999999990, 936637830, '$2b$10$GhCML7io2caBd9FYeHLpLuZQCfmYWkT93G9PsDwoKepbbtuBKNkDC', 'peso da régua', 5050, 1, 1, 1, '2023-11-26 14:49:15', '2023-12-04 21:10:16', '05cd9abc-f91b-4ec2-b530-7a654a36ff6b'),
(2, 'pedrosilva', 'carretas89@gmail.com', 'peso da regua', 222555888, 222333665, '$2b$10$jAfVwO9k4l7V4oH0K9wepOrzAFWK7p4NwVFc2/qGFPC76dlsScTym', 'rewgua', 5050, 1, 1, 1, '2023-11-28 13:33:32', '2023-11-28 15:24:20', '0969a3f0-d3c7-46a5-90c7-568373018064'),
(3, 'Ganuking', 'carretas22222@gmail.com', 'bairro nossa', 999999990, 936637830, '$2b$10$PhuwcpRYaH.gj7zRfzcutOWeTC8oVwDX8fgVBuHXaVW3Im1D4fpMC', 'peso da régua', 5050, 1, 1, 1, '2023-12-03 20:40:00', '2023-12-03 20:44:09', NULL),
(4, 'Ganuking', 'carretas222222@gmail.com', 'bairro nossa', 999999990, 936637830, '$2b$10$bs79x/H795zG7oSbsOOGM.havapebBSyCJpIL97KHCnOyf7M8xOlK', 'peso da régua', 5050, 1, 1, 1, '2023-12-03 20:42:09', '2023-12-03 20:44:14', NULL),
(5, 'Ganuking', 'carretas2222221@gmail.com', 'bairro nossa', 999999990, 936637830, '$2b$10$z/fyXKcD1wwt30wmJg2xH.Zpuvvm5jixbcN2vKY3/lVh.BR8ZHWkO', 'peso da régua', 5050, 1, 1, 1, '2023-12-03 20:43:31', '2023-12-03 20:44:18', NULL),
(6, 'Ganuking', 'carretas22222212@gmail.com', 'bairro nossa', 999999990, 936637830, '$2b$10$GVocW/N7k/KGy8kRtEG.du/joZ0VRjxtq1cGaTk.MjMrXqh8.obeS', 'peso da régua', 5050, 1, 1, 1, '2023-12-03 21:48:48', '2023-12-03 21:48:48', NULL),
(7, '', 'carretaspedro@gmail.com', 'bairro nossa', 999999990, 936637830, '$2b$10$7QQtzpNbEFflW2EzWdXszeRVQuf9b4eSMgLUIYIIQjDmCGfmybC82', 'peso da régua', 5050, 1, 1, 1, '2023-12-04 09:38:28', '2023-12-04 16:58:29', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `encomendaartigos`
--

CREATE TABLE `encomendaartigos` (
  `encomendaId` int(11) DEFAULT NULL,
  `artigoId` int(11) DEFAULT NULL,
  `quantidade` int(11) NOT NULL DEFAULT 0,
  `preco` decimal(10,2) NOT NULL DEFAULT 0.00,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `encomendaartigos`
--

INSERT INTO `encomendaartigos` (`encomendaId`, `artigoId`, `quantidade`, `preco`, `createdAt`, `updatedAt`) VALUES
(1, NULL, 2, 1.20, '2023-11-27 22:52:41', '2023-11-27 22:52:41'),
(1, NULL, 2, 1.20, '2023-11-27 22:52:41', '2023-11-27 22:52:41'),
(1, NULL, 2, 2.20, '2023-11-27 22:52:41', '2023-11-27 22:52:41'),
(1, NULL, 2, 1.20, '2023-11-27 22:52:41', '2023-11-27 22:52:41'),
(1, NULL, 2, 1.20, '2023-11-27 22:52:41', '2023-11-27 22:52:41'),
(1, NULL, 1, 1.30, '2023-11-27 22:52:41', '2023-11-27 22:52:41'),
(1, NULL, 1, 1.20, '2023-11-27 22:52:41', '2023-11-27 22:52:41'),
(2, NULL, 1, 1.20, '2023-11-27 23:02:22', '2023-11-27 23:02:22'),
(2, NULL, 1, 1.20, '2023-11-27 23:02:22', '2023-11-27 23:02:22'),
(3, NULL, 1, 1.20, '2023-11-27 23:04:52', '2023-11-27 23:04:52'),
(3, NULL, 1, 1.20, '2023-11-27 23:04:52', '2023-11-27 23:04:52'),
(3, NULL, 1, 1.20, '2023-11-27 23:04:52', '2023-11-27 23:04:52'),
(3, NULL, 1, 2.20, '2023-11-27 23:04:52', '2023-11-27 23:04:52'),
(4, NULL, 1, 1.20, '2023-11-27 23:05:52', '2023-11-27 23:05:52'),
(4, NULL, 1, 1.20, '2023-11-27 23:05:52', '2023-11-27 23:05:52'),
(4, NULL, 1, 1.20, '2023-11-27 23:05:52', '2023-11-27 23:05:52'),
(4, NULL, 1, 2.20, '2023-11-27 23:05:52', '2023-11-27 23:05:52'),
(5, NULL, 1, 1.20, '2023-11-27 23:18:47', '2023-11-27 23:18:47'),
(5, NULL, 1, 1.20, '2023-11-27 23:18:47', '2023-11-27 23:18:47'),
(6, NULL, 1, 1.20, '2023-11-27 23:29:48', '2023-11-27 23:29:48'),
(6, NULL, 1, 1.20, '2023-11-27 23:29:48', '2023-11-27 23:29:48'),
(7, NULL, 1, 1.20, '2023-11-27 23:39:44', '2023-11-27 23:39:44'),
(7, NULL, 1, 1.20, '2023-11-27 23:39:44', '2023-11-27 23:39:44'),
(8, NULL, 1, 1.20, '2023-11-27 23:45:41', '2023-11-27 23:45:41'),
(8, NULL, 1, 1.20, '2023-11-27 23:45:41', '2023-11-27 23:45:41'),
(9, NULL, 1, 1.20, '2023-11-27 23:48:53', '2023-11-27 23:48:53'),
(9, NULL, 1, 1.20, '2023-11-27 23:48:53', '2023-11-27 23:48:53'),
(11, NULL, 1, 1.20, '2023-11-27 23:50:01', '2023-11-27 23:50:01'),
(11, NULL, 1, 1.20, '2023-11-27 23:50:01', '2023-11-27 23:50:01'),
(12, NULL, 1, 1.20, '2023-11-27 23:52:43', '2023-11-27 23:52:43'),
(12, NULL, 1, 1.20, '2023-11-27 23:52:43', '2023-11-27 23:52:43'),
(13, NULL, 1, 1.20, '2023-11-28 01:11:01', '2023-11-28 01:11:01'),
(13, NULL, 1, 1.20, '2023-11-28 01:11:01', '2023-11-28 01:11:01'),
(14, NULL, 1, 1.20, '2023-11-28 01:15:50', '2023-11-28 01:15:50'),
(14, NULL, 1, 1.20, '2023-11-28 01:15:50', '2023-11-28 01:15:50'),
(15, NULL, 2, 10.50, '2023-11-28 01:22:25', '2023-11-28 01:22:25'),
(15, NULL, 1, 5.00, '2023-11-28 01:22:25', '2023-11-28 01:22:25'),
(16, NULL, 2, 10.50, '2023-11-28 01:23:10', '2023-11-28 01:23:10'),
(16, NULL, 1, 5.00, '2023-11-28 01:23:10', '2023-11-28 01:23:10'),
(17, NULL, 2, 10.50, '2023-11-28 01:24:56', '2023-11-28 01:24:56'),
(17, NULL, 1, 5.00, '2023-11-28 01:24:56', '2023-11-28 01:24:56'),
(18, NULL, 2, 10.50, '2023-11-28 01:33:23', '2023-11-28 01:33:23'),
(18, NULL, 1, 5.00, '2023-11-28 01:33:23', '2023-11-28 01:33:23'),
(19, NULL, 2, 10.50, '2023-11-28 01:38:46', '2023-11-28 01:38:46'),
(19, NULL, 1, 5.00, '2023-11-28 01:38:46', '2023-11-28 01:38:46'),
(20, 1, 2, 10.50, '2023-11-28 01:39:09', '2023-11-28 01:39:09'),
(20, 2, 1, 5.00, '2023-11-28 01:39:09', '2023-11-28 01:39:09'),
(21, 1, 1, 1.20, '2023-11-28 03:07:40', '2023-11-28 03:07:40'),
(21, 2, 1, 1.20, '2023-11-28 03:07:40', '2023-11-28 03:07:40'),
(22, 1, 1, 1.20, '2023-11-28 11:15:07', '2023-11-28 11:15:07'),
(22, 2, 1, 1.20, '2023-11-28 11:15:07', '2023-11-28 11:15:07'),
(22, 3, 1, 2.20, '2023-11-28 11:15:07', '2023-11-28 11:15:07'),
(22, 4, 1, 1.20, '2023-11-28 11:15:07', '2023-11-28 11:15:07'),
(22, 5, 1, 1.20, '2023-11-28 11:15:07', '2023-11-28 11:15:07'),
(23, 1, 1, 1.20, '2023-11-28 12:28:39', '2023-11-28 12:28:39'),
(23, 2, 1, 1.20, '2023-11-28 12:28:39', '2023-11-28 12:28:39'),
(23, 3, 1, 2.20, '2023-11-28 12:28:39', '2023-11-28 12:28:39'),
(24, 1, 1, 1.20, '2023-11-28 13:35:01', '2023-11-28 13:35:01'),
(24, 2, 1, 1.20, '2023-11-28 13:35:01', '2023-11-28 13:35:01'),
(24, 3, 1, 2.20, '2023-11-28 13:35:01', '2023-11-28 13:35:01'),
(25, 7, 1, 1.20, '2023-11-28 13:42:51', '2023-11-28 13:42:51'),
(25, 6, 1, 1.20, '2023-11-28 13:42:51', '2023-11-28 13:42:51'),
(25, 5, 1, 1.20, '2023-11-28 13:42:51', '2023-11-28 13:42:51'),
(26, 1, 1, 1.20, '2023-11-29 08:19:39', '2023-11-29 08:19:39'),
(26, 2, 1, 1.20, '2023-11-29 08:19:39', '2023-11-29 08:19:39'),
(26, 4, 1, 1.20, '2023-11-29 08:19:39', '2023-11-29 08:19:39'),
(26, 3, 1, 2.20, '2023-11-29 08:19:39', '2023-11-29 08:19:39'),
(27, 1, 2, 1.20, '2023-11-29 11:18:55', '2023-11-29 11:18:55'),
(27, 2, 2, 1.20, '2023-11-29 11:18:55', '2023-11-29 11:18:55'),
(27, 3, 2, 2.20, '2023-11-29 11:18:55', '2023-11-29 11:18:55'),
(27, 4, 1, 1.20, '2023-11-29 11:18:55', '2023-11-29 11:18:55'),
(28, 1, 1, 1.20, '2023-12-01 22:35:35', '2023-12-01 22:35:35'),
(28, 2, 1, 1.20, '2023-12-01 22:35:35', '2023-12-01 22:35:35'),
(28, 3, 1, 2.20, '2023-12-01 22:35:35', '2023-12-01 22:35:35'),
(28, 4, 1, 1.20, '2023-12-01 22:35:35', '2023-12-01 22:35:35'),
(29, 1, 1, 1.20, '2023-12-04 11:34:20', '2023-12-04 11:34:20'),
(29, 2, 1, 1.20, '2023-12-04 11:34:20', '2023-12-04 11:34:20'),
(29, 3, 1, 2.20, '2023-12-04 11:34:20', '2023-12-04 11:34:20'),
(29, 4, 1, 1.20, '2023-12-04 11:34:20', '2023-12-04 11:34:20'),
(30, 1, 2, 10.50, '2023-12-04 16:29:36', '2023-12-04 16:29:36'),
(30, 2, 1, 5.00, '2023-12-04 16:29:36', '2023-12-04 16:29:36'),
(31, 1, 1, 1.20, '2023-12-04 16:41:44', '2023-12-04 16:41:44'),
(31, 2, 1, 1.20, '2023-12-04 16:41:44', '2023-12-04 16:41:44'),
(31, 3, 1, 2.20, '2023-12-04 16:41:44', '2023-12-04 16:41:44'),
(31, 4, 2, 1.20, '2023-12-04 16:41:44', '2023-12-04 16:41:44'),
(32, 1, 1, 1.20, '2023-12-04 18:12:13', '2023-12-04 18:12:13'),
(32, 2, 1, 1.20, '2023-12-04 18:12:13', '2023-12-04 18:12:13'),
(32, 3, 1, 2.20, '2023-12-04 18:12:13', '2023-12-04 18:12:13'),
(32, 4, 1, 1.20, '2023-12-04 18:12:13', '2023-12-04 18:12:13'),
(33, 1, 2, 10.50, '2023-12-04 20:01:15', '2023-12-04 20:01:15'),
(33, 2, 1, 5.00, '2023-12-04 20:01:15', '2023-12-04 20:01:15'),
(34, 1, 2, 10.50, '2023-12-04 20:01:19', '2023-12-04 20:01:19'),
(34, 2, 1, 5.00, '2023-12-04 20:01:19', '2023-12-04 20:01:19'),
(35, 1, 1, 1.20, '2023-12-04 20:43:03', '2023-12-04 20:43:03'),
(35, 2, 1, 1.20, '2023-12-04 20:43:03', '2023-12-04 20:43:03'),
(35, 3, 1, 2.20, '2023-12-04 20:43:03', '2023-12-04 20:43:03'),
(35, 4, 1, 1.20, '2023-12-04 20:43:03', '2023-12-04 20:43:03'),
(35, 5, 1, 1.20, '2023-12-04 20:43:03', '2023-12-04 20:43:03'),
(35, 6, 1, 1.20, '2023-12-04 20:43:03', '2023-12-04 20:43:03'),
(36, 15, 500, 1.20, '2023-12-04 21:02:11', '2023-12-04 21:02:11');

-- --------------------------------------------------------

--
-- Table structure for table `encomendas`
--

CREATE TABLE `encomendas` (
  `id` int(11) NOT NULL,
  `clienteId` int(11) NOT NULL,
  `transportadoraId` int(11) DEFAULT NULL,
  `dataEncomenda` datetime NOT NULL,
  `status` enum('Pendente','Realizada') NOT NULL,
  `total` decimal(10,2) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `dataEntrega` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `encomendas`
--

INSERT INTO `encomendas` (`id`, `clienteId`, `transportadoraId`, `dataEncomenda`, `status`, `total`, `createdAt`, `updatedAt`, `dataEntrega`) VALUES
(1, 1, 1, '2023-11-27 22:52:41', 'Realizada', 16.50, '2023-11-27 22:52:41', '2023-11-28 21:47:15', '2023-11-28 21:47:15'),
(2, 1, 1, '2023-11-27 23:02:22', 'Realizada', 2.40, '2023-11-27 23:02:22', '2023-11-28 23:37:44', '2023-11-28 23:37:44'),
(3, 1, 1, '2023-11-27 23:04:52', 'Realizada', 5.80, '2023-11-27 23:04:52', '2023-11-29 08:19:08', '2023-11-29 08:19:08'),
(4, 1, 1, '2023-11-27 23:05:52', 'Realizada', 5.80, '2023-11-27 23:05:52', '2023-11-29 18:06:22', '2023-11-29 18:06:22'),
(5, 1, 1, '2023-11-27 23:18:47', 'Realizada', 2.40, '2023-11-27 23:18:47', '2023-11-28 21:27:47', '2023-11-28 21:27:47'),
(6, 1, 1, '2023-11-27 23:29:48', 'Realizada', 2.40, '2023-11-27 23:29:48', '2023-11-28 21:28:22', '2023-11-28 21:28:22'),
(7, 1, 1, '2023-11-27 23:39:44', 'Realizada', 2.40, '2023-11-27 23:39:44', '2023-11-28 21:31:23', '2023-11-28 21:31:23'),
(8, 1, 1, '2023-11-27 23:45:41', 'Realizada', 2.40, '2023-11-27 23:45:41', '2023-11-28 21:33:37', '2023-11-28 21:33:37'),
(9, 1, 1, '2023-11-27 23:48:53', 'Realizada', 2.40, '2023-11-27 23:48:53', '2023-11-29 18:06:26', '2023-11-29 18:06:26'),
(10, 1, 1, '2023-11-27 23:49:40', 'Realizada', 0.00, '2023-11-27 23:49:40', '2023-12-01 22:35:01', '2023-12-01 22:35:01'),
(11, 1, 1, '2023-11-27 23:50:01', 'Pendente', 2.40, '2023-11-27 23:50:01', '2023-11-27 23:50:01', NULL),
(12, 1, 1, '2023-11-27 23:52:43', 'Pendente', 2.40, '2023-11-27 23:52:43', '2023-11-27 23:52:43', NULL),
(13, 1, 1, '2023-11-28 01:11:01', 'Pendente', 2.40, '2023-11-28 01:11:01', '2023-11-28 01:11:01', NULL),
(14, 1, 1, '2023-11-28 01:15:50', 'Pendente', 2.40, '2023-11-28 01:15:50', '2023-11-28 01:15:50', NULL),
(15, 1, 1, '2023-11-28 01:22:25', 'Pendente', 26.00, '2023-11-28 01:22:25', '2023-11-28 01:22:25', NULL),
(16, 1, 1, '2023-11-28 01:23:10', 'Pendente', 26.00, '2023-11-28 01:23:10', '2023-11-28 01:23:10', NULL),
(17, 1, 1, '2023-11-28 01:24:56', 'Pendente', 26.00, '2023-11-28 01:24:56', '2023-11-28 01:24:56', NULL),
(18, 1, 1, '2023-11-28 01:33:23', 'Pendente', 26.00, '2023-11-28 01:33:23', '2023-11-28 01:33:23', NULL),
(19, 1, 1, '2023-11-28 01:38:46', 'Pendente', 26.00, '2023-11-28 01:38:46', '2023-11-28 01:38:46', NULL),
(20, 1, 1, '2023-11-28 01:39:09', 'Pendente', 26.00, '2023-11-28 01:39:09', '2023-11-28 01:39:09', NULL),
(21, 1, 1, '2023-11-28 03:07:40', 'Pendente', 2.40, '2023-11-28 03:07:40', '2023-11-28 03:07:40', NULL),
(22, 1, 1, '2023-11-28 11:15:07', 'Pendente', 7.00, '2023-11-28 11:15:07', '2023-11-28 11:15:07', NULL),
(23, 1, 1, '2023-11-28 12:28:39', 'Pendente', 4.60, '2023-11-28 12:28:39', '2023-11-28 12:28:39', NULL),
(24, 2, 1, '2023-11-28 13:35:01', 'Pendente', 4.60, '2023-11-28 13:35:01', '2023-11-28 13:35:01', NULL),
(25, 1, 1, '2023-11-28 13:42:51', 'Pendente', 3.60, '2023-11-28 13:42:51', '2023-11-28 13:42:51', NULL),
(26, 1, 1, '2023-11-29 08:19:39', 'Realizada', 5.80, '2023-11-29 08:19:39', '2023-11-29 08:20:15', '2023-11-29 08:20:15'),
(27, 1, 1, '2023-11-29 11:18:55', 'Realizada', 10.40, '2023-11-29 11:18:55', '2023-11-29 11:19:44', '2023-11-29 11:19:44'),
(28, 1, 1, '2023-12-01 22:35:35', 'Pendente', 5.80, '2023-12-01 22:35:35', '2023-12-01 22:35:35', NULL),
(29, 1, 1, '2023-12-04 11:34:20', 'Pendente', 5.80, '2023-12-04 11:34:20', '2023-12-04 11:34:20', NULL),
(30, 1, 1, '2023-12-04 16:29:36', 'Pendente', 26.00, '2023-12-04 16:29:36', '2023-12-04 16:29:36', NULL),
(31, 1, 1, '2023-12-04 16:41:44', 'Realizada', 7.00, '2023-12-04 16:41:44', '2023-12-04 16:42:04', '2023-12-04 16:42:04'),
(32, 1, 1, '2023-12-04 18:12:13', 'Realizada', 5.80, '2023-12-04 18:12:13', '2023-12-04 18:12:39', '2023-12-04 18:12:39'),
(33, 2, 1, '2023-12-04 20:01:15', 'Pendente', 26.00, '2023-12-04 20:01:15', '2023-12-04 20:01:15', NULL),
(34, 2, 1, '2023-12-04 20:01:19', 'Pendente', 26.00, '2023-12-04 20:01:19', '2023-12-04 20:01:19', NULL),
(35, 1, 1, '2023-12-04 20:43:03', 'Realizada', 8.20, '2023-12-04 20:43:03', '2023-12-04 20:43:23', '2023-12-04 20:43:23'),
(36, 1, 1, '2023-12-04 21:02:11', 'Pendente', 600.00, '2023-12-04 21:02:11', '2023-12-04 21:02:11', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `fielarmazems`
--

CREATE TABLE `fielarmazems` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `morada` varchar(255) NOT NULL,
  `nif` int(11) NOT NULL,
  `telefone` int(11) NOT NULL,
  `password` varchar(255) NOT NULL,
  `localidade` varchar(255) NOT NULL,
  `codigoPostal` int(11) NOT NULL,
  `userTypeId` int(11) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `fornecedorartigos`
--

CREATE TABLE `fornecedorartigos` (
  `fornecedorId` int(11) NOT NULL,
  `artigoId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `fornecedores`
--

CREATE TABLE `fornecedores` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `morada` varchar(255) NOT NULL,
  `nif` int(11) NOT NULL,
  `telefone` int(11) NOT NULL,
  `password` varchar(255) NOT NULL,
  `localidade` varchar(255) NOT NULL,
  `codigoPostal` int(11) NOT NULL,
  `userTypeId` int(11) DEFAULT NULL,
  `tipopagamentoId` int(11) DEFAULT NULL,
  `statusId` int(11) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `tokenIdentifier` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fornecedores`
--

INSERT INTO `fornecedores` (`id`, `username`, `email`, `morada`, `nif`, `telefone`, `password`, `localidade`, `codigoPostal`, `userTypeId`, `tipopagamentoId`, `statusId`, `createdAt`, `updatedAt`, `tokenIdentifier`) VALUES
(1, 'Antonio Mesquita', 'carretas33@gmail.com', 'bairro nossa', 999999990, 936637830, '$2b$10$tG8E.ephA7m..MtsEZtkqeKcMhkUrVzct84mtEBGWnD2/MhboCNAu', 'peso da régua', 5050, 2, 1, 1, '2023-11-25 01:06:32', '2023-12-04 20:42:45', '843a5953-7757-4672-b1c4-8ad9432168cb'),
(2, 'Ganuking', 'carretas901@gmail.com', 'bairro nossa', 999999990, 936637830, '$2b$10$lHfyo13bKj0qBCgcAfmoeOkna7aD4zkCdhQEx4NroI2Y1.bYcqg4i', 'peso da régua', 5050, 2, 1, 1, '2023-11-25 10:46:44', '2023-11-26 19:48:49', '429e4121-e732-4159-bb01-f2f4fc6230c1'),
(3, 'pedro', 'carretas91@gmail.com', 'regua', 125478965, 254313710, '$2b$10$Ot3aSXynsj7nzRkXqXDtaOUc6AgNYkFBztOLJWLoKFbVNFxe0VRnK', 'regua', 5050, 2, 1, 1, '2023-11-25 10:48:57', '2023-12-04 16:58:48', NULL),
(4, 'pedro', 'carretas912@gmail.com', 'regua', 125478965, 254313710, '$2b$10$9dfeuIwcoOyfxByyHNXEXOkrPK756eGykPVGeJCIZDLwtxG5iw20W', 'regua', 5050, 2, 1, 1, '2023-11-25 23:57:00', '2023-11-25 23:57:00', NULL),
(5, 'Bruno Silva', 'carretas1@gmail.com', 'Bairro nossa senhora ', 224768077, 936637830, '$2b$10$VxtxU9gb3APwU8y5qRzg1.EpFyBHhHgyfrOMqm1DLzGTDpYmVXYwW', 'peso da régua', 5050, 2, 1, 1, '2023-11-26 14:34:39', '2023-12-04 20:42:38', '8995ccd3-036b-4c90-a63e-572ff76c81fb'),
(6, 'pedrosilva', 'carretas25@gmail.com', 'regua', 225441778, 254315478, '$2b$10$kOKhdzjbyPmkpcrukX9R5OXZ0OQgYTajwPij3n9RwBUl38RNjP8oi', 'Peso da regua', 5050, 2, 1, 1, '2023-11-27 12:36:24', '2023-11-29 01:21:07', '70377851-9797-4e29-9067-95ea83fbfca0'),
(7, 'pedrosilva', 'carretas88@gmail.com', 'regua', 222336589, 254312548, '$2b$10$C8ulAYFcYxHVXorTzMnrMuK7F799LJCjnVbOl0jCcWuelBLX2JVzS', 'peso da regua', 5050, 2, 1, 1, '2023-11-27 12:42:26', '2023-11-27 12:42:26', NULL),
(8, 'pedro silva ', 'carretas087@gmai.com', 'regua', 254879325, 214569875, '$2b$10$kGVMVLA9VuBaU9AFS/xN/.pX9COj/2Du7qM4Ot2/r3bgyoc.hwMea', 'peso d aregua', 5050, 2, 1, 1, '2023-11-27 12:44:11', '2023-11-27 12:44:11', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `gestors`
--

CREATE TABLE `gestors` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `morada` varchar(255) NOT NULL,
  `nif` int(11) NOT NULL,
  `telefone` int(11) NOT NULL,
  `password` varchar(255) NOT NULL,
  `localidade` varchar(255) NOT NULL,
  `codigoPostal` int(11) NOT NULL,
  `userTypeId` int(11) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `plataformas`
--

CREATE TABLE `plataformas` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `morada` varchar(255) NOT NULL,
  `nif` int(11) NOT NULL,
  `telefone` int(11) NOT NULL,
  `password` varchar(255) NOT NULL,
  `localidade` varchar(255) NOT NULL,
  `codigoPostal` int(11) NOT NULL,
  `userTypeId` int(11) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20211109_add_tokenIdentifier_to_clientes.js'),
('20211109_add_tokenIdentifier_to_fornecedores.js'),
('20211109_add_tokenIdentifier_to_transportadora.js'),
('20231025003148-create-user.js'),
('20231025003338-create-usertype.js'),
('20231025095529-create-fornecedores.js'),
('20231025202920-create-clientes.js'),
('20231025204853-create-transportadora.js'),
('20231026223908-create-gestor.js'),
('20231026223922-create-plataforma.js'),
('20231026223941-create-fielarmazem.js'),
('20231027123750-create-status.js'),
('20231027123807-create-tipopagamento.js'),
('20231106154126-create-armazem.js'),
('20231106154749-create-artigos.js'),
('20231106165811-create-fornecedorartigos.js'),
('20231107135524-create-artigo-armazem.js'),
('20231107151138-create-encomendas.js'),
('20231108130711-create-encomenda-artigos.js'),
('20231128151115-modify_encomendas_table.js');

-- --------------------------------------------------------

--
-- Table structure for table `statuses`
--

CREATE TABLE `statuses` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `statuses`
--

INSERT INTO `statuses` (`id`, `nome`, `createdAt`, `updatedAt`) VALUES
(1, 'ativo', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'Desativo', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `tipopagamentos`
--

CREATE TABLE `tipopagamentos` (
  `id` int(11) NOT NULL,
  `descricao` varchar(255) DEFAULT NULL,
  `condicoespagamento` varchar(255) DEFAULT NULL,
  `tipo` varchar(255) DEFAULT NULL,
  `prazopagamento` varchar(255) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tipopagamentos`
--

INSERT INTO `tipopagamentos` (`id`, `descricao`, `condicoespagamento`, `tipo`, `prazopagamento`, `createdAt`, `updatedAt`) VALUES
(1, 'dias', '30', 'trf', 'final mes', '0000-00-00 00:00:00', '2023-12-03 20:35:39');

-- --------------------------------------------------------

--
-- Table structure for table `transportadoras`
--

CREATE TABLE `transportadoras` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `morada` varchar(255) NOT NULL,
  `nif` int(11) NOT NULL,
  `telefone` int(11) NOT NULL,
  `password` varchar(255) NOT NULL,
  `localidade` varchar(255) NOT NULL,
  `codigoPostal` int(11) NOT NULL,
  `userTypeId` int(11) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `tokenIdentifier` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `transportadoras`
--

INSERT INTO `transportadoras` (`id`, `username`, `email`, `morada`, `nif`, `telefone`, `password`, `localidade`, `codigoPostal`, `userTypeId`, `createdAt`, `updatedAt`, `tokenIdentifier`) VALUES
(1, 'Transposrtadora Finance', 'carretastrsn@gmail.com', 'bairro da lapada', 214523515, 25431710, '$2b$10$n9ukCkPBQ17hYSZRiYWiguFGs7M5hWhUr0V4IXZDxqSTN7oSq.VAm', 'Peso regua', 0, 4, '0000-00-00 00:00:00', '2023-12-04 20:43:19', '568529c6-a867-496e-a934-a8f1e6a0cbdf');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `morada` varchar(255) NOT NULL,
  `nif` int(11) NOT NULL,
  `telefone` int(11) NOT NULL,
  `password` varchar(255) NOT NULL,
  `localidade` varchar(255) NOT NULL,
  `codigoPostal` int(11) NOT NULL,
  `userTypeId` int(11) DEFAULT NULL,
  `tipopagamentoId` int(11) DEFAULT NULL,
  `statusId` int(11) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `usertypes`
--

CREATE TABLE `usertypes` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `usertypes`
--

INSERT INTO `usertypes` (`id`, `nome`, `createdAt`, `updatedAt`) VALUES
(1, 'Cliente', '0000-00-00 00:00:00', '2023-11-25 09:06:27'),
(2, 'Fornecedor', '0000-00-00 00:00:00', '2023-11-25 09:06:27'),
(3, 'Plataforma', '0000-00-00 00:00:00', '2023-11-28 16:40:42'),
(4, 'Transportadora', '0000-00-00 00:00:00', '2023-11-28 16:40:42');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `armazem`
--
ALTER TABLE `armazem`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `artigoarmazem`
--
ALTER TABLE `artigoarmazem`
  ADD KEY `artigoId` (`artigoId`),
  ADD KEY `armazemId` (`armazemId`);

--
-- Indexes for table `artigos`
--
ALTER TABLE `artigos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fornecedorId` (`fornecedorId`);

--
-- Indexes for table `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `tokenIdentifier` (`tokenIdentifier`),
  ADD KEY `userTypeId` (`userTypeId`),
  ADD KEY `tipopagamentoId` (`tipopagamentoId`),
  ADD KEY `statusId` (`statusId`);

--
-- Indexes for table `encomendaartigos`
--
ALTER TABLE `encomendaartigos`
  ADD KEY `encomendaId` (`encomendaId`),
  ADD KEY `artigoId` (`artigoId`);

--
-- Indexes for table `encomendas`
--
ALTER TABLE `encomendas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `clienteId` (`clienteId`),
  ADD KEY `transportadoraId` (`transportadoraId`);

--
-- Indexes for table `fielarmazems`
--
ALTER TABLE `fielarmazems`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userTypeId` (`userTypeId`);

--
-- Indexes for table `fornecedorartigos`
--
ALTER TABLE `fornecedorartigos`
  ADD PRIMARY KEY (`fornecedorId`,`artigoId`);

--
-- Indexes for table `fornecedores`
--
ALTER TABLE `fornecedores`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `tokenIdentifier` (`tokenIdentifier`),
  ADD KEY `userTypeId` (`userTypeId`),
  ADD KEY `tipopagamentoId` (`tipopagamentoId`),
  ADD KEY `statusId` (`statusId`);

--
-- Indexes for table `gestors`
--
ALTER TABLE `gestors`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userTypeId` (`userTypeId`);

--
-- Indexes for table `plataformas`
--
ALTER TABLE `plataformas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userTypeId` (`userTypeId`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `statuses`
--
ALTER TABLE `statuses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tipopagamentos`
--
ALTER TABLE `tipopagamentos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transportadoras`
--
ALTER TABLE `transportadoras`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `tokenIdentifier` (`tokenIdentifier`),
  ADD KEY `userTypeId` (`userTypeId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userTypeId` (`userTypeId`),
  ADD KEY `tipopagamentoId` (`tipopagamentoId`),
  ADD KEY `statusId` (`statusId`);

--
-- Indexes for table `usertypes`
--
ALTER TABLE `usertypes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `armazem`
--
ALTER TABLE `armazem`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `artigos`
--
ALTER TABLE `artigos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `encomendas`
--
ALTER TABLE `encomendas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `fielarmazems`
--
ALTER TABLE `fielarmazems`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `fornecedores`
--
ALTER TABLE `fornecedores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `gestors`
--
ALTER TABLE `gestors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `plataformas`
--
ALTER TABLE `plataformas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `statuses`
--
ALTER TABLE `statuses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tipopagamentos`
--
ALTER TABLE `tipopagamentos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `transportadoras`
--
ALTER TABLE `transportadoras`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `usertypes`
--
ALTER TABLE `usertypes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `artigoarmazem`
--
ALTER TABLE `artigoarmazem`
  ADD CONSTRAINT `artigoarmazem_ibfk_1` FOREIGN KEY (`artigoId`) REFERENCES `artigos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `artigoarmazem_ibfk_2` FOREIGN KEY (`armazemId`) REFERENCES `armazem` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `artigos`
--
ALTER TABLE `artigos`
  ADD CONSTRAINT `artigos_ibfk_1` FOREIGN KEY (`fornecedorId`) REFERENCES `fornecedores` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `clientes`
--
ALTER TABLE `clientes`
  ADD CONSTRAINT `clientes_ibfk_1` FOREIGN KEY (`userTypeId`) REFERENCES `usertypes` (`id`),
  ADD CONSTRAINT `clientes_ibfk_2` FOREIGN KEY (`tipopagamentoId`) REFERENCES `tipopagamentos` (`id`),
  ADD CONSTRAINT `clientes_ibfk_3` FOREIGN KEY (`statusId`) REFERENCES `statuses` (`id`);

--
-- Constraints for table `encomendaartigos`
--
ALTER TABLE `encomendaartigos`
  ADD CONSTRAINT `encomendaartigos_ibfk_1` FOREIGN KEY (`encomendaId`) REFERENCES `encomendas` (`id`),
  ADD CONSTRAINT `encomendaartigos_ibfk_2` FOREIGN KEY (`artigoId`) REFERENCES `artigos` (`id`);

--
-- Constraints for table `encomendas`
--
ALTER TABLE `encomendas`
  ADD CONSTRAINT `encomendas_ibfk_1` FOREIGN KEY (`clienteId`) REFERENCES `clientes` (`id`),
  ADD CONSTRAINT `encomendas_ibfk_2` FOREIGN KEY (`transportadoraId`) REFERENCES `transportadoras` (`id`);

--
-- Constraints for table `fielarmazems`
--
ALTER TABLE `fielarmazems`
  ADD CONSTRAINT `fielarmazems_ibfk_1` FOREIGN KEY (`userTypeId`) REFERENCES `usertypes` (`id`);

--
-- Constraints for table `fornecedores`
--
ALTER TABLE `fornecedores`
  ADD CONSTRAINT `fornecedores_ibfk_1` FOREIGN KEY (`userTypeId`) REFERENCES `usertypes` (`id`),
  ADD CONSTRAINT `fornecedores_ibfk_2` FOREIGN KEY (`tipopagamentoId`) REFERENCES `tipopagamentos` (`id`),
  ADD CONSTRAINT `fornecedores_ibfk_3` FOREIGN KEY (`statusId`) REFERENCES `statuses` (`id`);

--
-- Constraints for table `gestors`
--
ALTER TABLE `gestors`
  ADD CONSTRAINT `gestors_ibfk_1` FOREIGN KEY (`userTypeId`) REFERENCES `usertypes` (`id`);

--
-- Constraints for table `plataformas`
--
ALTER TABLE `plataformas`
  ADD CONSTRAINT `plataformas_ibfk_1` FOREIGN KEY (`userTypeId`) REFERENCES `usertypes` (`id`);

--
-- Constraints for table `transportadoras`
--
ALTER TABLE `transportadoras`
  ADD CONSTRAINT `transportadoras_ibfk_1` FOREIGN KEY (`userTypeId`) REFERENCES `usertypes` (`id`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`userTypeId`) REFERENCES `usertypes` (`id`),
  ADD CONSTRAINT `users_ibfk_2` FOREIGN KEY (`tipopagamentoId`) REFERENCES `tipopagamentos` (`id`),
  ADD CONSTRAINT `users_ibfk_3` FOREIGN KEY (`statusId`) REFERENCES `statuses` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

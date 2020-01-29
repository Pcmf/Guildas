-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 29-Jan-2020 às 00:43
-- Versão do servidor: 10.4.6-MariaDB
-- versão do PHP: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `guildas`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `guildas`
--

CREATE TABLE `guildas` (
  `id` int(11) NOT NULL,
  `nome` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `guildas`
--

INSERT INTO `guildas` (`id`, `nome`) VALUES
(0, 'Guilda 0'),
(1, 'Guilda 1');

-- --------------------------------------------------------

--
-- Estrutura da tabela `players`
--

CREATE TABLE `players` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `birthyear` int(11) DEFAULT NULL,
  `telm` int(11) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `linkface` varchar(255) DEFAULT NULL,
  `guilda` int(11) DEFAULT NULL,
  `txdeath` decimal(4,2) DEFAULT NULL,
  `txheadshot` decimal(4,2) DEFAULT NULL,
  `ative` int(11) NOT NULL DEFAULT 1,
  `date` datetime NOT NULL,
  `nikname` blob DEFAULT NULL,
  `updata` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `players`
--

INSERT INTO `players` (`id`, `name`, `birthyear`, `telm`, `email`, `linkface`, `guilda`, `txdeath`, `txheadshot`, `ative`, `date`, `nikname`, `updata`) VALUES
(1, 'Pedro', 1994, 999111999, 'a@email.com', 'NULL', 0, '20.00', '11.00', 1, '2020-01-24 21:58:01', 0x4e554c4c, NULL),
(3, 'Carlos', 1994, 999111998, 'aa@email.com', 'NULL', 1, '21.00', '15.56', 1, '2020-01-24 22:03:07', 0x4e554c4c, '2020-01-24 22:14:22');

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(15) NOT NULL,
  `password` varchar(256) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(256) DEFAULT NULL,
  `tipo` varchar(10) DEFAULT NULL,
  `ativo` tinyint(1) NOT NULL DEFAULT 1,
  `token` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `name`, `email`, `tipo`, `ativo`, `token`) VALUES
(1, 'calika', 'calika66', 'Teste', NULL, 'Admin', 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJHVUlMREEiLCJub21lIjoiVGVzdGUiLCJ0aXBvIjoiQWRtaW4ifQ==.NLyZVBzrWwoUd+C1I+YKXXmmm25+1enSaPxPiFcVwrA=');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `guildas`
--
ALTER TABLE `guildas`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `players`
--
ALTER TABLE `players`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `telm` (`telm`,`email`,`linkface`);

--
-- Índices para tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `guildas`
--
ALTER TABLE `guildas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `players`
--
ALTER TABLE `players`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

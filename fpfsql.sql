

CREATE TABLE `clientes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Nome` varchar(125) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

CREATE TABLE `produtos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Nome` varchar(125) NOT NULL,
  `Preco` float(10,2) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Name` (`Nome`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

drop table `vendas`;

CREATE TABLE `vendas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Cliente_fk` int(11) NOT NULL,
  `Produto_fk` int(11) NOT NULL,
  `Quantidade` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Cliente_fk` (`Cliente_fk`),
  KEY `Produto_fk` (`Produto_fk`),
  CONSTRAINT `vendas_ibfk_1` FOREIGN KEY (`Cliente_fk`) REFERENCES `clientes` (`id`),
  CONSTRAINT `vendas_ibfk_2` FOREIGN KEY (`Produto_fk`) REFERENCES `produtos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
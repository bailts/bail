CREATE USER IF NOT EXISTS `adminBail`@`localhost` IDENTIFIED BY 'adm00n';
CREATE USER IF NOT EXISTS `employeeBail`@`localhost` IDENTIFIED BY 'empl00yee';

GRANT ALL ON `bail`.* TO `adminBail`@`localhost`;

GRANT ALL ON `bail`.`user` TO `employeeBail`@`localhost`;
GRANT ALL ON `bail`.`mail` TO `employeeBail`@`localhost`;
GRANT ALL ON `bail`.`disposition` TO `employeeBail`@`localhost`;
GRANT SELECT ON `bail`.`mailtype` TO `employeeBail`@`localhost`;

FLUSH PRIVILEGES;
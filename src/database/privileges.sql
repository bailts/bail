CREATE USER 'admin'@'localhost' IDENTIFIED BY 'adm00n';
CREATE USER 'employee'@'localhost' IDENTIFIED BY 'empl00yee';

GRANT * ON bail.* TO 'admin@localhost';
GRANT * ON bail.* TO 'employee@localhost';

FLUSH PRIVILEGES;
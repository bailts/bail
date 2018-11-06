CREATE USER 'admin'@'localhost' IDENTIFIED BY 'adm00n';
CREATE USER 'employee'@'localhost' IDENTIFIED BY 'empl00yee';

GRANT * ON bail.* TO 'admin@localhost';

GRANT * ON bail.user TO 'employee@localhost';
GRANT * ON bail.mail TO 'employee@localhost';
GRANT * ON bail.disposition TO 'employee@localhost';
GRANT SELECT ON bail.mailtype TO 'employee@localhost';

FLUSH PRIVILEGES;
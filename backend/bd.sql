
CREATE TABLE users_test_felipemansilla (
  id INT NOT NULL AUTO_INCREMENT comment 'primary key',
  nombre VARCHAR(25) NOT NULL,
  segundoNombre VARCHAR(25) NOT NULL,
  apellidoPaterno VARCHAR(25) NOT NULL,
  apellidoMaterno VARCHAR(25) NOT NULL,
  fechaNacimiento VARCHAR(25) NOT NULL,
  email VARCHAR(60) NOT NULL,
  telefono VARCHAR(25) NOT NULL,
  PRIMARY KEY (id)
)default charset utf8;
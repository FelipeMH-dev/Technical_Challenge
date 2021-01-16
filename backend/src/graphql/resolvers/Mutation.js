
const pool = require('../../database');
const Mutation = {
  createUser: async (_, { nombre, segundoNombre, apellidoPaterno,apellidoMaterno,fechaNacimiento,email,telefono}) => {
 
    pool.query("INSERT INTO users_test_felipemansilla  (`nombre`, `segundoNombre`, `apellidoPaterno`, `apellidoMaterno`, `fechaNacimiento`, `email`, `telefono`) VALUES ('" + nombre + "', '" + segundoNombre+ "', '" + apellidoPaterno + "', '" + apellidoMaterno + "', '" +fechaNacimiento + "', '" + email+ "', '" + telefono+ "')",
    ).then(async (resp) => {console.log(resp)})
    .catch((err) => {
      console.log(err);
    })
    


 
  }
};

export default Mutation;

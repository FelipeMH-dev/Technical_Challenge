const pool = require('../../database');

const Query = {
 
  users: async () => {
const users =  pool.query('SELECT * FROM users_test_felipemansilla')
return users
  
  }
};

export default Query;

import {server} from './server'
import './database';


server.start({port: 3200}, ({port}) => {
  console.log('Server on port', port);
});

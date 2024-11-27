
const mysql = require('mysql2/promise');


// Create a connection to the database
const connectionsQL = mysql.createPool({
  host: 'localhost', 
  user: 'root',      
  password: 'YOUR_PASSWORD', 
  database: 'New_studengt'    
});


module.exports = connectionsQL;
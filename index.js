const express = require('express');
const dotenv = require('dotenv');
const connectionsQL = require('./connectionDB/SQL_connection'); 
const Routes = require('./Routes/student_routs')
const app = express();

// Load environment variables
dotenv.config();

// Middleware
app.use(express.json());

// Define a simple route
app.get('/', (req, res) => {
  res.send('Welcome to your Express.js local server!');
});
// routes
app.use('/student',Routes)



// Test SQL connection
const PORT = process.env.PORT || 3000;

connectionsQL.query('SELECT 1')
  .then(() => {
    console.log('Successfully connected to MySQL');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MySQL:', error);
  });




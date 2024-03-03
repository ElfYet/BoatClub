require('dotenv').config({ path: "./.env"}); // Load environment variables from .env file
const express = require('express');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const cors = require('cors');
const bodyParser = require('body-parser')
const db = require('./Config/database'); // DB connection for Express session configuration
// const path = require('path');

// Imported routes
const registerRoutes = require('./Routes/registerRoutes');
const loginRoutes = require('./Routes/loginRoutes');
const bookingRoutes = require('./Routes/bookingRoutes');

const app = express(); // Create express application (usually called 'app')
const PORT = process.env.process || 3001; // can be any perfered port 

app.use(express.static(__dirname + '/public'));

app.use(cors()); // allow corss-origin requests
app.use(express.json()); // To parse incoming requests with JSON payloads 


// Express session configuration
const sessionStore = new MySQLStore({
  clearExpired: true,
  checkExpirationInterval: 900000,
  expiration: 86400000,
  createDatabaseTable: true,
  schema: {
    tableName: 'sessions',
    columnNames: {
      session_id: 'session_id',
      expires: 'expires',
      data: 'data',
    },
  },
}, db);

app.use(session({
  key: 'sessionStore',
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: false,
  store: sessionStore,
}));

// onReady() to get a promise that resolves when store is ready
sessionStore.onReady().then(() => {
  console.log('MySQLStore ready');
}).catch(error => {
  console.error(error);
});

// Middleware to check session
app.use((req, res, next) => {
  if (req.session && req.session.member) {
    res.locals.member = req.session.member;
  }
  next();
});

// User middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Enable CORS for all routes
app.use(cors());

// Route handling logic
app.use(registerRoutes); 
app.use(loginRoutes);
app.use(bookingRoutes);

// Start the server
app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on port ${PORT}`); // To use ${PORT} enclose the text with ` not ' or "
})

// Good practice code
/*
// Close the database connection on process exit
process.on('exit', () => {
    db.end();
    console.log('Database connection closed');
  });
  
  // Handle Ctrl+C (SIGINT) gracefully
  process.on('SIGINT', () => {
    server.close(() => {
      console.log('Server closed');
      process.exit(0);
    });
  });
*/

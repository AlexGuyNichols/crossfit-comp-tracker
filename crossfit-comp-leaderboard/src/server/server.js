// src/server/server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const routes = require('./routes');
const auth = require('./routes/auth'); // Import auth routes

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Database Connection
mongoose.connect('mongodb://localhost:27017/database-cf', {
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.log('Error connecting to MongoDB:', err);
});

// Passport middleware
app.use(passport.initialize());
// Passport config
require('./config/passport')(passport); // Adjust the path as needed

// Use Routes
app.use('/', routes);
app.use('/api/users', auth); // Use auth routes

// Start Server
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

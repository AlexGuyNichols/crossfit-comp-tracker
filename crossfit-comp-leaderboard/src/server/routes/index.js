const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Simple test route
router.get('/test', (req, res) => {
  res.send('API is working!');
});

// Route to create a user
router.post('/create-user', async (req, res) => {
  const { username, password } = req.body;

  try {
    const newUser = new User({ username, password });
    await newUser.save();
    res.status(201).send('User created successfully!');
  } catch (err) {
    res.status(500).send('Error creating user: ' + err.message);
  }
});

module.exports = router;

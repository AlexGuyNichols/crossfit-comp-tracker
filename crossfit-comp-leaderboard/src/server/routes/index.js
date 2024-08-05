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
    res.status(500).send('Error creating user: ' + err.message + ' - Request Body: ' + JSON.stringify(req.body));
  }
});

// Route to get a user by username
router.get('/get-user/:username', async (req, res) => {
    const { username } = req.params;
  
    try {
      const user = await User.findOne({ username });
      if (user) {
        res.status(200).json({ username: user.username, password: user.password });
      } else {
        res.status(404).send('User not found');
      }
    } catch (err) {
      res.status(500).send('Error retrieving user: ' + err.message);
    }
});
  
// Route to get all users
router.get('/get-users', async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).send('Error retrieving users: ' + err.message);
    }
});

// Route to update a user by username

// Route to delete a user by username

// Route to delete all users
router.delete('/delete-users', async (req, res) => {
    try {
      await User.deleteMany();
      res.status(200).send('All users deleted');
    } catch (err) {
      res.status(500).send('Error deleting users: ' + err.message);
    }
});

module.exports = router;

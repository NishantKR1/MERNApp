const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Example Route
app.get('/', (req, res) => {
  res.send('Hello from Backend!');
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// User model (we'll create next)
const User = require('./models/User');

// POST API to create a new user
app.post('/api/users', async (req, res) => {
  try {
    const { name, email } = req.body;
    const newUser = new User({ name, email });
    await newUser.save();
    res.status(201).send('User Created');
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// Example Route to fetch data from an external API
app.get('/api/external', async (req, res) => {
    try {
      // Make the API request
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      // Send the data to the frontend
      res.json(response.data);
    } catch (error) {
      console.error('Error fetching external data:', error);
      res.status(500).send('Failed to fetch external data');
    }
  });
  

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

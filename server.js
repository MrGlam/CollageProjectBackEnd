const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3001;

// Connect to MongoDB
mongoose.connect('mongodb+srv://user:6r05oqyPbkLNBUnX@cluster0.ru6kdim.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define your routes and middleware here

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const mongoose = require('mongoose');

const mongoURI = 'mongodb://127.0.0.1:27017/stock_exchange'; // Update with your actual database

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('connected', () => {
  console.log('MongoDB connected successfully');
});

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

module.exports = db;

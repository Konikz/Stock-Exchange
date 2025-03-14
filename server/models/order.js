const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  stock: String,
  price: Number,
  quantity: Number,
  orderType: String, // "buy" or "sell"
  timestamp: { type: Date, default: Date.now },
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;

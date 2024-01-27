// models/inventory.js
const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  imageUrl: { type: String, required: true },
  // Add other relevant fields for your inventory
});

const Inventory = mongoose.model('Inventory', inventorySchema);

module.exports = Inventory;

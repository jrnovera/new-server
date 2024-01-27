
const Inventory = require('../models/image');

const inventoryController = {
  addImage: async (req, res) => {
    try {
      const { name, imageUrl } = req.body;

      // Validate input data (you may want to add more validation)
      if (!name || !imageUrl) {
        return res.status(400).json({ error: 'Name and imageUrl are required' });
      }

      // Create new inventory item
      const newInventoryItem = new Inventory({ name, imageUrl });

      // Save to the database
      await newInventoryItem.save();

      res.status(201).json({ message: 'Inventory image added successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = inventoryController;

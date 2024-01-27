const express = require("express");
const inventoryController = require("../controllers/image");
const auth = require("../auth");


const router = express.Router();

router.post('/addImage', inventoryController.addImage);

module.exports = router;

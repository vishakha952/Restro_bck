const express = require('express');
const router = express.Router();
const cartcontroller = require('../controllers/cartcontroller');

router.get('/cart',cartcontroller.getCart);

module.exports = router;
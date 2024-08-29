const express = require('express');
const router = express.Router();
const contactuscontroller = require('../controllers/contactuscontroller');

router.get('/contactus',contactuscontroller.getContactus);

module.exports = router;
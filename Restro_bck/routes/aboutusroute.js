const express = require('express');
const router = express.Router();
const abouttuscontroller = require('../controllers/aboutuscontroller');

router.get('/aboutus',abouttuscontroller.getAboutus);

module.exports = router;
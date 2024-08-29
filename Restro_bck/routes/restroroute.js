const express = require('express');
const router = express.Router();
const restrocontroller = require('../controllers/restrocontroller');

router.get('/restro',restrocontroller.getRestro);

module.exports = router;
const express = require('express');
const router = express.Router();
const rootcontroller = require('../controllers/rootcontroller');

router.get('/', rootcontroller.getIndex);
router.get('/home', rootcontroller.getIndex);

module.exports = router;

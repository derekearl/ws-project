const express = require('express');
const router = express.Router();

const infoController = require('../controllers/info');

router.get('/', infoController.getAll);

router.get('/:name', infoController.getSingle);




module.exports = router;

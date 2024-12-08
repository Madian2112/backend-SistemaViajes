const express = require('express');
const router = express.Router();
const ColaboradoresController = require('../controllers/colaboradoresController');

router.get('/', ColaboradoresController.listar);

router.post('/', ColaboradoresController.crear);

module.exports = router;

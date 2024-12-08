const express = require('express');
const router = express.Router();
const TarifaController = require('../controllers/tarifaCotroller');

router.get('/', TarifaController.listar);

router.put('/', TarifaController.editar);

module.exports = router;

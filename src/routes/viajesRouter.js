const express = require('express');
const router = express.Router();
const ViajesController = require('../controllers/viajesController');

router.get('/', ViajesController.listar);
router.get('/viajesDetalles/', ViajesController.listarViajesDetalles);

router.post('/', ViajesController.crear);

module.exports = router;

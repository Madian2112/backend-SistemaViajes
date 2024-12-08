const express = require('express');
const router = express.Router();
const UsuariosController = require('../controllers/usauriosController');

router.get('/', UsuariosController.listar);

router.get('/:usua_Usuario/:usua_Clave', UsuariosController.inicioSesion);

router.post('/', UsuariosController.crear);

router.put('/:id', UsuariosController.actualizar);

router.delete('/:id', UsuariosController.eliminar);

module.exports = router;

const express = require('express');
const router = express.Router();
const SucursalesController = require('../controllers/sucursalesController');

router.get('/', SucursalesController.listar);

router.get('/emplSucu/:sucu_Id', SucursalesController.empleadosSinSucursal);
router.get('/emplConSucu/:sucu_Id', SucursalesController.empleadosConSucursal);

router.post('/', SucursalesController.crear);

router.post('/sucursalEmpleado/', SucursalesController.crearSucursalColaborador);

module.exports = router;

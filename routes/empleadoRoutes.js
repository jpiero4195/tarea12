const express = require('express');
const router = express.Router();
const empleadoController = require('../controllers/empleadoController');

router.get('/', empleadoController.listarEmpleados);
router.post('/', empleadoController.agregarEmpleado);
router.put('/:id', empleadoController.modificarEmpleado);
router.delete('/:id', empleadoController.eliminarEmpleado);

module.exports = router;

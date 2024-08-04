// controllers/empleadoController.js
const Empleado = require('../models/Empleado');

// Listar empleados
exports.listarEmpleados = async (req, res) => {
  try {
    const empleados = await Empleado.find();
    res.json(empleados);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Agregar empleado
exports.agregarEmpleado = async (req, res) => {
  const empleado = new Empleado(req.body);
  empleado.calcularRecibe();
  
  try {
    const nuevoEmpleado = await empleado.save();
    res.status(201).json(nuevoEmpleado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Modificar empleado
exports.modificarEmpleado = async (req, res) => {
  try {
    const empleado = await Empleado.findById(req.params.id);
    if (!empleado) return res.status(404).send('Empleado no encontrado');

    Object.assign(empleado, req.body);
    empleado.calcularRecibe();
    await empleado.save();

    res.json(empleado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar empleado
exports.eliminarEmpleado = async (req, res) => {
  try {
    const empleado = await Empleado.findByIdAndDelete(req.params.id);
    if (!empleado) return res.status(404).send('Empleado no encontrado');

    res.json({ message: 'Empleado eliminado' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

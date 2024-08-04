
const mongoose = require('mongoose');

const empleadoSchema = new mongoose.Schema({
  codigo_emp: { type: String, required: true },
  empleado: { type: String, required: true },
  anio: { type: Number, required: true },
  mes: { type: Number, required: true },
  ingresos: { type: Number, required: true },
  egresos: { type: Number, required: true },
  recibe: { type: Number, required: true, default: 0 }
});

// Método para calcular "recibe"
empleadoSchema.methods.calcularRecibe = function () {
  this.recibe = this.ingresos - this.egresos;
};

module.exports = mongoose.model('Empleado', empleadoSchema);

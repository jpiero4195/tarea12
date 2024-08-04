// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const empleadoRoutes = require('./routes/empleadoRoutes');
const auth = require('./middleware/auth.js');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Conectar a MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB conectado'))
  .catch(err => console.log(err));

// Rutas protegidas
app.use('/api/empleados', auth, empleadoRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

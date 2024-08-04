// controllers/authController.js
const jwt = require('jsonwebtoken');

exports.login = (req, res) => {
  const { username, password } = req.body;

  // Lógica de autenticación aquí (ejemplo simplificado)
  if (username === 'admin' && password === 'admin') {
    const token = jwt.sign({ username }, process.env.JWT_SECRET);
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Credenciales incorrectas' });
  }
};

// Luego, añade la ruta para login en tu archivo de rutas.

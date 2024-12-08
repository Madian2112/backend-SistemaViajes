const express = require('express');
const dotenv = require('dotenv');
const usuariosRoutes = require('./src/routes/usuariosRoutes');
const sucursalesRoutes = require('./src/routes/sucursalesRouter');
const colaboradoresRoutes = require('./src/routes/colaboradoresRouter');
const viajesRoutes = require('./src/routes/viajesRouter');
const tarifasRoutes = require('./src/routes/tarifaRouter');
const cors = require('cors');

// Cargar variables de entorno
dotenv.config();

const app = express();
// Middleware para JSON
app.use(express.json());

// Rutas
app.use(cors());
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/sucursales', sucursalesRoutes);
app.use('/api/colaboradores', colaboradoresRoutes);
app.use('/api/viajes', viajesRoutes);
app.use('/api/tarifas', tarifasRoutes);


// Ruta básica
app.get('/', (req, res) => {
    res.send('API funcionando');
});

// Configurar el puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

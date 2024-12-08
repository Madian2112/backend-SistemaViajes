const ViajeRepository = require('../repositories/viajesRepository');

const ViajesController = {
    listar: async (req, res) => {
        try {
            const personas = await ViajeRepository.listar();
            res.status(200).json(personas);
        } catch (err) {
            console.error(err);
            // res.status(500).json({ error: 'Error al obtener las personas' });
        }
    },

    listarViajesDetalles: async (req, res) => {
        try {
            const personas = await ViajeRepository.listarViajesDetalles();
            res.status(200).json(personas);
        } catch (err) {
            console.error(err);
            // res.status(500).json({ error: 'Error al obtener las personas' });
        }
    },


    crear: async (req, res) => {
        try {
            const modelo = req.body;
            await ViajeRepository.crear(modelo);
            // res.status(201).json({ message: 'Creado Exitosamente' });
        } catch (err) {
            console.error(err);
            // res.status(500).json({ error: 'Error al crear' });
        }
    },
};

module.exports = ViajesController;

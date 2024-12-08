const ColaboradorRepository = require('../repositories/colaboradoresRepository');

const ColaboradoresController = {
    listar: async (req, res) => {
        try {
            const personas = await ColaboradorRepository.listar();
            res.status(200).json(personas);
        } catch (err) {
            console.error(err);
            // res.status(500).json({ error: 'Error al obtener las personas' });
        }
    },

    crear: async (req, res) => {
        try {
            const modelo = req.body;
            await ColaboradorRepository.crear(modelo);
            // res.status(201).json({ message: 'Creado Exitosamente' });
        } catch (err) {
            console.error(err);
            // res.status(500).json({ error: 'Error al crear' });
        }
    },
};

module.exports = ColaboradoresController;

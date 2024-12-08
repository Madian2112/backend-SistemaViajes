const TarifaRepository = require('../repositories/tarifaRepository');

const TarifaController = {
    listar: async (req, res) => {
        try {
            const personas = await TarifaRepository.listar();
            res.status(200).json(personas);
        } catch (err) {
            console.error(err);
            // res.status(500).json({ error: 'Error al obtener las personas' });
        }
    },

    editar: async (req, res) => {
        try {
            const modelo = req.body;
            await TarifaRepository.editar(modelo);
            // res.status(201).json({ message: 'Creado Exitosamente' });
        } catch (err) {
            console.error(err);
            // res.status(500).json({ error: 'Error al crear' });
        }
    },
};

module.exports = TarifaController;

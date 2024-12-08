const SucursalRepository = require('../repositories/sucursalesRepository');

const SucursalesController = {
    listar: async (req, res) => {
        try {
            const personas = await SucursalRepository.listar();
            res.status(200).json(personas);
        } catch (err) {
            console.error(err);
            // res.status(500).json({ error: 'Error al obtener las personas' });
        }
    },

    empleadosSinSucursal: async (req, res) => {
        try {
            const sucu_Id = req.params.sucu_Id;
            const personas = await SucursalRepository.empleadosSinSucursal(sucu_Id);
            res.status(200).json(personas);
        } catch (err) {
            console.error(err);
            // res.status(500).json({ error: 'Error al obtener las personas' });
        }
    },

    empleadosConSucursal: async (req, res) => {
        try {
            const sucu_Id = req.params.sucu_Id;
            const personas = await SucursalRepository.empleadosConSucursal(sucu_Id);
            res.status(200).json(personas);
        } catch (err) {
            console.error(err);
            // res.status(500).json({ error: 'Error al obtener las personas' });
        }
    },

    crear: async (req, res) => {
        try {
            const modelo = req.body;
            await SucursalRepository.crear(modelo);
            // res.status(201).json({ message: 'Creado Exitosamente' });
        } catch (err) {
            console.error(err);
            // res.status(500).json({ error: 'Error al crear' });
        }
    },

    crearSucursalColaborador: async (req, res) => {
        try {
            const modelo = req.body;
            await SucursalRepository.crearSucursalesColaboradores(modelo);
            // res.status(201).json({ message: 'Creado Exitosamente' });
        } catch (err) {
            console.error(err);
            // res.status(500).json({ error: 'Error al crear' });
        }
    },
};

module.exports = SucursalesController;

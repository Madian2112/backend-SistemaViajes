const UsuariosRepository = require('../repositories/usuariosRepository');

const UsuariosController = {
    listar: async (req, res) => {
        try {
            const personas = await UsuariosRepository.listar();
            res.status(200).json(personas);
        } catch (err) {
            console.error(err);
            // res.status(500).json({ error: 'Error al obtener las personas' });
        }
    },

    inicioSesion: async (req, res) => {
        try {
            const usua_Usuario = req.params.usua_Usuario;
            const usua_Clave = req.params.usua_Clave;
            const personas = await UsuariosRepository.incioSesion(usua_Usuario, usua_Clave);
            res.status(200).json(personas);
        } catch (err) {
            console.error(err);
            // res.status(500).json({ error: 'Error al obtener las personas' });
        }
    },

    crear: async (req, res) => {
        try {
            const nuevaPersona = req.body;
            await UsuariosRepository.crear(nuevaPersona);
            res.status(201).json({ message: 'Persona creada exitosamente' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Error al crear la persona' });
        }
    },

    actualizar: async (req, res) => {
        try {
            const id = req.params.id;
            const persona = req.body;
            await UsuariosRepository.actualizar(id, persona);
            res.status(200).json({ message: 'Persona actualizada exitosamente' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Error al actualizar la persona' });
        }
    },

    eliminar: async (req, res) => {
        try {
            const id = req.params.id;
            await UsuariosRepository.eliminar(id);
            res.status(200).json({ message: 'Persona eliminada exitosamente' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Error al eliminar la persona' });
        }
    },
};

module.exports = UsuariosController;

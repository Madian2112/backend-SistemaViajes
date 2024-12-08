const { sql, poolPromise } = require('../../db');

const UsuariosRepository = {
    // Obtener todas las personas

    listar: async () => {
        const pool = await poolPromise;
        const result = await pool.request()
            .execute('[dbo].[SP_Usuarios_Listar]'); // Llamada al procedimiento
        return result.recordset;
    },

    incioSesion: async (usua_Usuario, usua_Clave) => {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('usua_Usuario', sql.VarChar, usua_Usuario)
            .input('usua_Clave', sql.NVarChar, usua_Clave)
            .execute('[dbo].[SP_Usuario_InicioSesion]'); // Llamada al procedimiento
        return result.recordset;
    },

    // Insertar una nueva persona
    crear: async (persona) => {
        const { Nombre, Apellido, Edad, Sexo, EstadoCivil_Id } = persona;
        const pool = await poolPromise;
        await pool.request()
            .input('Nombre', sql.VarChar, Nombre)
            .input('Apellido', sql.VarChar, Apellido)
            .input('Edad', sql.Int, Edad)
            .input('Sexo', sql.Char, Sexo)
            .input('EstadoCivil_Id', sql.Int, EstadoCivil_Id)
            .query(
                `INSERT INTO tbPersonas (Nombre, Apellido, Edad, Sexo, EstadoCivil_Id) 
                 VALUES (@Nombre, @Apellido, @Edad, @Sexo, @EstadoCivil_Id)`
            );
    },

    // Actualizar una persona
    actualizar: async (id, persona) => {
        const { Nombre, Apellido, Edad, Sexo, EstadoCivil_Id } = persona;
        const pool = await poolPromise;
        await pool.request()
            .input('Id', sql.Int, id)
            .input('Nombre', sql.VarChar, Nombre)
            .input('Apellido', sql.VarChar, Apellido)
            .input('Edad', sql.Int, Edad)
            .input('Sexo', sql.Char, Sexo)
            .input('EstadoCivil_Id', sql.Int, EstadoCivil_Id)
            .query(
                `UPDATE tbPersonas 
                 SET Nombre = @Nombre, Apellido = @Apellido, Edad = @Edad, Sexo = @Sexo, EstadoCivil_Id = @EstadoCivil_Id 
                 WHERE Id = @Id`
            );
    },

    // Eliminar una persona
    eliminar: async (id) => {
        const pool = await poolPromise;
        await pool.request()
            .input('Id', sql.Int, id)
            .query('DELETE FROM tbPersonas WHERE Id = @Id');
    },
};

module.exports = UsuariosRepository;

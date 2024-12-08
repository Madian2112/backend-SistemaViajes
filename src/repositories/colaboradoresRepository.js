const { sql, poolPromise } = require('../../db');

const ColaboradoresRepository = {

    listar: async () => {
        const pool = await poolPromise;
        const result = await pool.request()
            .execute('[dbo].[SP_Colaboradores_Listar]');
        return result.recordset;
    },

    crear: async (colaborador) => {
        const { cola_Identidad, cola_PrimerNombre, cola_SegundoNombre, cola_PrimerApellido, cola_SegundoApellido, cola_Sexo, cola_EsTransportista } = colaborador;
        const pool = await poolPromise;
        const result = await pool.request()
            .input('cola_Identidad', sql.VarChar, cola_Identidad)
            .input('cola_PrimerNombre', sql.VarChar, cola_PrimerNombre)
            .input('cola_SegundoNombre', sql.VarChar, cola_SegundoNombre)
            .input('cola_PrimerApellido', sql.VarChar, cola_PrimerApellido)
            .input('cola_SegundoApellido', sql.VarChar, cola_SegundoApellido)
            .input('cola_Sexo', sql.Char, cola_Sexo)
            .input('cola_EsTransportista', sql.Bit, cola_EsTransportista)
            .execute('[dbo].[SP_Colaborador_Crear]'); 
        return result.recordset;
    },
};

module.exports = ColaboradoresRepository;

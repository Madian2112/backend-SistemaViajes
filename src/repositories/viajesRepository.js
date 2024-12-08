const { sql, poolPromise } = require('../../db');

const ViajesRepository = {

    listar: async () => {
        const pool = await poolPromise;
        const result = await pool.request()
            .execute('[dbo].[SP_Viajes_Listar]');
        return result.recordset;
    },

    listarViajesDetalles: async () => {
        const pool = await poolPromise;
        const result = await pool.request()
            .execute('[dbo].[SP_ViajesDetallas_Listar]');
        return result.recordset;
    },
    
    crear: async (modelo) => {
        const { viaj_Fecha, viaj_Tarifa, cola_Id, sucu_Id, usua_Id, viaj_TotalTarifa, Json } = modelo;
        const pool = await poolPromise;
        const result = await pool.request()
            .input('viaj_Fecha', sql.VarChar, viaj_Fecha)
            .input('viaj_Tarifa', sql.Money, viaj_Tarifa)
            .input('cola_Id', sql.Int, cola_Id)
            .input('sucu_Id', sql.Int, sucu_Id)
            .input('usua_Id', sql.Int, usua_Id)
            .input('viaj_TotalTarifa', sql.Money, viaj_TotalTarifa)
            .input('Json', sql.VarChar, Json)
            .execute('[dbo].[SP_Viajes_Crear]'); 
        return result.recordset;
    },
};

module.exports = ViajesRepository;

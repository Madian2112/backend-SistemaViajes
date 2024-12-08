const { sql, poolPromise } = require('../../db');

const TarifaRepository = {

    listar: async () => {
        const pool = await poolPromise;
        const result = await pool.request()
            .execute('[dbo].[SP_Tarifa_Listar]');
        return result.recordset;
    },
    
    editar: async (modelo) => {
        const { tari_Id, tari_Tarifa } = modelo;
        const pool = await poolPromise;
        const result = await pool.request()
            .input('tari_Id', sql.Int, tari_Id)
            .input('tari_Tarifa', sql.Money, tari_Tarifa)
            .execute('[dbo].[SP_Tarifa_Editar]'); 
        return result.recordset;
    },
};

module.exports = TarifaRepository;

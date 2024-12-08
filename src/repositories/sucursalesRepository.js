const { sql, poolPromise } = require('../../db');

const SucursalesRepository = {

    listar: async () => {
        const pool = await poolPromise;
        const result = await pool.request()
            .execute('[dbo].[SP_Sucursales_Listar]');
        return result.recordset;
    },

    
    empleadosConSucursal: async (sucu_Id) => {
        const pool = await poolPromise;
        const result = await pool.request()
        .input('sucu_Id', sql.Int, sucu_Id)
        .execute('[dbo].[SP_EmpleadosConSucursal_Listar]');
        return result.recordset;
    },
    empleadosSinSucursal: async (sucu_Id) => {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('sucu_Id', sql.Int, sucu_Id)
            .execute('[dbo].[SP_EmpleadosSinSucursales_Listar]');
        return result.recordset;
    },
    
    crear: async (sucursal) => {
        const { sucu_Nombre, sucu_Latitud, sucu_Longitud } = sucursal;
        const pool = await poolPromise;
        const result = await pool.request()
            .input('sucu_Nombre', sql.VarChar, sucu_Nombre)
            .input('sucu_Latitud', sql.VarChar, sucu_Latitud)
            .input('sucu_Longitud', sql.VarChar, sucu_Longitud)
            .execute('[dbo].[SP_Sucursal_Crear]'); 
        return result.recordset;
    },

    crearSucursalesColaboradores: async (modelo) => {
        const {Json} = modelo
        const pool = await poolPromise;
        const result = await pool.request()
            .input('Json', sql.VarChar, Json)
            .execute('[dbo].[SP_SucursalesEmpleados_Insertarjson]'); 
        return result.recordset;
    },
};

module.exports = SucursalesRepository;

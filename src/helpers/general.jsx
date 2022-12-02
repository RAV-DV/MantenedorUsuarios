const { llamadaApi } = require("api/reqApi")


const getEmpresas = async()=>{    
   const getEmpresas = await llamadaApi.post('/empresas/getEmpresasGobm',{payload:'todas'})
   return getEmpresas
}


const getContratos = async(rutEmpre)=>{    
    const getContratos = await llamadaApi.post('/contratos/getCttosPorEmpresa',{rutEmpre})
    return getContratos
 }


export{
    getEmpresas,
    getContratos
}
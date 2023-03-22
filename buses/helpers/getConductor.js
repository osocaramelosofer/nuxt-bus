import busesApi from "@/api/busesApi"


export const getDrivers = async () =>{
  try{
    return await busesApi.get("/chofers/")
  }catch(error) {
    throw error
  }
}

export const getDriver = async ( id ) => {
    return await busesApi.get(`/chofers/${id}/`)
}

export const updateDriver = async ({ id, nombre } ) => {
  try{
    return await busesApi.put(
      `/chofers/${id}/`,
      {
        "nombre": nombre,
        "id": id
      })
  }catch (error) {
    throw error
  }
}

export const deleteDriver = async ( id ) => {
  try{
    const resp = await busesApi.delete(`/chofers/${id}/`)
    console.log(resp)
  }catch(err){
    console.log("Error en la peticion: ", err)
    throw err
  }
}
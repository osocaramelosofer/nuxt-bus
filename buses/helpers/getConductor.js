import busesApi from "@/api/busesApi"

export const addDriver = async ( driver ) => {
  try {
    return await busesApi.post(
      "/chofers/",
      {
        "nombre": driver
      })
  }catch (e) {
    throw e
  }
}

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
    return  await busesApi.delete(`/chofers/${id}/`)
  }catch(err){
    throw err
  }
}
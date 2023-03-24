import busesApi from "~/api/busesApi";

export const getBuses = async() => {
  try {
    return await busesApi.get("/buses")
  }catch (e) {
    throw e
  }
}

export const getBus = async( busId ) => {
  try {
    return await busesApi.get(`/buses/${busId}`)
  }catch (e) {
    throw e
  }
}


export const deleteBus = async( busId) => {
  try {
    return await busesApi.delete(`buses/${busId}/`)
  }catch (e) {
    throw e
  }
}

export const addBus = async( bus ) => {
  try {
    
  }catch (e) {
    
  }
}

export const updateBus = async( bus )=>{
  try {
    await busesApi.put(`/crear-bus`,{
      "bus":{
        "id": 58,
        "numero_placa": "XXXXXXX222",
        "capacidad": 9
      },
      "chofer":{
        "id": 30
      }
    })
  }catch (e) {

  }
}
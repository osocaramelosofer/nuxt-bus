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
    return busesApi.post('/buses/',{
      "numero_placa": bus.numero_placa,
      "chofer": {
        "nombre": bus.chofer
      },
      "capacidad": 10
    })
  }catch (e) {
    
  }
}

export const updateBus = async( bus )=>{
  try {
    await busesApi.put(`/crear-bus`,{
      "bus":{
        "id": bus.id,
        "numero_placa": bus.numero_placa,
        "capacidad": bus.capacidad
      },
      "chofer":{
        "id": bus.choferId
      }
    })
  }catch (e) {

  }
}
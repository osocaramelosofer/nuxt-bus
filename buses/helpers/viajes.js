import busesApi from "~/api/busesApi";

export const postViaje = async ({ fechaSalida, fechaLlegada, trayecto, bus} ) => {
  return await busesApi.post(`/corridas/`,
    {
      "fecha_salida": fechaSalida,
      "fecha_llegada": fechaLlegada,
      "trayecto": trayecto,
      "bus": bus
    })
}

export const getViajes = async()=> {
  return await busesApi.get('/corridas-vset/')
}
export const retrieveViaje = async( id )=>{
  return await busesApi.get(`/corridas-vset/${id}`)
}
export const deleteViaje = async( id )=> {
  return await busesApi.delete(`/corridas/${id}/`)
}
export const putViaje = async(viaje) =>{
  console.log("Viaje =>",viaje)
  return await busesApi.put('/corridas-vset/',{
    "id": viaje.id,
    "fecha_salida": viaje.fecha_salida,
    "fecha_llegada": viaje.fecha_llegada,
    // "fecha_salida": "2023-03-28T09:14:00-06:00",
    // "fecha_llegada": "2023-03-28T09:14:00-06:00",
    "bus": viaje.bus.id,
    "trayecto":  viaje.trayecto.id
  })
}
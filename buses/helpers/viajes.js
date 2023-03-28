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
  return await busesApi.get('/corridas')
}
import busesApi from "~/api/busesApi";

export const postDestino = async (origen, destino) =>{
  console.log(origen, destino)
  return await busesApi.post('/trayectos/',{
    "origen": origen,
    "destino": destino
  }).then(
    response => response.data
  )
}

export const getDestinos = async () =>{
  return await busesApi.get('/trayectos')
}

export const getDestino = async ( id ) => {
  return await busesApi.get(`/trayectos/${ id }`)
}

export const deleteDestino = async ( id ) =>{
  return await busesApi.delete(`/trayectos/${ id }`)
}
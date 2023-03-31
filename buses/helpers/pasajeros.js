import busesApi from "~/api/busesApi";

export const postPasajero = async(nombre)=>{
  return await busesApi.post(`/pasajeros/`,{
    nombre
  })
}
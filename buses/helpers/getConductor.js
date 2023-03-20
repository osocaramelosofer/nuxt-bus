import busesApi from "@/api/busesApi"


export const getConductores = async () =>{
    return await busesApi.get("/chofers/")
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
    return error
  }

}
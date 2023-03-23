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
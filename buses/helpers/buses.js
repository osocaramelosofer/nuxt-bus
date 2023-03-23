import busesApi from "~/api/busesApi";

export const getBuses = async() => {
  try {
    return await busesApi.get("/buses")
  }catch (e) {
    throw e
  }
}


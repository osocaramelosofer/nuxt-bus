import busesApi from "@/api/busesApi"


export const getAsientos = async (id) =>{
  const data = {
    bus: id
  };
  return await busesApi.get(`/asientos-vset/`, {params: data})
}

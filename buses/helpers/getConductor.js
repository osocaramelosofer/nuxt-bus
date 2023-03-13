import busesApi from "@/api/busesApi"


export const getConductores = async () =>{
    const res = await busesApi.get("/chofers/")
    return res
}

export const getConductor = async ( id ) => {
    return await busesApi.get(`/chofers/${id}/`)
}

import busesApi from "@/api/busesApi"


export const getConductores = async () =>{
    return await busesApi.get("/chofers/")
}

export const getDriver = async ( id ) => {
    return await busesApi.get(`/chofers/${id}/`)
}

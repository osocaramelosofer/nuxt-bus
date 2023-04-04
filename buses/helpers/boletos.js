import busesApi from '@/api/busesApi'

export const postBoleto = async( data ) => {
  return await busesApi.post('/crear-boleto', data)
}
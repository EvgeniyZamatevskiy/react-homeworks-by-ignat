import axios from 'axios'

type RequestData = {
   success: boolean
}

type ResponseType = {
   errorText: string
   info: string
   yourBody: RequestData
   yourQuery: {}
}

export const requestsAPI = {
   postRequest(data: RequestData) {
      return axios.post<ResponseType>('https://neko-cafe-back.herokuapp.com/auth/test', data)
         .then(res => res.data)
   }
}
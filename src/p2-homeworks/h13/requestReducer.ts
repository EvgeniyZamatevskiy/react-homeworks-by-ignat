import { Dispatch } from 'redux'
import { requestsAPI } from './request-api'

type InitStateType = typeof initState
const initState = {
   successResponse: false,
   response: { message: '', error: false },
   btnDisabled: false
}

type RequestReducerActionsType = ReturnType<typeof changeSuccessAC> | ReturnType<typeof setResponseAC>
export const requestReducer = (state: InitStateType = initState, action: RequestReducerActionsType): InitStateType => {
   switch (action.type) {
      case 'CHANGE_SUCCESS':
         return { ...state, successResponse: !state.successResponse }
      case 'SET_RESPONSE':
         return { ...state, response: { ...action.response } }
      default:
         return state
   }
}

export const changeSuccessAC = () => {
   return {
      type: 'CHANGE_SUCCESS'
   } as const
}
export const setResponseAC = (response: { message: string, error: boolean }) => {
   return {
      type: 'SET_RESPONSE',
      response: response
   } as const
}

export const requestToServerTC = (successResponse: boolean) => (dispatch: Dispatch<RequestReducerActionsType>) => {
   requestsAPI.postRequest({ success: successResponse })
      .then(data => {
         dispatch(setResponseAC({ message: data.errorText, error: false }))
      })
      .catch(error => {
         let errorText = error.response ? error.response.data.errorText : error.message
         dispatch(setResponseAC({ message: errorText, error: true }))
      })
}
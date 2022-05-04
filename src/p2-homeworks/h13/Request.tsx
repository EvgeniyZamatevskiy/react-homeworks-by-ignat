import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppStoreType } from '../h10/bll/store'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import SuperCheckbox from '../h4/common/c3-SuperCheckbox/SuperCheckbox'
import { changeSuccessAC, requestToServerTC } from './requestReducer'

export const Request = () => {

   const successResponse = useSelector<AppStoreType, boolean>(state => state.requestData.successResponse)
   const isError = useSelector<AppStoreType, boolean>(state => state.requestData.response.error)
   const responseMessage = useSelector<AppStoreType, string>(state => state.requestData.response.message)
   const dispatch = useDispatch()

   const onChange = () => {
      dispatch(changeSuccessAC())
   }

   const onRequest = () => {
      //@ts-ignore
      dispatch(requestToServerTC(successResponse))
   }

   return (
      <div style={{ marginTop: '10px' }}>
         <SuperButton onClick={onRequest}>
            Request
         </SuperButton>
         <br />
         <SuperCheckbox checked={successResponse} onChangeChecked={onChange}>
            success
         </SuperCheckbox>
         <div style={{ marginTop: '10px' }}>
            Response:
            <span style={{ color: isError ? 'red' : 'green' }}>
               {responseMessage}
            </span>
         </div>
      </div>
   )
}
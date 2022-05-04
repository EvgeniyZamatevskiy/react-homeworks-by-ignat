import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { themeReducer } from '../../h12/bll/themeReducer'
import { requestReducer } from '../../h13/requestReducer'
import { loadingReducer } from './loadingReducer'

const reducers = combineReducers({
   loading: loadingReducer,
   themeData: themeReducer,
   requestData: requestReducer,
})

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)))

export default store

export type AppStoreType = ReturnType<typeof reducers>
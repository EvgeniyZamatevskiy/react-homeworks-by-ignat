import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { themeReducer } from '../../h12/bll/themeReducer'
import { loadingReducer } from './loadingReducer'

const reducers = combineReducers({
   loading: loadingReducer,
   themeData: themeReducer,
})

const store = createStore(reducers, composeWithDevTools())

export default store

export type AppStoreType = ReturnType<typeof reducers>
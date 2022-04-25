import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { loadingReducer } from './loadingReducer'

const reducers = combineReducers({
   loading: loadingReducer,
})

const store = createStore(reducers, composeWithDevTools())

export default store

export type AppStoreType = ReturnType<typeof reducers>
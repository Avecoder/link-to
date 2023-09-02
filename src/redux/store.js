import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './slices/user'
import {itemReducer} from './slices/item'



const store = configureStore({
  reducer: {
    user: userReducer,
    items: itemReducer
  }
})


export default store
import { configureStore } from '@reduxjs/toolkit'
import LiveStatusReducer from './liveStatus/LiveStatusSlice'

export const store = configureStore({
  reducer: {
    StatusThreeView: LiveStatusReducer
  }
})

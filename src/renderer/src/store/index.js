import { configureStore } from '@reduxjs/toolkit'
import LiveStatusReducer from './liveStatus/LiveStatusSlice'
import { createLogger } from 'redux-logger'

const middlewares = []

if (import.meta.env.DEV) {
  const logger = createLogger({ collapsed: (getState, action, logEntry) => !logEntry.error })

  middlewares.push(logger)
}

export const store = configureStore({
  reducer: {
    StatusThreeView: LiveStatusReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false
    }).concat(middlewares)
})

import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import App from './App'
import { store } from './store'
import { Provider } from 'react-redux'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <ChakraProvider>
          {/* <BrowserRouter> */}
          <App />
          {/* </BrowserRouter> */}
        </ChakraProvider>
      </HashRouter>
    </Provider>
  </React.StrictMode>
)

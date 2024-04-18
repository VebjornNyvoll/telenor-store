import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { PrimeReactProvider } from 'primereact/api';
import { Provider, ReactReduxContext } from 'react-redux'
import {store} from './services/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <Provider store={store}>
    <App />
      </Provider>
    </PrimeReactProvider>
      
  </React.StrictMode>,
)

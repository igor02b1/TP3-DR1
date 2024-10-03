import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App nome="Igor" idade="21" />
  </React.StrictMode>,
)

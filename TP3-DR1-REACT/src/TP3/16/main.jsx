import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import ListaProdutos from './ListaProdutos'; 
import './CartaoProduto.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="App">
      <ListaProdutos />
    </div>
  </React.StrictMode>,
)

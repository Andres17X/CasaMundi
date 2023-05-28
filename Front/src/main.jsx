import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Menu from './components/Menu.jsx'
import Buscador from './components/buscador.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Menu />
    <Buscador />
  </React.StrictMode>,
)

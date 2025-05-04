import { Routes, Route } from 'react-router-dom'
import { Inicial } from './componentes/Inicial'
import Produtos from './pages/Produtos'
import Produto from './pages/Produto' 
import { Sobre } from './pages/Sobre'

import './App.css'

const App = () => {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Routes>
        <Route path="/" element={<Inicial />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/produto/:id" element={<Produto />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </div>
  )
}

export { App }

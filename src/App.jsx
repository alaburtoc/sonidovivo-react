import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { listaProductosInicial } from './data/productos'
import Navbar from './components/Navbar'
import Inicio from './components/Inicio'
import Productos from './components/Productos'
import Nosotros from './components/Nosotros'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  const [productos] = useState(listaProductosInicial)
  const [carrito, setCarrito] = useState([])
  const [usuario] = useState(null)

  const agregarAlCarrito = (prod) => {
    setCarrito([...carrito, prod])
  }

  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <Navbar cantidadCarrito={carrito.length} usuario={usuario} />
        
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/productos" element={<Productos productos={productos} agregarAlCarrito={agregarAlCarrito} />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}
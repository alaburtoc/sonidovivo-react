import { useState } from 'react'

export default function Productos({ productos, agregarAlCarrito }) {
  const [categoriaSel, setCategoriaSel] = useState('Todas')
  const [busqueda, setBusqueda] = useState('')

  const categorias = ['Todas', 'Guitarras Acústicas', 'Guitarras Eléctricas', 'Audio Profesional', 'Percusión']

  const productosFiltrados = productos.filter(p => {
    const coincideCat = categoriaSel === 'Todas' || p.categoria === categoriaSel
    const coincideNom = p.nombre.toLowerCase().includes(busqueda.toLowerCase())
    return coincideCat && coincideNom
  })

  return (
    <div className="container my-5">
      <h2 className="fw-bold mb-4">Catálogo de Equipos</h2>

      {/* Filtros */}
      <div className="row g-3 mb-4">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar por nombre..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <select 
            className="form-select"
            value={categoriaSel}
            onChange={(e) => setCategoriaSel(e.target.value)}
          >
            {categorias.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Grid de Productos */}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {productosFiltrados.map(prod => (
          <div className="col" key={prod.id}>
            <div className="card h-100 border-0 shadow-sm">
              <img src={prod.imagen} className="card-img-top" alt={prod.nombre} style={{ height: '220px', objectFit: 'cover' }} />
              <div className="card-body d-flex flex-column p-3">
                <span className="badge bg-dark text-white align-self-start mb-2">{prod.categoria}</span>
                <h5 className="card-title fw-bold fs-6">{prod.nombre}</h5>
                <p className="card-text text-secondary small flex-grow-1">{prod.descripcion}</p>
                <div className="d-flex align-items-center justify-content-between mt-3">
                  <span className="fw-bold text-dark fs-5">${prod.precio.toLocaleString('es-CL')}</span>
                  {prod.stock ? (
                    <button 
                      className="btn btn-warning btn-sm fw-bold px-3"
                      onClick={() => agregarAlCarrito(prod)}
                    >
                      Añadir 🛒
                    </button>
                  ) : (
                    <span className="badge bg-danger">Sin Stock</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
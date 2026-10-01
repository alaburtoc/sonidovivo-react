import { useState } from 'react'

export default function Admin({ productos, setProductos }) {
  const [nuevo, setNuevo] = useState({ nombre: '', categoria: 'Micrófonos', precio: '', imagen: '', descripcion: '' })

  const agregarProducto = (e) => {
    e.preventDefault()
    const prodObj = {
      id: Date.now(),
      nombre: nuevo.nombre,
      categoria: nuevo.categoria,
      precio: parseInt(nuevo.precio),
      imagen: nuevo.imagen || 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=500&q=80',
      descripcion: nuevo.descripcion || 'Producto profesional de audio.'
    }
    setProductos([...productos, prodObj])
    setNuevo({ nombre: '', categoria: 'Micrófonos', precio: '', imagen: '', descripcion: '' })
  }

  const eliminarProducto = (id) => {
    if (confirm('¿Eliminar producto?')) {
      setProductos(productos.filter(p => p.id !== id))
    }
  }

  return (
    <div>
      <h2 className="fw-bold mb-4">Panel Admin</h2>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <h5 className="fw-bold mb-3">Nuevo Producto</h5>
            <form onSubmit={agregarProducto}>
              <input type="text" placeholder="Nombre" className="form-control mb-2" required value={nuevo.nombre} onChange={(e) => setNuevo({...nuevo, nombre: e.target.value})} />
              <select className="form-select mb-2" value={nuevo.categoria} onChange={(e) => setNuevo({...nuevo, categoria: e.target.value})}>
                <option value="Micrófonos">Micrófonos</option>
                <option value="Audífonos">Audífonos</option>
                <option value="Interfaces">Interfaces</option>
                <option value="Parlantes">Parlantes</option>
              </select>
              <input type="number" placeholder="Precio ($)" className="form-control mb-2" required value={nuevo.precio} onChange={(e) => setNuevo({...nuevo, precio: e.target.value})} />
              <input type="url" placeholder="URL Imagen" className="form-control mb-2" value={nuevo.imagen} onChange={(e) => setNuevo({...nuevo, imagen: e.target.value})} />
              <button type="submit" className="btn btn-warning w-100 fw-bold">Guardar</button>
            </form>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card p-3 shadow-sm">
            <h5 className="fw-bold mb-3">Inventario ({productos.length})</h5>
            <table className="table table-hover align-middle">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody>
                {productos.map(p => (
                  <tr key={p.id}>
                    <td>{p.nombre}</td>
                    <td>${p.precio.toLocaleString('es-CL')}</td>
                    <td>
                      <button className="btn btn-danger btn-sm" onClick={() => eliminarProducto(p.id)}>Eliminar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
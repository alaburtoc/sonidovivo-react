import { useParams, useNavigate } from 'react-router-dom'

export default function DetalleProducto({ productos, agregarAlCarrito }) {
  const { id } = useParams()
  const navigate = useNavigate()

  const producto = productos.find(p => p.id === parseInt(id))

  if (!producto) {
    return (
      <div className="alert alert-danger text-center my-5 p-5">
        <h3>Producto no encontrado</h3>
        <button className="btn btn-primary mt-3" onClick={() => navigate('/productos')}>Volver al Catálogo</button>
      </div>
    )
  }

  return (
    <div className="card p-4 shadow-sm my-4">
      <div className="row g-4 align-items-center">
        <div className="col-md-6">
          <img src={producto.imagen} alt={producto.nombre} className="img-fluid rounded" style={{ maxHeight: '400px', width: '100%', objectFit: 'cover' }} />
        </div>
        <div className="col-md-6">
          <span className="badge bg-secondary mb-2">{producto.categoria}</span>
          <h2 className="fw-bold mb-3">{producto.nombre}</h2>
          <h3 className="text-primary fw-bold mb-3">${producto.precio.toLocaleString('es-CL')}</h3>
          <p className="text-secondary mb-4">{producto.descripcion}</p>
          <div className="d-flex gap-3">
            <button className="btn btn-primary btn-lg fw-bold" onClick={() => agregarAlCarrito(producto)}>🛒 Agregar al Carrito</button>
            <button className="btn btn-outline-secondary btn-lg" onClick={() => navigate('/productos')}>Volver</button>
          </div>
        </div>
      </div>
    </div>
  )
}
import { Link, useNavigate } from 'react-router-dom'

export default function Carrito({ carrito, agregarAlCarrito, restarCantidad, eliminarDelCarrito, vaciarCarrito }) {
  const navigate = useNavigate()
  const total = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0)

  if (carrito.length === 0) {
    return (
      <div className="text-center my-5 py-5">
        <h2>Tu carrito está vacío 🛒</h2>
        <p className="text-secondary">Explora nuestros productos y agrega tus equipos favoritos.</p>
        <Link to="/productos" className="btn btn-primary mt-3">Ir al Catálogo</Link>
      </div>
    )
  }

  return (
    <div className="my-4">
      <h2 className="fw-bold mb-4">Tu Carrito de Compras</h2>
      <div className="row g-4">
        <div className="col-md-8">
          <div className="card shadow-sm p-3">
            {carrito.map((item) => (
              <div key={item.id} className="d-flex align-items-center justify-content-between border-bottom py-3">
                <img src={item.imagen} alt={item.nombre} style={{ width: '70px', height: '70px', objectFit: 'cover' }} className="rounded" />
                <div className="flex-grow-1 ms-3">
                  <h6 className="fw-bold mb-0">{item.nombre}</h6>
                  <small className="text-muted">${item.precio.toLocaleString('es-CL')}</small>
                </div>
                <div className="d-flex align-items-center gap-2 me-3">
                  <button className="btn btn-outline-secondary btn-sm" onClick={() => restarCantidad(item.id)}>-</button>
                  <span className="fw-bold px-2">{item.cantidad}</span>
                  <button className="btn btn-outline-secondary btn-sm" onClick={() => agregarAlCarrito(item)}>+</button>
                </div>
                <button className="btn btn-outline-danger btn-sm" onClick={() => eliminarDelCarrito(item.id)}>🗑️</button>
              </div>
            ))}
            <div className="mt-3 text-end">
              <button className="btn btn-outline-danger btn-sm" onClick={vaciarCarrito}>Vaciar Carrito</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-4 shadow-sm bg-light">
            <h4 className="fw-bold mb-3">Resumen</h4>
            <div className="d-flex justify-content-between mb-3 fs-5 fw-bold">
              <span>Total:</span>
              <span className="text-primary">${total.toLocaleString('es-CL')}</span>
            </div>
            <button className="btn btn-success w-100 fw-bold py-2" onClick={() => navigate('/pago')}>Procesar Pago</button>
          </div>
        </div>
      </div>
    </div>
  )
}
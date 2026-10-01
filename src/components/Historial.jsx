import { Link } from 'react-router-dom'

export default function Historial({ pedidos, usuario }) {
  if (!usuario) {
    return (
      <div className="alert alert-warning text-center my-5 p-4">
        <h4>Inicia sesión para ver tu historial</h4>
        <Link to="/login" className="btn btn-primary mt-2">Iniciar Sesión</Link>
      </div>
    )
  }

  const pedidosUsuario = usuario.rol === 'admin' 
    ? pedidos 
    : pedidos.filter(p => p.clienteEmail === usuario.email)

  return (
    <div className="my-4">
      <h2 className="fw-bold mb-4">📜 Historial de Compras</h2>
      {pedidosUsuario.length === 0 ? (
        <div className="alert alert-info text-center py-4">No tienes pedidos registrados.</div>
      ) : (
        <div className="row g-4">
          {pedidosUsuario.map((pedido) => (
            <div className="col-12" key={pedido.id}>
              <div className="card shadow-sm border-0">
                <div className="card-header bg-dark text-white d-flex justify-content-between">
                  <span>Orden #{pedido.id} — {pedido.fecha}</span>
                  <span className="badge bg-success">${pedido.total.toLocaleString('es-CL')}</span>
                </div>
                <div className="card-body">
                  <p className="mb-2 text-muted"><strong>Cliente:</strong> {pedido.clienteNombre} ({pedido.clienteEmail})</p>
                  <div className="row row-cols-1 row-cols-md-2 g-2">
                    {pedido.items.map((item) => (
                      <div key={item.id} className="d-flex align-items-center gap-2 p-2 border rounded">
                        <img src={item.imagen} alt={item.nombre} style={{ width: '40px', height: '40px', objectFit: 'cover' }} className="rounded" />
                        <div>
                          <p className="mb-0 fw-bold small">{item.nombre}</p>
                          <small className="text-secondary">{item.cantidad} x ${item.precio.toLocaleString('es-CL')}</small>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
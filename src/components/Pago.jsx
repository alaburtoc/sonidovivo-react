import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

// En lugar de alert('¡Pago procesado con éxito!'):
Swal.fire({
  title: '¡Compra Exitosa!',
  text: 'Tu orden ha sido registrada correctamente.',
  icon: 'success',
  confirmButtonColor: '#0d6efd',
  confirmButtonText: 'Ver Historial'
}).then(() => {
  navigate('/historial')
})

export default function Pago({ carrito, vaciarCarrito, agregarPedido, usuario }) {
  const navigate = useNavigate()
  const total = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0)

  const [form, setForm] = useState({
    nombre: usuario?.nombre || '',
    email: usuario?.email || '',
    direccion: '',
    tarjeta: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (carrito.length === 0) return

    const nuevoPedido = {
      id: Math.floor(100000 + Math.random() * 900000),
      fecha: new Date().toLocaleDateString('es-CL'),
      clienteNombre: form.nombre,
      clienteEmail: form.email,
      direccion: form.direccion,
      total,
      items: [...carrito]
    }

    agregarPedido(nuevoPedido)
    vaciarCarrito()
    alert('¡Pago procesado con éxito!')
    navigate('/historial')
  }

  return (
    <div className="row justify-content-center my-4">
      <div className="col-md-7">
        <div className="card p-4 shadow-sm">
          <h3 className="fw-bold mb-3">💳 Finalizar Compra</h3>
          <p className="text-muted fs-5">Monto Total: <strong className="text-success">${total.toLocaleString('es-CL')}</strong></p>
          <hr />
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Nombre Completo</label>
              <input type="text" className="form-control" required value={form.nombre} onChange={(e) => setForm({...form, nombre: e.target.value})} />
            </div>
            <div className="mb-3">
              <label className="form-label">Correo Electrónico</label>
              <input type="email" className="form-control" required value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} />
            </div>
            <div className="mb-3">
              <label className="form-label">Dirección de Envío</label>
              <input type="text" className="form-control" required value={form.direccion} onChange={(e) => setForm({...form, direccion: e.target.value})} />
            </div>
            <div className="mb-3">
              <label className="form-label">Tarjeta (16 dígitos)</label>
              <input type="text" className="form-control" placeholder="XXXX-XXXX-XXXX-XXXX" required maxLength="16" value={form.tarjeta} onChange={(e) => setForm({...form, tarjeta: e.target.value})} />
            </div>
            <button type="submit" className="btn btn-success w-100 fw-bold py-2">Confirmar Pago</button>
          </form>
        </div>
      </div>
    </div>
  )
}
import { useState } from 'react'

export default function Contacto() {
  const [enviado, setEnviado] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setEnviado(true)
  }

  return (
    <div className="container my-5 max-w-700">
      <h2 className="fw-bold mb-4 text-center">Contáctanos</h2>

      {enviado ? (
        <div className="alert alert-success text-center">
          ¡Gracias por comunicarte con nosotros! Te responderemos a la brevedad.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="card p-4 border-0 shadow-sm">
          <div className="mb-3">
            <label className="form-label fw-semibold">Nombre Completo</label>
            <input type="text" className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Correo Electrónico</label>
            <input type="email" className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Mensaje</label>
            <textarea className="form-control" rows="4" required></textarea>
          </div>
          <button type="submit" className="btn btn-warning fw-bold w-100">Enviar Mensaje</button>
        </form>
      )}
    </div>
  )
}
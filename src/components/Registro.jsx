import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Registro({ setUsuario }) {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const nuevoUsuario = { nombre, email, rol: 'cliente' }
    setUsuario(nuevoUsuario)
    localStorage.setItem('usuario_sonido_vivo', JSON.stringify(nuevoUsuario))
    navigate('/productos')
  }

  return (
    <div className="row justify-content-center my-5">
      <div className="col-md-5">
        <div className="card p-4 shadow-sm">
          <h3 className="text-center fw-bold mb-4">Registro</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Nombre Completo</label>
              <input type="text" className="form-control" required value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </div>
            <div className="mb-3">
              <label className="form-label">Correo Electrónico</label>
              <input type="email" className="form-control" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-3">
              <label className="form-label">Contraseña</label>
              <input type="password" className="form-control" required value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-warning w-100 fw-bold">Registrarse</button>
          </form>
        </div>
      </div>
    </div>
  )
}
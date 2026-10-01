import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login({ setUsuario }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const esAdmin = email === 'admin@sonidovivo.cl' && password === 'admin123'
    const usuarioObj = {
      nombre: esAdmin ? 'Administrador' : 'Cliente Prueba',
      email,
      rol: esAdmin ? 'admin' : 'cliente'
    }

    setUsuario(usuarioObj)
    localStorage.setItem('usuario_sonido_vivo', JSON.stringify(usuarioObj))
    navigate(esAdmin ? '/admin' : '/productos')
  }

  return (
    <div className="row justify-content-center my-5">
      <div className="col-md-5">
        <div className="card p-4 shadow-sm">
          <h3 className="text-center fw-bold mb-4">Iniciar Sesión</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Correo Electrónico</label>
              <input type="email" className="form-control" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-3">
              <label className="form-label">Contraseña</label>
              <input type="password" className="form-control" required value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary w-100 fw-bold">Ingresar</button>
          </form>
          <div className="alert alert-info mt-3 mb-0 small">
            <strong>Credenciales Admin:</strong><br />
            <code>admin@sonidovivo.cl</code> / <code>admin123</code>
          </div>
        </div>
      </div>
    </div>
  )
}
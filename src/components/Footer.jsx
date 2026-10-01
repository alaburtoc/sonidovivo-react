import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-5 border-top border-secondary">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <h5 className="fw-bold text-warning mb-3">Sonido Vivo</h5>
            <p className="text-secondary small">
              Especialistas en equipamiento de audio profesional, instrumentos musicales y sonido en vivo para Viña del Mar y todo Chile.
            </p>
          </div>

          <div className="col-md-2 offset-md-1">
            <h6 className="fw-bold text-light mb-3">Navegación</h6>
            <ul className="list-unstyled small mb-0">
              <li className="mb-2"><Link to="/" className="text-secondary text-decoration-none">Inicio</Link></li>
              <li className="mb-2"><Link to="/productos" className="text-secondary text-decoration-none">Catálogo</Link></li>
              <li className="mb-2"><Link to="/nosotros" className="text-secondary text-decoration-none">Nosotros</Link></li>
              <li className="mb-2"><Link to="/contacto" className="text-secondary text-decoration-none">Contacto</Link></li>
            </ul>
          </div>

          <div className="col-md-2">
            <h6 className="fw-bold text-light mb-3">Portales</h6>
            <ul className="list-unstyled small mb-0">
              <li className="mb-2"><Link to="/login" className="text-secondary text-decoration-none">Portal Clientes</Link></li>
              <li className="mb-2"><Link to="/login" className="text-secondary text-decoration-none">Portal Admin</Link></li>
            </ul>
          </div>

          <div className="col-md-3">
            <h6 className="fw-bold text-light mb-3">Contacto</h6>
            <p className="text-secondary small mb-1">📍 Viña del Mar, Región de Valparaíso</p>
            <p className="text-secondary small mb-1">📧 contacto@sonidovivo.cl</p>
            <p className="text-secondary small mb-0">📞 +56 9 1234 5678</p>
          </div>
        </div>

        <hr className="my-4 border-secondary opacity-25" />

        <div className="text-center text-secondary small">
          © {new Date().getFullYear()} Sonido Vivo Chile - Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
import { Link } from 'react-router-dom'

export default function Navbar({ cantidadCarrito = 0, usuario, cerrarSesion }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2 sticky-top shadow-sm border-bottom border-secondary border-opacity-25">
      <div className="container-fluid px-4">
        {/* Logo Sonido Vivo */}
        <Link className="navbar-brand fw-bold text-warning me-4 fs-4" to="/">
          Sonido Vivo
        </Link>

        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          {/* Enlaces de navegación principales */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
            <li className="nav-item">
              <Link className="nav-link text-white active fw-semibold" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white-50" to="/productos">Catálogo</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white-50" to="/nosotros">Nosotros</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white-50" to="/contacto">Contacto</Link>
            </li>
          </ul>

          {/* Campo de búsqueda central */}
          <form className="d-flex me-lg-3 my-2 my-lg-0" onSubmit={(e) => e.preventDefault()}>
            <input 
              className="form-control form-control-sm bg-white text-dark rounded-start border-0 px-3" 
              type="search" 
              placeholder="Buscar equipos..." 
              style={{ width: '200px' }}
            />
            <button 
              className="btn btn-sm btn-outline-warning text-warning border-warning rounded-end px-3 fw-semibold" 
              type="submit"
            >
              Buscar
            </button>
          </form>

          {/* Acciones de la derecha: Portales, Ingresar y Carrito */}
          <div className="d-flex align-items-center gap-2">
            <div className="dropdown">
              <button 
                className="btn btn-sm btn-dark text-white-50 dropdown-toggle border-0" 
                type="button" 
                data-bs-toggle="dropdown"
              >
                Portales
              </button>
              <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end">
                <li><Link className="dropdown-item" to="/login">Portal Clientes</Link></li>
                <li><Link className="dropdown-item" to="/login">Portal Administración</Link></li>
              </ul>
            </div>

            {usuario ? (
              <div className="d-flex align-items-center gap-2">
                <span className="text-white small">Hola, <strong>{usuario.nombre}</strong></span>
                <button onClick={cerrarSesion} className="btn btn-outline-danger btn-sm">Salir</button>
              </div>
            ) : (
              <Link className="btn btn-sm btn-outline-light px-3" to="/login">
                Ingresar
              </Link>
            )}

            <Link to="/carrito" className="btn btn-sm btn-warning fw-bold d-flex align-items-center gap-1 ms-1 px-3">
              🛒 Carrito <span className="badge bg-dark text-warning rounded-pill ms-1">{cantidadCarrito}</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
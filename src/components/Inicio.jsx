import { Link } from 'react-router-dom'

export default function Inicio() {
  return (
    <div className="inicio-container">
      {/* HERO BANNER PRINCIPAL */}
      <section className="hero-banner text-center text-white d-flex align-items-center justify-content-center position-relative">
        <div className="hero-overlay"></div>
        
        <div className="container position-relative z-1 py-5 my-5">
          {/* Título principal de dos líneas */}
          <h1 className="display-3 fw-bold mb-3 hero-title">
            El sonido que buscas,<br />está aquí.
          </h1>

          {/* Descripción */}
          <p className="lead fs-5 text-light opacity-90 mx-auto max-w-700 mb-4 fw-normal">
            Equipos de nivel profesional para músicos de Viña del Mar y todo Chile. Descubre nuestro catálogo actualizado.
          </p>

          {/* Botones de acción */}
          <div className="d-flex justify-content-center gap-3">
            <Link to="/productos" className="btn btn-warning btn-lg fw-bold px-4 py-2 fs-6">
              Ver Catálogo
            </Link>
            <Link to="/nosotros" className="btn btn-outline-light btn-lg px-4 py-2 fs-6">
              Visitar Tienda
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
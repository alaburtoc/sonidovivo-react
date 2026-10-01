export default function Nosotros() {
  return (
    <div className="container my-5">
      <div className="row align-items-center g-5">
        <div className="col-md-6">
          <h2 className="display-6 fw-bold mb-3">Sobre Sonido Vivo</h2>
          <p className="lead text-secondary">
            Nacimos en Viña del Mar con el objetivo de proveer instrumental y equipamiento de sonido de máxima calidad para músicos, estudios y bandas de todo Chile.
          </p>
          <p className="text-secondary">
            Contamos con asesoría personalizada, servicio técnico especializado y un catálogo curado por profesionales de la industria musical.
          </p>
        </div>
        <div className="col-md-6">
          <img 
            src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80" 
            alt="Estudio de Sonido Vivo" 
            className="img-fluid rounded-4 shadow"
          />
        </div>
      </div>
    </div>
  )
}
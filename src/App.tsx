import './App.css'

const cards = [
  {
    title: 'El riesgo de la incertidumbre',
    text: 'Cuando la consulta es manual o dispersa, el proceso se vuelve lento y deja espacio para errores.',
  },
  {
    title: 'La certeza de la tecnología',
    text: 'Un sistema propio para consultar, contrastar y decidir con claridad en un solo flujo.',
  },
  {
    title: 'Capacidades del sistema',
    text: 'Búsqueda por nombre o identificación, cruce con listas personalizadas, alertas y hallazgos.',
  },
]

const details = [
  'Consulta de listas restrictivas y fuentes de cumplimiento',
  'Búsqueda por nombre, identificación y criterios clave',
  'Cruce contra listas internas o personalizadas',
  'Visualización clara de coincidencias y alertas',
]

const steps = [
  'Primera versión enfocada en velocidad y claridad',
  'Base lista para crecer con nuevas fuentes y reglas',
  'Gestión mensual para soporte, mantenimiento y evolución',
  'Aplicación web propia para operación directa',
]

function HeroGraphic() {
  return (
    <svg viewBox="0 0 520 520" className="hero-graphic" aria-hidden="true">
      <circle cx="260" cy="260" r="156" className="ring ring-1" />
      <circle cx="260" cy="260" r="108" className="ring ring-2" />
      <circle cx="260" cy="260" r="62" className="core" />
      <path d="M260 172v54h54" className="check" />
      <circle cx="260" cy="108" r="9" className="dot dot-1" />
      <circle cx="406" cy="262" r="10" className="dot dot-2" />
      <circle cx="148" cy="370" r="8" className="dot dot-3" />
    </svg>
  )
}

function CTA() {
  return (
    <div className="cta-row">
      <a className="btn primary" href="https://wa.me/573216424600?text=Hola%20Solvers%2C%20quiero%20avanzar%20con%20la%20propuesta%20de%20Valeria%20Florez">
        WhatsApp Valentin
      </a>
      <a className="btn secondary" href="tel:+573216424600">Llamar Valentin</a>
      <a className="btn tertiary" href="https://wa.me/573119999999?text=Hola%20Tina%2C%20quiero%20revisar%20la%20propuesta%20de%20Valeria%20Florez">
        WhatsApp Valentina
      </a>
    </div>
  )
}

export default function App() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow">SOLVERS · PROPUESTA EMPRESARIAL</div>
          <h1>Sistema de compliance para Valeria Florez</h1>
          <p>
            Plataforma web para centralizar consultas, detectar alertas relevantes y
            facilitar decisiones con más seguridad.
          </p>
          <CTA />
        </div>
        <div className="hero-art">
          <HeroGraphic />
          <div className="side-note">
            Propuesta Solvers, menos fricción operativa y más control para revisar
            riesgo con criterio.
          </div>
        </div>
      </section>

      <section className="summary">
        <div className="price-card highlight">
          <span>Inversión de desarrollo</span>
          <strong>$5.000.000 COP</strong>
          <small>Precio especial sobre valor base de $8.000.000 COP</small>
        </div>
        <div className="price-card">
          <span>Gestión mensual</span>
          <strong>$1.500.000 COP</strong>
          <small>Soporte, mantenimiento y evolución continua</small>
        </div>
      </section>

      <section className="grid">
        {cards.map((card) => (
          <article key={card.title} className="panel">
            <p className="label">{card.title}</p>
            <p>{card.text}</p>
          </article>
        ))}
      </section>

      <section className="panel large">
        <p className="label">Capacidades del sistema</p>
        <div className="list-grid">
          {details.map((item) => (
            <div key={item} className="list-item">
              <span />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="panel large">
        <p className="label">Condiciones</p>
        <div className="list-grid">
          {steps.map((item) => (
            <div key={item} className="list-item">
              <span />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="closing panel large">
        <div>
          <p className="label">Cierre</p>
          <h2>Una propuesta pensada para decidir con rapidez y ejecutar con orden.</h2>
        </div>
        <div>
          <p>
            Si el objetivo es construir una base sólida para compliance y debida
            diligencia, esta propuesta define un punto de partida claro.
          </p>
          <CTA />
        </div>
      </section>

      <footer className="footer">
        <div>S O L V E R S</div>
        <p>Valentin Florez Maya · solvers.solvers@gmail.com · +57 321 642-4600 · Valentina Valdés</p>
      </footer>
    </main>
  )
}

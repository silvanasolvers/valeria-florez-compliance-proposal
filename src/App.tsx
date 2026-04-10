import './App.css'

const problemPoints = [
  'Consultas manuales que consumen tiempo operativo',
  'Fuentes dispersas que reducen claridad al decidir',
  'Riesgo de omitir alertas o hallazgos relevantes',
]

const scopePoints = [
  'Consulta de listas restrictivas y fuentes de cumplimiento',
  'Búsqueda por nombre, identificación y criterios clave',
  'Cruce contra listas personalizadas o internas',
  'Visualización clara de alertas, coincidencias y hallazgos',
]

const conditionPoints = [
  'Primera versión enfocada en velocidad, claridad y facilidad de uso',
  'Base preparada para crecer con nuevas fuentes y reglas de negocio',
  'Gestión mensual orientada a soporte, mantenimiento y evolución',
  'Aplicación web propia para operación directa del proceso',
]

function HeroMark() {
  return (
    <svg viewBox="0 0 560 560" className="hero-graphic" aria-hidden="true">
      <defs>
        <linearGradient id="ring" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="100%" stopColor="#bdbdbd" stopOpacity="0.35" />
        </linearGradient>
      </defs>
      <circle cx="280" cy="280" r="172" className="orbit orbit-1" />
      <circle cx="280" cy="280" r="122" className="orbit orbit-2" />
      <circle cx="280" cy="280" r="70" className="core" />
      <path d="M280 176v56h56" className="check-line" />
      <circle cx="280" cy="118" r="10" className="node node-1" />
      <circle cx="438" cy="280" r="11" className="node node-2" />
      <circle cx="162" cy="388" r="8" className="node node-3" />
      <circle cx="280" cy="280" r="22" fill="none" stroke="url(#ring)" strokeWidth="3" />
    </svg>
  )
}

function App() {
  return (
    <main className="page">
      <section className="hero enterprise mono">
        <div className="hero-main">
          <div className="eyebrow">SOLVERS · PROPUESTA EMPRESARIAL</div>
          <h1>
            Sistema de compliance para <span>Valeria Florez</span>
          </h1>
          <p className="hero-copy">
            Una plataforma web diseñada para centralizar consultas, detectar
            alertas relevantes y facilitar decisiones con más seguridad.
          </p>

          <div className="hero-actions">
            <a className="cta primary" href="https://wa.me/573216424600?text=Hola%20Solvers%2C%20quiero%20avanzar%20con%20la%20propuesta%20de%20Valeria%20Florez">
              WhatsApp
            </a>
            <a className="cta secondary" href="tel:+573216424600">
              Llamar
            </a>
          </div>
        </div>

        <div className="hero-side">
          <HeroMark />
          <div className="hero-side-card">
            <strong>Propuesta Solvers</strong>
            <p>
              Menos fricción operativa, más control y una experiencia clara para
              revisar riesgo con criterio.
            </p>
          </div>
        </div>
      </section>

      <section className="summary-strip compact">
        <div className="summary-card featured">
          <span className="summary-label">Inversión de desarrollo</span>
          <strong>$5.000.000 COP</strong>
          <p>Precio especial sobre valor base de $8.000.000 COP</p>
        </div>
        <div className="summary-card">
          <span className="summary-label">Gestión mensual</span>
          <strong>$1.500.000 COP</strong>
          <p>Soporte, mantenimiento y evolución continua</p>
        </div>
      </section>

      <section className="content-grid first-grid">
        <article className="section-card problem-card mono-card">
          <p className="section-kicker">Problema</p>
          <h2>Cuando la consulta es lenta, el riesgo crece.</h2>
          <ul>
            {problemPoints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="section-card agitation-card mono-card">
          <p className="section-kicker">Impacto</p>
          <h2>La fricción también afecta la decisión.</h2>
          <p>
            Validar tarde o validar mal impacta la velocidad comercial, la
            confianza del proceso y la capacidad de actuar con claridad.
          </p>
        </article>
      </section>

      <section className="section-card solution-block mono-card">
        <p className="section-kicker">Solución</p>
        <h2>Una herramienta propia para consultar, contrastar y decidir.</h2>
        <p className="section-intro">
          La propuesta concentra lo esencial en una experiencia limpia, rápida y
          preparada para crecer.
        </p>
        <div className="scope-grid mono-scope">
          {scopePoints.map((item) => (
            <div key={item} className="scope-item">
              <span className="scope-dot" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="content-grid second-grid">
        <article className="section-card investment-block mono-card">
          <p className="section-kicker">Inversión</p>
          <h2>Estructura clara para avanzar.</h2>

          <div className="price-panel large mono-panel">
            <span className="price-label">Desarrollo</span>
            <div className="price-stack">
              <span className="price-current">$5.000.000 COP</span>
            </div>
            <p>Valor especial definido para Valeria Florez.</p>
          </div>

          <div className="price-panel small mono-panel subtle">
            <span className="price-label">Gestión mensual</span>
            <div className="price-current compact">$1.500.000 COP</div>
            <p>Soporte, mantenimiento y mejora continua.</p>
          </div>
        </article>

        <article className="section-card conditions-block mono-card">
          <p className="section-kicker">Condiciones</p>
          <h2>Base seria, lista para operación real.</h2>
          <ul>
            {conditionPoints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="section-card closing-block mono-card">
        <div>
          <p className="section-kicker">Cierre</p>
          <h2>Una propuesta pensada para decidir con rapidez y ejecutar con orden.</h2>
        </div>
        <div className="closing-aside mono-aside">
          <div className="closing-line" />
          <p>
            Si el objetivo es construir una base sólida para compliance y debida
            diligencia, esta propuesta define un punto de partida claro.
          </p>
        </div>
      </section>

      <footer className="footer-block">
        <div className="footer-brand">S O L V E R S</div>
        <div className="footer-contact">
          <span>Valentin Florez Maya</span>
          <span>solvers.solvers@gmail.com</span>
          <span>+57 321 642-4600</span>
        </div>
      </footer>
    </main>
  )
}

export default App

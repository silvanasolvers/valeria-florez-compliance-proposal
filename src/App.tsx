import './App.css'

const problemPoints = [
  'Consultas manuales que consumen tiempo operativo',
  'Fuentes dispersas que reducen claridad al decidir',
  'Mayor riesgo de omitir alertas o hallazgos relevantes',
]

const scopePoints = [
  'Consulta de listas restrictivas y fuentes de cumplimiento',
  'Búsqueda por nombre, identificación y criterios clave',
  'Cruce contra listas personalizadas o internas',
  'Visualización clara de alertas, hallazgos y coincidencias',
]

const conditionPoints = [
  'Primera versión enfocada en velocidad, claridad y facilidad de uso',
  'Base preparada para crecer con nuevas fuentes y reglas de negocio',
  'Gestión mensual orientada a soporte, mantenimiento y evolución',
  'Implementación sobre una aplicación web propia para operación directa',
]

function OrbitGraphic() {
  return (
    <svg viewBox="0 0 420 420" className="hero-graphic" aria-hidden="true">
      <defs>
        <linearGradient id="goldPurple" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f6d38b" />
          <stop offset="100%" stopColor="#7c5cff" />
        </linearGradient>
      </defs>
      <circle cx="210" cy="210" r="148" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      <circle cx="210" cy="210" r="104" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      <circle cx="210" cy="210" r="58" fill="url(#goldPurple)" opacity="0.18" />
      <circle cx="210" cy="210" r="34" fill="none" stroke="url(#goldPurple)" strokeWidth="4" />
      <circle cx="210" cy="106" r="10" fill="#f6d38b" />
      <circle cx="320" cy="210" r="11" fill="#7c5cff" />
      <circle cx="110" cy="280" r="8" fill="#ff7a7a" />
      <path d="M210 140v46h44" fill="none" stroke="#f6d38b" strokeWidth="6" strokeLinecap="round" />
    </svg>
  )
}

function App() {
  return (
    <main className="page">
      <section className="hero enterprise">
        <div className="hero-main">
          <div className="eyebrow">SOLVERS · PROPUESTA EMPRESARIAL</div>
          <h1>
            Sistema de compliance para <span>Valeria Florez</span>
          </h1>
          <p className="hero-copy">
            Una plataforma web diseñada para centralizar consultas, detectar
            alertas relevantes y facilitar decisiones con más seguridad.
          </p>

          <div className="hero-tags">
            <span>Compliance</span>
            <span>Screening</span>
            <span>Debida diligencia</span>
          </div>
        </div>

        <div className="hero-side">
          <OrbitGraphic />
          <div className="hero-side-card">
            <strong>Propuesta Solvers</strong>
            <p>
              Más control, menos fricción operativa y una experiencia clara para
              revisar riesgo.
            </p>
          </div>
        </div>
      </section>

      <section className="summary-strip">
        <div className="summary-card featured">
          <span className="summary-label">Inversión especial</span>
          <strong>$5.000.000 COP</strong>
          <p>Desarrollo de la primera versión</p>
        </div>
        <div className="summary-card">
          <span className="summary-label">Valor base</span>
          <strong>$8.000.000 COP</strong>
          <p>Antes de precio especial</p>
        </div>
        <div className="summary-card">
          <span className="summary-label">Gestión mensual</span>
          <strong>$1.500.000 COP</strong>
          <p>Soporte y evolución continua</p>
        </div>
      </section>

      <section className="content-grid first-grid">
        <article className="section-card problem-card">
          <p className="section-kicker">Problema</p>
          <h2>Cuando la consulta es lenta, el riesgo crece.</h2>
          <ul>
            {problemPoints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="section-card agitation-card">
          <p className="section-kicker">Impacto</p>
          <h2>La fricción operativa también cuesta.</h2>
          <p>
            Validar tarde o validar mal afecta la velocidad comercial, la
            confianza del proceso y la capacidad de actuar con criterio.
          </p>
        </article>
      </section>

      <section className="section-card solution-block">
        <p className="section-kicker">Solución</p>
        <h2>Una herramienta propia para consultar, contrastar y decidir.</h2>
        <p className="section-intro">
          La propuesta concentra lo esencial en una experiencia limpia, rápida y
          preparada para crecer.
        </p>
        <div className="scope-grid">
          {scopePoints.map((item) => (
            <div key={item} className="scope-item">
              <span className="scope-dot" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="content-grid second-grid">
        <article className="section-card investment-block">
          <p className="section-kicker">Inversión</p>
          <h2>Estructura clara para avanzar.</h2>

          <div className="price-panel large">
            <span className="price-label">Desarrollo</span>
            <div className="price-stack">
              <span className="price-original">$8.000.000 COP</span>
              <span className="price-current">$5.000.000 COP</span>
            </div>
            <p>Valor especial definido para Valeria Florez.</p>
          </div>

          <div className="price-panel small">
            <span className="price-label">Gestión mensual</span>
            <div className="price-current compact">$1.500.000 COP</div>
            <p>Soporte, mantenimiento y mejora continua.</p>
          </div>
        </article>

        <article className="section-card conditions-block">
          <p className="section-kicker">Condiciones</p>
          <h2>Base seria, lista para operación real.</h2>
          <ul>
            {conditionPoints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="section-card closing-block">
        <div>
          <p className="section-kicker">Cierre</p>
          <h2>Una propuesta pensada para decidir con rapidez y ejecutar con orden.</h2>
        </div>
        <div className="closing-aside">
          <div className="closing-line" />
          <p>
            Si el objetivo es tener una base sólida para compliance y due
            diligence, esta propuesta ya define el camino inicial correcto.
          </p>
        </div>
      </section>
    </main>
  )
}

export default App

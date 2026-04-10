import './App.css'

const whatsappHref =
  'https://wa.me/573216424600?text=Hola%20Solvers%2C%20quiero%20avanzar%20con%20la%20propuesta%20de%20Valeria%20Florez'

const capabilities = [
  'Búsqueda centralizada en listas y fuentes clave',
  'Reglas internas para revisión y alertas',
  'Hallazgos claros para decidir más rápido',
  'Trazabilidad simple para seguimiento',
]

const processSteps = [
  {
    label: 'Diagnóstico',
    text: 'Flujo actual, criterios y fuentes prioritarias.',
  },
  {
    label: 'Configuración',
    text: 'Listas, reglas y estructura de revisión.',
  },
  {
    label: 'Puesta en marcha',
    text: 'Entrega operativa con acompañamiento inicial.',
  },
]

const scopeItems = [
  ['Formato', 'Plataforma web privada'],
  ['Objetivo', 'Consultar, contrastar y revisar en un solo lugar'],
  ['Resultado', 'Más control para decisiones de compliance'],
]

export default function App() {
  return (
    <main className="page">
      <header className="hero">
        <div className="hero-copy">
          <div className="hero-topline">
            <div className="brand">SOLVERS</div>
            <div className="hero-meta">Propuesta ejecutiva · Compliance</div>
          </div>

          <p className="eyebrow">Propuesta comercial</p>
          <h1>Compliance claro, sobrio y listo para operar.</h1>
          <p className="subtitle">Una plataforma a la medida para consultar, contrastar y revisar con criterio.</p>

          <div className="hero-summary">
            <div>
              <span>Enfoque</span>
              <strong>Control y trazabilidad</strong>
            </div>
            <div>
              <span>Modalidad</span>
              <strong>Desarrollo e implementación</strong>
            </div>
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="art-frame">
            <div className="art-orbit art-orbit-one" />
            <div className="art-orbit art-orbit-two" />
            <div className="art-line art-line-top" />
            <div className="art-node art-node-top" />
            <div className="art-node art-node-main" />
            <div className="art-line art-line-bottom" />
            <div className="art-node art-node-bottom" />
            <div className="art-caption">Un flujo más claro para revisar mejor.</div>
          </div>
        </div>
      </header>

      <section className="proposal-shell">
        <div className="proposal-intro section-divider">
          <div className="section-heading">
            <p className="label">Resumen ejecutivo</p>
            <h2>Una operación más ordenada para decidir con más respaldo.</h2>
          </div>
          <p>Menos dispersión, más criterio y una experiencia lista para el uso diario.</p>
        </div>

        <div className="content-grid">
          <div className="content-main">
            <article className="section-card section-divider">
              <div className="section-heading split-heading">
                <div>
                  <p className="label">Problema</p>
                  <h3>La revisión pierde fuerza cuando la información está dispersa.</h3>
                </div>
                <p>Las consultas manuales y poco trazables hacen más lenta la validación y debilitan el control.</p>
              </div>
            </article>

            <article className="section-card section-divider">
              <div className="section-heading split-heading">
                <div>
                  <p className="label">Solución</p>
                  <h3>Un sistema propio para buscar, contrastar y revisar en un solo flujo.</h3>
                </div>
                <p>La propuesta concentra fuentes, reglas y hallazgos en una estructura simple de operar.</p>
              </div>
            </article>

            <article className="section-card section-divider">
              <div className="section-heading compact-heading">
                <div>
                  <p className="label">Capacidades</p>
                  <h3>Lo esencial para una operación consistente.</h3>
                </div>
              </div>

              <div className="feature-list">
                {capabilities.map((item, index) => (
                  <div className="feature-row" key={item}>
                    <span className="feature-index">0{index + 1}</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="section-card section-divider">
              <div className="section-heading compact-heading">
                <div>
                  <p className="label">Implementación</p>
                  <h3>Tres etapas. Una ruta clara.</h3>
                </div>
              </div>

              <div className="process-list process-list-inline">
                {processSteps.map((step, index) => (
                  <div className="process-item" key={step.label}>
                    <span>{index + 1}</span>
                    <div>
                      <strong>{step.label}</strong>
                      <p>{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="investment section-card section-divider">
              <div className="section-heading compact-heading">
                <div>
                  <p className="label">Inversión</p>
                  <h3>Una estructura simple para iniciar.</h3>
                </div>
              </div>

              <div className="investment-grid">
                <div className="investment-card investment-card-primary">
                  <div className="investment-label">Desarrollo</div>
                  <div className="amount">
                    $5.000.000 <small>COP</small>
                  </div>
                  <div className="note">Implementación base del sistema</div>
                </div>
                <div className="investment-card">
                  <div className="investment-label">Gestión mensual</div>
                  <div className="amount muted">
                    $1.500.000 <small>COP</small>
                  </div>
                  <div className="note">Acompañamiento y evolución continua</div>
                </div>
              </div>
              <p className="base-note">Valor base de referencia: $8.000.000 COP.</p>
            </article>

            <article className="cta-panel section-card">
              <div>
                <p className="label">Siguiente paso</p>
                <h3>Si está alineada, avanzamos con la validación final.</h3>
              </div>
              <a className="btn-main" href={whatsappHref}>
                Aceptar propuesta
              </a>
            </article>
          </div>

          <aside className="content-rail">
            <article className="rail-card rail-card-sticky">
              <p className="label">Alcance</p>
              <h3>Qué se propone</h3>
              <div className="rail-list">
                {scopeItems.map(([label, value]) => (
                  <div key={label}>
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>
            </article>
          </aside>
        </div>
      </section>

      <section className="contact-section" aria-labelledby="contacto-title">
        <div className="contact-shell">
          <div className="contact-section-header">
            <p className="label">Contacto</p>
            <h2 id="contacto-title">Acompañamiento directo para decidir y ejecutar.</h2>
          </div>

          <div className="contact-grid">
            <article className="contact-card">
              <div className="contact-card-top">
                <p className="contact-kicker">Dirección de propuesta</p>
                <span className="contact-badge">Principal</span>
              </div>
              <h3>Valentin Florez Maya</h3>
              <p className="contact-role">Innovación y Desarrollo</p>
              <div className="contact-meta">
                <a href="mailto:solvers.solvers@gmail.com">solvers.solvers@gmail.com</a>
                <a href="tel:+573216424600">+57 321 642 4600</a>
              </div>
            </article>

            <article className="contact-card">
              <div className="contact-card-top">
                <p className="contact-kicker">Gestión del proyecto</p>
                <span className="contact-badge">Coordinación</span>
              </div>
              <h3>Valentina</h3>
              <p className="contact-role">Project Manager</p>
              <div className="contact-meta">
                <a href="mailto:valentina@solversai.com">valentina@solversai.com</a>
                <a href="tel:+573113064578">+57 311 306 4578</a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}

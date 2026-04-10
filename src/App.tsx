import './App.css'

const whatsappHref =
  'https://wa.me/573216424600?text=Hola%20Solvers%2C%20quiero%20avanzar%20con%20la%20propuesta%20de%20Valeria%20Florez'

const capabilities = [
  'Listas restrictivas y búsquedas por nombre o identificación',
  'Listas personalizadas para reglas internas de control',
  'Resultados, hallazgos y alertas para revisión ágil',
  'Reportes claros para seguimiento y trazabilidad',
]

const processSteps = [
  {
    label: 'Diagnóstico inicial',
    text: 'Levantamiento del flujo actual, criterios de validación y fuentes prioritarias.',
  },
  {
    label: 'Configuración y lógica',
    text: 'Parametrización de listas, reglas internas y estructura de revisión para el equipo.',
  },
  {
    label: 'Entrega operativa',
    text: 'Puesta en marcha del sistema con seguimiento, trazabilidad y soporte de adopción.',
  },
]

export default function App() {
  return (
    <main className="page">
      <header className="hero">
        <div className="hero-copy">
          <div className="hero-topline">
            <div className="brand">SOLVERS</div>
            <div className="hero-meta">Propuesta ejecutiva · Compliance y debida diligencia</div>
          </div>

          <p className="eyebrow">Propuesta comercial</p>
          <h1>Sistema de Compliance para Valeria Florez</h1>
          <p className="subtitle">
            Plataforma web para centralizar consultas, contrastar listas y tomar decisiones con más seguridad.
          </p>

          <div className="hero-summary">
            <div>
              <span>Enfoque</span>
              <strong>Control, trazabilidad y criterio de revisión</strong>
            </div>
            <div>
              <span>Modalidad</span>
              <strong>Desarrollo e implementación a la medida</strong>
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
            <div className="art-caption">Arquitectura sobria para una operación más confiable</div>
          </div>
        </div>
      </header>

      <section className="proposal-shell">
        <div className="proposal-intro section-divider">
          <div className="section-heading">
            <p className="label">Resumen ejecutivo</p>
            <h2>Una propuesta diseñada para revisar mejor, decidir con más respaldo y operar con menos fricción.</h2>
          </div>
          <p>
            La estructura prioriza claridad operativa, control sobre los hallazgos y una experiencia de uso pensada para
            consultas recurrentes sin dispersión.
          </p>
        </div>

        <div className="content-grid">
          <div className="content-main">
            <article className="section-card section-divider">
              <div className="section-heading split-heading">
                <div>
                  <p className="label">Problema</p>
                  <h3>Hoy el riesgo no siempre está en la falta de información, sino en la falta de estructura.</h3>
                </div>
                <p>
                  Las consultas manuales, dispersas y poco trazables ralentizan la operación y elevan el riesgo de pasar
                  por alto alertas relevantes.
                </p>
              </div>
            </article>

            <article className="section-card section-divider">
              <div className="section-heading split-heading">
                <div>
                  <p className="label">Solución</p>
                  <h3>Un sistema propio para concentrar búsquedas, contrastes y revisión en un solo flujo.</h3>
                </div>
                <p>
                  Un sistema propio para buscar, contrastar y revisar hallazgos en un solo flujo, con más control y
                  mejor criterio de decisión.
                </p>
              </div>
            </article>

            <article className="section-card section-divider">
              <div className="section-heading compact-heading">
                <div>
                  <p className="label">Capacidades</p>
                  <h3>Funciones clave para una operación más consistente y confiable.</h3>
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

            <article className="investment section-card section-divider">
              <div className="section-heading compact-heading">
                <div>
                  <p className="label">Inversión</p>
                  <h3>Una estructura simple para aprobar, iniciar y acompañar el proyecto.</h3>
                </div>
              </div>

              <div className="investment-grid">
                <div className="investment-card investment-card-primary">
                  <div className="investment-label">Desarrollo</div>
                  <div className="amount">
                    $5.000.000 <small>COP</small>
                  </div>
                  <div className="note">Implementación base del sistema propuesto</div>
                </div>
                <div className="investment-card">
                  <div className="investment-label">Gestión mensual</div>
                  <div className="amount muted">
                    $1.500.000 <small>COP</small>
                  </div>
                  <div className="note">Acompañamiento operativo y evolución continua</div>
                </div>
              </div>
              <p className="base-note">Valor base de referencia: $8.000.000 COP.</p>
            </article>

            <article className="cta-panel section-card">
              <div>
                <p className="label">Siguiente paso</p>
                <h3>Si la propuesta está alineada, podemos avanzar de inmediato con la validación final.</h3>
              </div>
              <a className="btn-main" href={whatsappHref}>
                Aceptar propuesta
              </a>
            </article>
          </div>

          <aside className="content-rail">
            <article className="rail-card">
              <p className="label">Presentación</p>
              <h3>Alcance planteado</h3>
              <div className="rail-list">
                <div>
                  <span>Tipo de solución</span>
                  <strong>Plataforma web privada</strong>
                </div>
                <div>
                  <span>Objetivo</span>
                  <strong>Consulta, contraste y revisión centralizada</strong>
                </div>
                <div>
                  <span>Resultado esperado</span>
                  <strong>Mayor control en decisiones de compliance</strong>
                </div>
              </div>
            </article>

            <article className="rail-card">
              <p className="label">Proceso propuesto</p>
              <div className="process-list">
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
          </aside>
        </div>
      </section>

      <section className="contact-section" aria-labelledby="contacto-title">
        <div className="contact-shell">
          <div className="contact-section-header">
            <p className="label">Contacto</p>
            <h2 id="contacto-title">Acompañamiento cercano para la decisión y la ejecución.</h2>
            <p className="contact-intro">
              Si deseas avanzar o revisar detalles finales, puedes escribirnos directamente. Te acompañaremos en la
              validación comercial, operativa y de implementación.
            </p>
          </div>

          <div className="contact-grid">
            <article className="contact-card">
              <div className="contact-card-top">
                <p className="contact-kicker">Dirección de propuesta</p>
                <span className="contact-badge">Contacto principal</span>
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

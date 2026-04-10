import './App.css'

const whatsappHref =
  'https://wa.me/573216424600?text=Hola%20Solvers%2C%20quiero%20avanzar%20con%20la%20propuesta%20de%20Valeria%20Florez'

export default function App() {
  return (
    <main className="page">
      <header className="hero">
        <div className="brand">SOLVERS</div>

        <div className="hero-copy">
          <p className="eyebrow">Propuesta comercial</p>
          <h1>Sistema de Compliance para Valeria Florez</h1>
          <p className="subtitle">
            Plataforma web para centralizar consultas, contrastar listas y tomar decisiones con más seguridad.
          </p>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="art-frame">
            <div className="art-line art-line-top" />
            <div className="art-node" />
            <div className="art-line art-line-bottom" />
          </div>
        </div>
      </header>

      <section className="content">
        <div className="section section-text">
          <div className="label">Problema</div>
          <p>
            Las consultas manuales, dispersas y poco trazables ralentizan la operación y elevan el riesgo de pasar
            por alto alertas relevantes.
          </p>
        </div>

        <div className="section section-text">
          <div className="label">Solución</div>
          <p>
            Un sistema propio para buscar, contrastar y revisar hallazgos en un solo flujo, con más control y mejor
            criterio de decisión.
          </p>
        </div>

        <div className="section">
          <div className="label">Capacidades</div>
          <ul className="list">
            <li>Listas restrictivas y búsquedas por nombre o identificación</li>
            <li>Listas personalizadas para reglas internas de control</li>
            <li>Resultados, hallazgos y alertas para revisión ágil</li>
            <li>Reportes claros para seguimiento y trazabilidad</li>
          </ul>
        </div>

        <div className="investment">
          <div className="label">Inversión</div>
          <div className="investment-grid">
            <div>
              <div className="amount">$5.000.000 <small>COP</small></div>
              <div className="note">Desarrollo</div>
            </div>
            <div>
              <div className="amount muted">$1.500.000 <small>COP</small></div>
              <div className="note">Gestión mensual</div>
            </div>
          </div>
          <p className="base-note">Valor base de referencia: $8.000.000 COP.</p>
        </div>

        <div className="cta-group">
          <a className="btn-main" href={whatsappHref}>
            Aceptar propuesta
          </a>
          <div className="contact-links">
            <a href="tel:+573216424600">Llamar a Valentin</a>
            <span className="sep">·</span>
            <a href="https://wa.me/573216424600?text=Hola%20Tina%2C%20quiero%20revisar%20la%20propuesta%20de%20Valeria%20Florez">
              WhatsApp Tina
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>Valentin Florez Maya · solvers.solvers@gmail.com · +57 321 642 4600</p>
      </footer>
    </main>
  )
}

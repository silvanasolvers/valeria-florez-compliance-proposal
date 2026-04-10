import './App.css'

const features = [
  'Consulta de listas restrictivas y bases de cumplimiento',
  'Búsqueda por nombre, identificación y criterios personalizados',
  'Cruce contra listas internas o privadas del cliente',
  'Validación de antecedentes, alertas y hallazgos relevantes',
]

const deliverables = [
  'Aplicación web en React, rápida y fácil de usar',
  'Motor de consulta centralizado para due diligence',
  'Interfaz clara para screening y revisión de resultados',
  'Base lista para crecer con nuevas fuentes y reglas',
]

function App() {
  return (
    <main className="page">
      <section className="hero">
        <div className="eyebrow">SOLVERSAI</div>
        <h1>
          Propuesta de sistema de compliance para <span>Valeria Florez</span>
        </h1>
        <p className="hero-copy">
          Una plataforma web enfocada en consulta, validación y screening de
          personas o entidades frente a listas de cumplimiento, fuentes de riesgo
          y bases personalizadas.
        </p>

        <div className="price-card">
          <div>
            <div className="price-label">Inversión de desarrollo</div>
            <div className="price-row">
              <span className="price-original">$8.000.000 COP</span>
              <span className="price-current">$5.000.000 COP</span>
            </div>
            <p className="price-note">Precio especial definido para Valeria Florez.</p>
          </div>

          <div className="divider" />

          <div>
            <div className="price-label">Gestión mensual</div>
            <div className="price-current">$1.500.000 COP</div>
            <p className="price-note">
              Soporte, mantenimiento operativo y evolución continua.
            </p>
          </div>
        </div>
      </section>

      <section className="grid two-up">
        <article className="card">
          <p className="section-kicker">Objetivo</p>
          <h2>Centralizar el análisis de riesgo en un solo sistema</h2>
          <p>
            El proyecto busca simplificar la validación de personas y entidades,
            permitiendo consultas rápidas, trazables y listas para operación
            comercial o de cumplimiento.
          </p>
        </article>

        <article className="card emphasis">
          <p className="section-kicker">Enfoque</p>
          <h2>Simple, claro y listo para crecer</h2>
          <p>
            La primera versión estará enfocada en resolver lo importante: buscar,
            contrastar, revisar hallazgos y dejar una experiencia sólida para el
            usuario final.
          </p>
        </article>
      </section>

      <section className="grid two-up lists-section">
        <article className="card list-card">
          <p className="section-kicker">Qué podrá hacer el sistema</p>
          <ul>
            {features.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="card list-card">
          <p className="section-kicker">Qué incluye esta propuesta</p>
          <ul>
            {deliverables.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="closing">
        <p className="section-kicker">Siguiente paso</p>
        <h2>Desplegar una primera versión funcional y empezar a iterar rápido</h2>
        <p>
          La propuesta está pensada para lanzar una base sólida, validar el uso
          real y seguir construyendo sobre una herramienta propia con enfoque en
          compliance y due diligence.
        </p>
      </section>
    </main>
  )
}

export default App

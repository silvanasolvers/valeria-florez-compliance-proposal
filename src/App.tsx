import './App.css'

const painPoints = [
  'Consultas manuales lentas',
  'Información dispersa',
  'Riesgo de omitir alertas clave',
]

const solutionPoints = [
  'Screening centralizado',
  'Cruce con listas restrictivas y personalizadas',
  'Resultados claros para decidir más rápido',
]

function ShieldGraphic() {
  return (
    <svg viewBox="0 0 320 320" className="hero-shield" aria-hidden="true">
      <defs>
        <linearGradient id="shieldGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f6d38b" />
          <stop offset="100%" stopColor="#7c5cff" />
        </linearGradient>
      </defs>
      <circle cx="160" cy="160" r="130" fill="rgba(255,255,255,0.03)" />
      <path
        d="M160 52 242 84v63c0 56-34 101-82 122-48-21-82-66-82-122V84l82-32Z"
        fill="url(#shieldGlow)"
        opacity="0.18"
      />
      <path
        d="M160 68 228 95v52c0 46-27 83-68 103-41-20-68-57-68-103V95l68-27Z"
        fill="none"
        stroke="url(#shieldGlow)"
        strokeWidth="6"
      />
      <path
        d="m130 160 20 20 42-48"
        fill="none"
        stroke="#f6d38b"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="248" cy="92" r="18" fill="#7c5cff" opacity="0.9" />
      <circle cx="86" cy="228" r="10" fill="#f6d38b" opacity="0.9" />
    </svg>
  )
}

function App() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero-copy-block">
          <div className="eyebrow">SOLVERSAI · PROPUESTA COMPLIANCE</div>
          <h1>
            Menos riesgo. <span>Más claridad.</span> Más velocidad para decidir.
          </h1>
          <p className="hero-copy">
            Una plataforma para Valeria Florez que convierte búsquedas de
            compliance en una operación simple, visual y confiable.
          </p>

          <div className="hero-pills">
            <span>Listas restrictivas</span>
            <span>Listas personalizadas</span>
            <span>Due diligence</span>
          </div>
        </div>

        <div className="hero-visual">
          <ShieldGraphic />
          <div className="signal-card alert-card">
            <strong>Problema</strong>
            <p>Hoy el riesgo se esconde entre fuentes dispersas y procesos lentos.</p>
          </div>
          <div className="signal-card solution-card">
            <strong>Solución</strong>
            <p>Un solo sistema para consultar, detectar y decidir con confianza.</p>
          </div>
        </div>
      </section>

      <section className="pas-grid">
        <article className="pas-card problem">
          <p className="section-kicker">P</p>
          <h2>El problema</h2>
          <ul>
            {painPoints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="pas-card agitation">
          <p className="section-kicker">A</p>
          <h2>Lo que eso cuesta</h2>
          <p>
            Cada validación lenta retrasa decisiones, desgasta al equipo y deja
            espacio para errores que pueden salir caros.
          </p>
        </article>

        <article className="pas-card solution">
          <p className="section-kicker">S</p>
          <h2>La solución</h2>
          <ul>
            {solutionPoints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="investment-band">
        <div className="investment-copy">
          <p className="section-kicker">Inversión</p>
          <h2>Oferta directa y clara</h2>
          <p>
            Diseñada para cerrar rápido, lanzar una primera versión funcional y
            seguir iterando sobre una base propia.
          </p>
        </div>

        <div className="investment-card featured">
          <span className="mini-label">Desarrollo</span>
          <div className="price-row">
            <span className="price-original">$8.000.000</span>
            <span className="price-current">$5.000.000 COP</span>
          </div>
          <p>Precio especial para Valeria Florez.</p>
        </div>

        <div className="investment-card">
          <span className="mini-label">Gestión mensual</span>
          <div className="price-current small">$1.500.000 COP</div>
          <p>Soporte, mantenimiento y mejora continua.</p>
        </div>
      </section>

      <section className="final-cta">
        <div>
          <p className="section-kicker">Resultado esperado</p>
          <h2>Una herramienta que transmite control, confianza y criterio.</h2>
        </div>
        <div className="cta-box">
          <div className="cta-line" />
          <p>
            Si el objetivo es tomar decisiones con más seguridad y menos fricción,
            esta es la base correcta para empezar.
          </p>
        </div>
      </section>
    </main>
  )
}

export default App

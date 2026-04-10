import './App.css'

export default function App() {
  return (
    <main className="page">
      <header className="hero">
        <div className="logo">S O L V E R S</div>
        <h1>Propuesta de Compliance para <span>Valeria Florez</span></h1>
        <p className="subtitle">Sistemas de debida diligencia y mitigación de riesgos operativos.</p>
      </header>

      <section className="content">
        <div className="section">
          <div className="label">EL PROBLEMA</div>
          <p>Consultas manuales y fuentes dispersas generan lentitud operativa y riesgo de omitir alertas críticas.</p>
        </div>

        <div className="section">
          <div className="label">LA SOLUCIÓN</div>
          <p>Una plataforma propia para centralizar la búsqueda, contrastar listas restrictivas y decidir con certeza técnica.</p>
        </div>

        <div className="section">
          <div className="label">CAPACIDADES</div>
          <ul className="list">
            <li>Consulta de listas restrictivas internacionales</li>
            <li>Cruce contra bases de datos personalizadas</li>
            <li>Búsqueda precisa por nombre e identificación</li>
            <li>Soporte y evolución continua del sistema</li>
          </ul>
        </div>

        <div className="pricing">
          <div className="price-block">
            <div className="label">Inversión Desarrollo</div>
            <div className="amount">$5.000.000 <small>COP</small></div>
            <div className="note">Precio especial sobre valor base de $8M</div>
          </div>
          <div className="price-block">
            <div className="label">Gestión Mensual</div>
            <div className="amount">$1.500.000 <small>COP</small></div>
            <div className="note">Mantenimiento y soporte técnico</div>
          </div>
        </div>

        <div className="cta-group">
          <a className="btn-main" href="https://wa.me/573216424600?text=Hola%20Solvers%2C%20quiero%20avanzar%20con%20la%20propuesta%20de%20Valeria%20Florez">
            Aceptar Propuesta
          </a>
          <div className="contact-links">
            <a href="tel:+573216424600">Llamar Valentin</a>
            <span className="sep">/</span>
            <a href="https://wa.me/573119999999?text=Hola%20Tina%2C%20quiero%20revisar%20la%20propuesta%20de%20Valeria%20Florez">WhatsApp Valentina</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Solvers AI · Valentin Florez Maya · solvers.solvers@gmail.com</p>
      </footer>
    </main>
  )
}

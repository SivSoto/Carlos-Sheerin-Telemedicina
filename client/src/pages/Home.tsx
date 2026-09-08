/**
 * ESTILO: "Precisión Humana" — editorial clínico contemporáneo.
 * Esta página usa una composición de expediente desplegable: tinta azul petróleo,
 * papel hueso, pulsos de eucalipto y jerarquía tipográfica serena.
 */
import {
  ArrowDownRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronRight,
  Copy,
  Share2,
  Clock3,
  Menu,
  MessageCircle,
  ShieldCheck,
  Video,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const whatsappLink = "https://wa.me/50688431902?text=Hola%20Dr.%20Carlos%20Sheerin%2C%20me%20gustar%C3%ADa%20coordinar%20una%20teleconsulta.";

const schedule = [
  { day: "Lunes", detail: "4:30 p. m. – 7:00 p. m.", available: true },
  { day: "Martes", detail: "4:30 p. m. – 7:00 p. m.", available: true },
  { day: "Miércoles", detail: "4:30 p. m. – 7:00 p. m.", available: true },
  { day: "Jueves", detail: "4:30 p. m. – 7:00 p. m.", available: true },
  { day: "Viernes", detail: "3:30 p. m. – 6:00 p. m.", available: true },
  { day: "Sábado", detail: "No disponible", available: false },
  { day: "Domingo", detail: "No disponible", available: false },
];

const credentials = [
  "MSc. Salud Pública con énfasis en Epidemiología",
  "MSc. Antitrombosis",
  "Diplomado Latinoamericano de Anticoagulación",
  "MSc. en Nuevos Tratamientos Anticoagulantes",
];

const experience = [
  {
    period: "2010 — Hoy",
    title: "Staff de Cardiología",
    detail: "Hospital San Rafael de Alajuela",
  },
  {
    period: "2010 — Hoy",
    title: "Control y tratamiento de pacientes anticoagulados",
    detail: "16 años de experiencia clínica",
  },
  {
    period: "2012 — Hoy",
    title: "Coordinador de la Clínica de Anticoagulación",
    detail: "Hospital San Rafael de Alajuela",
  },
  {
    period: "2015",
    title: "Fellow en Insuficiencia Cardíaca",
    detail: "Clínica Bíblica",
  },
  {
    period: "2019 — Hoy",
    title: "Coordinador de la Clínica de Cesación de Tabaco y Vapeo",
    detail: "",
  },
];

function WhatsAppButton({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a href={whatsappLink} target="_blank" rel="noreferrer" className={`action-button ${className}`}>
      <MessageCircle size={19} strokeWidth={2.2} />
      <span>{children}</span>
      <ArrowUpRight size={17} strokeWidth={2.1} className="button-arrow" />
    </a>
  );
}

export default function Home() {
  const [openMenu, setOpenMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpenMenu(false);

  const shareUrl = () => {
    const url = window.location.href;
    const message = encodeURIComponent(`Conozca el sitio web del Dr. Carlos Sheerin: ${url}`);
    window.open(`https://wa.me/?text=${message}`, "_blank", "noopener,noreferrer");
  };

  const copySiteLink = async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      const helper = document.createElement("textarea");
      helper.value = url;
      helper.style.position = "fixed";
      helper.style.opacity = "0";
      document.body.appendChild(helper);
      helper.select();
      document.execCommand("copy");
      helper.remove();
    }
    setLinkCopied(true);
    window.setTimeout(() => setLinkCopied(false), 2200);
  };

  return (
    <main className="min-h-screen bg-[#f7f4ee] text-[#112c35]">
      <header className={`site-header ${scrolled ? "site-header-scrolled" : ""}`}>
        <div className="shell header-inner">
          <a href="#inicio" className="brand" aria-label="Inicio — Dr. Carlos Sheerin">
            <img src="/manus-storage/logo-cs-gota-sutil_2a8bc820.png" alt="Monograma CS de Carlos Sheerin" className="brand-mark" />
            <span className="brand-copy">
              <strong>Dr. Carlos Sheerin</strong>
              <small>Control y Monitoreo de Anticoagulación</small>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Navegación principal">
            <a href="#consulta">Consulta</a>
            <a href="#trayectoria">Trayectoria</a>
            <a href="#horario">Horario</a>
            <a href="#contacto" className="nav-cta">Agendar <ArrowDownRight size={15} /></a>
          </nav>

          <button className="menu-trigger" onClick={() => setOpenMenu(!openMenu)} aria-label="Abrir menú de navegación" aria-expanded={openMenu}>
            {openMenu ? <X size={23} /> : <Menu size={24} />}
          </button>
        </div>
        {openMenu && (
          <nav className="mobile-nav" aria-label="Navegación móvil">
            <a onClick={closeMenu} href="#consulta">Consulta <ChevronRight size={16} /></a>
            <a onClick={closeMenu} href="#trayectoria">Trayectoria <ChevronRight size={16} /></a>
            <a onClick={closeMenu} href="#horario">Horario <ChevronRight size={16} /></a>
            <a onClick={closeMenu} href="#contacto">Agendar por WhatsApp <ArrowUpRight size={16} /></a>
          </nav>
        )}
      </header>

      <section id="inicio" className="hero-section section-anchor">
        <div className="hero-grain" aria-hidden="true" />
        <div className="shell hero-layout">
          <div className="hero-copy">
            <div className="eyebrow"><span /> Consulta privada por telemedicina</div>
            <h1>Atención a pacientes<br /><em>anticoagulados,</em><br />desde donde esté.</h1>
            <p className="hero-lead">Acompañamiento médico claro y cercano para el control, tratamiento y seguimiento de pacientes anticoagulados.</p>
            <div className="hero-actions">
              <WhatsAppButton>Coordinar teleconsulta</WhatsAppButton>
              <a href="#horario" className="text-link">Ver horario <ArrowDownRight size={18} /></a>
            </div>
            <div className="hero-meta">
              <div><span className="meta-dot" /> Disponible <strong>lun · vie</strong></div>
              <div><Clock3 size={15} /> Lun–jue: 4:30–7:00 p. m. · Vie: 3:30–6:00 p. m.</div>
            </div>
          </div>

          <div className="hero-portrait-wrap">
            <div className="portrait-backdrop" />
            <div className="portrait-note top-note"><span>PRÁCTICA CLÍNICA</span><strong>Desde 2010</strong></div>
            <img
              src="/manus-storage/dr-carlos-sheerin-portrait_5ffb397d.png"
              alt="Dr. Carlos Sheerin, médico en consulta"
              className="hero-portrait"
            />
            <div className="portrait-mark" aria-hidden="true"><img src="/manus-storage/logo-cs-gota-sutil_2a8bc820.png" alt="" /></div>
          </div>
        </div>
        <div className="hero-rule"><img src="/manus-storage/logo-cs-gota-sutil_2a8bc820.png" alt="Monograma CS" /><div /></div>
      </section>

      <section id="consulta" className="section-anchor consult-section">
        <div className="shell consult-layout">
          <div className="section-label"><span>01</span> La consulta</div>
          <div className="consult-main">
            <h2>Un espacio para conversar <em>con claridad.</em></h2>
            <p className="section-intro">La telemedicina permite revisar su caso y dar seguimiento a distancia de forma práctica. Coordinaremos la modalidad que le resulte más conveniente: <strong>Zoom o WhatsApp.</strong></p>
            <div className="consult-grid">
              <article className="care-card">
                <div className="card-icon"><Video size={23} /></div>
                <h3>Modalidad flexible</h3>
                <p>La sesión se realiza por Zoom o WhatsApp, según se coordine previamente.</p>
              </article>
              <article className="care-card accent-card">
                <div className="card-icon"><ShieldCheck size={23} /></div>
                <h3>Seguimiento especializado</h3>
                <p>Enfoque clínico y cuidadoso para el control y tratamiento de pacientes anticoagulados.</p>
              </article>
            </div>
          </div>
          <aside className="fee-card" aria-label="Tarifa de consulta">
            <span className="fee-label">Inversión por consulta</span>
            <div className="fee-amount"><small>₡</small>40 000</div>
            <p>Consulta privada por telemedicina.</p>
            <a href="#contacto">Coordinar por WhatsApp <ArrowUpRight size={16} /></a>
          </aside>
        </div>
      </section>

      <section id="trayectoria" className="section-anchor profile-section">
        <div className="shell profile-layout">
          <div className="profile-sticky">
            <div className="section-label light"><span>02</span> Perfil profesional</div>
            <h2>Experiencia que<br /><em>acompaña.</em></h2>
            <p>El Dr. Carlos Sheerin combina una práctica clínica sostenida con formación especializada para atender sus consultas con rigor y cercanía.</p>
            <div className="profile-signature">
              <img src="/manus-storage/logo-cs-gota-sutil_2a8bc820.png" alt="" />
              <span>Dr. Carlos Sheerin</span>
            </div>
          </div>
          <div className="profile-content">
            <div className="education-block">
              <div className="mini-label">Formación avanzada</div>
              <ul>
                {credentials.map((credential) => (
                  <li key={credential}><Check size={17} /> <span>{credential}</span></li>
                ))}
              </ul>
            </div>
            <div className="timeline">
              <div className="mini-label">Recorrido clínico</div>
              {experience.map((item) => (
                <article className="timeline-item" key={`${item.period}-${item.title}`}>
                  <span className="timeline-period">{item.period}</span>
                  <div>
                    <h3>{item.title}</h3>
                    {item.detail ? <p>{item.detail}</p> : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="horario" className="section-anchor availability-section">
        <div className="shell availability-layout">
          <div className="availability-copy">
            <div className="section-label"><span>03</span> Disponibilidad</div>
            <h2>Horario de<br /><em>consulta.</em></h2>
            <p>Las consultas privadas se coordinan en las franjas indicadas. Escríbame para confirmar el espacio más conveniente.</p>
            <div className="availability-callout"><CalendarDays size={20} /><span>Horario nocturno para facilitar su atención a distancia.</span></div>
          </div>
          <div className="schedule-card">
            <div className="schedule-head"><span>AGENDA SEMANAL</span><span className="live-status"><i /> Horarios habilitados</span></div>
            <div className="schedule-list">
              {schedule.map((slot) => (
                <div className={`schedule-row ${slot.available ? "is-available" : "is-unavailable"}`} key={slot.day}>
                  <span className="schedule-day">{slot.day}</span>
                  <span className="schedule-detail">{slot.detail}</span>
                  <span className="schedule-status" aria-label={slot.available ? "Disponible" : "No disponible"}>{slot.available ? "●" : "—"}</span>
                </div>
              ))}
            </div>
            <div className="schedule-foot">Las citas se confirman previamente por WhatsApp.</div>
          </div>
        </div>
      </section>

      <section className="continuity-section">
        <div className="shell continuity-frame">
          <img src="/manus-storage/expediente-monitoreo-anticoagulacion_fd6f4bfa.png" alt="Ilustración editorial de monitoreo clínico a distancia" />
          <div className="continuity-copy">
            <div className="eyebrow inverse"><span /> Atención a distancia</div>
            <h2>La distancia no tiene por qué interrumpir <em>su seguimiento.</em></h2>
            <a className="contrast-link" href="#contacto">Coordine su consulta <ArrowUpRight size={18} /></a>
          </div>
        </div>
      </section>

      <section id="contacto" className="section-anchor contact-section">
        <div className="shell contact-layout">
          <div className="contact-title"><div className="section-label"><span>04</span> Contacto directo</div><h2>Hablemos de su<br /><em>próxima consulta.</em></h2></div>
          <div className="contact-action">
            <p>Escríbame por WhatsApp para coordinar fecha, hora y la modalidad de su teleconsulta.</p>
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="contact-number"><MessageCircle size={28} /><span>8843 1902</span><ArrowUpRight size={22} /></a>
            <small>WhatsApp · Costa Rica</small>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="shell footer-inner">
          <div className="footer-brand"><img src="/manus-storage/logo-cs-gota-sutil_2a8bc820.png" alt="" /><span>Dr. Carlos Sheerin</span></div>
          <p>Consulta privada por telemedicina.</p>
          <div className="footer-credit">
            <span>© {new Date().getFullYear()} Dr. Carlos Sheerin. Todos los derechos reservados.</span>
            <span>Sitio web creado por <strong>Sivianix Soto</strong> · <a href="https://wa.me/50670118430?text=Hola%20Sivianix%2C%20me%20gustar%C3%ADa%20consultar%20sobre%20la%20creaci%C3%B3n%20de%20un%20sitio%20web." target="_blank" rel="noreferrer">7011 8430</a></span>
          </div>
          <p className="footer-note">Este sitio no sustituye la atención de emergencias.</p>
          <div className="share-actions" aria-label="Compartir sitio web">
            <button type="button" className="share-button" onClick={shareUrl}><Share2 size={15} /> Compartir por WhatsApp</button>
            <button type="button" className="share-button share-button-muted" onClick={copySiteLink}>{linkCopied ? <Check size={15} /> : <Copy size={15} />} {linkCopied ? "Enlace copiado" : "Copiar enlace"}</button>
          </div>
        </div>
      </footer>

      <a href={whatsappLink} target="_blank" rel="noreferrer" className="whatsapp-float" aria-label="Escribir al Dr. Carlos Sheerin por WhatsApp">
        <MessageCircle size={26} fill="currentColor" />
        <span>Agendar por WhatsApp</span>
      </a>
    </main>
  );
}

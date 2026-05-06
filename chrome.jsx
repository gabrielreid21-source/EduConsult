// Shared chrome — Nav, Footer, Mark, IconArrow, Slot
const { useState, useEffect, useRef } = React;

function IconArrow({ size = 14 }) {
  return (
    <svg width={size} height={size * 0.7} viewBox="0 0 14 10" fill="none" aria-hidden>
      <path d="M1 5h12M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BrandMark({ size = 30 }) {
  return (
    <span className="brand__mark" style={{ width: size, height: size, fontSize: size * 0.46 }}>
      <em style={{ fontStyle: "italic" }}>cg</em>
    </span>
  );
}

function Slot({ label, height = 320, dark = false, slotId, style = {}, children }) {
  // If image-slot custom element is loaded, prefer it for user-fillable areas
  if (slotId) {
    return (
      <image-slot
        id={slotId}
        placeholder={label}
        shape="rect"
        style={{ width: "100%", height, display: "block", ...style }}
      ></image-slot>
    );
  }
  return (
    <div className={"slot" + (dark ? " slot--dark" : "")} style={{ height, ...style }}>
      {children}
      <span className="slot__label">{label}</span>
    </div>
  );
}

function Nav({ route, navigate }) {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#/", label: "Home", key: "home" },
    { href: "#/about", label: "About", key: "about" },
    { href: "#/services", label: "Services", key: "services" },
    { href: "#/process", label: "Process", key: "process" },
    { href: "#/faq", label: "FAQ", key: "faq" },
  ];

  useEffect(() => { setOpen(false); }, [route]);

  return (
    <header className="nav">
      <div className="nav__inner">
        <a href="#/" className="brand" onClick={() => navigate("home")}>
          <BrandMark />
          <span className="brand__name">
            <b>Caribbean Gateway</b>
            <span>Education · Tbilisi</span>
          </span>
        </a>

        <button className="nav__menu-btn" onClick={() => setOpen(o => !o)} aria-expanded={open}>
          {open ? "Close" : "Menu"}
        </button>

        <nav className={"nav__links" + (open ? " nav__links--open" : "")}>
          {links.map(l => (
            <a key={l.key} href={l.href}
               className="nav__link"
               aria-current={route === l.key ? "page" : undefined}>
              {l.label}
            </a>
          ))}
          <a href="#/contact" className="btn nav__cta">
            Book a call <IconArrow />
          </a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
              <span className="brand__mark" style={{ background: "var(--ivory)", color: "var(--navy)" }}>
                <em style={{ fontStyle: "italic" }}>cg</em>
              </span>
              <span style={{ fontFamily: "var(--display)", fontSize: 19, letterSpacing: "-0.01em" }}>
                Caribbean Gateway
              </span>
            </div>
            <p className="display" style={{ fontSize: 28, lineHeight: 1.2, maxWidth: "20ch", margin: 0 }}>
              A Caribbean voice in <em>Tbilisi</em>, walking families through medical school.
            </p>
          </div>

          <div>
            <h4>Site</h4>
            <ul>
              <li><a href="#/" className="link">Home</a></li>
              <li><a href="#/about" className="link">About</a></li>
              <li><a href="#/services" className="link">Services</a></li>
              <li><a href="#/process" className="link">Process</a></li>
              <li><a href="#/faq" className="link">FAQ</a></li>
              <li><a href="#/contact" className="link">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4>Reach us</h4>
            <ul>
              <li><a href="https://wa.me/995555982731" className="link">WhatsApp · +995 555 98 27 31</a></li>
              <li><a href="mailto:Gcamachoreid@icloud.com" className="link">Gcamachoreid@icloud.com</a></li>
              <li>Tbilisi, Georgia</li>
            </ul>
          </div>

          <div>
            <h4>Follow</h4>
            <ul>
              <li><a href="https://instagram.com/caribbeangatewayedu" className="link">Instagram</a></li>
              <li><a href="https://www.facebook.com/share/14dmYRzE1v9/" className="link">Facebook</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© 2026 Caribbean Gateway Education Services</span>
          <span style={{ display: "flex", gap: 24, alignItems: "center" }}>
            <a href="privacy.html" style={{ color: "inherit" }}>Privacy</a>
            <button
              onClick={() => window.cgOpenConsent && window.cgOpenConsent()}
              style={{ background: "none", border: 0, color: "inherit", font: "inherit", cursor: "pointer", letterSpacing: "inherit", textTransform: "inherit" }}
            >
              Manage cookies
            </button>
          </span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Nav, Footer, BrandMark, IconArrow, Slot });

// Services & pricing
function Services() {
  const services = [
    {
      n: "01",
      t: "Placement",
      sub: "Find the right program",
      b: "We match you with Medical, Dental, or Nursing programs at accredited Georgian universities — English-taught, six-year tracks, no pre-med requirement.",
      details: ["Profile + grades review", "Shortlist of 3–5 programs", "University intros + interviews", "Admissions strategy"]
    },
    {
      n: "02",
      t: "Application & documents",
      sub: "Paperwork, handled",
      b: "Transcripts apostilled, personal statements drafted, recommendation letters chased. We submit, follow up, and confirm.",
      details: ["Document checklist", "Statement drafting", "Apostille / translation", "Direct submission"]
    },
    {
      n: "03",
      t: "Visa & immigration",
      sub: "Get there legally",
      b: "Visa-free entry, residence permit application, biometric appointments, interview prep. We track every deadline.",
      details: ["Permit application", "Appointment scheduling", "Interview coaching", "Renewals"]
    },
    {
      n: "04",
      t: "Housing",
      sub: "A place to land",
      b: "Dorm or private apartment near your campus. We've walked the neighborhoods, met the landlords, signed leases for students.",
      details: ["Neighborhood guide", "Dorm or private", "Lease negotiation", "Furnishing intros"]
    },
    {
      n: "05",
      t: "Arrival",
      sub: "First two weeks",
      b: "Airport pickup, SIM card, bank account, grocery walk. We're with you for the first two weeks until Tbilisi feels survivable.",
      details: ["Airport pickup", "SIM + bank", "Campus orientation", "Local SOS contacts"]
    },
    {
      n: "06",
      t: "Ongoing support",
      sub: "Through graduation",
      b: "USMLE prep guidance, residence permit renewals, family visits, paperwork in semester three you didn't see coming.",
      details: ["Permit renewals", "Exam pathway", "Family logistics", "Reachable via WhatsApp"]
    },
  ];

  return (
    <main className="page" data-screen-label="Services">
      <section className="section" style={{ paddingBottom: 60 }}>
        <div className="container">
          <span className="eyebrow">Services & pricing</span>
          <h1 className="display" style={{ margin: "20px 0 32px", maxWidth: "18ch" }}>
            Six services. <em>One flat fee.</em><br/>
            Pay only when you accept an offer.
          </h1>
          <p className="lede" style={{ maxWidth: "60ch" }}>
            We don't bill per phone call. You pay one fee, end-to-end, and only after you've been accepted
            and decided to enroll. The first conversation is always free.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 0, borderTop: "1px solid var(--navy)" }} className="services-grid-2">
            {services.map((s, i) => (
              <div key={i} style={{
                padding: "40px 32px 44px",
                borderRight: i % 2 === 0 ? "1px solid var(--rule)" : "none",
                borderBottom: "1px solid var(--rule)",
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 18 }}>
                  <span className="mono" style={{ color: "var(--gold)", letterSpacing: "0.14em" }}>{s.n}</span>
                  <span className="mono" style={{ color: "var(--sage-2)", textTransform: "uppercase", letterSpacing: "0.12em", fontSize: 11 }}>{s.sub}</span>
                </div>
                <h3 className="display" style={{ fontSize: 30, margin: "0 0 14px" }}>{s.t}</h3>
                <p style={{ margin: "0 0 22px", color: "var(--muted)", fontSize: 16, lineHeight: 1.6, maxWidth: "50ch" }}>{s.b}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 8 }}>
                  {s.details.map((d, j) => (
                    <li key={j} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 12, fontSize: 14.5, color: "var(--navy)" }}>
                      <span style={{ color: "var(--sage)" }}>—</span>{d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section style={{ background: "var(--navy)", color: "var(--ivory)" }}>
        <div className="container" style={{ padding: "var(--section) var(--gutter)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 56, marginBottom: 56 }} className="two-col">
            <div>
              <span className="eyebrow" style={{ color: "rgba(245,241,232,0.6)" }}>Pricing</span>
            </div>
            <div>
              <h2 className="display" style={{ color: "var(--ivory)", margin: "0 0 20px" }}>
                Transparent. <em>No surprises.</em>
              </h2>
              <p className="body-lg" style={{ color: "rgba(245,241,232,0.78)", margin: 0 }}>
                Pick the level of support that matches your situation. The first call costs nothing,
                and you only commit once we agree it's a fit.
              </p>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="pricing-grid">
            {[
              {
                t: "Essentials",
                p: "$890",
                d: "For self-starters who mostly need placement & paperwork.",
                feat: ["University placement", "Application submission", "Document review", "Visa guidance (advisory)"],
              },
              {
                t: "Full Gateway",
                p: "$1,490",
                d: "Most families pick this. End-to-end, including arrival.",
                feat: ["Everything in Essentials", "Visa & permit (hands-on)", "Housing arranged", "Airport pickup", "First-week setup"],
                hi: true,
              },
              {
                t: "Family Concierge",
                p: "$2,490",
                d: "When parents fly with you, or you want extra hand-holding.",
                feat: ["Everything in Full Gateway", "Family visit logistics", "Bilingual liaisons", "Quarterly check-ins for year 1"],
              },
            ].map((p, i) => (
              <div key={i} style={{
                background: p.hi ? "var(--ivory)" : "transparent",
                color: p.hi ? "var(--navy)" : "var(--ivory)",
                border: p.hi ? "1px solid var(--gold)" : "1px solid rgba(255,255,255,0.18)",
                padding: 32,
                position: "relative",
              }}>
                {p.hi && (
                  <span className="mono" style={{
                    position: "absolute", top: -10, left: 24,
                    background: "var(--gold)", color: "var(--navy)",
                    padding: "3px 10px", letterSpacing: "0.14em",
                    textTransform: "uppercase", fontSize: 10
                  }}>Most picked</span>
                )}
                <div className="mono" style={{ color: p.hi ? "var(--sage-2)" : "rgba(245,241,232,0.6)", textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 14 }}>{p.t}</div>
                <div className="display" style={{ fontSize: 56, margin: "0 0 14px", lineHeight: 1, color: p.hi ? "var(--navy)" : "var(--ivory)" }}>{p.p}</div>
                <p style={{ margin: "0 0 24px", fontSize: 14.5, color: p.hi ? "var(--muted)" : "rgba(245,241,232,0.7)", lineHeight: 1.55 }}>{p.d}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "grid", gap: 10, fontSize: 14.5 }}>
                  {p.feat.map((f, j) => (
                    <li key={j} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 10 }}>
                      <span style={{ color: "var(--gold)" }}>✓</span>{f}
                    </li>
                  ))}
                </ul>
                <a href="#/contact" className={"btn" + (p.hi ? " btn--gold" : "")} style={!p.hi ? { background: "transparent", color: "var(--ivory)", borderColor: "var(--ivory)" } : {}}>
                  Start here <IconArrow />
                </a>
              </div>
            ))}
          </div>

          <p className="mono" style={{ marginTop: 32, color: "rgba(245,241,232,0.55)", textTransform: "uppercase", letterSpacing: "0.12em" }}>
            Tuition is paid directly to the university — typically $4,000–$8,000 / year, separate from our fee.
          </p>
        </div>
      </section>
    </main>
  );
}

window.Services = Services;

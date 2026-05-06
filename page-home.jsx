// Home page
function Home({ navigate, tweaks }) {
  return (
    <main className="page" data-screen-label="Home">
      {/* HERO */}
      <section className="section" style={{ paddingTop: "clamp(60px, 8vw, 110px)", paddingBottom: "clamp(48px, 6vw, 80px)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1.15fr 1fr", gap: 64, alignItems: "end" }} className="hero-grid">
            <div>
              <span className="tag" style={{ marginBottom: 28 }}>For Caribbean & international students</span>
              <h1 className="display" style={{ marginTop: 0, marginBottom: 28 }}>
                Medical school <em>abroad</em>,<br/>
                without the maze.
              </h1>
              <p className="lede" style={{ marginBottom: 36 }}>
                I'm Gabriel — Caribbean-born, Tbilisi-based. I help students enroll in accredited
                medical, dental, and nursing programs in Georgia, then I'm here when they land.
              </p>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <a href="#/contact" className="btn">Book a free call <IconArrow /></a>
                <a href="#/process" className="btn btn--ghost">See how it works</a>
              </div>

              <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, maxWidth: 540 }}>
                {[
                  { n: "$4–8k", l: "tuition / year" },
                  { n: "6 yrs", l: "to MD, no pre-med" },
                  { n: "100%", l: "english-taught" },
                ].map((s, i) => (
                  <div key={i} style={{ borderTop: "1px solid var(--navy)", paddingTop: 14 }}>
                    <div className="display" style={{ fontSize: 30, color: "var(--gold)", lineHeight: 1 }}>{s.n}</div>
                    <div className="mono" style={{ marginTop: 8, color: "var(--sage-2)", textTransform: "uppercase", letterSpacing: "0.12em" }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ position: "relative" }}>
              <Slot label="portrait — gabriel, tbilisi office" height={520} slotId="hero-portrait" />
              <div style={{ position: "absolute", left: -28, bottom: -28, background: "var(--ivory)", border: "1px solid var(--rule)", padding: "16px 20px", maxWidth: 240 }}>
                <div className="mono" style={{ color: "var(--sage-2)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 6 }}>On the ground</div>
                <div style={{ fontFamily: "var(--display)", fontSize: 18, lineHeight: 1.25 }}>
                  We meet you at the airport. We mean it.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE / TRUST */}
      <section style={{ borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)", padding: "22px 0", overflow: "hidden" }}>
        <div className="container" style={{ display: "flex", gap: 48, flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}>
          <span className="mono" style={{ color: "var(--sage-2)", textTransform: "uppercase", letterSpacing: "0.14em" }}>Recognized programs</span>
          <span style={{ fontFamily: "var(--display)", fontSize: 16, color: "var(--navy)" }}>WDOMS listed</span>
          <span style={{ fontFamily: "var(--display)", fontSize: 16, color: "var(--navy)" }}>ECFMG eligible</span>
          <span style={{ fontFamily: "var(--display)", fontSize: 16, color: "var(--navy)" }}>USMLE pathway</span>
          <span style={{ fontFamily: "var(--display)", fontSize: 16, color: "var(--navy)" }}>EU-recognized</span>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 56, marginBottom: 56 }} className="two-col">
            <div>
              <span className="eyebrow">01 — what we handle</span>
            </div>
            <div>
              <h2 className="display" style={{ margin: "0 0 20px" }}>
                Everything between <em>"I'm interested"</em><br/>and "I started classes."
              </h2>
              <p className="body-lg" style={{ margin: 0 }}>
                We're a small team, deliberately. One family at a time, six steps each — placement, paperwork,
                visa, housing, arrival, settling in. No call centers, no handoffs.
              </p>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderTop: "1px solid var(--navy)" }} className="services-grid">
            {[
              { n: "01", t: "Placement", b: "Medical, Dental, Nursing programs at universities we've personally vetted." },
              { n: "02", t: "Application", b: "Documents, statements, transcripts — we prepare and submit it all." },
              { n: "03", t: "Visa & permit", b: "Immigration paperwork, appointment booking, interview prep." },
              { n: "04", t: "Housing", b: "Dorms or private apartments near campus. Walked, not Google-Mapped." },
              { n: "05", t: "Arrival", b: "Airport pickup, SIM card, bank account, first-week orientation." },
              { n: "06", t: "Ongoing", b: "We stay reachable. Stuck on something in semester three? Message us." },
            ].map((s, i) => (
              <div key={i} style={{
                padding: "32px 28px 36px",
                borderRight: (i + 1) % 3 !== 0 ? "1px solid var(--rule)" : "none",
                borderBottom: i < 3 ? "1px solid var(--rule)" : "none",
              }}>
                <div className="mono" style={{ color: "var(--gold)", marginBottom: 18, fontSize: 13, letterSpacing: "0.12em" }}>{s.n}</div>
                <h3 className="display" style={{ fontSize: 24, margin: "0 0 10px" }}>{s.t}</h3>
                <p style={{ margin: 0, color: "var(--muted)", fontSize: 15.5, lineHeight: 1.55 }}>{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US — split panel */}
      <section style={{ background: "var(--navy)", color: "var(--ivory)" }}>
        <div className="container" style={{ padding: "var(--section) var(--gutter)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 80, alignItems: "center" }} className="two-col">
            <div>
              <span className="eyebrow" style={{ color: "rgba(245,241,232,0.6)" }}>02 — why us</span>
              <h2 className="display" style={{ color: "var(--ivory)", margin: "20px 0 28px" }}>
                Not a faceless agency.<br/>
                <em>One person you'll know by name.</em>
              </h2>
              <p className="lede" style={{ color: "rgba(245,241,232,0.85)", marginBottom: 32 }}>
                I grew up in the Caribbean. I've lived abroad for years. I know what it feels like
                to land in a new country with two suitcases and a stack of papers in a language you don't read.
              </p>
              <div style={{ display: "grid", gap: 18 }}>
                {[
                  ["Caribbean roots", "Same culture, same family pressures, same kind of dreams."],
                  ["Tbilisi local", "I live here. I walk into these universities. Not over email."],
                  ["Plain talk", "I'll tell you what's hard, what costs more than you think, what's worth it."],
                ].map(([t, b], i) => (
                  <div key={i} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 18, paddingBottom: 16, borderBottom: "1px solid rgba(255,255,255,0.12)" }}>
                    <span className="mono" style={{ color: "var(--gold)", letterSpacing: "0.16em" }}>0{i+1}</span>
                    <div>
                      <div style={{ fontFamily: "var(--display)", fontSize: 21, marginBottom: 4 }}>{t}</div>
                      <div style={{ color: "rgba(245,241,232,0.7)", fontSize: 15 }}>{b}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ position: "relative" }}>
              <Slot label="photo — tbilisi street, evening" height={460} dark slotId="why-photo-1" />
              <div style={{ position: "absolute", right: -32, top: -32, width: 200 }}>
                <Slot label="campus" height={200} dark slotId="why-photo-2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="section">
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 2.5fr 1fr", gap: 32, alignItems: "start" }}>
          <div className="mono" style={{ color: "var(--sage-2)", textTransform: "uppercase", letterSpacing: "0.14em", paddingTop: 12 }}>
            03 — students<br/>tell it
          </div>
          <blockquote style={{ margin: 0 }}>
            <p className="display" style={{ fontSize: "clamp(28px, 3.4vw, 44px)", margin: 0, color: "var(--navy)" }}>
              "I called from Trinidad. Two months later I was eating khachapuri in my own apartment in Tbilisi.
              <em> Gabriel handled everything I didn't know I had to handle.</em>"
            </p>
            <footer style={{ marginTop: 28, display: "flex", alignItems: "center", gap: 14 }}>
              <Slot label="" height={48} style={{ width: 48, borderRadius: "50%" }} />
              <div>
                <div style={{ fontWeight: 500 }}>Marisa A.</div>
                <div className="mono" style={{ color: "var(--sage-2)", textTransform: "uppercase", letterSpacing: "0.12em", marginTop: 2 }}>
                  Year 2 · Medicine
                </div>
              </div>
            </footer>
          </blockquote>
          <div></div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--ivory-2)", borderTop: "1px solid var(--rule)" }}>
        <div className="container" style={{ padding: "var(--section) var(--gutter)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }} className="two-col">
          <h2 className="display" style={{ margin: 0 }}>
            Free 30-minute call.<br/>
            <em>No commitment.</em>
          </h2>
          <div>
            <p className="body-lg" style={{ marginTop: 0 }}>
              Tell me about the student, what you're hoping for, what's worrying you.
              I'll tell you honestly whether Georgia is the right call — and what it would actually take.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 24 }}>
              <a href="#/contact" className="btn">Book a call <IconArrow /></a>
              <a href="https://wa.me/995555982731" className="btn btn--ghost">WhatsApp now</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

window.Home = Home;

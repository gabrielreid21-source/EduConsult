// About page
function About() {
  return (
    <main className="page" data-screen-label="About">
      <section className="section" style={{ paddingBottom: 60 }}>
        <div className="container">
          <span className="eyebrow">About · Caribbean Gateway</span>
          <h1 className="display" style={{ margin: "20px 0 32px", maxWidth: "16ch" }}>
            One person, one phone, <em>one promise.</em>
          </h1>
          <p className="lede" style={{ maxWidth: "60ch" }}>
            Caribbean Gateway is run by Gabriel Camacho-Reid — Caribbean-born, longtime expat, now based in Tbilisi.
            What started as friends asking "how did you end up there?" became a small consultancy with one focus:
            getting Caribbean and international students into affordable medical school, and through it.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 64 }} className="two-col">
          <div>
            <Slot label="portrait — gabriel" height={560} slotId="about-portrait" />
          </div>
          <div>
            <span className="eyebrow">The story</span>
            <h2 className="display" style={{ margin: "16px 0 24px", fontSize: "clamp(28px, 3.4vw, 40px)" }}>
              Why a Caribbean kid ended up <em>recommending Georgia.</em>
            </h2>
            <div style={{ display: "grid", gap: 22, color: "var(--navy)", fontSize: 17, lineHeight: 1.7, maxWidth: "60ch" }}>
              <p style={{ margin: 0 }}>
                I left home for school years ago. Like a lot of Caribbean students, I watched friends pile up
                debt chasing North American or European medical schools — programs that cost six figures and
                take a decade.
              </p>
              <p style={{ margin: 0 }}>
                Then I moved to Tbilisi. I met students from twenty countries paying $5,000 a year for the same
                degree, taught entirely in English, recognized by the same boards. I started introducing people
                back home. Then introducing more. Eventually it became this.
              </p>
              <p style={{ margin: 0 }}>
                I'm not a recruiter and I don't get a cut from the universities. Families pay me a flat fee for
                end-to-end help. That's the whole business model — it's why I can tell you when a school isn't
                right for your kid.
              </p>
            </div>

            <div style={{ marginTop: 40, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
              {[
                ["Caribbean", "Born and raised"],
                ["Tbilisi", "Based since 2021"],
                ["Languages", "English, conversational Georgian, some Spanish"],
                ["Reachable", "WhatsApp, weekdays + weekends if it's urgent"],
              ].map(([k, v], i) => (
                <div key={i} style={{ borderTop: "1px solid var(--rule)", paddingTop: 14 }}>
                  <div className="mono" style={{ color: "var(--sage-2)", textTransform: "uppercase", letterSpacing: "0.12em", fontSize: 11, marginBottom: 6 }}>{k}</div>
                  <div style={{ fontFamily: "var(--display)", fontSize: 18, lineHeight: 1.3 }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--ivory-2)", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}>
        <div className="container" style={{ padding: "var(--section) var(--gutter)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 56 }} className="two-col">
            <div>
              <span className="eyebrow">Principles</span>
              <h2 className="display" style={{ margin: "16px 0 0", fontSize: "clamp(28px, 3vw, 40px)" }}>
                What I won't <em>compromise on.</em>
              </h2>
            </div>
            <div style={{ display: "grid", gap: 28 }}>
              {[
                ["Honesty over polish", "If Georgia isn't the right fit, I'll say so on the first call. I'd rather lose a client than ship a bad match."],
                ["Small caseload", "I cap how many students I take on each cycle. The whole point is that you can reach me."],
                ["Boots, not brochures", "I visit the universities. I walk the neighborhoods. I'd never send you to a building I haven't stood in."],
                ["After you arrive", "Most agencies disappear at the airport. That's where the real questions start."],
              ].map(([t, b], i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 28, paddingBottom: 28, borderBottom: i < 3 ? "1px solid var(--rule)" : "none" }}>
                  <span className="mono" style={{ color: "var(--gold)", letterSpacing: "0.16em", paddingTop: 4 }}>0{i+1}</span>
                  <div>
                    <h3 className="display" style={{ margin: "0 0 8px", fontSize: 24 }}>{t}</h3>
                    <p style={{ margin: 0, color: "var(--muted)", fontSize: 16, lineHeight: 1.6, maxWidth: "60ch" }}>{b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
          <h2 className="display" style={{ marginTop: 0 }}>
            Want to <em>actually talk?</em>
          </h2>
          <p className="lede" style={{ margin: "16px auto 28px" }}>
            The first call is free, runs about thirty minutes, and you'll leave with a clearer picture
            either way.
          </p>
          <a href="#/contact" className="btn">Book a call <IconArrow /></a>
        </div>
      </section>
    </main>
  );
}

window.About = About;

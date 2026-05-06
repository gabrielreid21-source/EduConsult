// FAQ + Contact pages
function FAQ() {
  const groups = [
    {
      g: "Studying in Georgia",
      qs: [
        ["Do I need to speak Georgian?", "No. The medical, dental, and nursing programs we place students in are taught entirely in English. You'll pick up everyday Georgian naturally — but it isn't required for your studies."],
        ["Are Georgian medical degrees recognized?", "Yes. The universities we work with are listed in the World Directory of Medical Schools (WDOMS) and approved by the ECFMG. Graduates can sit for the USMLE and most regional licensing exams."],
        ["How long is the medical program?", "Six years total, including pre-clinical. You don't need a separate pre-med — you start right after high school."],
        ["Is Georgia safe?", "It's one of the safer countries in Europe. Tbilisi has a growing international student community and is easy to navigate. We'll point out the neighborhoods we recommend (and the ones we don't)."],
      ]
    },
    {
      g: "Cost & money",
      qs: [
        ["How much is tuition?", "Roughly $4,000 to $8,000 USD per year, depending on the university and program. That's paid directly to the school — separate from our fee."],
        ["What does Caribbean Gateway cost?", "We have three flat-fee tiers ($890, $1,490, $2,490). You see our pricing before you commit, and you don't pay until you've been accepted and decided to enroll."],
        ["Hidden fees?", "None. Tuition is the university's. Our fee is what you see on the Services page. Visa fees, apostilles, flights — those are real costs we'll list out for you upfront."],
      ]
    },
    {
      g: "Application & timeline",
      qs: [
        ["How long is the full process?", "From first call to first day of class, usually four to eight weeks — sometimes longer if we're chasing apostilled documents from your home country."],
        ["What documents do I need?", "High school transcripts, valid passport, passport photos, a medical certificate, and depending on the program, English scores or recommendation letters. We send you a tailored checklist."],
        ["Can I apply if I'm already in college?", "Yes. We've placed students who started a different program, gap-year students, and adult learners returning to school. Bring whatever transcripts you have."],
      ]
    },
    {
      g: "After you arrive",
      qs: [
        ["Will you really be there when I land?", "Yes. Airport pickup is part of the Full Gateway and Family Concierge tiers. We drop you at your housing, hand you a SIM card, and check in the next morning."],
        ["What if something goes wrong in semester 3?", "WhatsApp me. The whole point of being on the ground is that I'm reachable. Most week-to-week issues we sort in a few hours."],
        ["Can my family visit?", "Yes — and we help with that. Tbilisi has direct flights from many regional hubs and visa-free entry for most Caribbean nationalities for up to a year."],
      ]
    },
  ];

  return (
    <main className="page" data-screen-label="FAQ">
      <section className="section" style={{ paddingBottom: 40 }}>
        <div className="container">
          <span className="eyebrow">Common questions</span>
          <h1 className="display" style={{ margin: "20px 0 32px", maxWidth: "16ch" }}>
            Things families <em>actually ask.</em>
          </h1>
          <p className="lede" style={{ maxWidth: "60ch" }}>
            If your question isn't here, message me on WhatsApp. I read everything myself.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 2.2fr", gap: 64 }} className="two-col">
          <div className="faq-toc">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 14, position: "sticky", top: 100 }}>
              {groups.map((g, i) => (
                <li key={i}>
                  <a href={"#faq-g-" + i} className="link" style={{ fontFamily: "var(--display)", fontSize: 18 }}>
                    {g.g}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ display: "grid", gap: 56 }}>
            {groups.map((g, i) => (
              <div key={i} id={"faq-g-" + i}>
                <div className="mono" style={{ color: "var(--sage-2)", textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 16, fontSize: 11 }}>
                  0{i+1} — {g.g}
                </div>
                <div style={{ borderTop: "1px solid var(--navy)" }}>
                  {g.qs.map(([q, a], j) => (
                    <details key={j} style={{ borderBottom: "1px solid var(--rule)", padding: "22px 0" }}>
                      <summary style={{
                        listStyle: "none",
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "baseline",
                        fontFamily: "var(--display)",
                        fontSize: 22,
                        gap: 16,
                      }}>
                        <span>{q}</span>
                        <span className="mono" style={{ color: "var(--gold)", fontSize: 18, flexShrink: 0 }}>+</span>
                      </summary>
                      <p style={{ margin: "16px 0 0", color: "var(--muted)", fontSize: 16, lineHeight: 1.7, maxWidth: "60ch" }}>{a}</p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--navy)", color: "var(--ivory)" }}>
        <div className="container" style={{ padding: "var(--section) var(--gutter)", textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
          <h2 className="display" style={{ color: "var(--ivory)", margin: 0 }}>
            Still <em>wondering?</em>
          </h2>
          <p className="lede" style={{ color: "rgba(245,241,232,0.85)", margin: "16px auto 28px" }}>
            Send a message. No script, no follow-up funnel — just a real reply.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#/contact" className="btn btn--gold">Send a message <IconArrow /></a>
            <a href="https://wa.me/995555982731" className="btn" style={{ background: "transparent", color: "var(--ivory)", borderColor: "var(--ivory)" }}>WhatsApp</a>
          </div>
        </div>
      </section>
    </main>
  );
}

function Contact() {
  const [program, setProgram] = useState("");

  return (
    <main className="page" data-screen-label="Contact">
      <section className="section" style={{ paddingBottom: 40 }}>
        <div className="container">
          <span className="eyebrow">Get in touch</span>
          <h1 className="display" style={{ margin: "20px 0 32px", maxWidth: "16ch" }}>
            Tell me about <em>the student.</em>
          </h1>
          <p className="lede" style={{ maxWidth: "60ch" }}>
            Whether it's for you, your son or daughter, or a friend — write a few sentences and I'll
            come back within 24 hours, usually faster.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 80 }} className="two-col">
          {/* FORM — submits to thank-you.html so Google Ads can track the conversion */}
          <div>
            <form
              method="POST"
              action="thank-you.html"
              name="contact"
              data-netlify="true"
              netlify-honeypot="bot-field"
              style={{ display: "grid", gap: 24, maxWidth: 560 }}
            >
              {/* Netlify form name + honeypot */}
              <input type="hidden" name="form-name" value="contact" />
              <p style={{ display: "none" }}>
                <label>Don't fill this out: <input name="bot-field" /></label>
              </p>

              <div className="field">
                <label>Full name</label>
                <input required name="name" type="text" placeholder="e.g. Marisa Allen" />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
                <div className="field">
                  <label>Email</label>
                  <input required name="email" type="email" placeholder="you@email.com" />
                </div>
                <div className="field">
                  <label>Phone / WhatsApp</label>
                  <input name="phone" type="tel" placeholder="+1 ..." />
                </div>
              </div>
              <div className="field">
                <label>Interested in</label>
                <select name="program" value={program} onChange={(e) => setProgram(e.target.value)}>
                  <option value="">Select a program</option>
                  <option>Medicine</option>
                  <option>Dentistry</option>
                  <option>Nursing</option>
                  <option>Not sure yet</option>
                </select>
              </div>
              <div className="field">
                <label>Tell me a bit about the student</label>
                <textarea name="message" placeholder="Age, current school, when you'd like to start, what you've already looked into..."></textarea>
              </div>
              <div style={{ display: "flex", gap: 14, alignItems: "center", marginTop: 8 }}>
                <button className="btn" type="submit">Send message <IconArrow /></button>
                <span className="mono" style={{ color: "var(--sage-2)", textTransform: "uppercase", letterSpacing: "0.12em", fontSize: 11 }}>
                  Reply within 24h
                </span>
              </div>
            </form>
          </div>

          {/* SIDE */}
          <aside style={{ display: "grid", gap: 24, alignContent: "start" }}>
            <div className="card">
              <div className="mono" style={{ color: "var(--sage-2)", textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 12, fontSize: 11 }}>Faster</div>
              <h3 className="display" style={{ margin: "0 0 14px", fontSize: 26 }}>WhatsApp</h3>
              <a href="https://wa.me/995555982731" className="link" style={{ fontFamily: "var(--display)", fontSize: 19 }}>
                +995 555 98 27 31
              </a>
              <p style={{ margin: "12px 0 0", color: "var(--muted)", fontSize: 14.5 }}>
                Voice notes welcome. Reply within a few hours, weekdays.
              </p>
            </div>

            <div className="card">
              <div className="mono" style={{ color: "var(--sage-2)", textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 12, fontSize: 11 }}>Email</div>
              <a href="mailto:Gcamachoreid@icloud.com" className="link" style={{ fontFamily: "var(--display)", fontSize: 19 }}>
                Gcamachoreid@icloud.com
              </a>
            </div>

            <div className="card">
              <div className="mono" style={{ color: "var(--sage-2)", textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 12, fontSize: 11 }}>In person</div>
              <div style={{ fontFamily: "var(--display)", fontSize: 19 }}>Tbilisi, Georgia</div>
              <p style={{ margin: "8px 0 0", color: "var(--muted)", fontSize: 14.5 }}>
                Office visits by appointment. Coffee on me.
              </p>
            </div>

            <div className="card" style={{ background: "var(--navy)", color: "var(--ivory)", borderColor: "var(--navy)" }}>
              <div className="mono" style={{ color: "rgba(245,241,232,0.6)", textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 12, fontSize: 11 }}>Hours</div>
              <div style={{ display: "grid", gap: 6, fontSize: 15 }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}><span>Mon — Fri</span><span style={{ fontFamily: "var(--mono)" }}>9:00 — 19:00</span></div>
                <div style={{ display: "flex", justifyContent: "space-between" }}><span>Sat</span><span style={{ fontFamily: "var(--mono)" }}>By request</span></div>
                <div style={{ display: "flex", justifyContent: "space-between" }}><span>Sun</span><span style={{ fontFamily: "var(--mono)" }}>Closed</span></div>
              </div>
              <p style={{ margin: "16px 0 0", color: "rgba(245,241,232,0.7)", fontSize: 13.5 }}>
                Tbilisi is GMT+4. If you're in the Caribbean, mornings work best for both of us.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

Object.assign(window, { FAQ, Contact });

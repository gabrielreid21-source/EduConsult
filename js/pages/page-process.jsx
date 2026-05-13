// Process page
function Process() {
  const steps = [
    {
      n: "01",
      t: "The free call",
      time: "30 min",
      b: "We talk on WhatsApp or Zoom. You tell me the student, the family situation, the worries. I tell you whether Georgia is realistically the right move, what timeline makes sense, and what it would cost.",
      out: "Honest yes / no / not yet."
    },
    {
      n: "02",
      t: "Profile & shortlist",
      time: "Week 1",
      b: "Send me transcripts, English scores if you have them, and a quick note about preferences. I come back with three to five universities I'd actually recommend, with reasoning.",
      out: "A shortlist you can show your family."
    },
    {
      n: "03",
      t: "Application package",
      time: "Weeks 2–3",
      b: "We draft your statement together, get documents notarized and apostilled, line up recommendation letters, and translate what needs translating.",
      out: "A complete, submitted application."
    },
    {
      n: "04",
      t: "Acceptance & contract",
      time: "Weeks 3–5",
      b: "Universities respond. We compare offers, you choose, you sign. The Caribbean Gateway fee is paid here — only after you have an offer in hand.",
      out: "Signed enrollment, paid first installment."
    },
    {
      n: "05",
      t: "Visa & travel",
      time: "Weeks 5–7",
      b: "Residence permit paperwork, biometric appointment, flights booked. I send you a packing checklist that's specific to a Tbilisi winter, because that one matters.",
      out: "Tickets, paperwork, plan."
    },
    {
      n: "06",
      t: "Arrival",
      time: "Week 8",
      b: "I meet you at Tbilisi airport. Drive to your housing. SIM card the same day. Bank account, university registration, and a walk to the closest grocery store within 72 hours.",
      out: "You're settled. Classes start."
    },
    {
      n: "07",
      t: "First semester check-ins",
      time: "Months 1–6",
      b: "Monthly WhatsApp check-ins. If something breaks — paperwork, housing, homesickness — we sort it. You don't need to figure out Georgian bureaucracy alone.",
      out: "A working life, not just a degree."
    },
  ];

  return (
    <main className="page" data-screen-label="Process">
      <section className="section" style={{ paddingBottom: 56 }}>
        <div className="container">
          <span className="eyebrow">How it works</span>
          <h1 className="display" style={{ margin: "20px 0 32px", maxWidth: "16ch" }}>
            Seven steps. <em>About eight weeks.</em>
          </h1>
          <p className="lede" style={{ maxWidth: "62ch" }}>
            From the first call to your first day of class is usually four to eight weeks, depending on
            the intake and how quickly we can get your documents apostilled. Here's exactly what happens.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="container">
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", left: 70, top: 0, bottom: 0, width: 1, background: "var(--rule)" }} className="process-line"></div>

            {steps.map((s, i) => (
              <div key={i} style={{
                display: "grid",
                gridTemplateColumns: "100px 1fr 1.4fr",
                gap: 40,
                padding: "44px 0",
                borderBottom: i < steps.length - 1 ? "1px solid var(--rule)" : "none",
                position: "relative",
              }} className="process-row">
                <div style={{ position: "relative" }}>
                  <span style={{
                    position: "absolute", left: 60, top: 4,
                    width: 22, height: 22, borderRadius: "50%",
                    background: "var(--ivory)", border: "1px solid var(--navy)",
                    display: "grid", placeItems: "center"
                  }}>
                    <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--gold)" }}></span>
                  </span>
                  <span className="mono" style={{ color: "var(--sage-2)", letterSpacing: "0.16em", fontSize: 12 }}>
                    {s.n}
                  </span>
                </div>

                <div>
                  <div className="mono" style={{ color: "var(--gold)", textTransform: "uppercase", letterSpacing: "0.14em", fontSize: 11, marginBottom: 10 }}>{s.time}</div>
                  <h3 className="display" style={{ fontSize: 30, margin: 0 }}>{s.t}</h3>
                </div>

                <div>
                  <p style={{ margin: "0 0 16px", fontSize: 16.5, lineHeight: 1.65, color: "var(--navy)" }}>{s.b}</p>
                  <div style={{ display: "inline-flex", gap: 10, alignItems: "center", padding: "8px 14px", background: "var(--ivory-2)", border: "1px solid var(--rule)", borderRadius: 999 }}>
                    <span className="mono" style={{ color: "var(--sage-2)", textTransform: "uppercase", letterSpacing: "0.14em", fontSize: 10 }}>You leave with</span>
                    <span style={{ fontSize: 14, fontStyle: "italic", fontFamily: "var(--display)" }}>{s.out}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--ivory-2)", borderTop: "1px solid var(--rule)" }}>
        <div className="container" style={{ padding: "var(--section) var(--gutter)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }} className="two-col">
          <h2 className="display" style={{ margin: 0 }}>
            Want to start <em>step one?</em>
          </h2>
          <div>
            <p className="body-lg" style={{ marginTop: 0 }}>
              No money changes hands until you have a university offer. The first call is free,
              honest, and short.
            </p>
            <a href="#/contact" className="btn" style={{ marginTop: 8 }}>Book the free call <IconArrow /></a>
          </div>
        </div>
      </section>
    </main>
  );
}

window.Process = Process;

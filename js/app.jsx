// App shell — hash routing + Tweaks panel
const ROUTES = {
  "": "home",
  "/": "home",
  "/about": "about",
  "/services": "services",
  "/process": "process",
  "/faq": "faq",
  "/contact": "contact",
};

function getRoute() {
  const h = window.location.hash.replace(/^#/, "");
  return ROUTES[h] || "home";
}

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "ivory-navy",
  "accent": "gold",
  "displayFont": "Newsreader",
  "uiFont": "Inter Tight",
  "density": "regular",
  "showImages": true
}/*EDITMODE-END*/;

const PALETTES = {
  "ivory-navy": { ivory: "#f5f1e8", ivory2: "#efe9da", paper: "#fbf8f1", navy: "#0f1f33", navy2: "#1a2d44", sage: "#7a8f7a", sage2: "#5e7361", muted: "#5b6473" },
  "ivory-forest": { ivory: "#f3f0e6", ivory2: "#e9e3d2", paper: "#faf7ee", navy: "#1d2e22", navy2: "#28402f", sage: "#7d8a73", sage2: "#5b6957", muted: "#566254" },
  "stone-burgundy": { ivory: "#f1ece2", ivory2: "#e7dfcb", paper: "#f8f3e7", navy: "#3a1518", navy2: "#522024", sage: "#9a8779", sage2: "#766658", muted: "#5e544a" },
  "porcelain-charcoal": { ivory: "#f6f4ef", ivory2: "#ebe7df", paper: "#fbf9f4", navy: "#1c1c1c", navy2: "#2a2a2a", sage: "#8a8a82", sage2: "#666660", muted: "#555" },
};

const ACCENTS = {
  "gold": "#b8924a",
  "clay": "#c47a5a",
  "sage": "#7a8f7a",
  "rust": "#a85a3a",
};

const FONT_PAIRS = {
  "Newsreader": "Newsreader",
  "Source Serif 4": "Source Serif 4",
  "Cormorant Garamond": "Cormorant Garamond",
  "Libre Caslon Text": "Libre Caslon Text",
};
const UI_FONTS = {
  "Inter Tight": "Inter Tight",
  "Manrope": "Manrope",
  "Geist": "Geist",
};

function App() {
  const [route, setRoute] = useState(getRoute());
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffect(() => {
    const onHash = () => {
      setRoute(getRoute());
      window.scrollTo({ top: 0, behavior: "instant" });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // Apply tweaks to CSS variables
  useEffect(() => {
    const r = document.documentElement;
    const p = PALETTES[tweaks.palette] || PALETTES["ivory-navy"];
    r.style.setProperty("--ivory", p.ivory);
    r.style.setProperty("--ivory-2", p.ivory2);
    r.style.setProperty("--paper", p.paper);
    r.style.setProperty("--navy", p.navy);
    r.style.setProperty("--navy-2", p.navy2);
    r.style.setProperty("--sage", p.sage);
    r.style.setProperty("--sage-2", p.sage2);
    r.style.setProperty("--muted", p.muted);
    r.style.setProperty("--gold", ACCENTS[tweaks.accent] || ACCENTS.gold);

    r.style.setProperty("--display", `"${tweaks.displayFont}", "Source Serif 4", Georgia, serif`);
    r.style.setProperty("--sans", `"${tweaks.uiFont}", "Inter", system-ui, sans-serif`);

    if (tweaks.density === "compact") {
      r.style.setProperty("--section", "clamp(56px, 7vw, 88px)");
    } else if (tweaks.density === "spacious") {
      r.style.setProperty("--section", "clamp(96px, 13vw, 168px)");
    } else {
      r.style.setProperty("--section", "clamp(72px, 10vw, 128px)");
    }
  }, [tweaks]);

  const navigate = (k) => setRoute(k);

  let Page;
  switch (route) {
    case "about": Page = window.About; break;
    case "services": Page = window.Services; break;
    case "process": Page = window.Process; break;
    case "faq": Page = window.FAQ; break;
    case "contact": Page = window.Contact; break;
    default: Page = window.Home;
  }

  return (
    <>
      <Nav route={route} navigate={navigate} />
      <Page navigate={navigate} tweaks={tweaks} />
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection title="Palette">
          <TweakRadio
            label="Theme"
            value={tweaks.palette}
            options={[
              { value: "ivory-navy", label: "Ivory · Navy" },
              { value: "ivory-forest", label: "Ivory · Forest" },
              { value: "stone-burgundy", label: "Stone · Burgundy" },
              { value: "porcelain-charcoal", label: "Porcelain · Char." },
            ]}
            onChange={v => setTweak("palette", v)}
          />
          <TweakColor
            label="Accent"
            value={tweaks.accent}
            options={["gold", "clay", "sage", "rust"].map(k => ACCENTS[k])}
            onChange={hex => {
              const key = Object.keys(ACCENTS).find(k => ACCENTS[k] === hex);
              setTweak("accent", key || "gold");
            }}
          />
        </TweakSection>

        <TweakSection title="Type">
          <TweakSelect
            label="Display font"
            value={tweaks.displayFont}
            options={Object.keys(FONT_PAIRS).map(f => ({ value: f, label: f }))}
            onChange={v => setTweak("displayFont", v)}
          />
          <TweakSelect
            label="UI font"
            value={tweaks.uiFont}
            options={Object.keys(UI_FONTS).map(f => ({ value: f, label: f }))}
            onChange={v => setTweak("uiFont", v)}
          />
        </TweakSection>

        <TweakSection title="Layout">
          <TweakRadio
            label="Density"
            value={tweaks.density}
            options={[
              { value: "compact", label: "Compact" },
              { value: "regular", label: "Regular" },
              { value: "spacious", label: "Spacious" },
            ]}
            onChange={v => setTweak("density", v)}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

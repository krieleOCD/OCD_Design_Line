/* Orange Cyberdefense marketing site — top navigation bar. */
const { Logo, Button } = window.OrangeCyberdefenseDesignSystem_e63a01;

function SiteHeader({ onNav }) {
  const [open, setOpen] = React.useState(false);
  const links = ["Services", "Threat Intelligence", "Insights", "About"];
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 20, background: "var(--ocd-black)", borderBottom: "1px solid rgba(255,255,255,0.12)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px", height: 72, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="#" onClick={(e) => { e.preventDefault(); onNav && onNav("home"); }} style={{ display: "flex" }}>
          <Logo variant="master" tone="light" height={30} basePath="../../assets/logos" />
        </a>
        <nav style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {links.map((l) => (
            <a key={l} href="#" onClick={(e) => e.preventDefault()}
              style={{ color: "var(--ocd-white)", font: "500 15px/1 var(--font-family-base)", textDecoration: "none", opacity: 0.85 }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = 0.85)}>
              {l}
            </a>
          ))}
          <Button variant="primary" size="sm" onClick={() => onNav && onNav("contact")}>Get protected</Button>
        </nav>
      </div>
    </header>
  );
}
window.SiteHeader = SiteHeader;

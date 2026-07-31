/* CTA banner + site footer. */
const { Button, HeadlineDuo, Logo, RingMark, Overline } = window.OrangeCyberdefenseDesignSystem_e63a01;

function CtaBanner({ onNav }) {
  return (
    <section style={{ background: "var(--ocd-black)", color: "var(--ocd-white)", position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "88px 32px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 40 }}>
        <div>
          <HeadlineDuo lead="Under attack?" accent="We can help." leadColor="var(--ocd-white)" size={52} />
          <p style={{ font: "400 18px/1.6 var(--font-family-base)", color: "rgba(255,255,255,0.78)", maxWidth: 460, margin: "20px 0 30px" }}>
            Our incident-response team is on standby 24/7. Reach us and we mobilise immediately.
          </p>
          <div style={{ display: "flex", gap: 14 }}>
            <Button variant="primary" size="lg" onClick={() => onNav && onNav("contact")}>Contact the CERT</Button>
            <Button variant="inverse" size="lg">+49 800 000 0000</Button>
          </div>
        </div>
        <RingMark size={180} style={{ flex: "0 0 auto" }} />
      </div>
    </section>
  );
}

function SiteFooter() {
  const cols = {
    Services: ["Managed Detection & Response", "Threat Intelligence", "Incident Response", "Consulting"],
    Company: ["About", "Careers", "Newsroom", "Contact"],
    Resources: ["Security Navigator", "Blog", "Webinars", "CERT advisories"],
  };
  return (
    <footer style={{ background: "var(--grey-850)", color: "var(--ocd-white)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 32px 40px", display: "grid", gridTemplateColumns: "1.4fr repeat(3,1fr)", gap: 32 }}>
        <div>
          <Logo variant="master" tone="light" height={30} basePath="../../assets/logos" />
          <p style={{ font: "400 14px/1.6 var(--font-family-base)", color: "rgba(255,255,255,0.6)", maxWidth: 260, marginTop: 18 }}>
            The specialised cyber-security arm of the Orange Group.
          </p>
        </div>
        {Object.entries(cols).map(([h, links]) => (
          <div key={h}>
            <Overline color="rgba(255,255,255,0.5)">{h}</Overline>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 16 }}>
              {links.map((l) => (
                <a key={l} href="#" onClick={(e) => e.preventDefault()} style={{ color: "rgba(255,255,255,0.8)", font: "400 14px/1.3 var(--font-family-base)", textDecoration: "none" }}>{l}</a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "20px 32px", display: "flex", justifyContent: "space-between", font: "400 13px/1 var(--font-family-base)", color: "rgba(255,255,255,0.5)" }}>
          <span>© 2026 Orange Cyberdefense</span>
          <span>Privacy · Terms · Cookies</span>
        </div>
      </div>
    </footer>
  );
}
window.CtaBanner = CtaBanner;
window.SiteFooter = SiteFooter;

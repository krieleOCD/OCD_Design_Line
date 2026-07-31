/* Trust bar + services grid. */
const { Overline, Card, Petal } = window.OrangeCyberdefenseDesignSystem_e63a01;

function StatBar() {
  const stats = [["2,700+", "security experts"], ["24/7", "SOC coverage"], ["17", "countries"], ["50bn+", "events analysed / day"]];
  return (
    <section style={{ background: "var(--ocd-orange)", color: "var(--ocd-white)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "36px 32px", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
        {stats.map(([n, l]) => (
          <div key={l}>
            <div style={{ font: "700 40px/1 var(--font-family-display)", letterSpacing: "-0.02em" }}>{n}</div>
            <div style={{ font: "500 15px/1.3 var(--font-family-base)", marginTop: 8, opacity: 0.92 }}>{l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  const items = [
    ["Managed Detection & Response", "Continuous monitoring, threat hunting and rapid containment from our global CyberSOCs."],
    ["Threat Intelligence", "Actionable intelligence on the actors and campaigns targeting your sector."],
    ["Incident Response", "A CERT on standby to contain, eradicate and recover when it matters most."],
    ["Security Consulting", "Strategy, assessments and compliance — from risk posture to board-ready roadmap."],
    ["Cloud Security", "Protect workloads across hybrid and multi-cloud without slowing delivery."],
    ["Vulnerability Management", "Find, prioritise and close the gaps before an attacker does."],
  ];
  return (
    <section style={{ background: "var(--ocd-white)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "88px 32px" }}>
        <Overline>What we do</Overline>
        <h2 style={{ font: "700 44px/1.05 var(--font-family-display)", letterSpacing: "-0.02em", margin: "16px 0 8px", maxWidth: 640 }}>
          End-to-end cyber security, run by people.
        </h2>
        <p style={{ font: "400 18px/1.6 var(--font-family-base)", color: "var(--color-text-secondary)", maxWidth: 560, marginBottom: 44 }}>
          One partner across the full detection-to-response lifecycle.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
          {items.map(([t, d], i) => (
            <Card key={t} accent style={{ minHeight: 190, display: "flex", flexDirection: "column" }}>
              <Petal shape="quarter" corner="tl" color="var(--ocd-orange)" size={34} style={{ marginBottom: 18 }} />
              <h3 style={{ font: "700 20px/1.2 var(--font-family-display)", letterSpacing: "-0.01em", marginBottom: 10 }}>{t}</h3>
              <p style={{ font: "400 15px/1.55 var(--font-family-base)", color: "var(--color-text-secondary)" }}>{d}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
window.StatBar = StatBar;
window.Services = Services;

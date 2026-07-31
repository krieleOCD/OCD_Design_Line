/* Hero — black field, quarter-circle photo mask, two-tone headline, orange CTA. */
const { Button, Overline, HeadlineDuo, Petal, RingMark } = window.OrangeCyberdefenseDesignSystem_e63a01;

function Hero({ onNav }) {
  return (
    <section style={{ background: "var(--ocd-black)", color: "var(--ocd-white)", position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 32px 96px", display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 48, alignItems: "center" }}>
        <div>
          <Overline>Managed Detection &amp; Response</Overline>
          <div style={{ height: 20 }} />
          <HeadlineDuo lead={["Threats evolve.", ""]} accent={["So does", "your defence."]} leadColor="var(--ocd-white)" size={64} />
          <p style={{ font: "400 18px/1.6 var(--font-family-base)", color: "rgba(255,255,255,0.78)", maxWidth: 460, margin: "24px 0 32px" }}>
            We detect, investigate and respond to cyber threats around the clock — so your business keeps moving while we watch the perimeter.
          </p>
          <div style={{ display: "flex", gap: 14 }}>
            <Button variant="primary" size="lg" onClick={() => onNav && onNav("contact")}>Talk to an expert</Button>
            <Button variant="inverse" size="lg" onClick={() => onNav && onNav("services")}>Explore services</Button>
          </div>
        </div>
        <div style={{ position: "relative", height: 420 }}>
          <div style={{ position: "absolute", right: 0, top: 0, width: 380, height: 380, borderRadius: "999px 0 0 0", overflow: "hidden" }}>
            <img src="../../assets/visuals/visual-04.png" alt="Security analysts at work" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
          <div style={{ position: "absolute", left: 24, bottom: 24 }}>
            <RingMark size={130} />
          </div>
          <Petal shape="quarter" corner="tr" color="var(--ocd-orange)" size={90} style={{ position: "absolute", left: 200, top: 0 }} />
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;

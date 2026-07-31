/* Contact / "get protected" screen — form built from form primitives. */
const { Input, Select, Checkbox, Button, Overline, HeadlineDuo, Petal } = window.OrangeCyberdefenseDesignSystem_e63a01;

function ContactScreen({ onNav }) {
  const [sent, setSent] = React.useState(false);
  return (
    <section style={{ background: "var(--ocd-white)", minHeight: "calc(100vh - 72px)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "72px 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }}>
        <div style={{ position: "relative" }}>
          <Overline>Talk to us</Overline>
          <div style={{ height: 16 }} />
          <HeadlineDuo lead="Under attack?" accent="Let's respond." size={52} />
          <p style={{ font: "400 18px/1.6 var(--font-family-base)", color: "var(--color-text-secondary)", maxWidth: 420, margin: "24px 0 32px" }}>
            Tell us what you're seeing. A security expert will be in touch within one business hour — sooner if it's an active incident.
          </p>
          <Petal shape="half" src="../../assets/visuals/visual-02.png" size={320} style={{ marginTop: 12 }} />
        </div>
        <div>
          {sent ? (
            <div style={{ border: "1px solid var(--color-border)", borderTop: "4px solid var(--ocd-orange)", padding: 40 }}>
              <h3 style={{ font: "700 26px/1.1 var(--font-family-display)", marginBottom: 12 }}>Message received.</h3>
              <p style={{ font: "400 16px/1.6 var(--font-family-base)", color: "var(--color-text-secondary)", marginBottom: 24 }}>
                Thanks — a member of our team will reach out shortly. For active incidents, call the CERT line now.
              </p>
              <Button variant="secondary" onClick={() => { setSent(false); onNav && onNav("home"); }}>Back to home</Button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                <Input label="First name" placeholder="Jordan" required />
                <Input label="Last name" placeholder="Meyer" required />
              </div>
              <Input label="Work email" type="email" placeholder="you@company.com" required />
              <Select label="How can we help?">
                <option>Managed Detection &amp; Response</option>
                <option>Report an active incident</option>
                <option>Threat Intelligence</option>
                <option>Security consulting</option>
              </Select>
              <Input label="Company domain" placeholder="company.com" />
              <Checkbox label="This is an active security incident" />
              <Button variant="primary" size="lg" full type="submit">Send message</Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
window.ContactScreen = ContactScreen;

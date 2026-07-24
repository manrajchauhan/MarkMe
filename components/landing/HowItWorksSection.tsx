export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Write in Plain Markdown",
      description:
        "Open MarkMe instantly in your browser. Start with starter notes or a fresh blank page. Format naturally using standard Markdown syntax.",
    },
    {
      number: "02",
      title: "Adjust Split & Live Preview",
      description:
        "Watch your text convert live into editorial prose. Drag the interactive split handle to expand your editor or preview according to your focus.",
    },
    {
      number: "03",
      title: "Autosave & Download",
      description:
        "Your progress is continuously saved to browser storage. Export your formatted notes as standard `.md` files whenever you are ready.",
    },
  ];

  return (
    <section id="how-it-works" className="landing-how">
      <div className="section-header">
        <p className="eyebrow">SIMPLE WORKFLOW</p>
        <h2>How MarkMe Works</h2>
        <p className="section-desc">
          No signups, complex setups, or cloud dependencies. Just open and write.
        </p>
      </div>

      <div className="steps-container">
        {steps.map((step, idx) => (
          <div key={idx} className="step-card">
            <span className="step-number">{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

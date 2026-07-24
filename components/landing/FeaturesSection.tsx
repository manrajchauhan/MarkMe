import { Eye, Columns, ShieldCheck, Download } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: <Eye size={24} className="feature-lucide-icon" />,
      title: "Sanitized Live Preview",
      description:
        "Instant, secure HTML rendering with DOMPurify sanitization. See headers, lists, code blocks, and blockquotes update in real-time as you type.",
    },
    {
      icon: <Columns size={24} className="feature-lucide-icon" />,
      title: "Interactive Split Resizing",
      description:
        "Drag the divider boundary to customize your editor and preview split ratio. Double-click to reset back to a perfect balance.",
    },
    {
      icon: <ShieldCheck size={24} className="feature-lucide-icon" />,
      title: "100% Local & Private",
      description:
        "Your drafts never leave your browser. Automatic local storage saving ensures your ideas are always preserved securely on your machine.",
    },
    {
      icon: <Download size={24} className="feature-lucide-icon" />,
      title: "Import & Export Freedom",
      description:
        "Drag and drop any existing `.md` or `.txt` file into the editor, and download your finished notes with a single click.",
    },
  ];

  return (
    <section id="features" className="landing-features">
      <div className="section-header">
        <p className="eyebrow">DESIGNED FOR FOCUS</p>
        <h2>Everything you need for clean writing</h2>
        <p className="section-desc">
          Crafted with editorial precision so you can spend less time managing files and more time writing.
        </p>
      </div>

      <div className="features-grid">
        {features.map((item, idx) => (
          <div key={idx} className="feature-card">
            <div className="feature-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

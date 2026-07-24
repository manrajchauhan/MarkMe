import Link from "next/link";
import { useState } from "react";

export function HeroSection() {
  const [demoText, setDemoText] = useState(
    "# Clear thinking begins here\n\nWrite in plain **Markdown** and watch your words transform instantly into clean, publication-ready typography.\n\n- [x] Distraction-free editing\n- [x] Live side-by-side preview\n- [x] 100% private local storage"
  );

  return (
    <section className="landing-hero">
      <div className="hero-badge">
        <span className="sparkle">✦</span>
        <span>A quiet, browser-first workspace</span>
      </div>

      <h1 className="hero-title">
        Markdown, made <span className="hero-highlight">memorable.</span>
      </h1>

      <p className="hero-subtitle">
        MarkMe pairs a focused writing area with an instant live preview, flexible split-screen resizing, and automatic browser-local saving. No signups, no noise.
      </p>

      <div className="hero-cta-group">
        <Link href="/app" className="button dark hero-cta-primary">
          Launch Workspace <span aria-hidden>→</span>
        </Link>
        <a href="#how-it-works" className="button ghost hero-cta-secondary">
          See How It Works
        </a>
      </div>

      {/* Interactive Mockup Preview */}
      <div className="hero-demo-wrapper">
        <div className="demo-window-bar">
          <div className="demo-dots">
            <span className="dot dot-red" />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
          </div>
          <span className="demo-title">MarkMe Workspace — Live Demo</span>
          <span className="demo-badge">Autosaved</span>
        </div>

        <div className="demo-workspace-split">
          <div className="demo-pane demo-editor-pane">
            <div className="pane-header">
              <span className="pane-tag">EDITOR</span>
              <span className="pane-wordcount">{demoText.trim() ? demoText.trim().split(/\s+/).length : 0} words</span>
            </div>
            <textarea
              className="demo-editor"
              value={demoText}
              onChange={(e) => setDemoText(e.target.value)}
              placeholder="Type your markdown here..."
            />
          </div>

          <div className="demo-divider">
            <div className="demo-resizer" />
          </div>

          <div className="demo-pane demo-preview-pane">
            <div className="pane-header">
              <span className="pane-tag">LIVE PREVIEW</span>
              <span className="pane-status">● Realtime</span>
            </div>
            <div className="demo-preview-prose">
              <h1>Clear thinking begins here</h1>
              <p>
                Write in plain <strong>Markdown</strong> and watch your words transform instantly into clean, publication-ready typography.
              </p>
              <ul>
                <li>✓ Distraction-free editing</li>
                <li>✓ Live side-by-side preview</li>
                <li>✓ 100% private local storage</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

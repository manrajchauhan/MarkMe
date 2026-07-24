import Link from "next/link";

export function LandingFooter() {
  return (
    <footer className="landing-footer" id="about">
      <div className="footer-top">
        <div className="footer-brand">
          <Link href="/" className="brand">
            <span className="brand-mark">M</span>
            <span>MarkMe</span>
          </Link>
          <p>A warm, browser-first Markdown workspace for focused thinking.</p>
        </div>

        <div className="footer-links">
          <div className="link-group">
            <h4>Workspace</h4>
            <Link href="/app">Launch App</Link>
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
          </div>

          <div className="link-group">
            <h4>Creator</h4>
            <p>
              Designed and developed by <strong>Manraj Chauhan</strong>
            </p>
            <p className="copyright">© 2026 MarkMe. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

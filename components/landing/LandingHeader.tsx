import Link from "next/link";

export function LandingHeader() {
  return (
    <header className="landing-topbar">
      <Link href="/" className="brand" aria-label="MarkMe Home">
        <span className="brand-mark">M</span>
        <span>MarkMe</span>
      </Link>

      <nav className="landing-nav">
        <a href="#features">Features</a>
        <a href="#how-it-works">How It Works</a>
        <a href="#about">About</a>
      </nav>

      <div className="landing-actions">
        <Link href="/app" className="button dark hero-button">
          Open Workspace <span aria-hidden>→</span>
        </Link>
      </div>
    </header>
  );
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
          <span>Open Workspace</span>
          <ArrowRight size={15} />
        </Link>
      </div>
    </header>
  );
}

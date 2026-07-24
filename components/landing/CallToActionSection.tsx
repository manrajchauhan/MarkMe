import Link from "next/link";
import { ArrowRight, Feather } from "lucide-react";

export function CallToActionSection() {
  return (
    <section className="landing-cta">
      <div className="cta-box">
        <div className="cta-badge">
          <Feather size={14} className="sparkle" />
          <span className="eyebrow">READY TO WRITE?</span>
        </div>
        <h2>Your quiet writing space is waiting.</h2>
        <p className="cta-desc">
          No signups, no fees, no tracking. Start drafting your next great idea in seconds.
        </p>
        <Link href="/app" className="button dark cta-button">
          <span>Open MarkMe Workspace</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}

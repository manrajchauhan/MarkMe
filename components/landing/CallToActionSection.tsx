import Link from "next/link";

export function CallToActionSection() {
  return (
    <section className="landing-cta">
      <div className="cta-box">
        <p className="eyebrow">READY TO WRITE?</p>
        <h2>Your quiet writing space is waiting.</h2>
        <p className="cta-desc">
          No signups, no fees, no tracking. Start drafting your next great idea in seconds.
        </p>
        <Link href="/app" className="button dark cta-button">
          Open MarkMe Workspace <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}

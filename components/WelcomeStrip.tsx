import { WelcomeStripProps } from "../lib/types";

export function WelcomeStrip({ onNewNote }: WelcomeStripProps) {
  return (
    <section className="welcome-strip">
      <p>
        <span className="eyebrow">YOUR QUIET CORNER</span> Write it down before the
        thought gets away.
      </p>
      <button onClick={onNewNote}>
        New note <span aria-hidden>+</span>
      </button>
    </section>
  );
}

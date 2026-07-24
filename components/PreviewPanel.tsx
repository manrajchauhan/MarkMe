import { PreviewPanelProps } from "../lib/types";

export function PreviewPanel({ html }: PreviewPanelProps) {
  return (
    <section className="preview-panel">
      <div className="preview-heading">
        <p className="eyebrow">LIVE PREVIEW</p>
        <span className="preview-dot">● Up to date</span>
      </div>

      <article
        className="prose"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      <div className="preview-quote">
        <span>✦</span>
        <p>Make it clear, then make it yours.</p>
      </div>
    </section>
  );
}

import { LibraryPanelProps } from "../lib/types";

export function LibraryPanel({
  documentName,
  examples,
  onNewNote,
  onSelectExample,
}: LibraryPanelProps) {
  return (
    <aside className="library-panel">
      <div className="panel-heading">
        <div>
          <p className="eyebrow">LIBRARY</p>
          <h2>Your notebooks</h2>
        </div>
        <button
          className="round-button"
          onClick={onNewNote}
          aria-label="New note"
        >
          +
        </button>
      </div>

      <button className="current-note">
        <span className="note-icon">✦</span>
        <span>
          <strong>{documentName}</strong>
          <small>Just now</small>
        </span>
        <span className="more">•••</span>
      </button>

      <div className="library-section">
        <p className="eyebrow">START SOMEWHERE</p>
        {examples.map((example) => (
          <button
            className="example-note"
            key={example.name}
            onClick={() => onSelectExample(example.name, example.content)}
          >
            <span>
              <strong>{example.name}</strong>
              <small>{example.kind}</small>
            </span>
            <span>→</span>
          </button>
        ))}
      </div>

      <div className="library-footer">
        <span className="avatar">MC</span>
        <span>
          <strong>Manraj Chauhan</strong>
          <small>Developer & maker</small>
        </span>
        <button aria-label="Settings">⚙</button>
      </div>
    </aside>
  );
}

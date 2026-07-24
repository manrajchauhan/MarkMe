import { EditorPanelProps } from "../lib/types";
import { wordCount } from "../lib/utils";

export function EditorPanel({
  documentName,
  content,
  onTitleChange,
  onContentChange,
}: EditorPanelProps) {
  function applyFormatting(suffix: string) {
    onContentChange(`${content}${suffix}`);
  }

  return (
    <section className="editor-panel">
      <div className="document-toolbar">
        <div className="document-title">
          <input
            value={documentName}
            onChange={(event) => onTitleChange(event.target.value)}
            aria-label="Document title"
          />
          <span>{wordCount(content)} words</span>
        </div>

        <div className="editor-tools">
          <button
            title="Bold"
            onClick={() => applyFormatting("**bold thought**")}
          >
            B
          </button>
          <button
            title="Italic"
            onClick={() => applyFormatting("*small emphasis*")}
          >
            <em>I</em>
          </button>
          <button
            title="Add a heading"
            onClick={() => applyFormatting("\n\n## A new thought")}
          >
            H
          </button>
          <button
            title="Add a list"
            onClick={() => applyFormatting("\n\n- One thing\n- Another thing")}
          >
            ☷
          </button>
        </div>
      </div>

      <textarea
        className="markdown-editor"
        value={content}
        onChange={(event) => onContentChange(event.target.value)}
        spellCheck
        placeholder="Begin with a thought…"
        aria-label="Markdown editor"
      />

      <div className="editor-footer">
        <span>Markdown is welcome here</span>
        <span>⌘ ↵ to save a thought</span>
      </div>
    </section>
  );
}

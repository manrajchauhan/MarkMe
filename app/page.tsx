"use client";

import { ChangeEvent, useEffect, useMemo, useRef, useState } from "react";
import DOMPurify from "dompurify";
import { marked } from "marked";

const starterDocument = `# Your next great idea

Start where you are. MarkMe is a calm place to think, write, and shape work that matters.

## A quieter way to write

Turn a rough thought into something clear. Use **Markdown** for structure, and let the preview keep the finished piece in sight.

> “The first draft is just you telling yourself the story.”

### Today’s notes

- [x] Make space for the idea
- [ ] Write the opening paragraph
- [ ] Share it when it feels ready

## A little momentum

Writing does not need to feel like a production. One sentence is enough to begin.
`;

const examples = [
  { name: "A softer launch", kind: "Project note", content: "# A softer launch\n\n## The idea\n\nA simple, thoughtful home for our next chapter.\n\n## What we need\n\n- A clear story\n- A useful first version\n- Room to learn" },
  { name: "Friday reflections", kind: "Weekly note", content: "# Friday reflections\n\n## What moved\n\nA few quiet wins are worth remembering.\n\n## Next week\n\nChoose one important thing, then give it your full attention." },
  { name: "Reading list", kind: "Collection", content: "# Reading list\n\n## Essays\n\n- [ ] The Shape of Time\n- [ ] Notes on Attention\n- [ ] A Small Kind of Courage" },
];

function wordCount(value: string) { return value.trim() ? value.trim().split(/\s+/).length : 0; }
function downloadDocument(name: string, content: string) {
  const blob = new Blob([content], { type: "text/markdown;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = name.endsWith(".md") ? name : `${name}.md`;
  link.click();
  URL.revokeObjectURL(link.href);
}

export default function MarkMeWorkspace() {
  const [content, setContent] = useState(starterDocument);
  const [documentName, setDocumentName] = useState("Untitled note");
  const [saved, setSaved] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const fileInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const cached = window.localStorage.getItem("markme-document");
    const cachedName = window.localStorage.getItem("markme-document-name");
    if (cached) setContent(cached);
    if (cachedName) setDocumentName(cachedName);
  }, []);
  useEffect(() => {
    const timer = window.setTimeout(() => {
      window.localStorage.setItem("markme-document", content);
      window.localStorage.setItem("markme-document-name", documentName);
      setSaved(true);
    }, 500);
    return () => window.clearTimeout(timer);
  }, [content, documentName]);
  const html = useMemo(() => {
    const rendered = marked.parse(content) as string;
    // DOMPurify needs a browser DOM. During server rendering the bundled
    // starter document is safe; all browser-side edits are sanitized.
    return typeof window === "undefined" ? rendered : DOMPurify.sanitize(rendered);
  }, [content]);

  function updateContent(next: string) { setContent(next); setSaved(false); }
  function createNote() { setDocumentName("Untitled note"); updateContent("# Untitled note\n\nStart writing here."); }
  function importFile(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => { setDocumentName(file.name.replace(/\.(md|markdown|txt)$/i, "")); updateContent(String(reader.result ?? "")); };
    reader.readAsText(file); event.target.value = "";
  }

  return <main className="shell">
    <header className="topbar">
      <button className="brand" onClick={createNote} aria-label="Create a new MarkMe note"><span className="brand-mark">M</span><span>MarkMe</span></button>
      <nav className="top-nav" aria-label="Workspace navigation"><button onClick={() => setSidebarOpen((open) => !open)}>Library</button></nav>
      <div className="top-actions"><span className="saved-state">{saved ? "Saved locally" : "Saving…"}</span><button className="button ghost" onClick={() => fileInput.current?.click()}>Import</button><button className="button dark" onClick={() => downloadDocument(documentName, content)}>Download <span aria-hidden>↗</span></button><input ref={fileInput} className="visually-hidden" type="file" accept=".md,.markdown,.txt" onChange={importFile} /></div>
    </header>
    <section className="welcome-strip"><p><span className="eyebrow">YOUR QUIET CORNER</span> Write it down before the thought gets away.</p><button onClick={createNote}>New note <span aria-hidden>+</span></button></section>
    <div className={`workspace ${!sidebarOpen ? "without-sidebar" : ""}`}>
      {sidebarOpen && <aside className="library-panel"><div className="panel-heading"><div><p className="eyebrow">LIBRARY</p><h2>Your notebooks</h2></div><button className="round-button" onClick={createNote} aria-label="New note">+</button></div><button className="current-note"><span className="note-icon">✦</span><span><strong>{documentName}</strong><small>Just now</small></span><span className="more">•••</span></button><div className="library-section"><p className="eyebrow">START SOMEWHERE</p>{examples.map((example) => <button className="example-note" key={example.name} onClick={() => { setDocumentName(example.name); updateContent(example.content); }}><span><strong>{example.name}</strong><small>{example.kind}</small></span><span>→</span></button>)}</div><div className="library-footer"><span className="avatar">MC</span><span><strong>Manraj Chauhan</strong><small>Developer & maker</small></span><button aria-label="Settings">⚙</button></div></aside>}
      <section className="editor-panel"><div className="document-toolbar"><div className="document-title"><input value={documentName} onChange={(event) => { setDocumentName(event.target.value); setSaved(false); }} aria-label="Document title" /><span>{wordCount(content)} words</span></div><div className="editor-tools"><button title="Bold" onClick={() => updateContent(`${content}**bold thought**`)}>B</button><button title="Italic" onClick={() => updateContent(`${content}*small emphasis*`)}><em>I</em></button><button title="Add a heading" onClick={() => updateContent(`${content}\n\n## A new thought`)}>H</button><button title="Add a list" onClick={() => updateContent(`${content}\n\n- One thing\n- Another thing`)}>☷</button></div></div><textarea className="markdown-editor" value={content} onChange={(event) => updateContent(event.target.value)} spellCheck placeholder="Begin with a thought…" aria-label="Markdown editor" /><div className="editor-footer"><span>Markdown is welcome here</span><span>⌘ ↵ to save a thought</span></div></section>
      <section className="preview-panel"><div className="preview-heading"><p className="eyebrow">LIVE PREVIEW</p><span className="preview-dot">● Up to date</span></div><article className="prose" dangerouslySetInnerHTML={{ __html: html }} /><div className="preview-quote"><span>✦</span><p>Make it clear, then make it yours.</p></div></section>
    </div>
    <footer><span>© 2026 MarkMe</span><span>Designed and developed by <strong>Manraj Chauhan</strong></span><span>Made for clear thinking</span></footer>
  </main>;
}

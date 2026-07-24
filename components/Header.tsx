import React, { RefObject } from "react";
import Link from "next/link";

interface HeaderProps {
  saved: boolean;
  fileInputRef: RefObject<HTMLInputElement>;
  onNewNote: () => void;
  onToggleSidebar: () => void;
  onImport: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onDownload: () => void;
}

export function Header({
  saved,
  fileInputRef,
  onNewNote,
  onToggleSidebar,
  onImport,
  onDownload,
}: HeaderProps) {
  return (
    <header className="topbar">
      <Link href="/" className="brand" aria-label="MarkMe home">
        <span className="brand-mark">M</span>
        <span>MarkMe</span>
      </Link>

      <nav className="top-nav" aria-label="Workspace navigation">
        <button onClick={onToggleSidebar}>Library</button>
        <button onClick={onNewNote}>+ New note</button>
      </nav>

      <div className="top-actions">
        <span className="saved-state">
          {saved ? "Saved locally" : "Saving…"}
        </span>
        <button
          className="button ghost"
          onClick={() => fileInputRef.current?.click()}
        >
          Import
        </button>
        <button className="button dark" onClick={onDownload}>
          Download <span aria-hidden>↗</span>
        </button>
        <input
          ref={fileInputRef}
          className="visually-hidden"
          type="file"
          accept=".md,.markdown,.txt"
          onChange={onImport}
        />
      </div>
    </header>
  );
}

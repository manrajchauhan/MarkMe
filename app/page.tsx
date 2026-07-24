"use client";

import { useMemo, useState } from "react";
import { Header } from "../components/Header";
import { WelcomeStrip } from "../components/WelcomeStrip";
import { LibraryPanel } from "../components/LibraryPanel";
import { EditorPanel } from "../components/EditorPanel";
import { PreviewPanel } from "../components/PreviewPanel";
import { Footer } from "../components/Footer";
import { EXAMPLE_NOTES } from "../lib/constants";
import { renderMarkdown } from "../lib/utils";
import { useDocument } from "../hooks/useDocument";

export default function MarkMeWorkspace() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const {
    content,
    documentName,
    saved,
    fileInputRef,
    updateContent,
    updateTitle,
    createNote,
    selectNote,
    importFile,
    handleDownload,
  } = useDocument();

  const html = useMemo(() => renderMarkdown(content), [content]);

  return (
    <main className="shell">
      <Header
        saved={saved}
        fileInputRef={fileInputRef}
        onNewNote={createNote}
        onToggleSidebar={() => setSidebarOpen((open) => !open)}
        onImport={importFile}
        onDownload={handleDownload}
      />

      <WelcomeStrip onNewNote={createNote} />

      <div className={`workspace ${!sidebarOpen ? "without-sidebar" : ""}`}>
        {sidebarOpen && (
          <LibraryPanel
            documentName={documentName}
            examples={EXAMPLE_NOTES}
            onNewNote={createNote}
            onSelectExample={selectNote}
          />
        )}

        <EditorPanel
          documentName={documentName}
          content={content}
          onTitleChange={updateTitle}
          onContentChange={updateContent}
        />

        <PreviewPanel html={html} />
      </div>

      <Footer />
    </main>
  );
}

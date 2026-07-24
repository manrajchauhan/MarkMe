import { ChangeEvent, useEffect, useRef, useState } from "react";
import { STARTER_DOCUMENT } from "../lib/constants";
import { downloadDocument } from "../lib/utils";

export function useDocument() {
  const [content, setContent] = useState(STARTER_DOCUMENT);
  const [documentName, setDocumentName] = useState("Untitled note");
  const [saved, setSaved] = useState(true);
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  function updateContent(next: string) {
    setContent(next);
    setSaved(false);
  }

  function updateTitle(nextTitle: string) {
    setDocumentName(nextTitle);
    setSaved(false);
  }

  function createNote() {
    setDocumentName("Untitled note");
    updateContent("# Untitled note\n\nStart writing here.");
  }

  function selectNote(name: string, noteContent: string) {
    setDocumentName(name);
    updateContent(noteContent);
  }

  function importFile(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setDocumentName(file.name.replace(/\.(md|markdown|txt)$/i, ""));
      updateContent(String(reader.result ?? ""));
    };
    reader.readAsText(file);
    event.target.value = "";
  }

  function handleDownload() {
    downloadDocument(documentName, content);
  }

  return {
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
  };
}

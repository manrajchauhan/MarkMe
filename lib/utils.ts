import DOMPurify from "dompurify";
import { marked } from "marked";

export function wordCount(value: string): number {
  return value.trim() ? value.trim().split(/\s+/).length : 0;
}

export function downloadDocument(name: string, content: string): void {
  const blob = new Blob([content], { type: "text/markdown;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = name.endsWith(".md") ? name : `${name}.md`;
  link.click();
  URL.revokeObjectURL(link.href);
}

export function renderMarkdown(content: string): string {
  const rendered = marked.parse(content) as string;
  return typeof window === "undefined" ? rendered : DOMPurify.sanitize(rendered);
}

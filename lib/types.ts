export interface ExampleNote {
  name: string;
  kind: string;
  content: string;
}

export interface HeaderProps {
  saved: boolean;
  onNewNote: () => void;
  onToggleSidebar: () => void;
  onImport: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onDownload: () => void;
}

export interface WelcomeStripProps {
  onNewNote: () => void;
}

export interface LibraryPanelProps {
  documentName: string;
  examples: ExampleNote[];
  onNewNote: () => void;
  onSelectExample: (name: string, content: string) => void;
}

export interface EditorPanelProps {
  documentName: string;
  content: string;
  onTitleChange: (title: string) => void;
  onContentChange: (content: string) => void;
}

export interface PreviewPanelProps {
  html: string;
}

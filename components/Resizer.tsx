import React from "react";

interface ResizerProps {
  onMouseDown: (e: React.MouseEvent) => void;
  onTouchStart: (e: React.TouchEvent) => void;
  onDoubleClick: () => void;
}

export function Resizer({
  onMouseDown,
  onTouchStart,
  onDoubleClick,
}: ResizerProps) {
  return (
    <div
      className="split-resizer"
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      onDoubleClick={onDoubleClick}
      title="Drag to resize split (Double-click to reset)"
      role="separator"
      aria-orientation="vertical"
      aria-label="Adjust editor and preview panel split width"
    >
      <div className="resizer-handle" />
    </div>
  );
}

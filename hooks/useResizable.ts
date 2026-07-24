import { useCallback, useEffect, useRef, useState } from "react";

export function useResizable(
  initialPercent = 50,
  minPercent = 20,
  maxPercent = 80
) {
  const [splitPercent, setSplitPercent] = useState(initialPercent);
  const isDraggingRef = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const startDragging = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      e.preventDefault();
      isDraggingRef.current = true;
      document.body.style.userSelect = "none";
      document.body.style.cursor = "col-resize";
    },
    []
  );

  useEffect(() => {
    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (!isDraggingRef.current || !containerRef.current) return;

      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const rect = containerRef.current.getBoundingClientRect();
      if (rect.width <= 0) return;

      const relativeX = clientX - rect.left;
      const newPercent = (relativeX / rect.width) * 100;
      const clamped = Math.max(minPercent, Math.min(maxPercent, newPercent));

      setSplitPercent(clamped);
    };

    const stopDragging = () => {
      if (isDraggingRef.current) {
        isDraggingRef.current = false;
        document.body.style.userSelect = "";
        document.body.style.cursor = "";
      }
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", stopDragging);
    window.addEventListener("touchmove", handleMove);
    window.addEventListener("touchend", stopDragging);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", stopDragging);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchend", stopDragging);
    };
  }, [minPercent, maxPercent]);

  return {
    splitPercent,
    containerRef,
    startDragging,
    resetSplit: () => setSplitPercent(initialPercent),
  };
}

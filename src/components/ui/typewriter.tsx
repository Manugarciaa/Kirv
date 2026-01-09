import { useEffect, useRef, useState } from "react";

type Props = {
  texts: string[];
  speed?: number;
  pause?: number;
  className?: string;
};

export function Typewriter({ texts, speed = 80, pause = 1200, className }: Props) {
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const current = texts[index % texts.length] ?? "";
    if (!deleting && count < current.length) {
      timeoutRef.current = window.setTimeout(() => setCount((c) => c + 1), speed);
    } else if (!deleting && count === current.length) {
      timeoutRef.current = window.setTimeout(() => setDeleting(true), pause);
    } else if (deleting && count > 0) {
      timeoutRef.current = window.setTimeout(() => setCount((c) => c - 1), speed);
    } else if (deleting && count === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % texts.length);
    }
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [texts, index, count, deleting, speed, pause]);

  const current = texts[index % texts.length] ?? "";
  return <span className={className} aria-label={current}>{current.slice(0, count)}</span>;
}
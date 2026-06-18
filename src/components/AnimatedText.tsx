import { useEffect, useRef, useState } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function AnimatedText({ text, className = '', delay = 0 }: AnimatedTextProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <div
        className={`transition-all duration-1000 ease-out ${
          isVisible
            ? 'translate-y-0 opacity-100'
            : 'translate-y-full opacity-0'
        }`}
      >
        {text}
      </div>
    </div>
  );
}

interface TextRepelProps {
  text: string;
  className?: string;
}

export function TextRepel({ text, className = '' }: TextRepelProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const handleMouseLeave = () => {
      setMousePos({ x: -1000, y: -1000 });
    };

    const el = containerRef.current;
    if (el) {
      el.addEventListener('mousemove', handleMouseMove);
      el.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (el) {
        el.removeEventListener('mousemove', handleMouseMove);
        el.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  const chars = text.split('');

  return (
    <div ref={containerRef} className={`inline-block ${className}`}>
      {chars.map((char, i) => (
        <RepelChar key={i} char={char} index={i} mousePos={mousePos} containerRef={containerRef} />
      ))}
    </div>
  );
}

function RepelChar({
  char,
  index,
  mousePos,
  containerRef,
}: {
  char: string;
  index: number;
  mousePos: { x: number; y: number };
  containerRef: React.RefObject<HTMLDivElement>;
}) {
  const charRef = useRef<HTMLSpanElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!charRef.current || !containerRef.current) return;

    const rect = charRef.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    const charCenterX = rect.left - containerRect.left + rect.width / 2;
    const charCenterY = rect.top - containerRect.top + rect.height / 2;

    const dx = charCenterX - mousePos.x;
    const dy = charCenterY - mousePos.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const maxDistance = 120;

    if (distance < maxDistance) {
      const force = (1 - distance / maxDistance) * 18;
      const angle = Math.atan2(dy, dx);
      setOffset({
        x: Math.cos(angle) * force,
        y: Math.sin(angle) * force,
      });
    } else {
      setOffset({ x: 0, y: 0 });
    }
  }, [mousePos, containerRef]);

  return (
    <span
      ref={charRef}
      className="inline-block transition-transform duration-200 ease-out"
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px)`,
      }}
    >
      {char === ' ' ? '\u00A0' : char}
    </span>
  );
}

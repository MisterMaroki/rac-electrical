"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface StatCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  isStatic?: boolean;
  staticValue?: string;
  icon?: string;
}

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export function StatCounter({
  end,
  suffix = "",
  prefix = "",
  label,
  isStatic = false,
  staticValue,
  icon,
}: StatCounterProps) {
  const [count, setCount] = useState(0);
  const hasAnimatedRef = useRef(false);
  const ref = useRef<HTMLDivElement>(null);

  const startAnimation = useCallback(() => {
    if (hasAnimatedRef.current) return;
    hasAnimatedRef.current = true;

    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);
      const currentCount = Math.round(easedProgress * end);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end]);

  useEffect(() => {
    if (isStatic) return;

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [isStatic, startAnimation]);

  return (
    <div
      ref={ref}
      className="text-center px-4 py-2"
    >
      {/* Optional icon */}
      {icon && (
        <div className="flex justify-center mb-3">
          <svg
            className="w-8 h-8 text-[var(--accent)] opacity-80"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={icon}
            />
          </svg>
        </div>
      )}

      {/* Number */}
      <div className="text-4xl sm:text-5xl font-bold text-white leading-none mb-2 tracking-tight">
        {isStatic ? staticValue : `${prefix}${count.toLocaleString()}${suffix}`}
      </div>

      {/* Label */}
      <div className="text-sm font-medium text-[var(--accent)] uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}

"use client";

import Image, { type ImageProps } from "next/image";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type ParallaxImageProps = Omit<ImageProps, "style"> & {
  className?: string;
  strength?: number;
  imageStyle?: React.CSSProperties;
  fallbackSrc?: string;
};

export function ParallaxImage({
  className,
  strength = 18,
  imageStyle,
  fallbackSrc = "/placeholder.svg",
  ...props
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const raf = useRef<number | null>(null);
  const [offset, setOffset] = useState(0);
  const [safeSrc, setSafeSrc] = useState(props.src);

  useEffect(() => {
    setSafeSrc(props.src);
  }, [props.src]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      raf.current = null;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
      const next = Math.max(-strength, Math.min(strength, -progress * strength));
      setOffset(next);
    };

    const onScroll = () => {
      if (raf.current != null) return;
      raf.current = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf.current != null) window.cancelAnimationFrame(raf.current);
    };
  }, [strength]);

  return (
    <div ref={ref} className={cn("relative h-full w-full overflow-hidden", className)}>
      <Image
        {...props}
        src={safeSrc}
        onError={() => {
          // Only fallback for string srcs; StaticImport is already safe.
          if (typeof props.src === "string") setSafeSrc(fallbackSrc);
        }}
        style={{
          transform: `translate3d(0, ${offset}px, 0) scale(1.06)`,
          willChange: "transform",
          ...imageStyle,
        }}
      />
    </div>
  );
}


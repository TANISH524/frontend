"use client";

import Image, { type ImageProps } from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type ParallaxImageProps = Omit<ImageProps, "style"> & {
  className?: string;
  strength?: number;
  imageStyle?: React.CSSProperties;
  fallbackSrc?: string;
  href?: string;
};

export function ParallaxImage({
  className,
  strength = 18,
  imageStyle,
  fallbackSrc = "/placeholder.svg",
  href,
  ...props
}: ParallaxImageProps) {
  const router = useRouter();
  const ref = useRef<HTMLElement | null>(null);
  const raf = useRef<number | null>(null);
  const [offset, setOffset] = useState(0);
  const [safeSrc, setSafeSrc] = useState(props.src);

  const setRef = (node: HTMLElement | null) => {
    ref.current = node;
  };

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

  const content = (
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
  );

  if (href) {
    return (
      <div
        ref={setRef}
        role="link"
        tabIndex={0}
        className={cn(
          "relative block h-full w-full overflow-hidden cursor-pointer",
          "focus-visible:outline-none",
          className
        )}
        onClick={() => router.push(href)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            router.push(href);
          }
        }}
      >
        {content}
      </div>
    );
  }

  return (
    <div ref={setRef} className={cn("relative h-full w-full overflow-hidden", className)}>
      {content}
    </div>
  );
}


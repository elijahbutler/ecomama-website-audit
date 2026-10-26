import { useState } from "react";
export function JournalPhoto({
  file,
  alt,
  priority = false,
  className = "",
  width = 1600,
  height = 1067,
  sizes = "(max-width: 700px) 100vw, (max-width: 1100px) 80vw, 1100px",
}: {
  file: string;
  alt: string;
  priority?: boolean;
  className?: string;
  /** Intrinsic size, used to reserve space before the photo loads. */
  width?: number;
  height?: number;
  sizes?: string;
}) {
  const [failed, setFailed] = useState(false);
  const name = file.replace(/\.[^.]+$/, "");
  if (failed)
    return (
      <div
        className={`photo-fallback ${className}`}
        role="img"
        aria-label={alt}
      >
        <p>{alt}</p>
        <small>
          Photograph unavailable. You can still use the details and controls
          below.
        </small>
      </div>
    );
  return (
    <img
      className={className}
      src={`/images/journal/${name}-960.webp`}
      srcSet={`/images/journal/${name}-480.webp 480w, /images/journal/${name}-960.webp 960w, /images/journal/${name}-1600.webp 1600w`}
      sizes={sizes}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      alt={alt}
      onError={() => setFailed(true)}
    />
  );
}

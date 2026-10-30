import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import type { Photo } from "@/lib/photos";

type Props = {
  photo: Photo;
  /** Stagger slot for the [data-reveal] rise. */
  i: number;
  sizes: string;
  className?: string;
  /** Big serif line revealed on hover/focus. */
  title?: ReactNode;
  caption: string;
  /** Without one the tile is a plain figure that still lights up on hover. */
  href?: string;
};

// The BENTO tile: curtain-red multiply + caption rise on hover or keyboard focus.
export default function ArticleTile({ photo, i, sizes, className = "", title, caption, href }: Props) {
  const body = (
    <>
      <span className="tile-media absolute inset-0">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={sizes}
          placeholder="blur"
          className="object-cover transition-[filter] duration-380 ease-out-3 lit:grayscale-85 lit:contrast-118 lit:duration-520"
        />
      </span>
      <span className="absolute inset-0 bg-curtain opacity-0 mix-blend-multiply transition-opacity duration-380 ease-out-3 lit:opacity-88 lit:duration-520" />
      <span className="absolute inset-0 translate-y-full bg-linear-to-t from-[rgb(90_6_10/0.72)] via-[rgb(140_10_16/0.18)] via-55% to-transparent transition-transform duration-380 ease-out-3 lit:translate-y-0 lit:duration-520" />
      {/* a bare figure's caption only repeats the alt text, so keep it visual */}
      <span
        aria-hidden={!href || undefined}
        className="absolute inset-x-0 bottom-0 translate-y-3.5 p-4 text-white opacity-0 transition duration-380 ease-out-3 lit:translate-y-0 lit:opacity-100 lit:delay-90 lit:duration-520 md:p-6">
        {title && <span className="block font-serif text-[clamp(18px,1.8vw,26px)] leading-[1.05]">{title}</span>}
        <span className="mt-1.5 block text-[10px] uppercase tracking-[0.16em] text-[#f3dedf]">{caption}</span>
      </span>
    </>
  );

  const tile = `tile group relative block overflow-hidden bg-line ${className}`;
  const style = { "--i": i } as CSSProperties;

  return href ? (
    <Link href={href} style={style} className={tile}>
      {body}
    </Link>
  ) : (
    <figure style={style} className={tile}>
      {body}
    </figure>
  );
}

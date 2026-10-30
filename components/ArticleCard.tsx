import Image from "next/image";
import Link from "next/link";

import type { Photo } from "@/lib/photos";

type Props = {
  index: number;
  href: string;
  title: [string, string];
  subheadline: string;
  photo: Photo;
  /** Override when the card should be a real heading (article list). */
  as?: "span" | "h2";
};

// The numbered "Latest articles" card: rule draws in curtain red on hover/focus, photo eases in.
export default function ArticleCard({ index, href, title, subheadline, photo, as: Title = "span" }: Props) {
  return (
    <Link href={href} className="group block">
      <span className="block text-[11px] tracking-[0.16em] text-curtain tabular-nums">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="relative mt-2 block h-px bg-line">
        <span className="absolute inset-0 origin-left scale-x-0 bg-curtain transition-transform duration-600 ease-out-3 lit:scale-x-100" />
      </span>
      <Title className="mt-4 block font-serif text-[26px] leading-[1.1] tracking-[0.01em] text-ink/80">
        {title[0]} <em>{title[1]}</em>
      </Title>
      <span className="mt-2 block text-[11px] uppercase tracking-[0.14em] text-mute">{subheadline}</span>
      <span className="relative mt-5 block aspect-video overflow-hidden bg-line">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="(min-width: 1440px) 340px, (min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          placeholder="blur"
          className="object-cover transition-transform duration-600 ease-out-3 lit:scale-105"
        />
      </span>
    </Link>
  );
}

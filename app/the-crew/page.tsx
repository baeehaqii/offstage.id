import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../reveal";
import CrewNameIcon from "@/components/CrewNameIcon";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { words } from "@/components/type";
import { CREW } from "@/lib/crew";
import { PHOTOS } from "@/lib/photos";

import charLeft from "@/public/images/char-left.png";
import charRight from "@/public/images/char-right.png";

export const metadata: Metadata = {
  title: "The Crew — Offstage",
  description: "The eight people behind Offstage, from the rehearsal room to the final cut.",
};

export default function CrewPage() {
  return (
    <>
      <Reveal />

      <Header
        className="relative h-[max(360px,30vw)] bg-ink text-white"
        backdrop={
          <>
            <Image
              src={PHOTOS.hero.src}
              alt={PHOTOS.hero.alt}
              fill
              sizes="100vw"
              loading="eager"
              fetchPriority="high"
              placeholder="blur"
              className="object-cover grayscale"
            />
            {/* multiply can only darken, so the title never sits on anything lighter than curtain (white ≈ 7.6:1) */}
            <div className="absolute inset-0 bg-curtain mix-blend-multiply" />
            <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/20 via-35% to-black/30" />
          </>
        }
      >
        <div data-reveal className="absolute inset-x-0 bottom-0 z-20 mx-auto max-w-[1440px] px-4 pb-8 text-center md:px-10 md:pb-12">
          <h1 className="font-serif text-[clamp(52px,9vw,136px)] leading-[0.95] tracking-[-0.01em]">
            {words("WE THE")} <em>{words("CREW", 2)}</em>
          </h1>
        </div>
      </Header>

      <main>
        <section data-reveal aria-label="Crew members" className="relative overflow-x-clip">
          <Image
            src={charRight}
            alt="Illustrated woman with braids and a striped red tie peeking in from the right"
            sizes="170px"
            className="peek-r absolute right-0 top-8 z-[2] h-auto w-[clamp(68px,11.2vw,172px)] origin-bottom-right md:top-12"
          />
          <Image
            src={charLeft}
            alt="Illustrated man with curly hair and round glasses peeking in from the left"
            sizes="200px"
            className="peek-l absolute bottom-8 left-0 z-[2] h-auto w-[clamp(79px,12.7vw,197px)] origin-bottom-left md:bottom-12"
          />
          {/* side padding matches the character widths so they never sit behind the names */}
          <ul className="relative z-[3] mx-auto flex max-w-[1440px] flex-col items-center px-[21vw] py-14 font-serif text-[clamp(38px,8.6vw,124px)] leading-[0.98] tracking-[-0.01em] text-curtain md:px-[13vw] md:py-20">
            {CREW.map((member) => (
              <li key={member.slug}>
                <Link
                  href={`/the-crew/${member.slug}`}
                  className="flex min-h-11 cursor-pointer items-center whitespace-nowrap uppercase transition-colors duration-200 hover:text-ink"
                >
                  <span className="sr-only">{member.name}</span>
                  <span aria-hidden className="flex items-center">
                    {member.name.slice(0, member.iconAt)}
                    <CrewNameIcon />
                    {member.name.slice(member.iconAt)}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <Footer />
    </>
  );
}

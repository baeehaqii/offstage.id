import type { CSSProperties } from "react";
import Image, { type StaticImageData } from "next/image";
import Reveal from "./reveal";

import hero from "@/public/images/hero.jpg";
import bento1 from "@/public/images/bento-1.jpg";
import bento2 from "@/public/images/bento-2.jpg";
import bento3 from "@/public/images/bento-3.jpg";
import bento4 from "@/public/images/bento-4.jpg";
import bento5 from "@/public/images/bento-5.jpg";
import bento6 from "@/public/images/bento-6.jpg";
import card1 from "@/public/images/card-1.jpg";
import card2 from "@/public/images/card-2.jpg";
import card3 from "@/public/images/card-3.jpg";
import card4 from "@/public/images/card-4.jpg";
import charLeft from "@/public/images/char-left.png";
import charRight from "@/public/images/char-right.png";
import logoLight from "@/public/images/logo-light.png";
import logoDark from "@/public/images/logo-dark.png";

const NAV = ["Articles", "Film", "The Crew", "What’s Next", "About", "Thoughts", "Shop"];

type Photo = { src: StaticImageData; alt: string };

// Three equal columns; only the row ratios differ, so the eye zig-zags down. Darkest image anchors the middle.
const BENTO: [Photo, Photo][] = [
  [
    { src: bento1, alt: "Performer in a billowing white dress against a blue sky" },
    { src: bento2, alt: "Camera operator filming a performer beside a studio window" },
  ],
  [
    { src: bento3, alt: "Fashion sketches pinned to a studio wall" },
    { src: bento4, alt: "Woman in a red suit and dark glasses against a green wall" },
  ],
  [
    { src: bento5, alt: "Two women lying on rumpled bedsheets" },
    { src: bento6, alt: "Flat lay of a knit beanie, sweater, jeans and tulips" },
  ],
];

const ARTICLES: Photo[] = [
  { src: card1, alt: "Woman in red holding up teal fabric against a blue sky" },
  { src: card2, alt: "Woman in round red sunglasses on an orange backdrop" },
  { src: card3, alt: "Colour swatches beside a tablet sketch" },
  { src: card4, alt: "Clapperboard held up on a film set" },
];

const CONTACT = ["Email", "Instagram", "TikTok"];

// Splits text into staggered words for the headline rise; `from` continues the stagger across spans.
function words(text: string, from = 0) {
  return text.split(" ").flatMap((w, i) => [
    i ? " " : null,
    <span key={i} className="word" style={{ "--i": from + i } as CSSProperties}>
      {w}
    </span>,
  ]);
}

const eyebrow = "text-[11px] font-semibold uppercase tracking-[0.3em] md:text-[13px]";
const display = "font-serif text-[clamp(44px,6.7vw,96px)] leading-[0.95] tracking-[-0.01em]";

async function subscribe(formData: FormData) {
  "use server";
  // ponytail: no-op until a newsletter provider is chosen; wire formData.get("email") there.
  void formData;
}

export default function Home() {
  return (
    <>
      <Reveal />

      <header className="relative h-[max(440px,27vw)] bg-ink text-white">
        <Image
          src={hero}
          alt="Man in sunglasses seated alone in a darkened theatre"
          fill
          sizes="100vw"
          loading="eager"
          fetchPriority="high"
          placeholder="blur"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/55 via-transparent via-35% to-black/40" />

        <div className="relative z-30 mx-auto flex max-w-[1440px] items-center justify-between px-4 pt-5 md:px-10 md:pt-6">
          <a href="#" aria-label="Offstage home" className="shrink-0">
            <Image src={logoLight} alt="Offstage" className="h-8 w-auto md:h-10" sizes="180px" />
          </a>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex gap-[clamp(24px,3.4vw,64px)]">
              {NAV.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="block py-2 text-sm font-medium uppercase tracking-[0.1em] transition-colors duration-200 hover:text-curtain-bright"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* ponytail: native <details> menu, no JS state */}
          <details className="group/menu lg:hidden">
            <summary className="flex h-11 cursor-pointer list-none items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] [&::-webkit-details-marker]:hidden">
              Menu
              <span aria-hidden className="flex w-6 flex-col gap-1.5">
                <span className="h-px bg-white transition-transform duration-200 group-open/menu:translate-y-[3.5px] group-open/menu:rotate-45" />
                <span className="h-px bg-white transition-transform duration-200 group-open/menu:-translate-y-[3.5px] group-open/menu:-rotate-45" />
              </span>
            </summary>
            <nav aria-label="Main" className="absolute inset-x-0 top-full z-30 bg-ink px-4 pb-6 pt-2 md:px-10">
              <ul>
                {NAV.map((item) => (
                  <li key={item} className="border-b border-white/15">
                    <a
                      href="#"
                      className="block py-3.5 text-sm font-medium uppercase tracking-[0.1em] transition-colors duration-200 hover:text-curtain-bright"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </details>
        </div>

        <a href="#" className="absolute inset-x-0 bottom-0 z-20 mx-auto block max-w-[1440px] px-4 pb-6 md:px-10 md:pb-7">
          <span className="block font-serif text-[clamp(30px,3.4vw,52px)] leading-none">
            HEADLINE <em>IS HERE</em>
          </span>
          <span className="mt-2 block text-xs font-light uppercase tracking-[0.04em] text-white/85 md:text-sm">
            Sub-headline is here
          </span>
        </a>
      </header>

      <main>
        <section data-reveal className="mx-auto max-w-[1440px] px-4 pt-16 text-center md:px-10 md:pt-[120px]">
          <h1 className={display}>
            <span className="text-curtain">{words("STORIES")}</span>{" "}
            <em className="text-ink/80">{words("beyond the stage", 1)}</em>
          </h1>
          <p className={`${eyebrow} mx-auto mt-8 max-w-[1100px] text-ink/80 md:mt-12`}>
            We are a full-service creative agency building worlds through stage
          </p>
        </section>

        <section
          data-reveal
          aria-label="Featured stories"
          className="mx-auto mt-12 grid max-w-[1440px] grid-cols-2 gap-3 px-4 sm:grid-cols-3 sm:gap-4 md:mt-16 md:px-10 lg:gap-6"
        >
          {BENTO.map((col, c) => (
            <div
              key={c}
              className={`flex flex-col gap-3 sm:gap-4 lg:gap-6 ${c === 2 ? "col-span-2 flex-row sm:col-span-1 sm:flex-col" : ""}`}
            >
              {col.map((photo, r) => {
                const tall = (r === 0) !== (c === 1); // A, D, E are the tall cells
                return (
                  <a
                    key={r}
                    href="#"
                    style={{ "--i": c * 2 + r } as CSSProperties}
                    className={`tile group relative block overflow-hidden bg-line ${tall ? "aspect-[1546/1933]" : "aspect-[1546/870]"} ${c === 2 ? "max-sm:flex-1 max-sm:aspect-[4/5]" : ""}`}
                  >
                    <span className="tile-media absolute inset-0">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(min-width: 1440px) 460px, (min-width: 640px) 33vw, 50vw"
                        placeholder="blur"
                        className="object-cover transition-[filter] duration-380 ease-out-3 lit:grayscale-85 lit:contrast-118 lit:duration-520"
                      />
                    </span>
                    <span className="absolute inset-0 bg-curtain opacity-0 mix-blend-multiply transition-opacity duration-380 ease-out-3 lit:opacity-88 lit:duration-520" />
                    <span className="absolute inset-0 translate-y-full bg-linear-to-t from-[rgb(90_6_10/0.72)] via-[rgb(140_10_16/0.18)] via-55% to-transparent transition-transform duration-380 ease-out-3 lit:translate-y-0 lit:duration-520" />
                    <span className="absolute inset-x-0 bottom-0 translate-y-3.5 p-4 text-white opacity-0 transition duration-380 ease-out-3 lit:translate-y-0 lit:opacity-100 lit:delay-90 lit:duration-520 md:p-6">
                      <span className="block font-serif text-[clamp(18px,1.8vw,26px)] leading-[1.05]">
                        HEADLINE <em>IS HERE</em>
                      </span>
                      <span className="mt-1.5 block text-[10px] uppercase tracking-[0.16em] text-[#f3dedf]">
                        Sub-headline is here
                      </span>
                    </span>
                  </a>
                );
              })}
            </div>
          ))}
        </section>

        <div className="mt-8 flex justify-center md:mt-10">
          <a
            href="#"
            className="flex min-h-11 flex-col items-center gap-2 px-4 py-1 text-ink transition-colors duration-200 hover:text-curtain"
          >
            <svg aria-hidden viewBox="0 0 14 14" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 0v14M0 7h14" />
            </svg>
            <span className="text-[13px] font-medium uppercase tracking-[0.1em]">View more</span>
          </a>
        </div>

        <section data-reveal className="relative mt-6 overflow-x-clip md:mt-4">
          <Image
            src={charLeft}
            alt=""
            sizes="200px"
            className="peek-l absolute left-0 top-0 z-[2] h-auto w-[clamp(79px,12.7vw,197px)] origin-bottom-left"
          />
          <Image
            src={charRight}
            alt=""
            sizes="170px"
            className="peek-r absolute right-0 top-[2vw] z-[2] h-auto w-[clamp(68px,11.2vw,172px)] origin-bottom-right"
          />
          <div className="relative z-[3] mx-auto max-w-[1440px] pb-16 pt-[clamp(72px,8.5vw,136px)] md:pb-[clamp(96px,11vw,160px)]">
            {/* side padding matches the character widths so they never sit behind the words */}
            <h2 className={`${display} px-[21vw] md:px-[13vw]`}>
              <span className="block">
                <span className="text-curtain">{words("WHERE")}</span>{" "}
                <em className="text-ink/80">{words("your ideas", 1)}</em>
              </span>
              <em className="outline-text block text-right uppercase">{words("comes to life", 3)}</em>
            </h2>
            <p className={`${eyebrow} mt-10 px-4 text-center text-ink/80 md:mt-16`}>
              We explore the power of creativity in every form
            </p>
          </div>
        </section>

        <section
          aria-label="Latest articles"
          className="mx-auto grid max-w-[1440px] gap-x-6 gap-y-12 px-4 pb-12 sm:grid-cols-2 md:px-10 md:pb-24 lg:grid-cols-4"
        >
          {ARTICLES.map((photo, i) => (
            <a key={i} href="#" className="group block">
              <span className="block text-[11px] tracking-[0.16em] text-curtain tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="relative mt-2 block h-px bg-line">
                <span className="absolute inset-0 origin-left scale-x-0 bg-curtain transition-transform duration-600 ease-out-3 lit:scale-x-100" />
              </span>
              <span className="mt-4 block font-serif text-[26px] leading-[1.1] tracking-[0.01em] text-ink/80">
                HEADLINE <em>IS HERE</em>
              </span>
              <span className="mt-2 block text-[11px] uppercase tracking-[0.14em] text-mute">Sub-headline is here</span>
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
            </a>
          ))}
        </section>
      </main>

      <footer className="silver-fade">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-4 py-14 md:grid-cols-3 md:items-center md:px-10 md:py-16">
          <div>
            <Image src={logoDark} alt="Offstage" className="h-8 w-auto md:h-9" sizes="160px" />
            <address className="mt-3 text-base font-semibold uppercase not-italic leading-tight md:text-lg">
              Address goes here
              <br />
              Jakarta, Indonesia
            </address>
          </div>

          <div className="md:justify-self-center">
            <h2 className="font-serif text-5xl italic leading-none text-white">Contact</h2>
            <ul className="mt-4 text-[11px] font-semibold uppercase leading-[1.5] tracking-[0.34em]">
              {CONTACT.map((c) => (
                <li key={c}>
                  <a href="#" className="inline-block py-0.5 transition-colors duration-200 hover:text-white">
                    {c}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-white md:justify-self-end">
            <h2 className="font-serif text-[clamp(44px,4.4vw,64px)] italic leading-none">Stay in the loop</h2>
            <p className="mt-2 text-right text-[11px] font-medium uppercase tracking-[0.34em]">Join our newsletter</p>
            <form action={subscribe} className="mt-5 flex items-center rounded-full border border-white pl-6 pr-2 focus-within:outline-2 focus-within:outline-offset-3 focus-within:outline-white">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="ENTER YOUR EMAIL"
                className="h-12 min-w-0 flex-1 bg-transparent text-xs tracking-[0.34em] text-white outline-none placeholder:text-white md:text-[13px]"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="grid size-11 cursor-pointer place-items-center rounded-full transition-colors duration-200 hover:bg-white hover:text-ink"
              >
                <svg aria-hidden viewBox="0 0 20 12" className="w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M0 6h18M13 1l5 5-5 5" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </footer>
    </>
  );
}

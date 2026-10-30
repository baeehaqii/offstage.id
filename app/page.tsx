import Image from "next/image";
import Link from "next/link";
import Reveal from "./reveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { display, eyebrow, words } from "@/components/type";
import ArticleCard from "@/components/ArticleCard";
import ArticleTile from "@/components/ArticleTile";
import { ARTICLES } from "@/lib/articles";
import { PHOTOS, type Photo } from "@/lib/photos";

import charLeft from "@/public/images/char-left.png";
import charRight from "@/public/images/char-right.png";

// Three equal columns; only the row ratios differ, so the eye zig-zags down. Darkest image anchors the middle.
const BENTO: [Photo, Photo][] = [
  [PHOTOS.bento1, PHOTOS.bento2],
  [PHOTOS.bento3, PHOTOS.bento4],
  [PHOTOS.bento5, PHOTOS.bento6],
];

// Covers are card-1..4, so the row looks exactly as before; the copy stays placeholder until the design lands.
const LATEST = ARTICLES.slice(0, 4);

export default function Home() {
  return (
    <>
      <Reveal />

      <Header
        className="relative h-[max(440px,27vw)] bg-ink text-white"
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
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/55 via-transparent via-35% to-black/40" />
          </>
        }
      >
        <a href="#" className="absolute inset-x-0 bottom-0 z-20 mx-auto block max-w-[1440px] px-4 pb-6 md:px-10 md:pb-7">
          <span className="block font-serif text-[clamp(30px,3.4vw,52px)] leading-none">
            HEADLINE <em>IS HERE</em>
          </span>
          <span className="mt-2 block text-xs font-light uppercase tracking-[0.04em] text-white/85 md:text-sm">
            Sub-headline is here
          </span>
        </a>
      </Header>

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
                  <ArticleTile
                    key={r}
                    href="#"
                    photo={photo}
                    i={c * 2 + r}
                    sizes="(min-width: 1440px) 460px, (min-width: 640px) 33vw, 50vw"
                    title={<>HEADLINE <em>IS HERE</em></>}
                    caption="Sub-headline is here"
                    className={`${tall ? "aspect-[1546/1933]" : "aspect-[1546/870]"} ${c === 2 ? "max-sm:flex-1 max-sm:aspect-[4/5]" : ""}`}
                  />
                );
              })}
            </div>
          ))}
        </section>

        <div className="mt-8 flex justify-center md:mt-10">
          <Link
            href="/articles"
            className="flex min-h-11 flex-col items-center gap-2 px-4 py-1 text-ink transition-colors duration-200 hover:text-curtain"
          >
            <svg aria-hidden viewBox="0 0 14 14" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 0v14M0 7h14" />
            </svg>
            <span className="text-[13px] font-medium uppercase tracking-[0.1em]">View more</span>
          </Link>
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
          {LATEST.map((article, i) => (
            <ArticleCard
              key={article.slug}
              index={i}
              href={`/articles/${article.slug}`}
              title={["HEADLINE", "IS HERE"]}
              subheadline="Sub-headline is here"
              photo={article.coverImage}
            />
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}

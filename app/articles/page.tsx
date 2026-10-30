import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "../reveal";
import ArticleTile from "@/components/ArticleTile";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { display, eyebrow, words } from "@/components/type";
import { ARTICLES, TAGS, type Tag } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Articles — Offstage",
  description: "Stories from rehearsal rooms, film sets and studios across Indonesia.",
};

const pill =
  "inline-flex min-h-11 cursor-pointer items-center rounded-full border px-5 text-[11px] font-medium uppercase tracking-[0.16em] transition-colors duration-200";

export default async function ArticlesPage({ searchParams }: PageProps<"/articles">) {
  const { tag } = await searchParams;
  // Unknown or repeated ?tag= values fall back to everything rather than an empty page.
  const active = TAGS.find((t) => t === tag) as Tag | undefined;
  const list = active ? ARTICLES.filter((a) => a.tags.includes(active)) : ARTICLES;

  return (
    <>
      <Reveal />

      <Header className="relative bg-ink pb-5 text-white md:pb-6" />

      <main>
        <section data-reveal className="mx-auto max-w-[1440px] px-4 pt-16 text-center md:px-10 md:pt-[120px]">
          <h1 className={display}>
            <span className="text-curtain">{words("ARTICLES")}</span>{" "}
            <em className="text-ink/80">{words("& thoughts", 1)}</em>
          </h1>
          <p className={`${eyebrow} mx-auto mt-8 max-w-[1100px] text-ink/80 md:mt-12`}>
            Notes from rehearsal rooms, film sets and studios
          </p>
        </section>

        {/* Plain links + ?tag= so filtering works without JS; scroll={false} keeps the grid in place */}
        <nav aria-label="Filter by category" className="mx-auto mt-12 max-w-[1440px] px-4 md:mt-16 md:px-10">
          <ul className="flex flex-wrap justify-center gap-2 md:gap-3">
            {[undefined, ...TAGS].map((t) => {
              const on = t === active;
              return (
                <li key={t ?? "all"}>
                  <Link
                    href={t ? `/articles?tag=${t}` : "/articles"}
                    scroll={false}
                    aria-current={on ? "page" : undefined}
                    className={`${pill} ${on ? "border-ink bg-ink text-white" : "border-line text-ink hover:border-curtain hover:text-curtain"}`}
                  >
                    {t ?? "All"}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <section
          aria-label={active ? `${active} articles` : "All articles"}
          className="mx-auto mt-12 grid max-w-[1440px] grid-cols-1 gap-4 px-4 pb-12 sm:grid-cols-3 sm:gap-4 md:px-10 md:pb-24 lg:gap-6"
        >
          {/* 3 flex columns like the homepage BENTO: each item keeps its own height, so no grid gaps. */}
          {[0, 1, 2].map((col) => (
            <div key={col} className="flex flex-col gap-4 lg:gap-6">
              {list
                .filter((_, i) => i % 3 === col)
                .map((a) => {
                  const i = list.indexOf(a);
                  // Middle column runs tall, matching the BENTO zig-zag anchor.
                  const tall = col === 1;
                  return (
                    <ArticleTile
                      key={a.slug}
                      href={`/articles/${a.slug}`}
                      photo={a.coverImage}
                      i={i}
                      sizes="(min-width: 1440px) 460px, (min-width: 640px) 33vw, 100vw"
                      title={
                        <>
                          {a.title[0]} <em>{a.title[1]}</em>
                        </>
                      }
                      caption={a.subheadline}
                      className={`aspect-[4/5] ${tall ? "sm:aspect-[1546/1933]" : "sm:aspect-[1546/870]"}`}
                    />
                  );
                })}
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "../reveal";
import ArticleCard from "@/components/ArticleCard";
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
          className="mx-auto grid max-w-[1440px] gap-x-6 gap-y-12 px-4 pb-12 pt-12 sm:grid-cols-2 md:px-10 md:pb-24 md:pt-16 lg:grid-cols-4"
        >
          {list.map((a, i) => (
            <ArticleCard
              key={a.slug}
              as="h2"
              index={i}
              href={`/articles/${a.slug}`}
              title={a.title}
              subheadline={a.subheadline}
              photo={a.coverImage}
            />
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "../../reveal";
import ArticleTile from "@/components/ArticleTile";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { eyebrow, words } from "@/components/type";
import { ARTICLES, formatDate, getArticle } from "@/lib/articles";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

// Every slug is known at build time; anything else is a 404.
export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/articles/[slug]">): Promise<Metadata> {
  const article = getArticle((await params).slug);
  if (!article) return {};
  const title = `${article.title.join(" ")} — Offstage`;
  return {
    title,
    description: article.excerpt,
    openGraph: {
      title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      authors: [article.author.name],
      images: [{ url: article.coverImage.src.src, alt: article.coverImage.alt }],
    },
  };
}

// "*word*" → curtain-red highlight; odd split segments are the marked ones.
function highlight(text: string) {
  return text.split("*").map((part, i) =>
    i % 2 ? (
      <em key={i} className="text-curtain">
        {part}
      </em>
    ) : (
      part
    ),
  );
}

const pill =
  "inline-flex min-h-11 cursor-pointer items-center rounded-full border border-line px-5 text-[11px] font-medium uppercase tracking-[0.16em] text-ink transition-colors duration-200 hover:border-curtain hover:text-curtain";

export default async function ArticlePage({ params }: PageProps<"/articles/[slug]">) {
  const { slug } = await params;
  const index = ARTICLES.findIndex((a) => a.slug === slug);
  if (index < 0) notFound();

  const article = ARTICLES[index];
  // ARTICLES is newest first, so "previous" is the older story.
  const prev = ARTICLES[index + 1];
  const next = ARTICLES[index - 1];
  const [plain, italic] = article.title;

  return (
    <>
      <Reveal />

      <Header
        className="relative h-[max(480px,min(42vw,720px))] bg-ink text-white"
        backdrop={
          <>
            <Image
              src={article.coverImage.src}
              alt={article.coverImage.alt}
              fill
              sizes="100vw"
              loading="eager"
              fetchPriority="high"
              placeholder="blur"
              className="object-cover"
            />
            {/* worst case (white sky): ≥3:1 behind the serif title, ≥4.5:1 behind the small sub-headline */}
            <div className="absolute inset-0 bg-linear-to-b from-black/55 via-black/15 via-30% to-black/85" />
          </>
        }
      >
        <div className="absolute inset-x-0 bottom-0 z-20 mx-auto max-w-[1440px] px-4 pb-6 md:px-10 md:pb-9">
          <p className="font-serif text-[clamp(36px,5vw,72px)] leading-[0.95]">
            {plain} <em>{italic}</em>
          </p>
          <p className="mt-3 max-w-[640px] text-xs font-light uppercase tracking-[0.04em] text-white/90 md:text-sm">
            {article.subheadline}
          </p>
        </div>
      </Header>

      <main>
        <article>
          <header data-reveal className="mx-auto max-w-[1440px] px-4 pt-16 text-center md:px-10 md:pt-[120px]">
            <p className={`${eyebrow} text-curtain`}>{article.category.join(" · ")}</p>
            <h1 className="mt-6 font-serif text-[clamp(44px,6.7vw,96px)] leading-[0.95] tracking-[-0.01em] md:mt-8">
              <span className="text-curtain">{words(plain)}</span>{" "}
              <em className="text-ink/80">{words(italic, plain.split(" ").length)}</em>
            </h1>
            <p className="mx-auto mt-8 max-w-[760px] text-base leading-relaxed text-ink/80 md:mt-12 md:text-lg">
              {article.excerpt}
            </p>
          </header>

          <div className="mx-auto mt-14 grid max-w-[1440px] gap-12 px-4 md:mt-20 md:px-10 lg:grid-cols-[1fr_280px] lg:gap-16">
            <div className="gap-10 text-[15px] leading-[1.75] text-ink/85 md:columns-2 md:text-base">
              {article.body.map((p, i) => (
                <p key={i} className="mb-6 break-inside-avoid-column">
                  {p}
                </p>
              ))}
            </div>

            <aside aria-label="About this story" className="h-fit border-t border-ink pt-5 lg:sticky lg:top-8">
              <dl className="grid gap-5 text-sm">
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.16em] text-mute">Words</dt>
                  <dd className="mt-1 font-serif text-xl italic">{article.author.name}</dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.16em] text-mute">Instagram</dt>
                  <dd>
                    <a
                      href={`https://instagram.com/${article.author.instagram}`}
                      className="inline-flex min-h-11 items-center transition-colors duration-200 hover:text-curtain"
                    >
                      @{article.author.instagram}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.16em] text-mute">Contact</dt>
                  <dd>
                    <a
                      href={`mailto:${article.author.email}`}
                      className="inline-flex min-h-11 items-center transition-colors duration-200 hover:text-curtain"
                    >
                      {article.author.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.16em] text-mute">Published</dt>
                  <dd className="mt-1">
                    <time dateTime={article.date}>{formatDate(article.date)}</time>
                  </dd>
                </div>
              </dl>
            </aside>
          </div>

          <section
            data-reveal
            aria-labelledby="gallery-heading"
            className="mx-auto mt-14 max-w-[1440px] px-4 md:mt-20 md:px-10"
          >
            <h2 id="gallery-heading" className="sr-only">
              Gallery
            </h2>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-6">
              {article.relatedImages.map((photo, i) => (
                <ArticleTile
                  key={i}
                  photo={photo}
                  i={i}
                  sizes="(min-width: 1440px) 340px, (min-width: 1024px) 25vw, 50vw"
                  caption={photo.alt}
                  className="aspect-[4/5]"
                />
              ))}
            </div>
          </section>

          <figure data-reveal className="mx-auto max-w-[1100px] px-4 py-20 text-center md:px-10 md:py-[120px]">
            <blockquote className="font-serif text-[clamp(30px,4.2vw,60px)] leading-[1.08] text-ink/85">
              <p>“{highlight(article.quote.text)}”</p>
            </blockquote>
            <figcaption className={`${eyebrow} mt-8 text-mute md:mt-10`}>{article.quote.by}</figcaption>
          </figure>

          <section aria-labelledby="tags-heading" className="mx-auto max-w-[1440px] px-4 md:px-10">
            <div className="flex flex-col gap-4 border-t border-line pt-8 md:flex-row md:items-center md:gap-8">
              <h2 id="tags-heading" className="text-[11px] uppercase tracking-[0.16em] text-mute">
                Tags
              </h2>
              <ul className="flex flex-wrap gap-2 md:gap-3">
                {article.tags.map((t) => (
                  <li key={t}>
                    <Link href={`/articles?tag=${t}`} className={pill}>
                      {t}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </article>

        <nav aria-label="More stories" className="mx-auto mt-14 max-w-[1440px] px-4 pb-16 md:mt-20 md:px-10 md:pb-24">
          <ul className="grid border-y border-line sm:grid-cols-2">
            <li className="border-line max-sm:border-b sm:border-r">
              {prev && <StoryLink article={prev} dir="prev" />}
            </li>
            <li>{next && <StoryLink article={next} dir="next" />}</li>
          </ul>
        </nav>
      </main>

      <Footer />
    </>
  );
}

function StoryLink({ article, dir }: { article: (typeof ARTICLES)[number]; dir: "prev" | "next" }) {
  const isNext = dir === "next";
  return (
    <Link
      href={`/articles/${article.slug}`}
      rel={dir}
      className={`group flex min-h-11 flex-col gap-3 py-8 sm:px-8 ${isNext ? "items-end text-right" : ""}`}
    >
      <span className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.16em] text-curtain">
        {!isNext && (
          <svg aria-hidden viewBox="0 0 20 12" className="w-5 rotate-180" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M0 6h18M13 1l5 5-5 5" />
          </svg>
        )}
        {isNext ? "Next story" : "Previous story"}
        {isNext && (
          <svg aria-hidden viewBox="0 0 20 12" className="w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M0 6h18M13 1l5 5-5 5" />
          </svg>
        )}
      </span>
      <span className="font-serif text-[clamp(24px,2.6vw,36px)] leading-[1.05] text-ink/80 transition-colors duration-200 lit:text-curtain">
        {article.title[0]} <em>{article.title[1]}</em>
      </span>
    </Link>
  );
}

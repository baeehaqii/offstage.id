import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "../../reveal";
import CrewCharacterCycle from "@/components/CrewCharacterCycle";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { eyebrow, words } from "@/components/type";
import { CREW, getCrewMember } from "@/lib/crew";

export function generateStaticParams() {
  return CREW.map((m) => ({ slug: m.slug }));
}

// Every slug is known at build time; anything else is a 404.
export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/the-crew/[slug]">): Promise<Metadata> {
  const member = getCrewMember((await params).slug);
  if (!member) return {};
  const title = `${member.name}, ${member.role} — Offstage`;
  const description = `${member.role} at Offstage. ${member.bio.split(". ")[0]}.`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "profile",
      images: [{ url: member.portrait.src.src, alt: member.portrait.alt }],
    },
  };
}

// Soft confetti over the portrait; brand reds plus paper so it stays on palette.
const CONFETTI = [
  "left-[8%] top-[10%] size-[22%] bg-curtain-bright",
  "right-[10%] top-[26%] size-[14%] bg-paper",
  "left-[34%] top-[46%] size-[12%] bg-curtain",
  "left-[6%] bottom-[12%] size-[16%] bg-paper",
  "right-[14%] bottom-[8%] size-[26%] bg-curtain",
];

export default async function CrewMemberPage({ params }: PageProps<"/the-crew/[slug]">) {
  const member = getCrewMember((await params).slug);
  if (!member) notFound();

  return (
    <>
      <Reveal />

      <Header className="relative bg-ink pb-5 text-white md:pb-6" />

      <main>
        {/* .cast: hovering or focusing a name in the roster below sets off the character's tilt */}
        <section
          data-reveal
          className="cast mx-auto grid max-w-[1440px] gap-10 overflow-x-clip px-4 pb-16 pt-12 md:px-10 md:pb-24 md:pt-16 lg:grid-cols-[auto_minmax(0,1fr)_minmax(0,1fr)] lg:gap-14"
        >
          {/* Sideways needs more height than a phone can spare, so it only turns from lg up */}
          <h1 className="font-serif text-[clamp(60px,17vw,150px)] uppercase leading-[0.9] tracking-[-0.01em] text-curtain lg:rotate-180 lg:self-start lg:text-[clamp(112px,11vw,168px)] lg:[writing-mode:vertical-rl]">
            {words(member.name)}
          </h1>

          {/* The character takes the column's last 22%, its cut edge flush against the photo */}
          <div className="relative h-fit pr-[22%]">
            <figure className="relative aspect-[4/5] overflow-hidden bg-line">
              <Image
                src={member.portrait.src}
                alt={member.portrait.alt}
                fill
                sizes="(min-width: 1440px) 420px, (min-width: 1024px) 30vw, 78vw"
                loading="eager"
                fetchPriority="high"
                placeholder="blur"
                className="object-cover"
              />
              {CONFETTI.map((dot) => (
                <span
                  key={dot}
                  aria-hidden
                  className={`absolute rounded-full opacity-60 mix-blend-screen blur-xl ${dot}`}
                />
              ))}
            </figure>
            <CrewCharacterCycle className="absolute bottom-0 right-0 w-[22%]" />
          </div>

          <div>
            <h2 className="font-serif text-[clamp(36px,4.4vw,64px)] italic leading-none text-curtain">{member.role}</h2>
            <p className="mt-6 max-w-[56ch] text-[15px] leading-[1.75] text-ink/85 md:mt-8 md:text-base">{member.bio}</p>

            <nav aria-labelledby="roster-heading" className="mt-10 border-t border-line pt-5 md:mt-12">
              <h2 id="roster-heading" className={`${eyebrow} text-mute`}>
                The crew
              </h2>
              <ul className="mt-3 grid grid-cols-2 gap-x-6 font-serif text-[22px] leading-none md:text-[26px]">
                {CREW.map((m) => {
                  const on = m.slug === member.slug;
                  return (
                    <li key={m.slug}>
                      <Link
                        href={`/the-crew/${m.slug}`}
                        aria-current={on ? "page" : undefined}
                        className="group flex min-h-11 cursor-pointer items-center gap-3"
                      >
                        <span aria-hidden className={`h-px w-4 bg-curtain ${on ? "" : "hidden"}`} />
                        <span
                          className={`transition-colors duration-200 lit:text-curtain ${on ? "italic text-curtain" : "text-ink/80"}`}
                        >
                          {m.name}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

import Image from "next/image";

import logoDark from "@/public/images/logo-dark.png";

const CONTACT = ["Email", "Instagram", "TikTok"];

async function subscribe(formData: FormData) {
  "use server";
  // ponytail: no-op until a newsletter provider is chosen; wire formData.get("email") there.
  void formData;
}

export default function Footer() {
  return (
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
  );
}

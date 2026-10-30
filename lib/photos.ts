import type { StaticImageData } from "next/image";

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

export type Photo = { src: StaticImageData; alt: string };

// The whole photo pool; alt text describes what is in the frame, not the file.
export const PHOTOS = {
  hero: { src: hero, alt: "Man in sunglasses seated alone in a darkened theatre" },
  bento1: { src: bento1, alt: "Performer in a billowing white dress against a blue sky" },
  bento2: { src: bento2, alt: "Camera operator filming a performer beside a studio window" },
  bento3: { src: bento3, alt: "Fashion sketches pinned to a studio wall" },
  bento4: { src: bento4, alt: "Woman in a red suit and dark glasses against a green wall" },
  bento5: { src: bento5, alt: "Two women lying on rumpled bedsheets" },
  bento6: { src: bento6, alt: "Flat lay of a knit beanie, sweater, jeans and tulips" },
  card1: { src: card1, alt: "Woman in red holding up teal fabric against a blue sky" },
  card2: { src: card2, alt: "Woman in round red sunglasses on an orange backdrop" },
  card3: { src: card3, alt: "Colour swatches beside a tablet sketch" },
  card4: { src: card4, alt: "Clapperboard held up on a film set" },
} satisfies Record<string, Photo>;

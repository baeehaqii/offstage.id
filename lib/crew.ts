import { PHOTOS, type Photo } from "./photos";

export type CrewMember = {
  slug: string;
  name: string;
  /** Letters before the figure icon on the list page, e.g. 3 → "GER" + icon + "RY". */
  iconAt: number;
  role: string;
  bio: string;
  portrait: Photo;
};

// Placeholder bios and portraits until real headshots land; portraits may repeat from the shared pool.
export const CREW: CrewMember[] = [
  {
    slug: "gerry",
    name: "Gerry",
    iconAt: 3,
    role: "Business Head",
    bio: "Gerry started out selling tickets from a folding table outside a community hall in Bandung, and still reads a production budget the way a stage manager reads a cue sheet. He keeps Offstage solvent without letting the numbers write the show, pairing independent theatre makers with brands that are willing to sit through a rehearsal before they sign anything.",
    portrait: PHOTOS.hero,
  },
  {
    slug: "andhini",
    name: "Andhini",
    iconAt: 2,
    role: "Creative Director",
    bio: "Trained in classical Javanese dance before she ever opened a moodboard, Andhini directs every Offstage project as if it had an audience sitting ten feet away. She looks for the gesture that carries a story without a caption, then builds the campaign, the set and the casting around that single, stubborn image.",
    portrait: PHOTOS.card2,
  },
  {
    slug: "aly",
    name: "Aly",
    iconAt: 1,
    role: "Lead Stylist",
    bio: "Aly learned to cut cloth in a wardrobe room in Yogyakarta, repairing kebaya between matinee and evening shows. Those quick fixes became a way of working: batik offcuts, thrifted tailoring and rented costume stock, layered until a look feels lived in by the character and not merely worn for the camera.",
    portrait: PHOTOS.card1,
  },
  {
    slug: "wilda",
    name: "Wilda",
    iconAt: 3,
    role: "Production Manager",
    bio: "Wilda has loaded sets into village halls, rooftops and black box theatres across Java, usually with less time than anyone promised. She runs every Offstage shoot from a single paper call sheet, and her crews know the two rules that come with it: everyone eats before the first setup, and nobody is sent home late without a ride.",
    portrait: PHOTOS.bento4,
  },
  {
    slug: "jordi",
    name: "Jordi",
    iconAt: 2,
    role: "Cinematographer",
    bio: "Jordi came to film from follow-spot duty, lighting ketoprak performers from the back of a crowded pendopo. He still shoots like someone tracking an actor across a stage, favouring long takes and practical light, and he would sooner wait an hour for late sun through a theatre door than rig a lamp to imitate it.",
    portrait: PHOTOS.bento2,
  },
  {
    slug: "fahima",
    name: "Fahima",
    iconAt: 3,
    role: "Talent Coordinator",
    bio: "Fahima spends her weekends in the back rows of student productions and neighbourhood festivals, keeping a notebook of names long before they have agents. At Offstage she matches performers with the right rooms and the right directors, and makes sure that first-time collaborators are paid properly and credited in full.",
    portrait: PHOTOS.bento1,
  },
  {
    slug: "riyad",
    name: "Riyad",
    iconAt: 2,
    role: "Art Director",
    bio: "Riyad draws every set by hand before anyone is allowed near a screen, a habit from painting backdrops for wayang orang troupes as a teenager. His worlds tend to be built from market finds and borrowed furniture, composed with a scenic painter's eye for what will still read clearly from the very last row.",
    portrait: PHOTOS.bento5,
  },
  {
    slug: "sora",
    name: "Sora",
    iconAt: 2,
    role: "Social Media Lead",
    bio: "Sora treats the feed as the lobby of the theatre: the place people linger before they decide to come inside. Having grown up filming backstage clips for a Jakarta youth company, she turns rehearsal mishaps, costume fittings and quiet load-outs into short stories that make the work behind the curtain feel worth following.",
    portrait: PHOTOS.card4,
  },
];

export function getCrewMember(slug: string) {
  return CREW.find((m) => m.slug === slug);
}

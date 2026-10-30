import { PHOTOS, type Photo } from "./photos";

export const TAGS = ["Teater", "Movie", "Art", "Director", "Biography", "Artist", "Indonesia"] as const;
export type Tag = (typeof TAGS)[number];

export type Article = {
  slug: string;
  /** [plain, italic] — rendered as "PLAIN <em>ITALIC</em>", like the homepage headlines. */
  title: [string, string];
  subheadline: string;
  category: Tag[];
  coverImage: Photo;
  excerpt: string;
  body: string[];
  author: { name: string; instagram: string; email: string };
  /** ISO date */
  date: string;
  relatedImages: [Photo, Photo, Photo, Photo];
  /** Words wrapped in *asterisks* get the curtain highlight. */
  quote: { text: string; by: string };
  tags: Tag[];
};

// Newest first; the homepage "Latest articles" row shows the first four.
export const ARTICLES: Article[] = [
  {
    slug: "the-red-thread",
    title: ["THE RED", "THREAD"],
    subheadline: "A costume designer stitching Jakarta into every seam",
    category: ["Art", "Artist", "Indonesia"],
    coverImage: PHOTOS.card1,
    excerpt:
      "Before the actors arrive, the costumes have already rehearsed. We spent a week in the workroom of a designer who dresses half the stages in Jakarta.",
    body: [
      "The workroom sits above a print shop in Pasar Baru, and by nine in the morning the air already smells of steam and starch. Bolts of fabric lean against the wall like an audience waiting for the house lights. Every garment here begins as a question from a director — who is this person when nobody is watching? — and the answer is cut, pinned and fitted long before opening night.",
      "Colour is never decoration in this room. A red sash tells the back row who holds power; a faded teal tells them who has lost it. The designer tests every swatch under the same warm tungsten the theatre uses, because a fabric that sings in daylight can die under a follow spot.",
      "On the last fitting day the cast stands on a taped-out stage in the corner while the team walks around them in silence. Hems come up a centimetre, a collar is unpicked and reset. Nobody in the audience will ever notice these changes. That, the designer says, is exactly the point.",
    ],
    author: { name: "Rania Putri", instagram: "raniaputri.writes", email: "rania@offstage.id" },
    date: "2026-10-24",
    relatedImages: [PHOTOS.bento1, PHOTOS.bento3, PHOTOS.card3, PHOTOS.bento6],
    quote: { text: "A costume is the *first line* an actor speaks, before they ever *open their mouth*.", by: "Costume designer, Jakarta" },
    tags: ["Art", "Artist", "Indonesia", "Teater"],
  },
  {
    slug: "seeing-in-orange",
    title: ["SEEING IN", "ORANGE"],
    subheadline: "A portrait photographer on colour, nerve and the perfect backdrop",
    category: ["Artist", "Biography"],
    coverImage: PHOTOS.card2,
    excerpt:
      "She shoots actors the way a set designer builds a room: one wall, one colour, nowhere to hide. A conversation about the portraits that made her name.",
    body: [
      "Her first studio was a rented garage with a single roll of orange paper she could not afford to replace. Every portrait from that year shares the same burning backdrop, and it became a signature by accident. Actors started asking for the orange before they asked for her.",
      "She talks about portraits as short plays. There is an entrance — the subject walking onto the paper — a middle where the nerves wear off, and a final act that usually arrives in the last three frames, when they think the session is over and finally stop performing.",
      "Ten years on, the garage is gone but the orange roll is still in the corner of her new studio, cut down to a strip. She does not use it any more. It stays there, she says, to remind her that limits are what give a picture its shape.",
    ],
    author: { name: "Dimas Arya", instagram: "dimas.arya", email: "dimas@offstage.id" },
    date: "2026-10-17",
    relatedImages: [PHOTOS.bento4, PHOTOS.card1, PHOTOS.bento5, PHOTOS.bento2],
    quote: { text: "A portrait is a *short play*. The best line always comes *after the curtain*.", by: "Portrait photographer" },
    tags: ["Artist", "Biography", "Art"],
  },
  {
    slug: "colour-before-light",
    title: ["COLOUR BEFORE", "LIGHT"],
    subheadline: "Inside the palette meetings that shape a production",
    category: ["Art", "Director"],
    coverImage: PHOTOS.card3,
    excerpt:
      "Months before a set is built, a production lives on a single table of swatches. We sat in on the meeting where a director and designer argued about one shade of green.",
    body: [
      "The table is covered edge to edge: paint chips, scraps of velvet, a cracked tile from a demolished cinema. The director moves pieces around like a chess player, then stops on a green that sits somewhere between moss and bottle glass. Everything else in the production will be measured against it.",
      "What surprised us is how much of the conversation is about light that does not exist yet. The designer keeps asking what the stage will feel like at the end of act two, when the lighting goes cold, and swaps two swatches because one would turn grey under blue gels.",
      "By the end of the afternoon the table holds only nine colours. Those nine will travel to the scenic painters, the costume workroom and the poster designer, and for the next four months every decision in the building will answer to them.",
    ],
    author: { name: "Sekar Ayu", instagram: "sekarayu.studio", email: "sekar@offstage.id" },
    date: "2026-10-09",
    relatedImages: [PHOTOS.bento3, PHOTOS.bento6, PHOTOS.card2, PHOTOS.bento1],
    quote: { text: "We choose the colour first, so the light has *something worth finding*.", by: "Production designer" },
    tags: ["Art", "Director", "Teater"],
  },
  {
    slug: "take-one",
    title: ["TAKE", "ONE"],
    subheadline: "Twelve days on the set of an independent Indonesian feature",
    category: ["Movie", "Director", "Indonesia"],
    coverImage: PHOTOS.card4,
    excerpt:
      "A crew of nineteen, one borrowed camera and a script rewritten every night. Notes from a shoot that should not have worked, and did.",
    body: [
      "The first slate claps at 4:40 a.m. in a fishing village outside Cirebon, because the director wants the boats coming in under a sky that has not decided what colour to be. Nineteen people move in near silence. The sound recordist has wrapped his boots in towels so the jetty will not creak.",
      "Every evening the director and the writer sit on plastic chairs outside the guesthouse and rewrite tomorrow. Scenes are cut, merged, handed to a different character. The actors receive their pages at breakfast and seem to thrive on it; one tells us the uncertainty keeps them from performing the lines and forces them to live in them.",
      "On day twelve the camera rolls for the final shot and nobody calls cut for a long time. When the director finally does, the crew does not cheer. They just stand there on the beach, a little stunned, as the light goes.",
    ],
    author: { name: "Bayu Pratama", instagram: "bayupratama.film", email: "bayu@offstage.id" },
    date: "2026-09-30",
    relatedImages: [PHOTOS.bento2, PHOTOS.hero, PHOTOS.bento5, PHOTOS.card1],
    quote: { text: "We were not making a film. We were *catching one* before *the light* left.", by: "Director, on the final day" },
    tags: ["Movie", "Director", "Indonesia"],
  },
  {
    slug: "a-dress-for-the-wind",
    title: ["A DRESS FOR", "THE WIND"],
    subheadline: "An open-air performance built around a single white gown",
    category: ["Teater", "Artist"],
    coverImage: PHOTOS.bento1,
    excerpt:
      "No walls, no wings, no rigging — just a performer, a hillside and twenty metres of white silk that refuses to behave.",
    body: [
      "The piece has no script in the usual sense. A single performer walks up a hill at dusk wearing a gown with a train long enough to catch every gust. The wind is credited in the programme as a member of the cast, and on most nights it steals the show.",
      "Rehearsals were a negotiation with the weather. The choreographer kept a notebook of wind speeds and the shapes the silk made at each one, and built the movement in loose chapters the performer can reorder on the night depending on what the sky gives her.",
      "Audiences sit on the grass with no programme lights and no amplification. When the silk finally lifts and holds for a few seconds against the last of the sun, you can hear two hundred people stop breathing at once.",
    ],
    author: { name: "Rania Putri", instagram: "raniaputri.writes", email: "rania@offstage.id" },
    date: "2026-09-21",
    relatedImages: [PHOTOS.card1, PHOTOS.bento5, PHOTOS.bento3, PHOTOS.card2],
    quote: { text: "We cast the *wind* in the lead role. Some nights it simply *does not show up*.", by: "Choreographer" },
    tags: ["Teater", "Artist", "Art"],
  },
  {
    slug: "behind-the-lens",
    title: ["BEHIND THE", "LENS"],
    subheadline: "The camera operator who learned to frame from the theatre wings",
    category: ["Movie", "Director", "Biography"],
    coverImage: PHOTOS.bento2,
    excerpt:
      "He spent eight years pulling ropes backstage before he ever held a camera. It shows in every frame he shoots.",
    body: [
      "His career started in the fly gallery of a Jakarta playhouse, hauling scenery up into the dark while the actors below performed. From up there, he says, you see a play the way nobody else does: from the side, half hidden, catching the moments between the moments.",
      "When he finally moved to film, he brought that angle with him. Directors hire him for close-ups shot through doorways and across shoulders, for the feeling that the audience has slipped in somewhere it should not be.",
      "He still keeps a pair of rope gloves in his camera bag. On long night shoots, when the crew is tired and the scene will not land, he puts them on for a minute. It reminds him, he says, that every picture is held up by someone the audience never sees.",
    ],
    author: { name: "Dimas Arya", instagram: "dimas.arya", email: "dimas@offstage.id" },
    date: "2026-09-12",
    relatedImages: [PHOTOS.card4, PHOTOS.bento4, PHOTOS.hero, PHOTOS.bento6],
    quote: { text: "From the wings you learn that the *best moments* happen *between the lines*.", by: "Camera operator" },
    tags: ["Movie", "Director", "Biography"],
  },
  {
    slug: "pinned-to-the-wall",
    title: ["PINNED TO", "THE WALL"],
    subheadline: "A designer's archive of sketches, from first draft to final bow",
    category: ["Art", "Biography", "Indonesia"],
    coverImage: PHOTOS.bento3,
    excerpt:
      "Thirty years of productions live on one studio wall in Bandung. We asked the designer to walk us through it, pin by pin.",
    body: [
      "The wall is layered like geology. The newest sketches sit on top, crisp and white; underneath, older drawings have yellowed and curled, their pins rusted into the cork. Some productions survive only here — the sets were struck decades ago and the photographs were lost.",
      "She can tell you the story behind any page. A sketch for a queen's robe that was cut two days before opening. A doodle on the back of a bus ticket that became the silhouette for an entire chorus. A drawing she made for her daughter, pinned among the professional work because it is, she insists, just as good.",
      "She has been asked many times to donate the wall to an archive. She always says no. The drawings are not finished, she says, until she stops looking at them.",
    ],
    author: { name: "Sekar Ayu", instagram: "sekarayu.studio", email: "sekar@offstage.id" },
    date: "2026-09-03",
    relatedImages: [PHOTOS.card3, PHOTOS.bento6, PHOTOS.bento1, PHOTOS.card2],
    quote: { text: "A sketch is *never finished*. It just waits for *the next production*.", by: "Costume and set designer, Bandung" },
    tags: ["Art", "Biography", "Indonesia", "Artist"],
  },
  {
    slug: "the-woman-in-red",
    title: ["THE WOMAN", "IN RED"],
    subheadline: "A stage actor on playing power, and the suit that helped her find it",
    category: ["Teater", "Biography", "Indonesia"],
    coverImage: PHOTOS.bento4,
    excerpt:
      "For two seasons she played a minister who never raises her voice. She credits the role to a red suit and a pair of dark glasses.",
    body: [
      "She describes the first read-through as a disaster. She played the minister loud, the way she thought power sounded, and the director stopped her after three pages. Power, he told her, is the person in the room who never needs to speak.",
      "The breakthrough came in the costume fitting. The designer handed her a red suit, cut sharp at the shoulder, and a pair of dark glasses. She put them on, looked in the mirror and lowered her voice to almost a whisper. The character, she says, simply arrived.",
      "Two seasons and more than a hundred performances later, she still keeps the glasses in her dressing room. She does not wear them anymore. She just likes knowing they are there.",
    ],
    author: { name: "Bayu Pratama", instagram: "bayupratama.film", email: "bayu@offstage.id" },
    date: "2026-08-25",
    relatedImages: [PHOTOS.card2, PHOTOS.bento2, PHOTOS.card1, PHOTOS.bento5],
    quote: { text: "Real power is the person in the room who *never needs* to *raise their voice*.", by: "Stage actor" },
    tags: ["Teater", "Biography", "Indonesia", "Artist"],
  },
];

export function getArticle(slug: string) {
  return ARTICLES.find((a) => a.slug === slug);
}

export function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(iso));
}

import Image from "next/image";

import charMan from "@/public/images/char-left.png";
import charWoman from "@/public/images/char-right.png";

const BASE = "absolute bottom-0 left-0 h-auto w-full";

// Both figures share one spot and swap every 4s (.crew-cycle-* in globals.css). The woman's art is cut on its
// right edge and the man's on its left, so she is mirrored to tuck behind the same side of the photo.
// The tilt reacts to a hovered name through `cast:` (no JS state), on a wrapper so it never touches the swap.
export default function CrewCharacterCycle({ className = "" }: { className?: string }) {
  return (
    <div className={`peek-r ${className}`}>
      <div className="relative aspect-[610/1860] origin-bottom-left motion-safe:transition-[scale,rotate] motion-safe:duration-300 motion-safe:ease-out-3 motion-safe:cast:scale-105 motion-safe:cast:-rotate-2">
        <Image
          src={charMan}
          alt="Illustrated man with curly hair and round glasses peeking out from behind the photo"
          sizes="200px"
          className={`${BASE} crew-cycle-man`}
        />
        <Image
          src={charWoman}
          alt="Illustrated woman with braids and a striped red tie peeking out from behind the photo"
          sizes="200px"
          className={`${BASE} crew-cycle-woman -scale-x-100`}
        />
      </div>
    </div>
  );
}

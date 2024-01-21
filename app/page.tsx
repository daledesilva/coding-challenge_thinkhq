import Image from "next/image";
import { Hero3dBlock } from "@/app/ui/content-blocks/hero-3d-block";
import { body } from "@/app/ui/fonts";
import { SubtitleBlock } from "./ui/content-blocks/subtitle-block";
import { TitleBlock } from "./ui/content-blocks/title-block";
import { OurProcessBlock } from "./ui/content-blocks/our-process-block";

////////
////////

export default function Home() {
  return (
    // NOTE: relative and z-10 ensure lock backgrounds can be positioned and placed behind
    <main className={`
      ${body.className} antialiased
      bg-white text-black
      py-20
      relative z-10
    `}>
      <TitleBlock/>
      <SubtitleBlock/>
      <Hero3dBlock/>
      <OurProcessBlock/>
    </main>
  );
}


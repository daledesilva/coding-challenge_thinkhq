import Image from "next/image";
import { Hero3dBlock } from "@/app/ui/hero-3d";
import { body } from "@/app/ui/fonts";
import { SubtitleBlock } from "./ui/content-blocks/SubtitleBlock";
import { TitleBlock } from "./ui/content-blocks/TitleBlock";
import { OurProcessBlock } from "./ui/content-blocks/OurProcessBlock";

////////
////////

export default function Home() {
  return (
    <main className={`${body.className} antialiased bg-white text-black py-20 relative -z-10`}>
      <TitleBlock/>
      <SubtitleBlock/>
      <Hero3dBlock/>
      <OurProcessBlock/>
    </main>
  );
}


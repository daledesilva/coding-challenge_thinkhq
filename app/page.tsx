import Image from "next/image";
import {Hero3d} from "@/app/ui/hero-3d";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main className="bg-white text-black px-6 py-44 lg:px-14">

      {/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex"> */}
      <div className="">
        <h1>
          The power of collective creativity
        </h1>
      </div>

      {/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex"> */}
      <div className="mt-12 lg:mt-24">
        <p>People and their incredible diversity are the heart and soul of everything we do.</p>
      </div>

      <Hero3d/>

      <div className="bg-black text-white mt-12 py-20 lg:mt-16 lg:py-28">
        
        {/* Arrow */}
        <div className="">
        </div>

        {/* Main text block */}
        <div className="w-full flex justify-center lg:justify-start">
          <div className="text-center lg:text-right lg:w-6/12">
            <p>
              We delve deep into understanding who they are, what motivates them, what challenges they face and how complex systems and forces are shaping them.
            </p>
          </div>
        </div>

        {/* Secondary text block */}
        <div className="w-full flex justify-center lg:justify-end">
          <div className="text-center lg:text-left lg:w-6/12">
            <p>
            Our distinctive approach fosters collaboration with people from all walks of life to truly find the real creative answers to some of life’s most challenging and important questions. Anchoring ourselves in the principles of respect, diversity and empathy helps us get there.
            </p>
          </div>
        </div>

      </div>

    </main>
  );
}

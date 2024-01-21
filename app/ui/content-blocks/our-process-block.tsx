import { flair } from "@/app/ui/fonts";

////////
////////

export function OurProcessBlock() {
  return (
    <div className="center-child-content bg-black w-full text-white mt-12 py-20 lg:mt-16 lg:py-28 relative">
      {/* before:absolute before:h-48 before:w-[200%] before:left-1/2 before:-translate-x-1/2 before:-z-500 before:bg-black before:bottom-full" */}

      {/* Top gradient */}
      <div className="absolute h-48 w-[200%] left-1/2 -translate-x-1/2 -z-10 bottom-full
        bg-gradient-to-t from-black from-80% to-transparent
      ">
      </div>

      <div className="center-child-content">
        <div className="common-content-w common-content-p">

          {/* Arrow */}
          <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2">
            <div className="h-full w-px border-[1px] bottom-1 border-white relative"></div>
            <svg className="bottom-0 left-1/2 absolute transform -translate-x-1/2"
              width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg"
            >
              <path fillRule="evenodd" clipRule="evenodd" d="M6.35514 5.36359H8.35514L13.012 0.706741C13.4026 0.316177 14.0357 0.316177 14.4262 0.706741C14.8168 1.09724 14.8168 1.73041 14.4262 2.12091L8.06228 8.48486C7.67175 8.87543 7.03859 8.87543 6.64807 8.48486L0.284104 2.12091C-0.10642 1.73041 -0.10642 1.09724 0.284104 0.706741C0.674628 0.316177 1.30779 0.316177 1.69832 0.706741L6.35514 5.36359Z" fill="#F4F7E0" />
            </svg>
          </div>

          {/* Main text block */}
          <div className="w-full flex justify-center lg:justify-start">
            <div className="text-center pt-6 lg:text-right lg:w-6/12 lg:-translate-x-px px-16 bg-black relative">
              <p className={`${flair.className} antialiased text-2xl lg:text-4xl`}>
                We delve deep into understanding who they are, what motivates them, what challenges they face and how complex systems and forces are shaping them.
              </p>
            </div>
          </div>

          {/* Secondary text block */}
          <div className="w-full flex justify-center lg:justify-end lg:pt-16">
            <div className="text-center pt-8 pb-8 lg:text-left lg:w-6/12 lg:translate-x-px px-16 bg-black relative">
              <p className="text-base lg:text-xl">
                Our distinctive approach fosters collaboration with people from all walks of life to truly find the real creative answers to some of life’s most challenging and important questions. Anchoring ourselves in the principles of respect, diversity and empathy helps us get there.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom gradient */}
        <div className="absolute h-40 w-[200%] left-1/2 -translate-x-1/2 -z-10 top-full
        bg-gradient-to-b from-black from-30% to-60% to-transparent
        ">
        </div>

      </div>
    </div>
  );
}

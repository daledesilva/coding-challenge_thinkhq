import { flair, title } from "@/app/ui/fonts";

////////
////////

export function TitleBlock() {
  return (
    <div className="center-child-content pt-24">
      <div className="common-content-w common-content-p">
        <h1 className={`${title.className} antialiased  max-w-md lg:max-w-2xl text-5xl lg:text-7xl text-[--text-dark]`}>
          The power of <span className={`${flair.className} italic`}>collective creativity</span>.
        </h1>
      </div>
    </div>
  );
}

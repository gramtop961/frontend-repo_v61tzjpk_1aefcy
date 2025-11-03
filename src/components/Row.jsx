import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Row({ id, title, items, onSelect, openInNewTab = false }) {
  const scroller = useRef(null);

  const scrollBy = (dir) => {
    const el = scroller.current;
    if (!el) return;
    const amount = Math.round(el.clientWidth * 0.9);
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section id={id} className="relative py-6">
      <h2 className="px-4 sm:px-6 lg:px-8 text-xl font-semibold text-white/90 mb-3">
        {title}
      </h2>
      <div className="group relative">
        <button
          onClick={() => scrollBy(-1)}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 h-12 w-12 items-center justify-center rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 hover:bg-black/70"
          aria-label="Scroll left"
        >
          <ChevronLeft />
        </button>
        <div
          ref={scroller}
          className="no-scrollbar overflow-x-auto scroll-smooth px-4 sm:px-6 lg:px-8"
        >
          <div className="flex gap-3 min-w-full">
            {items.map((item) => (
              <Card
                key={item.id || item.title}
                item={item}
                onSelect={onSelect}
                openInNewTab={openInNewTab}
              />
            ))}
          </div>
        </div>
        <button
          onClick={() => scrollBy(1)}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 h-12 w-12 items-center justify-center rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 hover:bg-black/70"
          aria-label="Scroll right"
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}

function Card({ item, onSelect, openInNewTab }) {
  const handleClick = () => {
    if (openInNewTab && item.link) {
      window.open(item.link, "_blank", "noopener,noreferrer");
      return;
    }
    onSelect?.(item);
  };

  return (
    <button
      onClick={handleClick}
      className="group relative aspect-[2/3] w-[42vw] xs:w-[36vw] sm:w-[26vw] md:w-[20vw] lg:w-[16vw] xl:w-[14vw] shrink-0 overflow-hidden rounded-md bg-neutral-800 text-left"
    >
      {item.poster && (
        <img
          src={item.poster}
          alt={item.title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105 group-hover:brightness-110"
          loading="lazy"
        />
      )}
      <div className="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
        <p className="text-[13px] font-medium text-white line-clamp-2">
          {item.title}
        </p>
      </div>
    </button>
  );
}

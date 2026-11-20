import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { business_name } from "./Secret";

interface SlideItem {
  id: number;
  img: string;
  caption: string;
}

const SLIDES: SlideItem[] = [
  {
    id: 1,
    img: "https://i.pinimg.com/736x/c9/c7/76/c9c776d9b5a6fd0e349d275409895b59.jpg",
    caption: "Ancient Vedic Wisdom & Sacred Remedies",
  },
  {
    id: 2,
    img: "https://i.pinimg.com/736x/c7/cb/3e/c7cb3e054ea166dd1308a8f862d99cc1.jpg",
    caption: "Personalized Horoscope & Janam Kundli Analysis",
  },
  {
    id: 3,
    img: "https://i.pinimg.com/736x/38/25/87/382587e3e7e741468d41f1aab882b856.jpg",
    caption: "Relationship Harmony & Marriage Guidance",
  },
  {
    id: 4,
    img: "https://i.pinimg.com/736x/7e/99/e0/7e99e05ffe203a02b7e6816850e0d1ae.jpg",
    caption: "Career, Business & Financial Clarity",
  },
  {
    id: 5,
    img: "https://i.pinimg.com/1200x/37/2d/98/372d986bdf8c8cc68eb3536ff03496fc.jpg",
    caption: "Kundli Matching & Auspicious Muhurat",
  },
  {
    id: 6,
    img: "https://i.pinimg.com/1200x/a7/87/9c/a7879c740d1f1885bff6b63cc9cab2e6.jpg",
    caption: "Vastu Shastra & Positive Energy Alignment",
  },
  {
    id: 7,
    img: "https://i.pinimg.com/1200x/16/1d/27/161d279fefe9115b766ee9ac49fcf485.jpg",
    caption: "Trusted Spiritual Guidance Since 1970",
  },
  {
    id: 8,
    img: "https://i.pinimg.com/736x/a9/74/10/a97410d30893b11463334f7a7c81304c.jpg",
    caption: "100% Confidential Consultations Worldwide",
  },
];

export default function Carousel() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
      duration: 35,
    },
    [
      Autoplay({
        delay: 3500,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  const brandTitle = business_name || "Chamundeswari Astrology Center";

  return (
    <section
      aria-label="Featured Astrology Showcase"
      className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 my-8"
    >
      {/* Decorative Amber Glow Frame */}
      <div className="relative rounded-3xl p-1.5 bg-gradient-to-br from-amber-300/70 via-orange-200/50 to-amber-500/70 shadow-2xl">
        <div
          ref={emblaRef}
          className="w-full h-80 sm:h-96 md:h-[440px] overflow-hidden rounded-[20px] bg-stone-950"
        >
          <div className="flex h-full">
            {SLIDES.map((slide, index) => (
              <div
                key={slide.id}
                className="flex-[0_0_100%] min-w-0 h-full relative"
              >
                <img
                  src={slide.img.trim()}
                  alt={`${brandTitle} — ${slide.caption}`}
                  className="w-full h-full object-cover"
                />

                {/* Bottom Readability Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/25 to-transparent" />

                {/* Top Slide Counter Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-stone-950/75 backdrop-blur-xs border border-amber-400/30 text-amber-300 montserrat text-xs font-semibold tracking-wider">
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {String(SLIDES.length).padStart(2, "0")}
                </div>

                {/* Caption Overlay */}
                <div className="absolute bottom-6 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 flex flex-col items-center text-center">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-[11px] sm:text-xs font-semibold montserrat tracking-wide mb-2 backdrop-blur-xs">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>{brandTitle}</span>
                  </div>
                  <p className="text-white montserrat font-bold text-base sm:text-xl md:text-2xl drop-shadow-md max-w-2xl">
                    {slide.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Previous Button */}
        <button
          type="button"
          onClick={scrollPrev}
          aria-label="Previous slide"
          className="absolute top-1/2 left-3 sm:left-5 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-stone-950/75 hover:bg-amber-500 text-amber-200 hover:text-stone-950 border border-amber-400/40 flex items-center justify-center shadow-lg backdrop-blur-xs transition-all duration-200 hover:scale-105 cursor-pointer"
        >
          <ChevronLeft strokeWidth={2.5} className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Next Button */}
        <button
          type="button"
          onClick={scrollNext}
          aria-label="Next slide"
          className="absolute top-1/2 right-3 sm:right-5 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-stone-950/75 hover:bg-amber-500 text-amber-200 hover:text-stone-950 border border-amber-400/40 flex items-center justify-center shadow-lg backdrop-blur-xs transition-all duration-200 hover:scale-105 cursor-pointer"
        >
          <ChevronRight strokeWidth={2.5} className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div
        role="tablist"
        aria-label="Slide pagination"
        className="flex items-center justify-center gap-2 mt-4"
      >
        {SLIDES.map((slide, index) => {
          const isActive = index === selectedIndex;
          return (
            <button
              key={slide.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => scrollTo(index)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                isActive
                  ? "w-8 bg-gradient-to-r from-amber-500 to-orange-600 shadow-xs"
                  : "w-2.5 bg-amber-900/25 hover:bg-amber-600/50"
              }`}
            />
          );
        })}
      </div>
    </section>
  );
}
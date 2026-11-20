"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, MessageCircle, Phone, Sparkles } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { phone_number } from "./Secret";

interface ServiceCard {
  id: number;
  tag: string;
  title: string;
  desc: string;
  img: string;
}

const CHAKRA_IMG =
  "https://gowtham-astrology.co.uk/wp-content/uploads/2024/10/service-page-before.png";


const CARDS: ServiceCard[] = [
  {
    id: 1,
    tag: "Relationship Harmony",
    title: "Get Your Love Back",
    desc: "Do you wish to reunite with your lost love and restore happiness in your relationship? Astrologer Kumar Vasudevan Guruji provides powerful astrology solutions to heal misunderstandings, remove negative influences, and rebuild lost trust. With divine remedies and expert guidance, you can attract your partner back, strengthen emotional bonds, and enjoy a blissful love life filled with peace and joy.",
    img: "https://i.pinimg.com/736x/05/e5/ad/05e5adc7767bb6c369461d35f5ef3024.jpg",
  },
  {
    id: 2,
    tag: "Divine Insight",
    title: "Psychic Reading",
    desc: "Are you seeking clarity about your future and guidance to handle upcoming challenges? Astrologer Kumar Vasudevan Gurujioffers accurate psychic readings that reveal insights into love, marriage, career, health, and finances. With his divine wisdom, you can understand hidden obstacles, overcome negative energy, and prepare for success. Psychic guidance helps you make confident choices and attract positive outcomes in life.",
    img: "https://i.pinimg.com/1200x/15/aa/08/15aa089e36f93d22021b740d3bf8df93.jpg",
  },
  {
    id: 3,
    tag: "Growth & Stability",
    title: "Solve Business Problem",
    desc: "Is your business struggling with losses, low profits, or constant obstacles? Astrologer Kumar Vasudevan Guruji provides effective astrology remedies to remove negativity and open doors to growth. With spiritual solutions, you can attract more customers, overcome financial hurdles, and create long-term stability. His guidance helps boost confidence, bring prosperity, and ensure your business flourishes with steady success.",
    img: "https://i.pinimg.com/736x/f9/f0/4d/f9f04d3983a47795189a85a4f05c7fff.jpg",
  },
];

const CardCarousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
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

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  return (
    <section
      aria-label="Astrology Services Carousel"
      className="w-full max-w-6xl mx-auto px-4 sm:px-6 my-10 relative"
    >
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300/80 text-amber-900 montserrat text-xs font-bold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          Sacred Remedies
        </span>
        <h2 className="montserrat font-extrabold text-2xl sm:text-3xl md:text-4xl text-stone-900 tracking-tight">
          Specialized Astrology Services
        </h2>
        <p className="open-sans text-sm sm:text-base text-stone-600 mt-2">
          Personalized guidance and time-tested remedies to help you overcome
          obstacles with confidence.
        </p>
      </div>

      {/* Carousel Viewport */}
      <div className="relative">
        <div className="overflow-hidden pt-20 pb-6" ref={emblaRef}>
          <div className="flex">
            {CARDS.map((card) => (
              <div
                key={card.id}
                className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-3 sm:px-4 flex"
              >
                <article className="relative w-full max-w-sm mx-auto pt-24 pb-7 px-6 rounded-3xl bg-gradient-to-b from-amber-50 via-white to-amber-50/70 border border-amber-200/90 shadow-xl hover:shadow-2xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between text-center">
                  {/* Rotating Chakra Behind Portrait */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-14 left-1/2 -translate-x-1/2 z-0 w-44 h-44 flex items-center justify-center opacity-55"
                  >
                    <img
                      src={CHAKRA_IMG}
                      alt=""
                      className="w-full h-full object-contain animate-[spin_18s_linear_infinite]"
                    />
                  </div>

                  {/* Circular Service Portrait */}
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-10 w-32 h-32 rounded-full p-1 bg-gradient-to-tr from-amber-500 via-orange-400 to-amber-300 shadow-lg">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-full object-cover rounded-full border-2 border-white"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="relative z-10 flex flex-col items-center flex-1">
                    <span className="px-3 py-0.5 rounded-full bg-amber-500/15 text-amber-900 font-semibold montserrat text-[11px] uppercase tracking-wider mb-2">
                      {card.tag}
                    </span>

                    <h3 className="text-xl font-bold text-stone-900 montserrat mb-3">
                      {card.title}
                    </h3>

                    <p className="text-sm text-stone-600 open-sans leading-relaxed">
                      {card.desc}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="relative z-10 mt-6 pt-5 border-t border-amber-200/70 flex items-center justify-center gap-3">
                    <a
                      href={`tel:${phone_number}`}
                      className="flex-1 py-2.5 px-4 rounded-xl bg-stone-900 hover:bg-amber-800 text-amber-300 hover:text-white font-semibold montserrat text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-colors duration-200"
                    >
                      <Phone className="w-4 h-4 shrink-0" />
                      <span>Call</span>
                    </a>

                    <a
                      href={`https://wa.me/${phone_number}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-semibold montserrat text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all duration-200"
                    >
                      <MessageCircle className="w-4 h-4 shrink-0" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* Previous Button */}
        <button
          type="button"
          onClick={scrollPrev}
          aria-label="Previous service card"
          className="hidden sm:flex absolute -left-3 lg:-left-5 top-[58%] -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-stone-950/85 hover:bg-amber-500 text-amber-200 hover:text-stone-950 border border-amber-400/40 items-center justify-center shadow-lg transition-all duration-200 hover:scale-105 cursor-pointer"
        >
          <ChevronLeft strokeWidth={2.5} className="w-5 h-5" />
        </button>

        {/* Next Button */}
        <button
          type="button"
          onClick={scrollNext}
          aria-label="Next service card"
          className="hidden sm:flex absolute -right-3 lg:-right-5 top-[58%] -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-stone-950/85 hover:bg-amber-500 text-amber-200 hover:text-stone-950 border border-amber-400/40 items-center justify-center shadow-lg transition-all duration-200 hover:scale-105 cursor-pointer"
        >
          <ChevronRight strokeWidth={2.5} className="w-5 h-5" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div
        role="tablist"
        aria-label="Service carousel pagination"
        className="flex items-center justify-center gap-2 mt-4"
      >
        {CARDS.map((card, index) => {
          const isActive = index === selectedIndex;
          return (
            <button
              key={card.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`Go to ${card.title}`}
              onClick={() => scrollTo(index)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                isActive
                  ? "w-8 bg-gradient-to-r from-amber-500 to-orange-600"
                  : "w-2.5 bg-amber-900/25 hover:bg-amber-600/50"
              }`}
            />
          );
        })}
      </div>
    </section>
  );
};

export default CardCarousel;
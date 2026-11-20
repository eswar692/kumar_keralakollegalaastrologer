import { MessageCircle, Phone, Sparkles } from "lucide-react";
import { phone_number } from "../Genaral/Secret";

interface AstrologyServiceItem {
  id: number;
  name: string;
  desc: string;
  img: string;
}

const SERVICES: AstrologyServiceItem[] = [
  {
    id: 1,
    name: "Love Problems",
    desc: "Solutions for lost love, misunderstandings, and building strong relationships.",
    img: "https://i.pinimg.com/1200x/3f/f5/89/3ff5895bca8970847577656ffe788eff.jpg",
  },
  {
    id: 2,
    name: "Marriage Issues",
    desc: "Guidance for happy married life, compatibility, and resolving conflicts.",
    img: "https://i.pinimg.com/736x/fa/ee/46/faee46287149c9a2470c20d26318fee1.jpg",
  },
  {
    id: 3,
    name: "Court Cases",
    desc: "Astrological remedies to overcome legal challenges and disputes.",
    img: "https://i.pinimg.com/1200x/fb/4e/36/fb4e36b171a92fb4d391f3bc6a90e8a5.jpg",
  },
  {
    id: 4,
    name: "Finance Problems",
    desc: "Effective remedies for wealth, investments, and financial stability.",
    img: "https://i.pinimg.com/736x/53/3a/25/533a25d0fd940cc5fc8b5fdaf457b14a.jpg",
  },
  {
    id: 5,
    name: "Education Guidance",
    desc: "Astrology support for students seeking focus, success, and higher studies.",
    img: "https://i.pinimg.com/736x/7f/8a/60/7f8a6099a523cc79342eaee0a29e92f8.jpg",
  },
  {
    id: 6,
    name: "Career Growth",
    desc: "Clarity for job opportunities, promotions, and professional success.",
    img: "https://i.pinimg.com/736x/2d/21/ff/2d21ff0997bd7bdfb46491c3d13798c3.jpg",
  },
  {
    id: 7,
    name: "Vashikaran",
    desc: "Powerful vashikaran solutions to influence situations positively.",
    img: "https://i.pinimg.com/1200x/bd/dc/94/bddc94a7fcefc3598976dec33665645a.jpg",
  },
  {
    id: 8,
    name: "Future Predictions",
    desc: "Accurate horoscope readings to understand your destiny and future.",
    img: "https://i.pinimg.com/1200x/40/6d/94/406d941b9978384bd9008b1f81c613a3.jpg",
  },
  {
    id: 9,
    name: "All Types of Vashikaran",
    desc: "Specialized remedies for love, family, and professional life.",
    img: "https://i.pinimg.com/736x/34/1d/eb/341deb4d9ba9bd2934f0d996567b37a3.jpg",
  },
];

export default function Services() {
  const cleanPhone = (phone_number || "916302133653").replace(/^91/, "");
  const telHref = `tel:+91${cleanPhone}`;
  const waHref = `https://wa.me/91${cleanPhone}`;

  return (
    <section
      aria-labelledby="services-page-heading"
      className="w-full bg-gradient-to-b from-amber-50/90 via-orange-50/50 to-amber-100/80 py-14 sm:py-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-stone-900 text-amber-300 border border-amber-500/30 montserrat text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          Sacred Guidance &amp; Remedies
        </span>

        <h2
          id="services-page-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight montserrat"
        >
          Our Astrology Services
        </h2>

        <p className="text-stone-600 mt-4 text-sm sm:text-lg leading-relaxed open-sans">
          Explore our wide range of astrology services designed to bring
          clarity, peace, and solutions to your life problems.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        {SERVICES.map((service) => (
          <article
            key={service.id}
            className="group flex flex-col justify-between rounded-3xl bg-gradient-to-b from-amber-50/90 via-white to-amber-50/60 border border-amber-200/90 hover:border-amber-400 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <div>
              {/* Framed Image */}
              <div className="p-3 pb-0">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-amber-200/80 bg-stone-950">
                  <img
                    src={service.img}
                    alt={service.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/50 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-3 px-2.5 py-0.5 rounded-full bg-stone-950/75 backdrop-blur-xs border border-amber-400/30 text-amber-300 montserrat text-[11px] font-semibold">
                    #{String(service.id).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 pb-3 flex flex-col">
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 group-hover:text-amber-800 transition-colors mb-2.5 montserrat">
                  {service.name}
                </h3>
                <p className="text-sm sm:text-base text-stone-600 leading-relaxed open-sans">
                  {service.desc}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="px-6 pb-6 pt-3 flex items-center gap-3 montserrat text-sm font-semibold">
              <a
                href={telHref}
                className="flex-1 flex items-center justify-center gap-2 bg-stone-900 hover:bg-amber-900 text-amber-300 hover:text-white px-4 py-2.5 rounded-xl shadow-sm transition-colors duration-200"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span>Call</span>
              </a>

              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white px-4 py-2.5 rounded-xl shadow-md transition-all duration-200 hover:scale-[1.02]"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>WhatsApp</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
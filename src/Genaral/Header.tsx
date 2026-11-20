import { Menu as MenuIcon, PhoneCall, Sparkles, X } from "lucide-react";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import { Link, useLocation } from "react-router-dom";
import { business_name, phone_number } from "./Secret";
import { createPortal } from "react-dom";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  return (
    <header className=" top-0 z-40 w-full shadow-lg border-b border-amber-500/25">
      {/* Top Announcement / Quick-Call Bar */}
      <TopBar />

      {/* Main Brand & Navigation Bar */}
      <div className="bg-gradient-to-r from-amber-50/95 via-orange-50/90 to-amber-100/95 backdrop-blur-md border-b border-amber-300/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5 flex items-center justify-between gap-4">
          <BrandIdentity />
          <Navigation />
        </div>
      </div>

      {/* Scrolling Ticker */}
      <TextMarquee />
    </header>
  );
};

export default Header;

/* -------------------------------------------------------------------------- */
/*                                Subcomponents                               */
/* -------------------------------------------------------------------------- */

const TopBar = () => (
  <div className="bg-stone-900 text-amber-100 text-xs sm:text-sm py-2 px-4 border-b border-amber-500/20">
    <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
        <span className="montserrat font-medium tracking-wide">
          Facing Life or Relationship Problems?{" "}
          <span className="hidden sm:inline text-amber-300/90">
            Get 100% Confidential Guidance.
          </span>
        </span>
      </div>

      <a
        href={`tel:+91${phone_number}`}
        className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-semibold montserrat text-xs shadow-sm transition-all duration-200 hover:scale-105 shrink-0"
      >
        <PhoneCall className="w-3.5 h-3.5 animate-pulse" />
        <span>Talk To Astrologer</span>
      </a>
    </div>
  </div>
);

const BrandIdentity = () => (
  <Link to="/" className="flex items-center gap-3.5 group">
    <div className="relative shrink-0">
      <div className="absolute -inset-0.5 bg-gradient-to-tr from-amber-500 to-orange-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-300" />
      <img
        src="https://i.pinimg.com/736x/84/f2/06/84f206796ebc4f12cf7338105248a95a.jpg"
        alt={`${business_name} Logo`}
        className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-cover rounded-2xl border-2 border-amber-400/70 shadow-md"
      />
    </div>

    <div className="flex flex-col text-left">
      <div className="flex flex-wrap items-center gap-2">
        <h1 className="montserrat font-extrabold text-xl sm:text-2xl md:text-3xl text-stone-900 tracking-tight group-hover:text-amber-800 transition-colors">
          {business_name}
        </h1>
        <span className="px-2 py-0.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-amber-200/80 text-amber-900 border border-amber-400/50 rounded-full">
          Est. 1970
        </span>
      </div>
      <p className="open-sans text-xs sm:text-sm text-stone-600 mt-0.5 line-clamp-1">
        Accurate Vedic Astrology & Personalized Spiritual Remedies
      </p>
    </div>
  </Link>
);

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <div>
      {/* Desktop Links */}
      <nav className="hidden lg:flex items-center gap-8">
        <ul className="flex items-center gap-7 font-semibold text-stone-800 montserrat text-base">
          {NAV_LINKS.map(({ label, path }) => {
            const isActive = location.pathname === path;
            return (
              <li key={path}>
                <Link
                  to={path}
                  className={`relative py-1 transition-colors duration-200 hover:text-amber-700 ${
                    isActive ? "text-amber-700" : "text-stone-800"
                  }`}
                >
                  {label}
                  {/* Active Underline Indicator */}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-amber-600 rounded-full transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        <a
          href={`tel:+91${phone_number}`}
          className="px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-amber-800 text-amber-300 hover:text-white font-semibold montserrat text-sm shadow-md transition-all duration-300 flex items-center gap-2"
        >
          <PhoneCall className="w-4 h-4" />
          <span>Book Consultation</span>
        </a>
      </nav>

      {/* Mobile Hamburger Button */}
      <button
        aria-label="Open Navigation Menu"
        onClick={() => setOpen(true)}
        className="lg:hidden p-2.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-400/50 text-stone-900 transition duration-200"
      >
        <MenuIcon className="w-6 h-6" strokeWidth={2.2} />
      </button>

      {/* Mobile Drawer */}
      {open && <MobileMenu setOpen={setOpen} currentPath={location.pathname} />}
    </div>
  );
};

const MobileMenu = ({
  setOpen,
  currentPath,
}: {
  setOpen: (open: boolean) => void;   
  currentPath: string;
}) => {
  if (typeof document === "undefined") return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] lg:hidden flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-stone-950/60 backdrop-blur-xs transition-opacity"
        onClick={() => setOpen(false)}
      />

      {/* Slide-over Panel */}
      <div className="relative z-10 w-4/5 max-w-sm h-full bg-gradient-to-b from-amber-50 via-white to-amber-50/80 p-6 flex flex-col justify-between shadow-2xl border-l border-amber-200 overflow-y-auto">
        <div>
          {/* Drawer Header */}
          <div className="flex justify-between items-center pb-5 border-b border-amber-200/80">
            <div>
              <h2 className="montserrat text-xl font-bold text-stone-900">
                {business_name}
              </h2>
              <span className="text-xs font-medium text-amber-700">
                Trusted Since 1970
              </span>
            </div>
            <button
              type="button"
              aria-label="Close Navigation Menu"
              onClick={() => setOpen(false)}
              className="p-2 bg-stone-900 text-amber-400 rounded-full shadow-md hover:scale-105 transition-transform"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Links */}
          <ul className="flex flex-col gap-2 mt-6 font-semibold montserrat text-base">
            {NAV_LINKS.map(({ label, path }) => {
              const isActive = currentPath === path;
              return (
                <li key={path}>
                  <Link
                    to={path}
                    onClick={() => setOpen(false)}
                    className={`block px-4 py-3 rounded-xl transition-colors ${
                      isActive
                        ? "bg-amber-500/20 text-amber-900 font-bold border border-amber-400/40"
                        : "text-stone-700 hover:bg-amber-100/60 hover:text-stone-900"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Drawer Footer CTA */}
        <div className="pt-6 border-t border-amber-200/80 flex flex-col gap-4">
          <p className="open-sans text-stone-600 text-xs leading-relaxed">
            <strong className="text-stone-900">{business_name}</strong> —
            Horoscope readings, matchmaking, career predictions, and personalized
            spiritual remedies to guide you with confidence.
          </p>

          <a
            href={`tel:+91${phone_number}`}
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold montserrat text-sm shadow-lg flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Call Now: +91 {phone_number}</span>
          </a>
        </div>
      </div>
    </div>,
    document.body
  );
};

const TextMarquee = () => (
  <div className="bg-stone-950 border-t border-amber-500/30 py-2">
    <Marquee
      speed={45}
      pauseOnHover={true}
      gradient={true}
      gradientColor="#0c0a09"
      gradientWidth={40}
      className="text-amber-300 font-medium open-sans text-xs sm:text-sm tracking-wide"
    >
      <span className="mx-4 inline-flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />
        Facing issues like Love Breakup, Love Problems, Marriage Disputes, or
        Relationship Conflicts? Consult for authentic Astrological & Vashikaran
        solutions to resolve personal challenges. Contact a trusted Astrologer
        today.
      </span>
    </Marquee>
  </div>
);
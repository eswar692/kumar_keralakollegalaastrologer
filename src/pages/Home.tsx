import {
  Briefcase,
  Heart,
  Phone,
  Scale,
  Users,
  MessageCircle,
  Sparkles,
  Award,
  PhoneCall,
  type LucideIcon,
  Baby,
  ShieldCheck,
} from "lucide-react";
import Carousel from "../Genaral/Carousel";
import { motion } from "framer-motion";
import Testimonials from "../Genaral/Testimonial";
import FAQ from "../Genaral/FAQ";
import CardCarousel from "../Genaral/CardsCarousel";
import { business_name, person_name, phone_number } from "../Genaral/Secret";

const Home = () => {
  return (
    <div className="flex flex-col p-4 bg-orange-100 w-full h-full">
      <Carousel />
      <CardCarousel />
      <Problems />
      <AboutAstrologer />
      <AstrologyServices />
      <AstrologyServicesModern />
      <AllServicesModern />
      <HomeLastDesign />
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default Home;

interface ProblemItem {
  id: number;
  title: string;
  desc: string;
  img: string;
}

const PROBLEMS: ProblemItem[] = [
  {
    id: 1,
    title: "Lost Love Back",
    desc: "Available on both WhatsApp and Call. One call can change your life.",
    img: "https://i.pinimg.com/1200x/fe/f7/66/fef7664ac6c80d3c9c01d988cce21312.jpg",
  },
  {
    id: 2,
    title: "Marriage Problem Solution",
    desc: "Solve disputes and misunderstandings with astrology guidance.",
    img: "https://i.pinimg.com/1200x/fa/67/7f/fa677fb036bc9c22b696224c3fb0ea40.jpg",
  },
  {
    id: 3,
    title: "Horoscope Specialist",
    desc: "Attract your desired partner with trusted vashikaran solutions.",
    img: "https://i.pinimg.com/736x/bf/bf/b6/bfbfb65c7470761d557ae0cd6c4e0975.jpg",
  },
  {
    id: 4,
    title: "Education Problems",
    desc: "Personalized astrological remedies and puja to improve concentration, memory and academic success. Suitable for students preparing for exams, entrance tests, or academic growth.",
    img: "https://i.pinimg.com/736x/31/86/e9/3186e9b282b9fdd08484760549d0fac9.jpg",
  },
  {
    id: 5,
    title: "Vastu Pooja & Home Harmony",
    desc: "Vastu analysis and corrective poojas to balance energy at home or workplace — remove blockages, enhance prosperity, and bring peace to the living space.",
    img: "https://i.pinimg.com/1200x/1d/19/0e/1d190e8025f068ed7557555c05ace0ed.jpg",
  },
  {
    id: 6,
    title: "Career Problems",
    desc: "Astrological career mapping, timely remedies and rituals to unlock career opportunities, interview luck, job changes and business growth.",
    img: "https://i.pinimg.com/736x/0f/20/85/0f20856767b5071e9016703aa8fd0809.jpg",
  },
  {
    id: 7,
    title: "Health & Wellbeing",
    desc: "Holistic horoscope-based suggestions and gentle remedial poojas to support physical and mental wellbeing. Not a substitute for medical care — recommended alongside professional treatment.",
    img: "https://i.pinimg.com/736x/81/58/f7/8158f70ba1f01473cbe7c12109538e2d.jpg",
  },
  {
    id: 8,
    title: "Relationship Attraction",
    desc: "Specialized remedies aimed at rekindling attraction and emotional closeness. Provided carefully with ethical guidance and clear expectations.",
    img: "https://i.pinimg.com/736x/6d/7d/b5/6d7db5eb25b80038bcf31946409742b1.jpg",
  },
  {
    id: 9,
    title: "Family Pooja",
    desc: "Remedies and rituals to ease family disputes, restore trust and harmony in household relationships while respecting everyone's wellbeing and consent.",
    img: "https://i.pinimg.com/736x/4e/45/35/4e4535c3b00487016e6821c1e32c7126.jpg",
  },
];

const Problems = () => {
  return (
    <section
      aria-label="Astrology Problems and Solutions"
      className="w-full max-w-6xl mx-auto px-4 sm:px-6 my-12"
    >
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300/80 text-amber-900 montserrat text-xs font-bold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          Guidance & Remedies
        </span>
        <h2 className="montserrat font-extrabold text-2xl sm:text-3xl md:text-4xl text-stone-900 tracking-tight">
          Life Challenges We Help Resolve
        </h2>
        <p className="open-sans text-sm sm:text-base text-stone-600 mt-2">
          Connect directly via WhatsApp for private, personalized astrological
          consultations.
        </p>
      </div>

      {/* Cards Grid */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.45 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
      >
        {PROBLEMS.map((problem) => (
          <article
            key={problem.id}
            className="group flex flex-col justify-between rounded-3xl bg-gradient-to-b from-amber-50/90 via-white to-amber-50/60 border border-amber-200/90 hover:border-amber-400 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <div>
              {/* Redesigned Photo Container */}
              <div className="p-3 pb-0">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-amber-200/80 bg-stone-900">
                  <img
                    src={problem.img}
                    alt={problem.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/55 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-3 px-2.5 py-0.5 rounded-full bg-stone-950/75 backdrop-blur-xs border border-amber-400/30 text-amber-300 montserrat text-[11px] font-semibold">
                    #{String(problem.id).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* Card Text */}
              <div className="p-5 sm:p-6 text-center flex flex-col items-center">
                <h3 className="text-xl font-bold text-stone-900 montserrat mb-2.5">
                  {problem.title}
                </h3>
                <p className="text-sm text-stone-600 poppins leading-relaxed">
                  {problem.desc}
                </p>
              </div>
            </div>

            {/* Action Button */}
            <div className="px-5 sm:px-6 pb-6 pt-2 flex justify-center">
              <a
                href={`https://wa.me/${phone_number}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-semibold montserrat text-sm flex items-center justify-center gap-2 shadow-md transition-all duration-200 hover:scale-[1.02]"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span>Online Chatting</span>
              </a>
            </div>
          </article>
        ))}
      </motion.div>
    </section>
  );
};



const AboutAstrologer = () => {
  const brandName = business_name || "Chamundeswari Astrology Center";

  return (
    <section
      aria-labelledby="about-astrologer-heading"
      className="w-full bg-gradient-to-br from-amber-50 via-orange-50/70 to-amber-100/80 border-y border-amber-200/80 py-12 sm:py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Side Content */}
        <div className="lg:col-span-7 flex flex-col items-start">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-stone-900 text-amber-300 border border-amber-500/30 text-xs font-bold uppercase tracking-wider montserrat mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Let&apos;s Know About
          </span>

          <h2
            id="about-astrologer-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 montserrat tracking-tight mb-4"
          >
            {brandName}
          </h2>

          {/* Quick Credibility Pills */}
          <div className="flex flex-wrap gap-2 mb-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-200/75 text-amber-950 text-xs font-semibold montserrat border border-amber-300">
              <Award className="w-3.5 h-3.5 text-amber-700" />
              Generational Lineage
            </span>
            <span className="px-3 py-1 rounded-full bg-white/80 text-stone-700 text-xs font-semibold montserrat border border-amber-200">
              Trusted Since 1970
            </span>
            <span className="px-3 py-1 rounded-full bg-white/80 text-stone-700 text-xs font-semibold montserrat border border-amber-200">
              Worldwide Clients
            </span>
          </div>

          <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base open-sans">
            <p>
              A well-known name in traditional guidance is{" "}
              <strong className="font-semibold text-amber-900">
                {brandName}
              </strong>
              . Having learned sacred astrological principles from his father and
              grandfather, he has built a deep command of classical methods.
              Over the years, many individuals have turned to his guidance and
              found clarity and lasting relief. He is respected for listening
              carefully and offering remedies only after truly understanding the
              root of a client&apos;s situation—welcoming everyone regardless of
              background or financial standing.
            </p>

            <p>
              His consultations have supported people across regions and
              continents who seek steady direction through personal and
              worldly challenges. Across all major branches of astrology,{" "}
              <strong className="font-semibold text-amber-900">
                {brandName}
              </strong>{" "}
              remains dedicated to practical, compassionate, and confidential
              counsel.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-7 flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
            <a
              href={`tel:+91${phone_number}`}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-stone-900 hover:bg-amber-900 text-amber-300 hover:text-white font-semibold montserrat text-sm shadow-md transition-all duration-200"
            >
              <PhoneCall className="w-4 h-4 shrink-0" />
              <span>Talk To Astrologer</span>
            </a>

            <a
              href={`https://wa.me/${phone_number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-semibold montserrat text-sm shadow-md transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>WhatsApp Consultation</span>
            </a>
          </div>
        </div>

        {/* Right Side Framed Image */}
        <div className="lg:col-span-5 flex justify-center w-full">
          <div className="relative w-full max-w-md rounded-3xl p-2 bg-gradient-to-tr from-amber-400/70 via-orange-200/60 to-amber-500/70 shadow-2xl">
            <div className="relative overflow-hidden rounded-[20px] bg-stone-950 aspect-[4/4] sm:aspect-[4/4.3]">
              <img
                src="https://i.pinimg.com/1200x/55/ad/37/55ad37bfae42481dbbcb5a3be4f26629.jpg"
                alt={`${brandName} — Traditional Astrology Banner`}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/75 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-stone-950/80 backdrop-blur-xs border border-amber-400/30 px-4 py-3 text-left">
                <p className="montserrat font-bold text-amber-300 text-sm">
                  Personalized &amp; Confidential Guidance
                </p>
                <p className="open-sans text-stone-200 text-xs mt-0.5">
                  Horoscope readings, relationship harmony, career &amp; Vastu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



interface OtherService {
  id: number;
  title: string;
  desc: string;
  img: string;
}

const SERVICES: OtherService[] = [
  {
    id: 1,
    title: "Breakup Problem",
    desc: "Breakup problems are very common in today's generation. Explore personalized astrological guidance to ease separation pain and restore harmony.",
    img: "https://i.pinimg.com/736x/1c/77/2c/1c772cd72354da24308771d64fc70d02.jpg",
  },
  {
    id: 2,
    title: "Gf/Bf Dispute",
    desc: "Relationship misunderstandings can be deeply stressful. Traditional remedies help rebuild mutual trust and keep your bond smooth and healthy.",
    img: "https://i.pinimg.com/736x/a9/63/0d/a9630de48cbdf2fe602f0707e7e5a490.jpg",
  },
  {
    id: 3,
    title: "Love Problem",
    desc: "Overcoming emotional hurdles isn't always easy, but thoughtful horoscope guidance can illuminate a clear path to keep love alive.",
    img: "https://i.pinimg.com/736x/84/ed/60/84ed60214bf44d1ae5258a0b9f299e26.jpg",
  },
  {
    id: 4,
    title: "Family Problem",
    desc: "When household tensions arise, corrective astrological remedies and spiritual rituals help bring lasting peace and positivity home.",
    img: "https://i.pinimg.com/1200x/65/90/34/6590344e50ed6a28c5baf17159f702fd.jpg",
  },
];

const AstrologyServices = () => {
  return (
    <section
      aria-labelledby="other-services-heading"
      className="w-full bg-gradient-to-b from-amber-50/60 via-white to-amber-50/90 py-14 px-4 sm:px-6 lg:px-8 border-t border-amber-200/70"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300/80 text-amber-900 montserrat text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Relationship &amp; Home
          </span>
          <h2
            id="other-services-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 montserrat tracking-tight"
          >
            Our Other Astrology Services
          </h2>
          <p className="open-sans text-sm sm:text-base text-stone-600 mt-2">
            Confidential consultations and traditional remedies tailored to
            your personal situation.
          </p>
        </div>

        {/* 4-Column Service Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              className="group flex flex-col justify-between rounded-3xl bg-gradient-to-b from-amber-50/90 via-white to-amber-50/60 border border-amber-200/90 hover:border-amber-400 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div>
                {/* Framed Image */}
                <div className="p-3 pb-0">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-amber-200/70 bg-stone-900">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Card Copy */}
                <div className="p-5 text-center">
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 montserrat mb-2 group-hover:text-amber-800 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-stone-600 text-sm open-sans leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>

              {/* Aligned Bottom CTA */}
              <div className="px-5 pb-5 pt-1">
                <a
                  href={`tel:${phone_number}`}
                  className="montserrat flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-semibold text-sm shadow-md transition-all duration-200 hover:scale-[1.02]"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>Call Us Now</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};



interface ModernService {
  id: number;
  title: string;
  subtitle: string;
  img: string;
}

const MODERN_SERVICES: ModernService[] = [
  {
    id: 1,
    title: "Marriage Specialist",
    subtitle: "Guidance for harmony, compatibility, and lasting marital peace.",
    img: "https://i.pinimg.com/736x/b2/1b/e0/b21be005828ce08b7abf62c5f376f226.jpg",
  },
  {
    id: 2,
    title: "Husband Wife Dispute",
    subtitle: "Thoughtful remedies to ease misunderstandings and rebuild trust.",
    img: "https://i.pinimg.com/736x/97/77/1f/97771f4ee02bdc4e9ce7bd9323668be3.jpg",
  },
  {
    id: 3,
    title: "Ex Love Back Expert",
    subtitle: "Personalized astrological insight to help heal emotional distance.",
    img: "https://i.pinimg.com/736x/d7/99/f8/d799f8d1479ed6724a3f1e3a1a0182d8.jpg",
  },
];

const AstrologyServicesModern = () => {
  return (
    <section
      aria-labelledby="best-services-heading"
      className="w-full bg-gradient-to-b from-amber-50/80 via-white to-amber-50/90 py-14 px-4 sm:px-6 lg:px-8 border-t border-amber-200/70"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300/80 text-amber-900 montserrat text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Featured Specialties
          </span>
          <h2
            id="best-services-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 montserrat tracking-tight"
          >
            Best Astrology Services
          </h2>
          <p className="open-sans text-sm sm:text-base text-stone-600 mt-2">
            Focused consultations for marriage, partnership harmony, and
            relationship clarity.
          </p>
        </div>

        {/* 3-Column Circular Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
          {MODERN_SERVICES.map((service) => (
            <article
              key={service.id}
              className="group flex flex-col justify-between items-center text-center rounded-3xl bg-gradient-to-b from-amber-50/90 via-white to-amber-50/60 border border-amber-200/90 hover:border-amber-400 p-7 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex flex-col items-center">
                {/* Circular Portrait with Amber Ring */}
                <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-tr from-amber-500 via-orange-400 to-amber-300 shadow-md mb-5 transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full rounded-full object-cover object-top border-2 border-white"
                  />
                </div>

                <h3 className="text-xl font-bold text-stone-900 montserrat mb-2 group-hover:text-amber-800 transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-stone-600 open-sans leading-relaxed max-w-xs mb-6">
                  {service.subtitle}
                </p>
              </div>

              {/* Call CTA */}
              <a
                href={`tel:${phone_number}`}
                className="montserrat flex items-center justify-center gap-2 w-full max-w-xs py-2.5 px-5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-semibold text-sm shadow-md transition-all duration-200 hover:scale-[1.02]"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span>Call Now</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};



interface PremiumService {
  id: number;
  title: string;
  icon: LucideIcon;
  desc: string;
}

const PREMIUM_SERVICES: PremiumService[] = [
  {
    id: 1,
    title: "Ex Love Back",
    icon: Heart,
    desc: "Astrological remedies to bring your ex back with renewed love, understanding, and trust.",
  },
  {
    id: 2,
    title: "Court Case Solution",
    icon: Scale,
    desc: "Effective spiritual guidance and traditional remedies for legal and court-related disputes.",
  },
  {
    id: 3,
    title: "Family Problem",
    icon: Users,
    desc: "Resolve household misunderstandings and restore lasting peace and positivity at home.",
  },
  {
    id: 4,
    title: "Business Problem",
    icon: Briefcase,
    desc: "Remove financial blockages and boost your career and business prosperity with remedies.",
  },
  {
    id: 5,
    title: "Childless Couple",
    icon: Baby,
    desc: "Sacred astrological consultations and traditional rituals to bless couples with parenthood.",
  },
];

const AllServicesModern = () => {

  return (
    <section
      aria-labelledby="premium-services-heading"
      className="w-full bg-gradient-to-b from-amber-50/90 via-orange-50/60 to-amber-100/80 py-14 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-amber-200/80"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-stone-900 text-amber-300 border border-amber-500/30 montserrat text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Comprehensive Remedies
          </span>
          <h2
            id="premium-services-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 montserrat tracking-tight"
          >
            Our Premium Astrology Services
          </h2>
          <p className="open-sans text-sm sm:text-base text-stone-600 mt-2">
            Trusted spiritual guidance tailored to life&apos;s most important
            personal, family, and professional milestones.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PREMIUM_SERVICES.map((service) => {
            const IconComponent = service.icon;
            return (
              <article
                key={service.id}
                className="group flex flex-col justify-between items-center text-center rounded-3xl bg-white/90 backdrop-blur-xs border border-amber-200/90 hover:border-amber-400 p-7 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex flex-col items-center">
                  {/* Icon Medallion */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-600 p-0.5 shadow-md mb-5 transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-3">
                    <div className="w-full h-full rounded-[14px] bg-stone-900 flex items-center justify-center">
                      <IconComponent
                        className="w-7 h-7 text-amber-400"
                        strokeWidth={2}
                      />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-stone-900 montserrat mb-2.5 group-hover:text-amber-800 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-stone-600 open-sans leading-relaxed mb-7">
                    {service.desc}
                  </p>
                </div>

                {/* Aligned Contact CTA */}
                <a
                  href={`tel:+91${phone_number  }`}
                  className="montserrat flex items-center justify-center gap-2 w-full py-2.5 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-semibold text-sm shadow-md transition-all duration-200 hover:scale-[1.02]"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>Contact Us</span>
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};



const HomeLastDesign = () => {


  return (
    <section
      aria-labelledby="astrologer-highlight-heading"
      className="w-full bg-gradient-to-br from-amber-50 via-orange-50/70 to-amber-100/90 border-t border-amber-200/80 py-14 sm:py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Side - Circular Portrait Medallion */}
        <div className="md:col-span-5 flex justify-center">
          <div className="relative group">
            {/* Soft Ambient Glow */}
            <div
              aria-hidden="true"
              className="absolute -inset-2 rounded-full bg-gradient-to-tr from-amber-500/40 via-orange-400/30 to-amber-300/40 blur-lg group-hover:opacity-90 transition-opacity duration-300"
            />

            {/* Gold-Rimmed Circular Frame */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full p-2 bg-gradient-to-tr from-amber-500 via-orange-400 to-amber-300 shadow-2xl">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white bg-stone-950">
                <img
                  src="https://i.pinimg.com/736x/b6/9f/c0/b69fc0208c17eea29578752aa277b79a.jpg"
                  alt="Astrologer"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-stone-900 text-amber-300 border border-amber-500/30 montserrat text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Vedic &amp; Vastu Specialist
          </span>

          <h2
            id="astrologer-highlight-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 montserrat tracking-tight"
          >
            Astrologer {person_name}
          </h2>

          <h3 className="text-lg sm:text-xl font-bold text-amber-800 montserrat mt-2">
            Best Astrologer in India
          </h3>

          <p className="text-stone-700 text-sm sm:text-base leading-relaxed open-sans mt-4 max-w-xl">
            {person_name} stands amidst the celebrated Vastu
            Consultants. His guidance sheds light on inner contradictions and
            reveals the natural strengths of people, helping you move forward
            with clarity, balance, and confidence.
          </p>

          {/* Trust Micro-Banner */}
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-stone-700 montserrat mt-4 px-3.5 py-1.5 rounded-xl bg-white/75 border border-amber-200/80">
            <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
            <span>100% Confidential Consultations • Phone &amp; WhatsApp</span>
          </div>

          {/* Contact Buttons */}
          <div className="mt-7 flex flex-wrap justify-center md:justify-start gap-3.5 w-full sm:w-auto">
            <a
              href={`tel:${phone_number}`}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-stone-900 hover:bg-amber-900 text-amber-300 hover:text-white font-semibold montserrat text-sm shadow-md transition-all duration-200 hover:scale-[1.02]"
            >
              <Phone className="w-4 h-4 shrink-0" />
              <span>Call Now</span>
            </a>

            <a
              href={`https://wa.me/${phone_number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-semibold montserrat text-sm shadow-md transition-all duration-200 hover:scale-[1.02]"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>Chat With Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};


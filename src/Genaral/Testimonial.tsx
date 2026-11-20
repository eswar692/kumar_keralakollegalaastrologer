import { Quote, Sparkles, Star } from "lucide-react";
import { person_name } from "./Secret";

interface TestimonialItem {
  id: number;
  name: string;
  location: string;
  image: string;
  text: string;
}

const getTestimonials = (astrologer: string): TestimonialItem[] => [
  {
    id: 1,
    name: "Mala Kapoor",
    location: "Goa",
    image: "https://astrologerdeepaksharma.in/images/client-1.png",
    text: `I'm appreciative of ${astrologer}. For me, his insights have been remarkably accurate, and having steady guidance when I need it makes me feel truly supported.`,
  },
  {
    id: 2,
    name: "Arjun Verma",
    location: "Mumbai",
    image: "https://astrologerdeepaksharma.in/images/client-2.png",
    text: `${astrologer} gave me clear advice on business-related issues. I sought guidance during a difficult setback, and his practical remedies helped turn things around.`,
  },
  {
    id: 3,
    name: "Pratha Kumari",
    location: "Delhi",
    image: "https://astrologerdeepaksharma.in/images/client-2.png",
    text: "When communication at home became strained, I reached out for guidance. His thoughtful counsel and remedies helped restore harmony and peace in our household.",
  },
  {
    id: 4,
    name: "Ravi Singh",
    location: "Bangalore",
    image: "https://astrologerdeepaksharma.in/images/client-3.png",
    text: "I was going through ongoing relationship stress with my spouse. His guidance and remedies helped us resolve misunderstandings and bring balance back into our bond.",
  },
];

export default function Testimonials() {
  const astrologerName = person_name || "Astrologer Gowtham";
  const items = getTestimonials(astrologerName);

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="w-full bg-gradient-to-b from-amber-50/80 via-white to-amber-50/90 py-14 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-amber-200/80"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300/80 text-amber-900 montserrat text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Verified Experiences
          </span>
          <h2
            id="testimonials-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 montserrat tracking-tight"
          >
            Client Words
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-stone-600 open-sans">
            <strong className="font-semibold text-amber-900">
              {astrologerName}
            </strong>{" "}
            offers thoughtful guidance and remedies for life&apos;s challenges.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((t) => (
            <article
              key={t.id}
              className="group relative flex flex-col justify-between rounded-3xl bg-gradient-to-b from-amber-50/80 via-white to-amber-50/50 border border-amber-200/90 hover:border-amber-400 p-6 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-center"
            >
              <div className="flex flex-col items-center">
                {/* Avatar with Gold/Amber Ring */}
                <div className="w-20 h-20 rounded-full p-1 bg-gradient-to-tr from-amber-500 via-orange-400 to-amber-300 shadow-md transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={t.image}
                    alt={`${t.name} from ${t.location}`}
                    className="w-full h-full rounded-full object-cover object-top border-2 border-white"
                  />
                </div>

                <h3 className="mt-4 text-lg font-bold text-stone-900 montserrat">
                  {t.name}
                </h3>

                <span className="mt-1 inline-block px-2.5 py-0.5 rounded-full bg-amber-100/90 text-amber-900 text-xs font-semibold montserrat border border-amber-200/80">
                  {t.location}
                </span>

                {/* Star Rating */}
                <div
                  aria-label="5 out of 5 stars"
                  className="flex items-center justify-center gap-1 mt-3 text-amber-500"
                >
                  {Array.from({ length: 5 }).map((_, starIdx) => (
                    <Star
                      key={starIdx}
                      className="w-3.5 h-3.5 fill-amber-400 text-amber-500"
                    />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="mt-3.5 text-sm text-stone-600 open-sans leading-relaxed">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              {/* Subtle Decorative Quote Mark */}
              <div className="mt-4 pt-2 flex justify-end">
                <Quote
                  aria-hidden="true"
                  className="text-amber-200 group-hover:text-amber-300 transition-colors w-7 h-7"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
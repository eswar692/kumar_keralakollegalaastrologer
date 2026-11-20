import { person_name } from "../Genaral/Secret";

export default function About() {
 

  return (
    <section className="bg-gradient-to-b from-orange-50 to-yellow-50 py-16 px-6 font-sans">
      <div className="max-w-6xl w-full mx-auto items-center">
        {/* Left Content */}
        <div className="w-full  mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent mb-8">
            About Us
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed space-y-4">
            Astrologer{" "}
            <span className="font-bold text-red-700">
              {person_name}
            </span>{" "}
            is a renowned and respected spiritual leader in India. With his deep
            knowledge of astrology and unwavering commitment to helping others,
            he has established himself as a trusted advisor to people across the
            country.
            <br />
            <br />
            Through his extensive experience and intuitive abilities, Astrologer
            <span className="font-semibold text-yellow-700">
              {" "}
             {person_name}
            </span>{" "}
            offers a wide range of services, including palm readings, face
            readings, photo readings, and phone consultations. His expertise
            spans astrology, spiritual guidance, and personal development,
            making him a versatile and influential figure in the spiritual
            community best known for his insightful interpretations.
            <br />
            <br />
            Renowned for his{" "}
            <span className="font-semibold text-red-600">accuracy</span> and
            insightful interpretations, {person_name} has built a
            loyal following of clients who attest to the transformative power of
            his readings.
            <br />
            <br />
            If you’re in need of a trusted spiritual guide, look no further.
          </p>
        </div>
      </div>

    
    </section>
  );
}

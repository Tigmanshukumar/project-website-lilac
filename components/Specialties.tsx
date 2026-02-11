import Image from "next/image";
import { Reveal } from "./Reveal";

const specialties = [
  {
    title: "Anxiety & Panic",
    description:
      "Support for chronic worry, racing thoughts, tension, and sleep difficulties.",
    image: "/adobe-698c3ec2428c6.jpg",
  },
  {
    title: "Trauma & EMDR",
    description:
      "Healing from past experiences using paced, evidence-based approaches.",
    image: "/10-d32f9bab-640w.webp",
  },
  {
    title: "Burnout & High Pressure Living",
    description:
      "Support for professionals, creatives, and entrepreneurs feeling overwhelmed.",
    image: "/laptop-coffee-books-glasses-photos-notes-in-journal.jpg",
  },
];

export default function Specialties() {
  return (
    <section
      id="specialties"
      className="w-full py-24 px-6 md:px-12 bg-background"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Title */}
        <Reveal>
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-green text-foreground tracking-tight">
              Areas of Focus
            </h2>
          </div>
        </Reveal>

        {/* Specialty Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {specialties.map((item, index) => (
            <Reveal key={index} delay={0.1 * (index + 1)} y={30}>
              <div className="flex px-5 py-5 flex-col bg-dark-bg border border-foreground/75 p-8 space-y-12 h-full">
                {/* Text Content */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-foreground tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium md:text-base leading-xl text-foreground opacity-90">
                    {item.description}
                  </p>
                </div>

                {/* Circular Image */}
                <div className="flex justify-center mt-0">
                  <div className="relative w-68 h-68 rounded-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

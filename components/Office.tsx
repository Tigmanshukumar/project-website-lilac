import Image from 'next/image';
import { Reveal } from './Reveal';

export default async function Office() {
  return (
    <section className="w-full bg-secondary-bg py-20 md:py-32 px-6 md:px-13 border-b border-foreground/15">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        
        {/* Left Content: Text */}
        <div className="space-y-8 order-2 md:order-1">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-medium text-foreground tracking-tight leading-tight">
              A Calm Space for Healing
            </h2>
          </Reveal>
          
          <div className="space-y-6 text-lg md:text-xl font-medium leading-relaxed text-foreground/90">
            <Reveal delay={0.2}>
              <p>
                Located in the heart of Santa Monica, my office is designed to be a private, 
                grounding sanctuary where you can feel safe to explore your inner world. 
                The space reflects my collaborative and warm approach to therapy.
              </p>
            </Reveal>
            
            <Reveal delay={0.3}>
              <p>
                Whether you prefer the intimacy of in-person sessions in our calming environment 
                or the flexibility of California telehealth, I provide a professional and 
                reassuring space to help you navigate burnout, anxiety, and trauma.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.4}>
            <div className="pt-4 italic text-foreground/70 font-medium">
              Located in Santa Monica, CA — In-person & Telehealth
            </div>
          </Reveal>
        </div>

        {/* Right Content: Images Grid */}
        <div className="grid grid-cols-2 gap-4 md:gap-6 order-1 md:order-2">
          <div className="space-y-4 md:space-y-6">
            <Reveal duration={0.8} y={30}>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-500 border border-foreground/5">
                <Image
                  src="/office-1.jpeg"
                  alt="Modern and calm therapy office interior"
                  fill
                  className="object-cover"
                  quality={80}
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
          <div className="pt-8 md:pt-12">
            <Reveal delay={0.2} duration={0.8} y={30}>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-500 border border-foreground/5">
                <Image
                  src="/office-2.jpeg"
                  alt="Dr. Maya Reynolds office details"
                  fill
                  className="object-cover"
                  quality={80}
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </div>

      </div>
    </section>
  );
}

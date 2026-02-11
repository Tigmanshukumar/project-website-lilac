import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from './Reveal';

export default function Intro() {
  return (
    <section className="w-full bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
        
        {/* Left Content */}
        <div className="bg-dark-bg flex flex-col justify-between order-2 md:order-1">
          <div className="p-12 md:p-20 space-y-10">
            <Reveal>
              <h2 className="text-4xl md:text-5xl pt-18 font-medium text-foreground leading-tight">
                Feel Calmer. Live With More Ease.
              </h2>
            </Reveal>
            <div className="space-y-6 text-base md:text-lg font-medium leading-relaxed text-foreground">
              <Reveal delay={0.2}>
                <p>
                  You don’t have to keep pushing through stress alone. Therapy can help you feel calmer, more connected, and more confident in how you move through daily life.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <p>
                  Together, we’ll build tools that support real, lasting change — not just temporary relief.
                </p>
              </Reveal>
            </div>
          </div>
          
          <Reveal delay={0.4} y={20}>
            <div className="w-full border-t border-foreground py-5 flex justify-center hover:bg-primary transition-colors duration-700 group">
              <Link 
                href="/#hero" 
                className="inline-flex items-center text-sm font-medium uppercase tracking-tight text-foreground group-hover:text-white transition-colors duration-700"
              >
                GET IN TOUCH &rarr;
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Right Image */}
        <div className="relative w-full min-h-[400px] md:min-h-full order-1 md:order-2">
          <Reveal duration={0.8} y={0} width="100%" className="h-full">
            <Image
              src="/toolxox.com-final-3RYspHuDzL.jpg"
              alt="Coffee and journal flatlay"
              fill
              className="object-cover"
            />
          </Reveal>
        </div>

      </div>
    </section>
  );
}

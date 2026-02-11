import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from './Reveal';

export default function About() {
  return (
    <section id="about" className="w-full pt-15 pb-25 px-6 md:px-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Content */}
        <div className="space-y-8 order-2 md:order-1 text-left md:text-left">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-medium text-foreground tracking-tight">
              Hi, I’m Dr. Maya Reynolds.
            </h2>
          </Reveal>
          <div className="space-y-6 text-lg md:text-xl font-medium leading-relaxed text-foreground">
            <Reveal delay={0.2}>
              <p>
                I’m a licensed clinical psychologist based in Santa Monica, California. I work with thoughtful, high-achieving adults who feel overwhelmed by anxiety, trauma, or burnout.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p>
                My approach is warm, structured, and collaborative — integrating CBT, EMDR, mindfulness, and body-based techniques to support both emotional and physiological healing.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.4}>
            <div className="pt-8 flex justify-center md:justify-center w-full">
              <Link 
                href="/#hero" 
                className="inline-block border border-foreground text-foreground text-sm py-4 px-10 hover:bg-primary hover:border-primary hover:text-white transition-all duration-700 uppercase tracking-tight"
              >
                Let&apos;s Chat -&gt;
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Right Image */}
        <div className="order-1 md:order-2 flex justify-center md:block">
           {/* Image Wrapper for positioning */}
           <div className="relative w-64 md:w-sm">
             <Reveal duration={0.8}>
               <div className="relative w-full aspect-[6/8] rounded-t-full overflow-hidden">
                 <Image
                   src="/Dr. Maya Reynolds.webp" 
                   alt="Lilac portrait"
                   fill
                   className="object-cover"
                 />
               </div>
             </Reveal>
             
             {/* Overlay circle image */}
             <Reveal delay={0.3} duration={0.8} y={20}>
               <div className="absolute -bottom-6 -right-6 md:-bottom-16 md:-right-12 w-32 h-32 md:w-74 md:h-74 rounded-full overflow-hidden border-dark-bg z-10">
                 <Image
                  src="/lilac+template+white+lilac.webp"
                  alt="White flowers"
                  fill
                  className="object-cover"
                 />
               </div>
             </Reveal>
           </div>
        </div>

      </div>
    </section>
  );
}
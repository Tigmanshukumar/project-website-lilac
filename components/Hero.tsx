import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from './Reveal';

export default function Hero() {
  return (
    <section id="hero" className="w-full flex items-center bg-background px-6 md:px-15 py-12 md:py-5 pt-25 md:pt-25 scroll-mt-24">
      <div className="max-w-6xl mx-auto w-full flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-0 items-center">        
        {/* Left Image - Centered and small on mobile */}
        <div className="relative w-64 md:w-lg aspect-[5/7] rounded-t-full overflow-hidden order-1">
          <Reveal y={40} duration={0.6}>
            <Image
              src="/toolxox.com-final-WgbAEirmDT.jpg"
              alt="Woman holding lilacs"
              width={512}
              height={717}
              className="object-cover"
              priority
            />
          </Reveal>
        </div>
        {/* Right Content */}
        <div className="flex flex-col items-center md:items-center text-center md:text-center space-y-5 order-2 justify-center h-full w-full">
          <Reveal delay={0.15}>
            <h1 className="text-5xl md:text-6xl font-medium text-foreground tracking-tight leading-[1.1]">
              Therapy for Adults <br />
              in Santa Monica, CA 
            </h1>
          </Reveal>
          
          <Reveal delay={0.25}>
            <p className="text-base md:text-lg font-medium text-foreground tracking-wide">
              Find Calm. Rebuild Confidence. Live With Greater Ease.
            </p>
          </Reveal>

          <Reveal delay={0.35}>
            <div className="pt-2">
              <Link 
                href="/" 
                className="inline-block border border-foreground text-sm font-medium py-4 px-10 text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-700 uppercase tracking-tight"
              >
                Connect with me -&gt;
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

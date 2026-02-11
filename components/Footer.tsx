import Link from 'next/link';
import { Reveal } from './Reveal';

export default async function Footer() {
  return (
    <footer className="w-full bg-background font-body">
      
      {/* CTA Section */}
      <div className="w-full bg-primary py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <Reveal>
            <h2 className="text-4xl md:text-4xl font-medium text-white tracking-wide">
              Get started today.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-white/90 text-lg py-3 max-w-xl mx-auto">
              Ready to begin therapy in a safe, supportive space?
<br/>Let’s take the first step together. 
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="pt-4">
              <Link 
                href="/#hero" 
                className="inline-block border border-white text-white text-sm py-3 px-8 hover:bg-white hover:text-primary transition-all duration-700 uppercase tracking-tight"
              >
                Get in Touch -&gt;
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Footer Links */}
      <div className="w-full py-10 px-15 bg-secondary-bg text-foreground">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-y-0 gap-0">
        
          {/* Contact Info - Spans 8 columns on desktop */}
          <div className="md:col-span-8 space-y-6 text-center md:text-left">
            <Reveal>
              <h3 className="text-4xl md:text-4xl tracking-tight">Dr. Maya Reynolds, PsyD</h3>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="space-y-1 text-lg">
                <p>Licensed Clinical Psychologist</p>
                <p>Santa Monica, CA</p>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="space-y-1 text-lg pt-4">
                <p><a href="mailto:contact@drmayareynolds.com" className="underline decoration-1 underline-offset-4 hover:opacity-80 transition-opacity">contact@drmayareynolds.com</a></p>
                <p><a href="tel:5555555555" className="underline decoration-1 underline-offset-4 hover:opacity-80 transition-opacity">(555) 555-5555</a></p>
              </div>
            </Reveal>
          </div>

          {/* Hours - Spans 3 columns on desktop */}
          <div className="md:col-span-2 space-y-6 text-center md:text-left">
            <Reveal delay={0.2}>
              <h4 className="text-3xl font-medium">Hours</h4>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="space-y-1 text-lg">
                <p>Monday – Friday</p>
                <p>10am – 6pm</p>
              </div>
            </Reveal>
          </div>

          {/* Navigation - Spans 3 columns on desktop */}
          <div className="md:col-span-2 space-y-6 text-center md:text-right">
            <Reveal delay={0.2}>
              <h4 className="text-3xl font-medium">Find</h4>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="flex flex-col space-y-2 text-lg underline decoration-1 underline-offset-4">
                <Link href="/" className="hover:opacity-80 transition-opacity">Home</Link>
                <Link href="/" className="hover:opacity-80 transition-opacity">Contact</Link>
                <Link href="/" className="hover:opacity-80 transition-opacity">FAQ</Link>
              </div>
            </Reveal>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full py-12 text-center bg-dark-bg border-t border-transparent space-y-4 px-4">
        <Reveal delay={0.1} y={5}>
          <div className="flex flex-wrap justify-center gap-x-2 gap-y-2 text-base text-foreground underline decoration-1 underline-offset-4">
             <Link href="#" >Privacy Policy</Link>
              
             <Link href="#" >Good Faith Estimate (No Surprises Act)</Link>
             
             <Link href="#" >Terms & Conditions</Link>
             
             <Link href="#" >Disclaimer</Link>
          </div>
        </Reveal>
        
        {/* <Reveal delay={0.2} y={5}>
          <p className="text-base text-foreground">
             Website Template Credits: <a href="#" className="underline text-foreground decoration-1 underline-offset-4 hover:opacity-80">Go Bloom Creative</a>
          </p>
        </Reveal> */}
        
        <Reveal delay={0.3} y={5}>
          <p className="text-base text-foreground pt-8">
             All Rights Reserved © 2026 Dr. Maya Reynolds, PsyD
          </p>
        </Reveal>
      </div>
    </footer>
  );
}


import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from './Reveal';

export default async function Issues() {
  return (
    <section id="issues" className="w-full bg-background">
       <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
         
         {/* Left Image */}
         <div className="relative w-full min-h-[300px] md:min-h-full order-1">
            <Reveal duration={0.8} width="100%" className="h-full">
              <Image
                src="/toolxox.com-b5xe73.jpg"
                alt="Woman looking contemplative"
                fill
                className="object-cover"
                quality={80}
                loading="lazy"
              />
            </Reveal>
         </div>

         {/* Right Content */}
         <div className="bg-primary flex flex-col justify-between order-2">
            <div className="p-12 md:p-14 space-y-7">
              <Reveal>
                <h2 className="text-4xl md:text-5xl font-medium text-white leading-tight">
                  You don’t have to do <br/>this <span className="italic">all alone.</span>
                </h2>
              </Reveal>
              
              <div className="space-y-6 text-lg text-white font-medium">
                <Reveal delay={0.2}>
                  <p>
                    If you are facing any of these, there’s hope:
                  </p>
                </Reveal>
                <ul className="space-y-3 px-5">
                  {['Constant overthinking or worry', 'Feeling emotionally on edge', 'Difficulty sleeping', 'Relationship challenges', 'Professional burnout', 'Feeling stuck despite “functioning well”'].map((item, i) => (
                    <Reveal key={i} delay={0.05 * i + 0.3} y={15}>
                      <li className="flex items-start gap-3">
                        <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                        {item}
                      </li>
                    </Reveal>
                  ))}
                </ul>
                <Reveal delay={0.6}>
                  <p className="pt-2">
                    With empathy and guidance, we'll work together to navigate the challenges life throws your way.
                  </p>
                </Reveal>
              </div>
            </div>

            <Reveal delay={0.7} y={15}>
              <div className="w-full border-t border-white/20 py-3 flex justify-center hover:bg-white transition-colors duration-700 group">
                <Link 
                  href="/#hero" 
                  className="inline-flex p-2 items-center text-sm font-medium uppercase tracking-tight text-white group-hover:text-primary transition-colors duration-700"
                >
                  WORK WITH ME &rarr;
                </Link>
              </div>
            </Reveal>
         </div>

       </div>
    </section>
  );
}

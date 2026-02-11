
import Image from 'next/image';
import AccordionClient from './AccordionClient';
import { Reveal } from './Reveal';
import { title } from 'node:process';

const faqItems = [
  {
    title: 'Anxiety Therapy in Santa Monica',
    content: 'I help adults manage anxiety, panic, and constant overthinking using CBT, mindfulness, and body-based tools.',
  },
  {
    title: 'Trauma Therapy & EMDR',
    content: 'Gentle, paced trauma therapy focused on safety, regulation, and long-term emotional healing.',
  },
    {
    title: 'In-Person & Telehealth in CA',
    content: 'Sessions available in Santa Monica and online across California.',
  },
  {
    title: 'What to Expect',
    content: 'A warm, collaborative first session focused on understanding your goals and next steps.',
  }
];

export default async function FAQ() {
  return (
    <section id="faq" className="w-full py-22 px-6 md:px-30 bg-background scroll-mt-24">
      <div className="max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Image - Centered on mobile */}
        <div className="relative w-40 h-60 md:w-full md:max-w-md md:h-auto md:aspect-[6/9] rounded-t-full overflow-hidden mx-auto md:mx-0">
          <Reveal duration={0.8}>
            <Image
              src="/43.webp"
              alt="Dried flowers"
              width={448}
              height={672}
              className="object-cover"
              quality={80}
              loading="lazy"
            />
          </Reveal>
        </div>
        
        {/* Right Content */}
        <div className="space-y-8 w-full">
          <Reveal>
            <h2 className="text-4xl md:text-5xl text-foreground tracking-wide text-left md:text-left">
              FAQs
            </h2>
          </Reveal>
          <div className="w-full">
            <Reveal delay={0.2}>
              <AccordionClient 
                items={faqItems} 
                iconPosition="left" 
                titleClassName="text-2xl md:text-3xl"
              />
            </Reveal>
          </div>
        </div>

      </div>
    </section>
  );
}

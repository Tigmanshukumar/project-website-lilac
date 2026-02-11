
import Accordion from './Accordion';
import { Reveal } from './Reveal';

const bgItems = [
  {
    title: 'Education',
    content: 'Doctor of Psychology (PsyD) – Clinical Psychology.',
  },
  {
    title: 'Licensure',
    content: 'Licensed Clinical Psychologist – California.',
  },
  {
    title: 'Certifications',
    content: <ul className="space-y-3 px-5">
                  {['EMDR', 'Cognitive Behavioral Therapy (CBT)', 'Mindfulness-Based Stress Reduction (MBSR)', 'Trauma-Informed Care'].map((item, i) => (
                    <Reveal key={i} delay={0.05 * i + 0.3} y={15}>
                      <li className="flex items-start gap-3">
                        <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-foreground shrink-0" />
                        {item}
                      </li>
                    </Reveal>
                  ))}
                </ul>
  },
];

export default function ProfessionalBackground() {
  return (
    <section id="background" className="w-full py-24 px-6 md:px-12 bg-dark-bg text-foreground">
      <div className="max-w-4xl mx-auto space-y-12">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-medium text-center text-foreground tracking-tight leading-tight">
            My Professional Background
          </h2>
        </Reveal>
        <div className="max-w-3xl mx-auto w-full">
          <Reveal delay={0.2}>
            <Accordion 
              items={bgItems} 
              paddingClassName="py-4" 
              contentClassName="text-left px-4 md:px-32"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

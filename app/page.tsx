
import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import Specialties from '@/components/Specialties';
import Issues from '@/components/Issues';
import About from '@/components/About';
import Office from '@/components/Office';
import FAQ from '@/components/FAQ';
import ProfessionalBackground from '@/components/ProfessionalBackground';
import type { Metadata } from 'next';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds, PsyD | Therapy in Santa Monica",
  description: "Licensed clinical psychologist based in Santa Monica, CA offering in-person and telehealth therapy for adults.",
};

export default function Home() {
  return (
    <div className="flex flex-col p-0 m-0 w-full">
      <Hero />
      <Intro />
      <Specialties />
      <Issues />
      <About />
      <Office />
      <FAQ />
      <ProfessionalBackground />
    </div>
  );
}

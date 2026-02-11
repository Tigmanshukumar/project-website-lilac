
import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import Specialties from '@/components/Specialties';
import Issues from '@/components/Issues';
import About from '@/components/About';
import Office from '@/components/Office';
import FAQ from '@/components/FAQ';
import ProfessionalBackground from '@/components/ProfessionalBackground';

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

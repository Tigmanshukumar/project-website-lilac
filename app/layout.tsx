import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import { Cormorant_Garamond, Manrope } from 'next/font/google';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-cormorant',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata = {
  title: "Dr. Maya Reynolds, PsyD | Therapy in Santa Monica",
  description: "Licensed clinical psychologist based in Santa Monica, CA offering in-person and telehealth therapy for adults.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable} scroll-smooth`}>
      <body className="antialiased bg-background text-foreground">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

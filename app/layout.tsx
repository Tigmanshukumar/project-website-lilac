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
  keywords: [
    "Therapy Santa Monica",
    "Clinical Psychologist",
    "Adult Therapy",
    "Anxiety Therapy",
    "Trauma Therapy",
    "EMDR",
    "CBT",
    "Mindfulness",
    "Telehealth Therapy",
    "Psychology"
  ],
  authors: [{ name: "Dr. Maya Reynolds, PsyD" }],
  creator: "Dr. Maya Reynolds, PsyD",
  publisher: "Dr. Maya Reynolds, PsyD",
  openGraph: {
    title: "Dr. Maya Reynolds, PsyD | Therapy in Santa Monica",
    description: "Licensed clinical psychologist based in Santa Monica, CA offering in-person and telehealth therapy for adults.",
    siteName: "Dr. Maya Reynolds, PsyD",
    type: "website",
    images: [
      { url: "/Dr. Maya Reynolds.webp", alt: "Lilac portrait" },
      { url: "/43.webp", alt: "Dried flowers" }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Maya Reynolds, PsyD | Therapy in Santa Monica",
    description: "Licensed clinical psychologist based in Santa Monica, CA offering in-person and telehealth therapy for adults.",
    images: ["/Dr. Maya Reynolds.webp"]
  },
  robots: {
    index: true,
    follow: true
  },
  formatDetection: {
    email: false,
    telephone: false,
    address: false
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    viewportFit: "cover"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable} scroll-smooth`}>
      <head>
        <link rel="preload" href="/Dr. Maya Reynolds.webp" as="image" />
        <link rel="preload" href="/43.webp" as="image" />
      </head>
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

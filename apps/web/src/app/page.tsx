import { Hero } from '@/components/features/hero/Hero';
import { About } from '@/components/features/about/About';
import { Skills } from '@/components/features/skills/Skills';
import { Projects } from '@/components/features/projects/Projects';
import { Contact } from '@/components/features/contact/Contact';
import { Chatbot } from '@/components/features/chatbot/Chatbot';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Cursor } from '@/components/layout/Cursor';
import { BackgroundOrbs } from '@/components/layout/BackgroundOrbs';
import { ScrollProgress } from '@/components/layout/ScrollProgress';

export default function HomePage() {
  return (
    <>
      <BackgroundOrbs />
      <Cursor />
      <ScrollProgress />
      <Navigation />
      <main id="main-content" className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
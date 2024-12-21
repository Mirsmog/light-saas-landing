import Hero from '@/sections/hero';
import LogoCarousel from '@/sections/logo-carousel';

export default function Home() {
  return (
    <main className="min-h-[500dvh]">
      <Hero />
      <LogoCarousel />
    </main>
  );
}

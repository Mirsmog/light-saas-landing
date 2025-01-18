import { Hero, OurClients, Pricing, ProductOverview, Testimonials } from '@/sections';

export default function Home() {
  return (
    <main className="min-h-[500dvh]">
      <Hero />
      <OurClients />
      <ProductOverview />
      <Pricing />
      <Testimonials />
    </main>
  );
}

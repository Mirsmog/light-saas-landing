import { Hero, OurClients, Pricing, ProductOverview } from '@/sections';

export default function Home() {
  return (
    <main className="min-h-[500dvh]">
      <Hero />
      <OurClients />
      <ProductOverview />
      <Pricing />
    </main>
  );
}

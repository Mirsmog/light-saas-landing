import { Hero, OurClients, ProductOverview } from '@/sections';

export default function Home() {
  return (
    <main className="min-h-[500dvh]">
      <Hero />
      <OurClients />
      <ProductOverview />
    </main>
  );
}

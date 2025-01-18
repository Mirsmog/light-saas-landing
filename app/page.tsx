import { CallToAction, Hero, OurClients, Pricing, ProductOverview, Testimonials } from '@/sections';

export default function Home() {
  return (
    <main className="">
      <Hero />
      <OurClients />
      <ProductOverview />
      <Pricing />
      <Testimonials />
      <CallToAction />
    </main>
  );
}

'use client';
import { motion } from 'framer-motion';

import { PricingCard } from '@/components/share/pricing-card';

interface IPricing {}

const pricingTiers = [
  {
    title: 'Free',
    monthlyPrice: 0,
    buttonText: 'Get started for free',
    popular: false,
    inverse: false,
    features: [
      'Up to 5 project members',
      'Unlimited tasks and projects',
      '2GB storage',
      'Integrations',
      'Basic support',
    ],
  },
  {
    title: 'Pro',
    monthlyPrice: 9,
    buttonText: 'Sign up now',
    popular: true,
    inverse: true,
    features: [
      'Up to 50 project members',
      'Unlimited tasks and projects',
      '50GB storage',
      'Integrations',
      'Priority support',
      'Advanced support',
      'Export support',
    ],
  },
  {
    title: 'Business',
    monthlyPrice: 19,
    buttonText: 'Sign up now',
    popular: false,
    inverse: false,
    features: [
      'Up to 5 project members',
      'Unlimited tasks and projects',
      '200GB storage',
      'Integrations',
      'Dedicated account manager',
      'Custom fields',
      'Advanced analytics',
      'Export capabilities',
      'API access',
      'Advanced security features',
    ],
  },
];

export const Pricing: React.FC<IPricing> = ({}) => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="text-center max-w-lg mx-auto">
          <h2 className="title">Pricing</h2>
          <p className="subtitle mt-5">
            Free forever. Upgrade for unlimited tasks, better security, and exclusive features.
          </p>
        </div>
        <ul className="flex flex-col gap-6 mt-10 md:flex-row md:items-end md:justify-center items-center">
          {pricingTiers.map((tier, index) => (
            <motion.li
              key={tier.title}
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 100 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: index / 2,
                ease: 'easeInOut',
              }}
            >
              <PricingCard {...tier} />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

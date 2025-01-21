'use client';
import { useRef } from 'react';
import Image from 'next/image';
import Button from '@/components/share/ui/button';
import { useScroll, useTransform, motion } from 'framer-motion';

import StarImage from '@/assets/star.png';
import SpringImage from '@/assets/spring.png';
import ArrowRightIcon from '@/assets/arrow-right.svg';

interface ICallToAction {}

export const CallToAction: React.FC<ICallToAction> = ({}) => {
  const sectionEl = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionEl,
    offset: ['start end', 'end start'],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [250, -150]);
  return (
    <section className="bg-gradient-to-b from-white to-[#D2DCFF] overflow-x-clip">
      <div ref={sectionEl} className="container">
        <div className="max-w-lg mx-auto relative py-24 ">
          <div className="text-center">
            <h2 className="title">Sign up for free today</h2>
            <p className="subtitle mt-5">
              Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.
            </p>
          </div>
          <div className="mt-10 flex items-center justify-center gap-2">
            <Button>Get for free</Button>
            <Button className="group flex items-center gap-1" variant="ghost">
              <span>Learn More</span>
              <ArrowRightIcon
                className="transition-transform duration-300 lg:group-hover:translate-x-1"
                width={20}
                height={20}
              />
            </Button>
          </div>
          <motion.div
            className="hidden md:block absolute max-w-[360px] h-auto -left-3/4 -top-10"
            style={{ translateY: translateY }}
          >
            <Image src={StarImage.src} width={StarImage.width} height={StarImage.height} alt="Star Image" />
          </motion.div>
          <motion.div
            className="hidden md:block absolute max-w-[363px] h-auto -right-3/4 bottom-0"
            style={{ translateY: translateY }}
          >
            <Image src={SpringImage.src} width={SpringImage.width} height={SpringImage.height} alt="Spring Image" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

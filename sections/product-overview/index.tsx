'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

import TubeImage from '@/assets/tube.png';
import PyramidImage from '@/assets/pyramid.png';
import ProductImage from '@/assets/product-image.png';

export const ProductOverview = () => {
  const sectionEl = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionEl,
    offset: ['start end', 'end start'],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip" ref={sectionEl}>
      <div className="container">
        <div className="mx-auto flex max-w-xl flex-col items-center gap-y-5 text-center">
          <span className="tag">Boost your productivity</span>
          <h2 className="title">A more effective way to track progress</h2>
          <p className="subtitle">
            Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.
          </p>
        </div>
        <div className="relative mt-10">
          <Image
            src={ProductImage.src}
            width={ProductImage.width}
            height={ProductImage.height}
            alt="our product overview image"
          />
          <motion.img
            className="absolute -right-36 -top-32 hidden h-auto max-w-[262px] md:block"
            src={PyramidImage.src}
            width={PyramidImage.width}
            height={PyramidImage.height}
            alt="pyramid"
            style={{ translateY: translateY }}
          />
          <motion.img
            className="absolute -left-36 bottom-14 hidden h-auto max-w-[248px] md:block lg:bottom-24"
            src={TubeImage.src}
            width={TubeImage.width}
            height={TubeImage.height}
            alt="pyramid"
            style={{ translateY: translateY }}
          />
        </div>
      </div>
    </section>
  );
};

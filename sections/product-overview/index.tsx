import React from 'react';
import ProductImage from '@/assets/product-image.png';
import Image from 'next/image';

export const ProductOverview = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24">
      <div className="container">
        <span className="tag">Boost your productivity</span>
        <h2>A more effective way to track progress</h2>
        <p>
          Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.
        </p>
        <Image
          alt="our product overview image"
          src={ProductImage.src}
          width={ProductImage.width}
          height={ProductImage.height}
        />
      </div>
    </section>
  );
};

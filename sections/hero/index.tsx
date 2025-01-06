import React from 'react';
import Image from 'next/image';

import Button from '@/components/share/ui/button';
import cogImage from '@/assets/cog.png';
import noodleImage from '@/assets/noodle.png';
import cylinderImage from '@/assets/cylinder.png';
import ArrowRightIcon from '@/assets/arrow-right.svg';

interface IHero {}

export const Hero: React.FC<IHero> = ({}) => {
  return (
    <section className="overflow-x-clip bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_80%)] pb-20 pt-36 md:pb-8">
      <div className="container">
        <div className="items-center md:flex">
          <div className="md:w-[480px]">
            <div className="flex flex-col items-baseline gap-6 md:gap-8">
              <span className="tag">Version 2.0 is here</span>
              <h1 className="bg-gradient-to-b from-black to-[#001E80] bg-clip-text text-5xl font-bold tracking-tighter text-transparent md:text-7xl">
                Pathway to productivity
              </h1>
              <p className="text-xl text-[#010D3E]">
                Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts,
                and celebrate your successes.
              </p>
            </div>
            <div className="mt-7 flex items-center gap-1">
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
            <Button className="mt-20 w-full md:hidden">Get for free</Button>
          </div>
          <div className="relative mt-20 md:mt-0 md:h-[648px] md:flex-1">
            <Image
              className="md:absolute md:-left-6 md:h-full md:w-auto md:max-w-none"
              src={cogImage.src}
              width={650}
              height={650}
              alt="cog image"
            />
            <Image
              className="hidden md:block -top-8 -left-32 absolute"
              src={cylinderImage.src}
              width={220}
              height={220}
              alt="cylinder image"
            />
            <Image
              className="hidden lg:block top-[524px] left-[448px] absolute rotate-[30deg]"
              src={noodleImage.src}
              width={220}
              height={220}
              alt="noodle image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

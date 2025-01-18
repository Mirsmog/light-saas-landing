import React from 'react';
import avatar1 from '@/assets/avatar-1.png';
import avatar2 from '@/assets/avatar-2.png';
import avatar3 from '@/assets/avatar-3.png';
import avatar4 from '@/assets/avatar-4.png';
import avatar5 from '@/assets/avatar-5.png';
import avatar6 from '@/assets/avatar-6.png';
import avatar7 from '@/assets/avatar-7.png';
import avatar8 from '@/assets/avatar-8.png';
import avatar9 from '@/assets/avatar-9.png';
import { splitArrayIntoChunks } from '@/utils/split-array';
import { div } from 'framer-motion/client';
import Image from 'next/image';
import { cn } from '@/utils/cn';

interface ITestimonial {
  text: string;
  imageSrc: string;
  name: string;
  username: string;
}

const testimonials: ITestimonial[] = [
  {
    text: 'As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.',
    imageSrc: avatar1.src,
    name: 'Jamie Rivera',
    username: '@jamietechguru00',
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool. ",
    imageSrc: avatar2.src,
    name: 'Josh Smith',
    username: '@jjsmith',
  },
  {
    text: 'This app has completely transformed how I manage my projects and deadlines.',
    imageSrc: avatar3.src,
    name: 'Morgan Lee',
    username: '@morganleewhiz',
  },
  {
    text: 'I was amazed at how quickly we were able to integrate this app into our workflow.',
    imageSrc: avatar4.src,
    name: 'Casey Jordan',
    username: '@caseyj',
  },
  {
    text: 'Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.',
    imageSrc: avatar5.src,
    name: 'Taylor Kim',
    username: '@taylorkimm',
  },
  {
    text: 'The customizability and integration capabilities of this app are top-notch.',
    imageSrc: avatar6.src,
    name: 'Riley Smith',
    username: '@rileysmith1',
  },
  {
    text: 'Adopting this app for our team has streamlined our project management and improved communication across the board.',
    imageSrc: avatar7.src,
    name: 'Jordan Patels',
    username: '@jpatelsdesign',
  },
  {
    text: 'With this app, we can easily assign tasks, track progress, and manage documents all in one place.',
    imageSrc: avatar8.src,
    name: 'Sam Dawson',
    username: '@dawsontechtips',
  },
  {
    text: 'Its user-friendly interface and robust features support our diverse needs.',
    imageSrc: avatar9.src,
    name: 'Casey Harper',
    username: '@casey09',
  },
];

export const Testimonials = () => {
  const testimonialsChunks = splitArrayIntoChunks(testimonials, 3);

  return (
    <section className="pb-24">
      <div className="container">
        <div className="mx-auto flex max-w-lg flex-col items-center gap-5 text-center">
          <span className="tag">Version 2.0 is here</span>
          <h1 className="title">What our users say</h1>
          <p className="subtitle">
            From intuitive design to powerful features, our app has become an essential tool for users around the world.
          </p>
        </div>
        <div className="mt-10 flex flex-col md:flex-row md:justify-center gap-6  [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
          {testimonialsChunks.map((chunk, index) => (
            <ul className={cn('flex flex-col gap-6', index === 1 && 'hidden md:flex', index === 2 && 'hidden lg:flex')}>
              {chunk.map(({ name, username, imageSrc, text }) => (
                <li className="card w-full max-w-[325px] text-black">
                  <div>
                    <p>{text}</p>
                    <div className="mt-5 flex w-full items-center gap-2">
                      <Image width={40} height={40} src={imageSrc} alt={name} className="h-10 w-10 rounded-full" />
                      <div className="leading-tight">
                        <p className="font-medium">{name}</p>
                        <p>{username}</p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
};

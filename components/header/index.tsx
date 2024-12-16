import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Inter } from 'next/font/google';

import Logo from '@/assets/logosaas.png';
import MenuIcon from '@/assets/menu.svg';
import ArrowRightIcon from '@/assets/arrow-right.svg';

import { cn } from '@/utils/cn';
import { NAV_LINKS } from '@/constants';
import Button from '@/components/ui/button';

const inter = Inter({ subsets: ['latin'] });

interface IHeader {}

const Header: React.FC<IHeader> = ({}) => {
  return (
    <header className="">
      <div className={cn(inter.className, 'bg-black text-white flex items-center justify-center py-3')}>
        <p className="mr-3 hidden text-sm opacity-60 md:block">Streamline your workflow and boost your productivity.</p>
        <p className="peer mr-1 cursor-pointer text-xs lg:hover:underline">Get started for free</p>
        <ArrowRightIcon
          width={16}
          height={16}
          className="transition-transform duration-300 lg:peer-hover:translate-x-1"
        />
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <button className="active:scale-90 hover:rotate-180 transition-transform duration-300">
              <Link href={'/'}>
                <Image src={Logo} alt="saas-logo" width={40} height={40} />
              </Link>
            </button>
            <div className="hidden gap-6 md:flex">
              <nav>
                <ul className="flex items-center -mx-3">
                  {NAV_LINKS.map(({ name, href }) => (
                    <li>
                      <Link
                        className="inline-flex py-2 px-3 text-black/60 hover:text-black/100 transition-colors"
                        href={href}
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <Button>Get for free</Button>
            </div>
            <button className="md:hidden">
              <MenuIcon className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

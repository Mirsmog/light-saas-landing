'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Inter } from 'next/font/google';

import MenuIcon from '@/assets/menu.svg';
import ArrowRightIcon from '@/assets/arrow-right.svg';

import { cn } from '@/utils/cn';
import { HEADER_LINKS } from '@/constants';
import Button from '@/components/share/ui/button';
import { Logo } from '../share/ui/logo';

const inter = Inter({ subsets: ['latin'] });

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const lastScrollY = useRef(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 700) {
      if (currentScrollY < lastScrollY.current) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    } else {
      setIsVisible(false);
    }

    lastScrollY.current = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        'top-0  w-full backdrop-blur-md z-50 transition-transform border-b border-black/5',
        isVisible ? 'fixed animate-fade-down' : 'absolute',
      )}
    >
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
            <Logo />
            <div className="hidden items-center md:flex">
              <nav className="flex items-center gap-6">
                <ul className="-mx-3 flex items-center">
                  {HEADER_LINKS.map(({ name, href }) => (
                    <li key={name}>
                      <Link
                        className="inline-flex px-3 py-2 text-black/60 transition-colors hover:text-black/100"
                        href={href}
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Button>Get for free</Button>
              </nav>
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

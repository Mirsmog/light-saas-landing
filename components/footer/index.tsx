import React from 'react';
import { Logo } from '../share/ui/logo';
import { FOOTER_LINKS, SOCIALS_LINKS } from '@/constants';
import Link from 'next/link';

export const Footer = ({}) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-10 bg-black text-white/60">
      <div className="container">
        <div className="flex flex-col items-center gap-6">
          <Logo />
          <nav>
            <ul className="flex items-center flex-col md:flex-row">
              {FOOTER_LINKS.map(({ name, href }) => (
                <li key={name}>
                  <Link className="inline-flex px-3 py-2 transition-colors  hover:text-white" href={href}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ul className="flex gap-4 items-center">
            {SOCIALS_LINKS.map(({ name, href, Icon }) => (
              <li className="" key={href}>
                <Link title={name} href={href}>
                  <Icon width={24} height={24} />
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-sm">© {currentYear} Your Company, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

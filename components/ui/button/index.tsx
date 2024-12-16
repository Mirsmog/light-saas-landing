import { cn } from '@/utils/cn';
import React from 'react';

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'ghost';
}

const Button: React.FC<IButton> = ({ children, variant = 'primary', className, ...props }) => {
  const buttonVariant = variant === 'primary' ? 'bg-black' : 'bg-trasparent text-black';
  return (
    <button
      className={cn(
        'text-base text-white font-medium py-2 px-4 rounded-lg active:scale-95 transition-transform duration-100',
        buttonVariant,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

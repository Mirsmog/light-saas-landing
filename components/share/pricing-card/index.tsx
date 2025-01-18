import React from 'react';
import CheckIcon from '@/assets/check.svg';
import Button from '../ui/button';
import { formatPrice } from '@/utils/format-price';
import { cn } from '@/utils/cn';

interface IPricingCard {
  title: string;
  monthlyPrice: number;
  buttonText: string;
  popular: boolean;
  inverse: boolean;
  features: string[];
}

export const PricingCard: React.FC<IPricingCard> = ({
  title,
  buttonText,
  monthlyPrice,
  popular,
  features,
  inverse,
}) => {
  return (
    <div className={cn('card', inverse && 'invert outline-0')}>
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold opacity-50">{title}</h3>
          {popular && (
            <div className="text-sm font-medium py-1.5 px-4 rounded-xl outline outline-1 outline-black/20">
              <span className="text-transparent invert text-gradient bg-clip-text ">Most Popular</span>
            </div>
          )}
        </div>
        <div className="font-bold flex items-end gap-1">
          <p className="text-4xl tracking-tighter">{formatPrice(Number(monthlyPrice))}</p>
          <span className="opacity-50">/month</span>
        </div>
        <Button>{buttonText}</Button>
        <ul className="flex flex-col gap-y-5">
          {features.map((feature) => (
            <li className="flex text-sm items-center gap-4">
              <CheckIcon width={24} height={24} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

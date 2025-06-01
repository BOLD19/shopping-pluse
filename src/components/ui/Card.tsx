import React from 'react';
import { cn } from '@/lib/utils';
import { CardProps } from '@/types';

const cardPadding = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

const cardShadow = {
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
  xl: 'shadow-xl',
};

const cardRounded = {
  sm: 'rounded-lg',
  md: 'rounded-xl',
  lg: 'rounded-2xl',
  xl: 'rounded-3xl',
  '2xl': 'rounded-[2rem]',
};

export const Card: React.FC<CardProps> = ({
  children,
  className,
  padding = 'md',
  shadow = 'lg',
  rounded = 'xl',
  ...props
}) => {
  return (
    <div
      className={cn(
        'bg-white border border-gray-100 transition-all duration-300',
        cardPadding[padding],
        cardShadow[shadow],
        cardRounded[rounded],
        'hover:shadow-xl hover:border-[#8F6ED5]/20',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card; 
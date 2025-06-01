import React from 'react';
import { cn } from '@/lib/utils';
import { ButtonProps } from '@/types';
import { Loader2 } from 'lucide-react';

const buttonVariants = {
  primary: 'bg-gradient-to-r from-[#8F6ED5] to-[#7F5EC5] text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:from-[#7F5EC5] hover:to-[#6F4EC5]',
  secondary: 'bg-[#E0FF4F] text-[#1A1A1A] hover:bg-[#D0EF3F] shadow-lg shadow-lime-500/25 hover:shadow-lime-500/40',
  outline: 'border-2 border-[#8F6ED5] text-[#8F6ED5] hover:bg-[#F0F4FF] hover:border-[#7F5EC5]',
  ghost: 'text-[#8F6ED5] hover:bg-[#F0F4FF] hover:text-[#7F5EC5]',
};

const buttonSizes = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-base rounded-xl',
  lg: 'px-8 py-4 text-lg rounded-2xl',
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  type = 'button',
  onClick,
  className,
  ...props
}) => {
  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={cn(
        'font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#8F6ED5] focus:ring-offset-2 inline-flex items-center justify-center gap-2',
        buttonVariants[variant],
        buttonSizes[size],
        isDisabled && 'opacity-60 cursor-not-allowed pointer-events-none',
        className
      )}
      {...props}
    >
      {loading && <Loader2 className="h-4 w-4 animate-spin" />}
      {children}
    </button>
  );
};

export default Button; 
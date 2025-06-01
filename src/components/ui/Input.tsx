import React from 'react';
import { cn } from '@/lib/utils';
import { InputProps } from '@/types';

export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  error,
  required = false,
  disabled = false,
  className,
  prefix,
  ...props
}) => {
  const inputId = React.useId();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={cn('space-y-1', className)}>
      {label && (
        <label 
          htmlFor={inputId}
          className="block text-sm font-medium text-[#1A1A1A]"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        {prefix && (
          <div className="absolute left-0 top-0 h-full bg-[#F0F4FF] px-3 py-3 rounded-l-xl border border-r-0 border-gray-200 text-[#8F6ED5] font-medium flex items-center">
            {prefix}
          </div>
        )}
        
        <input
          id={inputId}
          type={type}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          className={cn(
            'w-full px-4 py-3 rounded-xl border border-gray-200 text-[#1A1A1A] placeholder-gray-400 transition-all duration-200',
            'focus:outline-none focus:ring-2 focus:ring-[#8F6ED5] focus:border-[#8F6ED5]',
            'disabled:opacity-60 disabled:cursor-not-allowed disabled:bg-gray-50',
            error && 'border-red-300 focus:border-red-500 focus:ring-red-500',
            prefix && 'rounded-l-none border-l-0',
            !error && 'hover:border-gray-300'
          )}
          {...props}
        />
      </div>
      
      {error && (
        <p className="text-sm text-red-500 mt-1">{error}</p>
      )}
    </div>
  );
};

export default Input; 
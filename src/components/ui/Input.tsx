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
    <div className={cn('space-y-2', className)}>
      {label && (
        <label 
          htmlFor={inputId}
          className="block text-sm font-medium text-[#0f172a]"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        {prefix && (
          <div className="absolute left-0 top-0 h-full bg-[#f8fafc] px-4 py-4 rounded-l-2xl border border-r-0 border-[#e2e8f0] text-[#0088f5] font-medium flex items-center text-base">
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
            'w-full px-4 py-4 rounded-2xl border border-[#e2e8f0] text-[#0f172a] placeholder-[#94a3b8] transition-all duration-200 text-base',
            'focus:outline-none focus:ring-2 focus:ring-[#0088f5]/20 focus:border-[#0088f5]',
            'disabled:opacity-60 disabled:cursor-not-allowed disabled:bg-gray-50',
            error && 'border-red-300 focus:border-red-500 focus:ring-red-500/20',
            prefix && 'rounded-l-none border-l-0 pl-3',
            !error && 'hover:border-[#cbd5e1]'
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
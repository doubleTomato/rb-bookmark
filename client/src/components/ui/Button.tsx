// components/atoms/Button.tsx

import React from 'react';
import { twMerge } from 'tailwind-merge'; 

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'; 
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export default function Button({ 
  variant = 'primary',
  size = 'md',
  className,
  children, 
  ...props 
}: ButtonProps) {
  
  const baseStyles = "font-semibold rounded transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

  const sizeClasses = {
    sm: 'py-1 px-3 text-sm',
    md: 'py-2 px-4 text-base',
    lg: 'py-3 px-6 text-lg',
  };

const variantClasses = {
  primary: 'bg-primary text-white hover:bg-primary/90 focus:ring-4 focus:ring-primary/50',
  secondary: 'bg-secondary text-white hover:bg-secondary/90 focus:ring-4 focus:ring-secondary/50',
  ghost: 'bg-gray text-black hover:bg-gray/90 focus:ring-4 focus:ring-gray/50',
};

  const finalClasses = twMerge(
    baseStyles,
    sizeClasses[size],
    variantClasses[variant],
    className
  );
  
  return (
    <button className={finalClasses} {...props}>
      {children}
    </button>
  );
}
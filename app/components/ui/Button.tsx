'use client'
import { useMontserrat } from '@/app/hooks/useFonts';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
  fullWidth?: boolean;
}

export default function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  fullWidth = false
}: ButtonProps) {
  const montserrat = useMontserrat();

  const baseClasses = `${montserrat.className} outline-none border-none cursor-pointer transition-all duration-300 ease-in-out`;
  
  const variantClasses = {
    primary: 'bg-[#FDB056] text-[#191E1F] hover:bg-[#E6A04D]',
    secondary: 'bg-[#2D3233] text-[#FFFFFF] hover:bg-[#3A4041]'
  };

  const sizeClasses = {
    sm: 'h-[40px] text-[16px] font-[500] rounded-[12px] px-[16px]',
    md: 'h-[50px] text-[18px] font-[600] rounded-[16px] px-[24px]',
    lg: 'h-[66px] text-[20px] font-[700] rounded-[20px] px-[32px]'
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      } ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

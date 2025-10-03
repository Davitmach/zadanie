'use client'
import { useMontserrat } from '@/app/hooks/useFonts';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  selected?: boolean;
  variant?: 'default' | 'main';
  style?: React.CSSProperties;
}

export default function Card({
  children,
  className = '',
  onClick,
  selected = false,
  variant = 'default',
  style
}: CardProps) {
  const montserrat = useMontserrat();

  const baseClasses = `${montserrat.className} border-[2px] bg-[#313637] cursor-pointer transition-all duration-300 ease-in-out`;
  
  const selectedClasses = selected ? 'border-[#FDB056]' : 'border-[#484D4E]';
  
  const variantClasses = {
    default: 'rounded-[40px] pt-[70px] pb-[30px] px-[18px] gap-[40px] flex flex-col justify-between hover:opacity-90 hover:scale-[1.02]',
    main: 'rounded-[34px] pt-[34px] pb-[30px] flex items-center justify-center gap-[40px] hover:opacity-90'
  };

  return (
    <div
      className={`${baseClasses} ${selectedClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
      style={style}
    >
      {children}
    </div>
  );
}

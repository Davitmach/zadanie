'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Star from '@/public/star.svg';
import StarRed from '@/public/starRed.svg';
import StarWhite from '@/public/starWhite.svg';
import { usePromoStore } from '@/app/store/promoStore';
import { useMontserrat } from '@/app/hooks/useFonts';

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState(120);
  const { isPromoActive, setPromoActive } = usePromoStore();
  const montserrat = useMontserrat();

  useEffect(() => {
    if (timeLeft <= 0) return;
    
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev > 0 ? prev - 1 : 0);
    }, 1000);
    
    return () => clearInterval(timer);
  }, [timeLeft]);

  useEffect(() => {
    if (timeLeft === 0 && isPromoActive) {
      setPromoActive(false);
    }
  }, [timeLeft, isPromoActive, setPromoActive]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  let timerColor = '!text-[#FFBB00';
  if (timeLeft === 0) {
    timerColor = '!text-[#FFFFFF]';
  } else if (timeLeft <= 30) {
    timerColor = '!text-[#FF4E4E]';
  }

  return (
    <div className="timer bg-[#1D5B43] py-[8px]">
      <div className="timer-display flex flex-col items-center justify-center gap-[4px]">
        <h1 className={`text-[#FFFFFF] font-[600] text-[24px] text-center ${montserrat.className}`}>
          {isPromoActive ? 'Успейте открыть пробную неделю' : 'Акция завершена'}
        </h1>
        <span className="flex items-center gap-2">
          <Image
            src={
              timeLeft === 0
                ? StarWhite
                : timeLeft <= 30
                ? StarRed
                : Star
            }
            alt="Star"
            width={24}
            height={24}
          />
          <span
            style={{ fontVariantNumeric: 'tabular-nums' }}
            className={`min-w-[70px] text-[#FFBB00] text-[40px] font-[700] text-center ${timerColor} ${montserrat.className}`}
          >
            {isPromoActive ? `${minutes}:${seconds.toString().padStart(2, '0')}` : '00:00'}
          </span>
          <Image
            src={
              timeLeft === 0
                ? StarWhite
                : timeLeft <= 30
                ? StarRed
                : Star
            }
            alt="Star"
            width={24}
            height={24}
          />
        </span>
      </div>
    </div>
  );
}
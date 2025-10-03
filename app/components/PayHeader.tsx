'use client'
import { useMontserrat } from '@/app/hooks/useFonts';

export default function PayHeader() {
  const montserrat = useMontserrat();
  return (
    <div className={`pay-page__header ${montserrat.className}`}>
      <h1 className="text-[#FFFFFF] font-[700] text-[40px]">
        Выбери подходящий для себя{" "}
        <span className="text-[#FDB056] font-[700] text-[40px]">тариф</span>
      </h1>
    </div>
  );
}

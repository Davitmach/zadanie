'use client'
import { useMontserrat } from '@/app/hooks/useFonts';

export default function InfoBanner() {
  const montserrat = useMontserrat();
  return (
    <div className={`info-banner flex items-start gap-[8px] bg-[#2D3233] rounded-[20px] py-[18px] px-[20px] mt-[20px] ${montserrat.className}`}>
      <svg width="4" className='shrink-0' height="18" viewBox="0 0 4 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.877523 11.6437C0.886898 12.2578 1.38846 12.75 2.00252 12.75C2.61659 12.75 3.11815 12.2531 3.12752 11.6437L3.50252 1.5375C3.52596 1.15313 3.38534 0.778125 3.11346 0.4875C2.82284 0.178125 2.41971 0 2.00252 0C1.58534 0 1.18221 0.178125 0.891586 0.4875C0.619711 0.778125 0.479086 1.15313 0.502523 1.5375L0.877523 11.6437Z" fill="#FDB056"/>
        <path d="M2 18C2.82843 18 3.5 17.3284 3.5 16.5C3.5 15.6716 2.82843 15 2 15C1.17157 15 0.5 15.6716 0.5 16.5C0.5 17.3284 1.17157 18 2 18Z" fill="#FDB056"/>
      </svg>
      <p className="text-[#FFFFFF] text-[16px]">
        Следуя плану на 3 месяца и более, люди получают в 2 раза лучший результат, чем за 1 месяц
      </p>
    </div>
  );
}

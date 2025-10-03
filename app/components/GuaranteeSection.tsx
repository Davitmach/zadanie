'use client'
import { useMontserrat } from '@/app/hooks/useFonts';

export default function GuaranteeSection() {
  const montserrat = useMontserrat();
  return (
    <div className={`guarantee-section ${montserrat.className} mb-[30px] border border-[#484D4E] rounded-[30px] p-[20px] mt-[66px]`}>
      <div className="bg-[#2D3233] rounded-[30px] border border-[#81FE95] mb-[30px]  max-w-[461px] flex items-center justify-center w-full h-[68px]">
        <h2 className="text-[#81FE95] text-[28px] font-[500] text-center ">
          Гарантия возврата 30 дней
        </h2>
      </div>
      
      <div>
        <p className="text-[#DCDCDC] text-[24px] leading-relaxed ">
          Мы уверены, что наш план сработает для тебя и ты увидишь видимые результаты уже через 4 недели! Мы даже готовы полностью вернуть твои деньги в течение 30 дней с момента покупки, если ты не получишь видимых результатов.
        </p>
      </div>
    </div>
  );
}

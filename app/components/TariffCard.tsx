'use client'
import { Tariff } from '@/app/types/tariff';
import { usePromoStore } from '@/app/store/promoStore';
import Card from './ui/Card';

interface TariffCardProps {
  tariff: Tariff;
  tariffId: string;
  isSelected: boolean;
  onSelect: (tariffId: string) => void;
  isMainCard?: boolean;
}

export default function TariffCard({ 
  tariff, 
  tariffId, 
  isSelected, 
  onSelect, 
  isMainCard = false 
}: TariffCardProps) {
  const { isPromoActive } = usePromoStore();
  
  if (!tariff) return null;
  
  const discountPercentage = Math.round(100 - (tariff.price / tariff.full_price) * 100);

  if (isMainCard) {
    return (
      <Card
        selected={isSelected}
        variant="main"
        onClick={() => onSelect(tariffId)}
        className="relative col-span-3"
        style={{ gridRow: 1, gridColumn: "1 / 4" }}
      >
        <div className="flex flex-col items-center transition-all duration-300 ease-in-out">
          <span className="font-[500] text-[26px] transition-all duration-300 ease-in-out">{tariff.period}</span>
          <h1 className="text-[#FDB056] font-[600] text-[50px] transition-all duration-300 ease-in-out">
            {isPromoActive ? tariff.price : tariff.full_price}₽
          </h1>
          {isPromoActive && (
            <h3 className="text-[#919191] text-[24px] line-through w-full text-end transition-all duration-300 ease-in-out">
              {tariff.full_price}₽
            </h3>
          )}
        </div>
        <div>
          <p className="text-[#FFFFFF] text-[16px] max-w-[328px] w-full transition-all duration-300 ease-in-out">{tariff.text}</p>
        </div>
        {tariff.is_best && (
          <div className="absolute right-[20px] top-[10px] text-[#FDB056] font-[500] text-[22px]">
            хит!
          </div>
        )}
        {isPromoActive && (
          <div className="absolute left-[5%] top-[0px] transition-all duration-300 ease-in-out">     
            <span className="text-[22px] font-[500] bg-[#FD5656] text-[#FFFFFF] w-[66px] h-[39px] flex items-center justify-center rounded-b-[8px] transition-all duration-300 ease-in-out hover:scale-110">
              -{discountPercentage}%
            </span>
          </div>
        )}
      </Card>
    );
  }

  return (
    <Card
      selected={isSelected}
      variant="default"
      onClick={() => onSelect(tariffId)}
      className="h-[335px] relative"
    >
      <div className="w-full flex flex-col items-center transition-all duration-300 ease-in-out">
        <span className="font-[500] text-[26px] transition-all duration-300 ease-in-out">{tariff.period}</span>
        <h1 className="text-[#FFFFFF] font-[600] text-[50px] transition-all duration-300 ease-in-out">
          {isPromoActive ? tariff.price : tariff.full_price}₽
        </h1>
        {isPromoActive && (
          <h3 className="text-[#919191] text-[24px] line-through w-full text-end transition-all duration-300 ease-in-out">
            {tariff.full_price}₽
          </h3>
        )}
      </div>
      <div>
        <p className="text-[#FFFFFF] text-[16px] transition-all duration-300 ease-in-out">{tariff.text}</p>
      </div>
      {isPromoActive && (
        <div className="absolute left-[20%] top-[0px] transition-all duration-300 ease-in-out">     
          <span className="text-[22px] font-[500] bg-[#FD5656] text-[#FFFFFF] w-[66px] h-[39px] flex items-center justify-center rounded-b-[8px] transition-all duration-300 ease-in-out hover:scale-110">
            -{discountPercentage}%
          </span>
        </div>
        )}
    </Card>
  );
}

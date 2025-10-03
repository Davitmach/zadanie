'use client'
import Checkbox from './Checkbox';
import Button from './ui/Button';
import { useMontserrat } from '@/app/hooks/useFonts';

interface AgreementSectionProps {
  isCheckboxChecked: boolean;
  isCheckboxError: boolean;
  onCheckboxChange: (checked: boolean) => void;
  onPurchase: () => void;
}

export default function AgreementSection({ 
  isCheckboxChecked, 
  isCheckboxError, 
  onCheckboxChange, 
  onPurchase 
}: AgreementSectionProps) {
  const montserrat = useMontserrat();
  
  return (
    <div className={`${montserrat.className}`}>
      <div className="flex gap-[12px] mt-[30px]">
        <Checkbox 
          checked={isCheckboxChecked} 
          onChange={onCheckboxChange}
          hasError={isCheckboxError}
        />
        <p className="max-w-[605px] w-full text-[#CDCDCD] text-[16px]">
          Я согласен с <span className="underline cursor-pointer">офертой рекуррентных платежей</span> и <span className="underline cursor-pointer">Политикой конфиденциальности</span>
        </p>
      </div>
      
      <div className="mt-[36px] max-w-[352px] w-full">
        <Button 
          onClick={onPurchase}
          variant="primary"
          size="lg"
          fullWidth
        >
          Купить
        </Button>
      </div>
      <div className='mt-[14px]'>
        <p className='text-[#9B9B9B] font-[400] text-[14px]'>Нажимая кнопку «Купить», Пользователь соглашается на разовое списание денежных средств для получения пожизненного доступа к приложению. Пользователь соглашается, что данные кредитной/дебетовой карты будут сохранены для осуществления покупок дополнительных услуг сервиса в случае желания пользователя.</p>
      </div>
    </div>
  );
}

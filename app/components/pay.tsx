"use client";
import "@/app/style.scss";
import { useTariffStore } from "@/app/store/tariffStore";
import { useEffect } from "react";
import PayHeader from './PayHeader';
import ManImage from './ManImage';
import TariffGrid from './TariffGrid';
import InfoBanner from './InfoBanner';
import AgreementSection from './AgreementSection';
import GuaranteeSection from './GuaranteeSection';
import { useMontserrat } from '@/app/hooks/useFonts';

export default function Pay() {
  const { 
    tariffs, 
    fetchTariffs, 
    loading, 
    selectedTariffId, 
    selectTariff,
    isCheckboxChecked,
    isCheckboxError,
    setCheckboxChecked,
    validateAndProceed
  } = useTariffStore();
  const montserrat = useMontserrat();

  useEffect(() => {
    fetchTariffs();
  }, [fetchTariffs]);

  const handlePurchase = () => {
    if (validateAndProceed()) {
      console.log('Покупка успешна!');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-white text-xl">Загрузка тарифов...</div>
      </div>
    );
  }

  return (
    <div className={`pay-page max-w-[1920px] px-[16px] mx-auto w-full mt-[50px] ${montserrat.className}`}>
      <PayHeader />
      
      <div className="flex justify-between items-center gap-[87px] mt-[110px] pay-layout-mobile">
        <ManImage />
        
        <div className="pay-page__grid">
          <TariffGrid 
            tariffs={tariffs}
            selectedTariffId={selectedTariffId}
            onSelectTariff={selectTariff}
          />
          
          <InfoBanner />
          
          <AgreementSection
            isCheckboxChecked={isCheckboxChecked}
            isCheckboxError={isCheckboxError}
            onCheckboxChange={setCheckboxChecked}
            onPurchase={handlePurchase}
          />
        </div>
      </div>
      
      <GuaranteeSection />
    </div>
  );
}

'use client'
import TariffCard from './TariffCard';
import { Tariff } from '@/app/types/tariff';

interface TariffGridProps {
  tariffs: Tariff[];
  selectedTariffId: string | null;
  onSelectTariff: (tariffId: string) => void;
}

export default function TariffGrid({ tariffs, selectedTariffId, onSelectTariff }: TariffGridProps) {
  if (!tariffs || tariffs.length < 4) {
    return <div>Загрузка тарифов...</div>;
  }

  return (
    <div className="pay-page__grid">
      <div
        className="pay-page__tariffs-grid tariffs-grid-mobile"
        style={{
          display: "grid",
          gridTemplateRows: "auto auto",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "24px",
        }}
      >
        <TariffCard
          tariff={tariffs[3]}
          tariffId="tariff-3"
          isSelected={selectedTariffId === 'tariff-3'}
          onSelect={onSelectTariff}
          isMainCard={true}
        />
        <TariffCard
          tariff={tariffs[2]}
          tariffId="tariff-2"
          isSelected={selectedTariffId === 'tariff-2'}
          onSelect={onSelectTariff}
        />

        <TariffCard
          tariff={tariffs[1]}
          tariffId="tariff-1"
          isSelected={selectedTariffId === 'tariff-1'}
          onSelect={onSelectTariff}
        />

        <TariffCard
          tariff={tariffs[0]}
          tariffId="tariff-0"
          isSelected={selectedTariffId === 'tariff-0'}
          onSelect={onSelectTariff}
        />
      </div>
    </div>
  );
}

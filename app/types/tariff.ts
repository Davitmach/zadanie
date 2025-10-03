export interface Tariff {
  id: string;
  period: string;
  price: number;
  full_price: number;
  is_best: boolean;
  text: string;
}

export interface TariffState {
  tariffs: Tariff[];
  loading: boolean;
  error: string | null;
  selectedTariffId: string | null;
  isCheckboxChecked: boolean;
  isCheckboxError: boolean;
  fetchTariffs: () => Promise<void>;
  selectTariff: (tariffId: string) => void;
  setCheckboxChecked: (checked: boolean) => void;
  setCheckboxError: (error: boolean) => void;
  validateAndProceed: () => boolean;
}

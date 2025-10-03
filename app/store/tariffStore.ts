import { create } from 'zustand';
import { TariffState } from '@/app/types/tariff';
import { tariffService } from '@/app/services/tariffService';

export const useTariffStore = create<TariffState>((set, get) => ({
  tariffs: [],
  loading: false,
  error: null,
  selectedTariffId: 'tariff-3',
  isCheckboxChecked: false,
  isCheckboxError: false,

  fetchTariffs: async () => {
    set({ loading: true, error: null });
    
    try {
      const tariffs = await tariffService.getTariffs();
      set({ tariffs, loading: false });
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'Неизвестная ошибка',
        loading: false 
      });
    }
  },

  selectTariff: (tariffId: string) => {
    set({ selectedTariffId: tariffId });
  },

  setCheckboxChecked: (checked: boolean) => {
    set({ isCheckboxChecked: checked, isCheckboxError: false });
  },

  setCheckboxError: (error: boolean) => {
    set({ isCheckboxError: error });
  },

  validateAndProceed: () => {
    const { isCheckboxChecked } = get();
    if (!isCheckboxChecked) {
      set({ isCheckboxError: true });
      return false;
    }
    set({ isCheckboxError: false });
    return true;
  },
}));

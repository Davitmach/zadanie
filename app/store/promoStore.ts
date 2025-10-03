import { create } from 'zustand';

interface PromoState {
  isPromoActive: boolean;
  setPromoActive: (active: boolean) => void;
}

export const usePromoStore = create<PromoState>((set) => ({
  isPromoActive: true,
  setPromoActive: (active: boolean) => set({ isPromoActive: active }),
}));

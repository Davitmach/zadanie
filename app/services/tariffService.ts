import axios from 'axios';
import { Tariff } from '@/app/types/tariff';

const API_BASE_URL = 'https://t-core.fit-hub.pro/Test';

export class TariffService {
  private static instance: TariffService;

  private constructor() {}

  public static getInstance(): TariffService {
    if (!TariffService.instance) {
      TariffService.instance = new TariffService();
    }
    return TariffService.instance;
  }

  async getTariffs(): Promise<Tariff[]> {
    try {
      const response = await axios.get<Tariff[]>(`${API_BASE_URL}/GetTariffs`);
      return response.data;
    } catch (error) {
      console.error('Ошибка при получении тарифов:', error);
      throw new Error('Не удалось загрузить тарифы');
    }
  }
}

export const tariffService = TariffService.getInstance();

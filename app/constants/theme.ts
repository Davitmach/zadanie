// Цветовая палитра
export const COLORS = {
  // Основные цвета
  background: '#232829',
  cardBackground: '#313637',
  borderDefault: '#484D4E',
  borderSelected: '#FDB056',
  borderError: '#FD5656',
  borderSuccess: '#81FE95',
  
  // Текстовые цвета
  textPrimary: '#FFFFFF',
  textSecondary: '#DCDCDC',
  textMuted: '#919191',
  textAccent: '#FDB056',
  textSuccess: '#81FE95',
  
  // Специальные цвета
  discount: '#FD5656',
  promoBackground: '#1D5B43',
  timerDefault: '#FFBB00',
  timerWarning: '#FF4E4E',
} as const;

// Размеры шрифтов
export const FONT_SIZES = {
  xs: '12px',
  sm: '14px',
  base: '16px',
  lg: '18px',
  xl: '20px',
  '2xl': '22px',
  '3xl': '24px',
  '4xl': '26px',
  '5xl': '28px',
  '6xl': '34px',
  '7xl': '40px',
  '8xl': '50px',
} as const;

// Размеры отступов
export const SPACING = {
  xs: '4px',
  sm: '8px',
  base: '12px',
  md: '16px',
  lg: '20px',
  xl: '24px',
  '2xl': '30px',
  '3xl': '34px',
  '4xl': '40px',
  '5xl': '50px',
  '6xl': '66px',
  '7xl': '87px',
  '8xl': '110px',
} as const;

// Радиусы скругления
export const BORDER_RADIUS = {
  sm: '4px',
  base: '8px',
  md: '20px',
  lg: '30px',
  xl: '34px',
  '2xl': '40px',
} as const;

// Переходы
export const TRANSITIONS = {
  default: 'transition-all duration-300 ease-in-out',
  fast: 'transition-all duration-200 ease-in-out',
} as const;

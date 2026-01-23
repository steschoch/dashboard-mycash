export type CreditCardTheme = 'black' | 'lime' | 'white';

export interface CreditCard {
  id: string;
  name: string;
  holderId: string;
  closingDay: number;
  dueDay: number;
  limit: number;
  currentBill: number;
  theme: CreditCardTheme;
  lastDigits?: string;
}

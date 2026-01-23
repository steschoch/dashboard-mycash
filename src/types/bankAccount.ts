export type BankAccountType = 'checking' | 'savings';

export interface BankAccount {
  id: string;
  name: string;
  holderId: string;
  balance: number;
  type: BankAccountType;
}

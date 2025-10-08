export type TransactionDirection = 'income' | 'outcome';

export type TransactionType =
  | 'depósito'
  | 'saque'
  | 'investimento'
  | 'pagamento'
  | 'transferência'
  | 'outro';

export type Attachment = {
  name: string;
  type: string;
  size: number;
  base64?: string;
};

export type TransactionDTO = {
  id: string;
  clientId: string;
  amount: number;
  date: string;
  direction: TransactionDirection;
  type: TransactionType;
  attachment?: Attachment;
};

export type TransactionCreateInput = {
  id?: string;
  clientId: string;
  amount: number;
  date: string;
  type: TransactionType;
  direction?: TransactionDirection;
  attachment?: Attachment;
};

export type TransactionUpdateInput = {
  id: string;
  clientId?: string;
  amount?: number;
  date?: string;
  type?: TransactionType;
  direction?: TransactionDirection;
  attachment?: Attachment;
};

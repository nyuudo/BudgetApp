export type CheckBoxProps = {
  label: string;
  fee: number;
  checkboxSelectedId: (id: number, checked: boolean) => void;
  id: number;
};

export type InputExtrasProps = {
  extraid: string;
  extralabel: string;
  extrafee: number;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleDecrement: (
    event: React.MouseEvent<HTMLButtonElement>,
    extraid: string
  ) => void;
  handleIncrement: (
    event: React.MouseEvent<HTMLButtonElement>,
    extraid: string
  ) => void;
  value: number;
};

export type LocalStorageValue = [
  number,
  React.Dispatch<React.SetStateAction<number>>
];

export type BudgetContextType = {
  totalFee: number;
  numberPages: number;
  numberLang: number;
  checkBoxState: boolean[];
  setCheckBoxState: React.Dispatch<React.SetStateAction<boolean[]>>;
  checkboxSelectedId: (i: number, checked: boolean) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDecrement: (
    e: React.MouseEvent<HTMLButtonElement>,
    extraid: string
  ) => void;
  handleIncrement: (
    e: React.MouseEvent<HTMLButtonElement>,
    extraid: string
  ) => void;
  budgetName: string;
  customerName: string;
  setBudgetName: React.Dispatch<React.SetStateAction<string>>;
  setCustomerName: React.Dispatch<React.SetStateAction<string>>;
  handleBudgetSubmit: (e: React.FormEvent) => void;
  budgets: Budget[];
  errorMessage: string;
  summary: string;
  showSummary: boolean;
};

export type ContextProviderProps = {
  children: React.ReactNode;
};

export type InfoProps = { infoid: string };

export type Service = {
  id: number;
  label: string;
  fee: number;
  extras?: Extra[];
};

export type Extra = {
  extraid: string;
  extralabel: string;
  extrafee: number;
};

export type Budget = {
  budgetName: string;
  customerName: string;
  services: Service[] | undefined;
  totalFee: number;
  date: Date;
};

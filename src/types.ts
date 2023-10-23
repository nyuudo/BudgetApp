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
};

export type ContextProviderProps = {
  children: React.ReactNode;
};

export type InfoProps = { infoId: string };

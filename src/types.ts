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
  infoExtra: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export type LocalStorageValue = [
  number,
  React.Dispatch<React.SetStateAction<number>>
];

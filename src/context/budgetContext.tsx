import { createContext, useState, useEffect, useCallback } from "react";
import services from "../data/services.json";
import { useLocalStorage } from "../hooks/useLocalStorage";
import type { ContextProviderProps, BudgetContextType } from "../types";

export const BudgetContext = createContext<BudgetContextType>({
  totalFee: 0,
  numberPages: 0,
  numberLang: 0,
  checkBoxState: [],
  setCheckBoxState: () => {},
  checkboxSelectedId: () => {},
  handleChange: () => {},
  handleDecrement: () => {},
  handleIncrement: () => {},
});

export const BudgetProvider = ({ children }: ContextProviderProps) => {
  const [totalFee, setTotalFee] = useLocalStorage("totalFee", 0);
  const [budgetFee, setBudgetFee] = useLocalStorage("budgetFee", 0);
  const [numberPages, setNumberPages] = useLocalStorage("numberPages", 0);
  const [numberLang, setNumberLang] = useLocalStorage("numberLang", 0);

  const [checkBoxState, setCheckBoxState] = useState(
    new Array(services.length).fill(false)
  );

  const calculateTotalFee = useCallback(() => {
    const extrasPag = numberPages * 30;
    const extrasLang = numberLang * 30;
    const totalFee = extrasPag + extrasLang + budgetFee;
    setTotalFee(totalFee);
  }, [numberPages, numberLang, budgetFee, setTotalFee]);

  useEffect(() => {
    calculateTotalFee();
  }, [numberPages, numberLang, checkBoxState, calculateTotalFee]);

  const checkboxSelectedId = (i: number, checked: boolean) => {
    const currentChecked = checkBoxState.slice();
    currentChecked[i] = checked;
    if (currentChecked[0] === false) {
      setNumberPages(0);
      setNumberLang(0);
    }
    setCheckBoxState(currentChecked);

    const calculateFee = currentChecked.reduce(
      (previousValue, currentValue, index) => {
        if (currentValue !== false) {
          return previousValue + services[index].fee;
        }
        return previousValue;
      },
      0
    );
    setBudgetFee(calculateFee);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === "pag") {
      return setNumberPages(parseInt(e.target.value));
    }
    if (e.target.id === "lang") {
      return setNumberLang(parseInt(e.target.value));
    }
  };

  const handleDecrement = (
    e: React.MouseEvent<HTMLButtonElement>,
    extraid: string
  ) => {
    e.preventDefault();
    if (extraid === "pag" && numberPages > 0) {
      setNumberPages((numberPages) => numberPages - 1);
    }
    if (extraid === "lang" && numberLang > 0) {
      setNumberLang((numberLang) => numberLang - 1);
    }
  };

  const handleIncrement = (
    e: React.MouseEvent<HTMLButtonElement>,
    extraid: string
  ) => {
    e.preventDefault();
    if (extraid === "pag") {
      setNumberPages((numberPages) => numberPages + 1);
    }
    if (extraid === "lang") {
      setNumberLang((numberLang) => numberLang + 1);
    }
  };

  return (
    <BudgetContext.Provider
      value={{
        totalFee,
        numberPages,
        numberLang,
        checkBoxState,
        setCheckBoxState,
        checkboxSelectedId,
        handleChange,
        handleDecrement,
        handleIncrement,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};

import budgetContext from "./budgetContext";
import { useState, useEffect } from "react";
import services from "../data/services.json";
import { useLocalStorage } from "../hooks/useLocalStorage";

type ContextProviderProps = { children: React.ReactNode };

const BudgetContextProvider = ({ children }: ContextProviderProps) => {
  // STATES but this time UPDATED with a custom Hook to use localStorage
  const [totalFee, setTotalFee] = useLocalStorage("totalFee", 0);
  const [budgetFee, setBudgetFee] = useLocalStorage("budgetFee", 0);
  const [numberPages, setNumberPages] = useLocalStorage("numberPages", 0);
  const [numberLang, setNumberLang] = useLocalStorage("numberLang", 0);

  // State for Checkboxes
  const [checkBoxState, setCheckBoxState] = useState(
    new Array(services.length).fill(false)
  );

  // Calculation of Fees (including extras)
  const calculateTotalFee = () => {
    const extrasPag = numberPages * 30;
    const extrasLang = numberLang * 30;
    const totalFee = extrasPag + extrasLang + budgetFee;
    setTotalFee(totalFee);
  };

  // Apply useEffect (works fine, still throw warning message: missing dependency "calculateTotalFee")
  useEffect(() => {
    calculateTotalFee();
  }, [numberPages, numberLang, checkBoxState]);

  // Checkbox events
  const checkboxSelectedId = (i: number, checked: boolean) => {
    const currentChecked = checkBoxState.slice();
    currentChecked[i] = checked;
    // condition to reset values of the first input checkbox
    if (currentChecked[0] === false) {
      setNumberPages(0);
      setNumberLang(0);
    }

    setCheckBoxState(currentChecked);

    // Calculation of Fees
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

  // HandleChange in State of Inputextras
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === "pag") {
      console.log(`El valor de ${e.target.id} es ${e.target.value}`);
      return setNumberPages(parseInt(e.target.value));
    }
    if (e.target.id === "lang") {
      console.log(`El valor de ${e.target.id} es ${e.target.value}`);
      return setNumberLang(parseInt(e.target.value));
    }
  };

  // decrement / increment
  const handleDecrement = (
    e: React.MouseEvent<HTMLButtonElement>,
    extraid: string
  ) => {
    e.preventDefault();
    if (extraid === "pag" && numberPages > 0) {
      setNumberPages((numberPages) => numberPages - 1);
      console.log(`Está restando páginas`);
    }
    if (extraid === "lang" && numberLang > 0) {
      setNumberLang((numberLang) => numberLang - 1);
      console.log(`Está restando idiomas`);
    }
  };

  const handleIncrement = (
    e: React.MouseEvent<HTMLButtonElement>,
    extraid: string
  ) => {
    e.preventDefault();
    if (extraid === "pag") {
      setNumberPages((numberPages) => numberPages + 1);
      console.log(`Está sumando páginas`);
    }
    if (extraid === "lang") {
      setNumberLang((numberLang) => numberLang + 1);
      console.log(`Está sumando idiomas`);
    }
  };

  const notify = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Ésta es una info extra");
  };

  return (
    <budgetContext.Provider
      value={{
        setTotalFee,
        setBudgetFee,
        setNumberPages,
        setNumberLang,
        setCheckBoxState,
        checkboxSelectedId,
        calculateTotalFee,
        handleChange,
        handleDecrement,
        handleIncrement,
        notify,
        totalFee,
      }}
    >
      {children}
    </budgetContext.Provider>
  );
};

export default BudgetContextProvider;

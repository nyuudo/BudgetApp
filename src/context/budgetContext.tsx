import { createContext, useState, useEffect, useCallback } from "react";
import services from "../data/services.json";
import { useLocalStorage } from "../hooks/useLocalStorage";
import type { ContextProviderProps, BudgetContextType, Budget } from "../types";

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
  handleBudgetSubmit: () => {},
  budgets: [],
  budgetName: "",
  customerName: "",
  setBudgetName: () => {},
  setCustomerName: () => {},
  errorMessage: "",
  newBudget: null,
  showSummary: false,
});

export const BudgetProvider = ({ children }: ContextProviderProps) => {
  const [totalFee, setTotalFee] = useLocalStorage("totalFee", 0);
  const [budgetFee, setBudgetFee] = useLocalStorage("budgetFee", 0);
  const [numberPages, setNumberPages] = useLocalStorage("numberPages", 0);
  const [numberLang, setNumberLang] = useLocalStorage("numberLang", 0);

  const [checkBoxState, setCheckBoxState] = useState(
    new Array(services.length).fill(false)
  );

  const [selectedServiceId, setSelectedServiceId] = useState<number | null>(
    null
  );

  const extraFeePag =
    services
      .flatMap((service) => service.extras)
      .find((extra) => extra?.extraid === "pages")?.extrafee || 0;

  const extraFeeLang =
    services
      .flatMap((service) => service.extras)
      .find((extra) => extra?.extraid === "languages")?.extrafee || 0;

  const calculateTotalFee = useCallback(() => {
    const extrasPag = numberPages * extraFeePag;
    const extrasLang = numberLang * extraFeeLang;
    const totalFee = extrasPag + extrasLang + budgetFee;
    setTotalFee(totalFee);
  }, [
    numberPages,
    numberLang,
    extraFeePag,
    extraFeeLang,
    budgetFee,
    setTotalFee,
  ]);

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
    setSelectedServiceId(i);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === "pages") {
      return setNumberPages(parseInt(e.target.value));
    }
    if (e.target.id === "languages") {
      return setNumberLang(parseInt(e.target.value));
    }
  };

  const handleDecrement = (
    e: React.MouseEvent<HTMLButtonElement>,
    extraid: string
  ) => {
    e.preventDefault();
    if (extraid === "pages" && numberPages > 0) {
      setNumberPages((numberPages) => numberPages - 1);
    }
    if (extraid === "languages" && numberLang > 0) {
      setNumberLang((numberLang) => numberLang - 1);
    }
  };

  const handleIncrement = (
    e: React.MouseEvent<HTMLButtonElement>,
    extraid: string
  ) => {
    e.preventDefault();
    if (extraid === "pages") {
      setNumberPages((numberPages) => numberPages + 1);
    }
    if (extraid === "languages") {
      setNumberLang((numberLang) => numberLang + 1);
    }
  };

  // Budget Management
  const [budgetName, setBudgetName] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [budgets, setBudgets] = useState<Budget[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [newBudget, setNewBudget] = useState<Budget | null>(null);
  const [showSummary, setShowSummary] = useState(false);

  const resetErrorMessage = () => {
    setErrorMessage("");
  };

  const handleBudgetSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!checkBoxState.includes(true)) {
      setErrorMessage("At least one service must be selected");
      return;
    }

    if (!budgetName) {
      setErrorMessage("Please, name Your budget before saving");
      return;
    }

    if (!customerName) {
      setErrorMessage("Please, include your name before saving");
      return;
    }

    resetErrorMessage();

    const selectedServices = services.filter(
      (item, index) => checkBoxState[index]
    );
    const customerExtrasPag = extraFeePag * numberPages;
    const customerExtrasLang = extraFeeLang * numberLang;
    const totalFee = customerExtrasPag + customerExtrasLang + budgetFee;
    const newBudget: Budget = {
      budgetName,
      customerName,
      services: selectedServices,
      totalFee,
      customerExtrasPag,
      customerExtrasLang,
      budgetDate: new Date(),
    };
    setBudgets((prevBudgets) => [...prevBudgets, newBudget]);
    console.log(newBudget);
    setBudgetName("");
    setCustomerName("");
    setNewBudget(newBudget);
    setShowSummary(true);
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
        handleBudgetSubmit,
        budgets,
        budgetName,
        customerName,
        setBudgetName,
        setCustomerName,
        errorMessage,
        newBudget,
        showSummary,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};

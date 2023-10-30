import { useContext } from "react";
import { BudgetContext } from "../context/budgetContext";
import { BudgetSummary } from "./App.styles";
const Summary = () => {
  const { summary } = useContext(BudgetContext);
  return (
    <BudgetSummary>
      <p>{summary}</p>
    </BudgetSummary>
  );
};

export default Summary;

/* 
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
  summary: "",
*/

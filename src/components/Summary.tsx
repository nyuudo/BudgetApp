import { useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";
import { BudgetSummary } from "./App.styles";
import LoadingSummary from "./LoadingSummary";
const Summary = () => {
  const { newBudget } = useContext(BudgetContext);

  if (!newBudget) {
    return <LoadingSummary />;
  }

  return (
    <BudgetSummary>
      <>
        <h3>Recent Budgets</h3>
        <p>{newBudget.budgetDate.toLocaleString()}</p>
        <p>
          <strong>Budget Name:</strong> {newBudget.budgetName}
        </p>
        <p>
          <strong>Customer Name:</strong> {newBudget.customerName}
        </p>
        <p>
          <strong>Services Details:</strong>
          {newBudget.services?.map((item) => (
            <ul key={item.id}>
              <li>
                {item.label} ({item.fee})€
                {item.extras && item.extras.length > 0 && (
                  <ul>
                    {item.extras.map((extra) => (
                      <li key={extra.extraid}>
                        {extra.extralabel}:
                        {extra.extraid === "pages" && (
                          <span> ({newBudget.customerExtrasPag}€)</span>
                        )}
                        {extra.extraid === "languages" && (
                          <span> ({newBudget.customerExtrasLang}€)</span>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          ))}
        </p>
        {newBudget.totalFee && (
          <p>
            <strong>Total Fee:</strong> {newBudget.totalFee}€
          </p>
        )}
      </>
    </BudgetSummary>
  );
};

export default Summary;

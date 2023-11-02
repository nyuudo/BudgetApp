import { useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";
import { BudgetSummary } from "./App.styles";
import LoadingSummary from "./LoadingSummary";
const Summary = () => {
  const { budgets, newBudget } = useContext(BudgetContext);

  if (!newBudget || !budgets) {
    return <LoadingSummary />;
  }

  const filteredBudgets = budgets.filter((budget) => budget !== newBudget);

  return (
    <BudgetSummary>
      <>
        <h3>Recent Budgets</h3>
        <hr />
        <p className="budgetdate">{newBudget.budgetDate.toLocaleString()}</p>
        <div>
          <strong>Budget Name:</strong> {newBudget.budgetName}
        </div>
        <div>
          <strong>Customer Name:</strong> {newBudget.customerName}
        </div>
        <div>
          <strong>Services Details:</strong>
          {newBudget.services?.map((item) => (
            <ul key={item.id}>
              <li>
                <span>
                  {item.label} ({item.fee})€
                  {item.extras && item.extras.length > 0 && (
                    <ul>
                      {item.extras.map((extra) => (
                        <li key={extra.extraid}>
                          <span>
                            {extra.extralabel}
                            {extra.extraid === "pages" && (
                              <span className="extranumber">
                                {" "}
                                ({newBudget.customerExtrasPag}€)
                              </span>
                            )}
                            {extra.extraid === "languages" && (
                              <span className="extranumber">
                                {" "}
                                ({newBudget.customerExtrasLang}€)
                              </span>
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </span>
              </li>
            </ul>
          ))}
        </div>
        {newBudget.totalFee && (
          <div className="totalbudget">
            <strong>Total Fee:</strong> {newBudget.totalFee}€
          </div>
        )}
        <hr />
        {filteredBudgets.slice(0, 2).map((budget) => (
          <div className="prevbudgets" key={budget.budgetName}>
            <p className="budgetdate">{budget.budgetDate.toLocaleString()}</p>
            <div>
              <strong>Budget Name:</strong> {budget.budgetName}
            </div>
            <div>
              <strong>Customer Name:</strong> {budget.customerName}
            </div>
            <div>
              <strong>Services Details:</strong>
              {budget.services?.map((item) => (
                <ul key={item.id}>
                  <li>
                    <span>
                      {item.label} ({item.fee})€
                      {item.extras && item.extras.length > 0 && (
                        <ul>
                          {item.extras.map((extra) => (
                            <li key={extra.extraid}>
                              <span>
                                {extra.extralabel}
                                {extra.extraid === "pages" && (
                                  <span className="extranumber">
                                    {" "}
                                    ({budget.customerExtrasPag}€)
                                  </span>
                                )}
                                {extra.extraid === "languages" && (
                                  <span className="extranumber">
                                    {" "}
                                    ({budget.customerExtrasLang}€)
                                  </span>
                                )}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </span>
                  </li>
                </ul>
              ))}
            </div>
            {budget.totalFee && (
              <div className="totalbudget">
                <strong>Total Fee:</strong> {budget.totalFee}€
              </div>
            )}
            <hr />
          </div>
        ))}
      </>
    </BudgetSummary>
  );
};

export default Summary;

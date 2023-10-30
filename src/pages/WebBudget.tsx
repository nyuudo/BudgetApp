import { useContext } from "react";
import { BudgetContext } from "../context/budgetContext";

import services from "../data/services.json";
import Checkbox from "../components/Checkbox";
import InputExtras from "../components/Inputextras";
import Summary from "../components/Summary";
import {
  StyledBackground,
  StyledForm,
  SaveBudget,
  Icon,
} from "../components/App.styles";

const WebBudget = () => {
  const {
    totalFee,
    numberPages,
    numberLang,
    checkBoxState,
    checkboxSelectedId,
    handleChange,
    handleDecrement,
    handleIncrement,
    budgetName,
    customerName,
    setBudgetName,
    setCustomerName,
    handleBudgetSubmit,
    errorMessage,
    showSummary,
  } = useContext(BudgetContext);

  return (
    <StyledBackground>
      <StyledForm>
        <h1>What's Your project?</h1>
        {services.map((item, index) => (
          //identify the main div as index
          <div key={index}>
            <Checkbox
              // identify the key of every checkbox item
              key={item.id - index}
              id={item.id}
              label={item.label}
              fee={item.fee}
              checkboxSelectedId={checkboxSelectedId}
              // below identify the sub-item array adding an hyphen
            />
            <span key={item.id + "-"}>
              {checkBoxState[0] &&
                item.id === 0 &&
                item.extras?.map((extra) => (
                  <InputExtras
                    // identify the sub-item adding an hyphen and id
                    key={item.id + "-" + extra.extraid}
                    extraid={extra.extraid}
                    extralabel={extra.extralabel}
                    extrafee={extra.extrafee}
                    handleChange={handleChange}
                    handleDecrement={handleDecrement}
                    handleIncrement={handleIncrement}
                    // pass a prop as a conditional value to calculate
                    value={extra.extraid === "pages" ? numberPages : numberLang}
                  />
                ))}
            </span>
          </div>
        ))}
        <hr />
        <h2>
          Total Fee: <span>{totalFee}€</span>
        </h2>
        <hr />
        <SaveBudget>
          <input
            type="text"
            placeholder="Budget Name"
            value={budgetName}
            onChange={(e) => setBudgetName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Customer Name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
          {errorMessage && (
            <span>
              <Icon className="icon icon--error"></Icon>
              {errorMessage}
            </span>
          )}
          <button type="submit" onClick={handleBudgetSubmit}>
            SAVE BUDGET
          </button>
        </SaveBudget>
      </StyledForm>
      {showSummary && <Summary />}
    </StyledBackground>
  );
};

export default WebBudget;

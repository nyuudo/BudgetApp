import { useState, useEffect, useCallback } from "react";
import services from "../data/services.json";
import Checkbox from "../components/Checkbox";
import InputExtras from "../components/Inputextras";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { StyledBackground, StyledForm } from "../components/App.styles";

function WebBudget() {
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
  const calculateTotalFee = useCallback(() => {
    const extrasPag = numberPages * 30;
    const extrasLang = numberLang * 30;
    const totalFee = extrasPag + extrasLang + budgetFee;
    setTotalFee(totalFee);
  }, [numberPages, numberLang, budgetFee, setTotalFee]);

  // Apply useEffect (works fine, still throw warning message: missing dependency "calculateTotalFee")
  useEffect(() => {
    calculateTotalFee();
  }, [numberPages, numberLang, checkBoxState, calculateTotalFee]);

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
      return setNumberPages(parseInt(e.target.value));
    }
    if (e.target.id === "lang") {
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

  const notify = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

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
                    value={extra.extraid === "pag" ? numberPages : numberLang}
                    infoExtra={notify}
                    //
                  />
                ))}
            </span>
          </div>
        ))}
        <hr />
        <h2>
          Total Fee: <span>{totalFee}€</span>
        </h2>
      </StyledForm>
    </StyledBackground>
  );
}

export default WebBudget;

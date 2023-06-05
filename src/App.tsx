import { useState, useEffect } from "react";
import services from "./data/services.json";
import Checkbox from "./components/Checkbox";
import Dropdown from "./components/Dropdown";
import { StyledBackground, StyledForm } from "./components/Form.styles";

function App() {
  // DEFINE STATES
  // State for Total Budget Fee
  const [totalFee, setTotalFee] = useState(0);

  // State for Budget figures
  const [budgetFee, setBudgetFee] = useState(0);

  // States for Extras (pages and languages)
  const [numberPages, setNumberPages] = useState(0);
  const [numberLang, setNumberLang] = useState(0);

  // State for Checkboxes
  const [checkBoxState, setCheckBoxState] = useState(
    new Array(services.length).fill(false)
  );

  // Checkbox events
  const checkboxSelectedId = (i: number, checked: boolean) => {
    const currentChecked = checkBoxState.slice(); /* [...checkBoxState] */
    currentChecked[i] = checked;
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

  // HandleChange in State of Dropdown
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "pag") {
      console.log(`El valor de ${e.target.name} es ${e.target.value}`);
      return setNumberPages(parseFloat(e.target.value));
    }
    if (e.target.name === "lang") {
      console.log(`El valor de ${e.target.name} es ${e.target.value}`);
      return setNumberLang(parseFloat(e.target.value));
    }
  };

  // Calculation of Fees (including extras)
  const calculateTotalFee = () => {
    const extrasPag = numberPages * 30;
    const extrasLang = numberLang * 30;
    const totalFee = extrasPag + extrasLang + budgetFee;
    setTotalFee(totalFee);
  };

  // Apply useEffect (works fine, throw error, missing dependency "calculateTotalFee")
  useEffect(() => {
    calculateTotalFee();
  }, [numberPages, numberLang, checkBoxState]);

  return (
    <StyledBackground>
      <StyledForm>
        <h1>¿Qué quieres hacer?</h1>
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
                  <Dropdown
                    // identify the sub-item adding an hyphen and id
                    key={item.id + "-" + extra.extraid}
                    extraid={extra.extraid}
                    extralabel={extra.extralabel}
                    extrafee={extra.extrafee}
                    handleChange={handleChange}
                  />
                ))}
            </span>
          </div>
        ))}
        <hr />
        <h2>
          Precio Total: <span>{totalFee}€</span>
        </h2>
      </StyledForm>
    </StyledBackground>
  );
}

export default App;

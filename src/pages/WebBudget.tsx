import { useState, useEffect } from "react";
import services from "../data/services.json";
import Checkbox from "../components/Checkbox";
import InputExtras from "../components/Inputextras";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { StyledBackground, StyledForm } from "../components/Form.styles";

function WebBudget() {
  // DEFINE STATES
  // State for Total Budget Fee
  //const [totalFee, setTotalFee] = useState(0);

  // Using customHook
  const [totalFee, setTotalFee] = useLocalStorage("totalFee", 0);

  //  Updated State for Total Budget Fee and useEffect applied to localStorage
  /*   const [totalFee, setTotalFee] = useState(() => {
    const savedState = localStorage.getItem("totalFee") || "";
    const totalFee = JSON.parse(savedState);
    return totalFee;
  });

  useEffect(() => {
    localStorage.setItem("totalFee", JSON.stringify(totalFee));
  }, [totalFee]); */

  // State for Budget figures
  const [budgetFee, setBudgetFee] = useState(0);

  // States for Extras (pages and languages)
  const [numberPages, setNumberPages] = useState(0);
  const [numberLang, setNumberLang] = useState(0);

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
                    //
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

export default WebBudget;

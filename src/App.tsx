import { useState } from "react";
import services from "./data/services.json";
import Checkbox from "./components/Checkbox";

function App() {
  // DEFINE STATES
  // State for Budget figures
  const [budgetFee, setBudgetFee] = useState(0);
  // State for Checkboxes
  const [checkBoxState, setCheckBoxState] = useState(
    new Array(services.length).fill(false)
  );

  // Checkbox events
  const checkboxSelectedId = (i: number, checked: boolean) => {
    const currentChecked = [...checkBoxState];
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

  return (
    <>
      <h1>¿Qué quieres hacer?</h1>
      {services.slice(0, 3).map((item) => (
        <Checkbox
          key={item.id}
          id={item.id}
          label={item.label}
          fee={item.fee}
          checkboxSelectedId={checkboxSelectedId}
        />
      ))}
      <label>Precio: {budgetFee}€</label>
    </>
  );
}

export default App;

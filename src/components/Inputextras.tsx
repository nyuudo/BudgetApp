import { StyledInputExtras, Icon } from "./App.styles";
import { InputExtrasProps } from "../types";

const InputExtras = ({
  extraid,
  extralabel,
  extrafee,
  handleChange,
  handleDecrement,
  handleIncrement,
  value,
}: InputExtrasProps) => {
  return (
    <StyledInputExtras infoid={extraid}>
      <label>
        {extralabel}
        <button onClick={(e) => handleDecrement(e, extraid)}>
          <Icon className="icon icon--minus"></Icon>
        </button>
        <input
          id={extraid}
          type="text"
          value={value}
          placeholder="0"
          min="1"
          onChange={handleChange}
        />
        <button onClick={(e) => handleIncrement(e, extraid)}>
          <Icon className="icon icon--plus"></Icon>
        </button>
        <strong>{extrafee}€</strong>
        <div className="info">
          <Icon className="icon icon--info"></Icon>
        </div>
      </label>
    </StyledInputExtras>
  );
};

export default InputExtras;

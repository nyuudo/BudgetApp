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
  infoExtra,
}: InputExtrasProps) => {
  return (
    <StyledInputExtras>
      <label>
        {extralabel}
        <button onClick={(e) => handleDecrement(e, extraid)}>
          <Icon className="icon icon--minus"></Icon>
        </button>
        <input
          id={extraid}
          type="text"
          value={value}
          placeholder="1"
          min="0"
          onChange={handleChange}
        />
        <button onClick={(e) => handleIncrement(e, extraid)}>
          <Icon className="icon icon--plus"></Icon>
        </button>
        <strong>{extrafee}€</strong>
      </label>
      <button className="info" onClick={infoExtra}>
        <Icon className="icon"></Icon>
      </button>
    </StyledInputExtras>
  );
};

export default InputExtras;

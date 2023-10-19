import { StyledCheckbox } from "./App.styles";
import { CheckBoxProps } from "../types";

const Checkbox = ({ label, fee, checkboxSelectedId, id }: CheckBoxProps) => {
  return (
    <StyledCheckbox>
      <input
        type="checkbox"
        onChange={(e) => checkboxSelectedId(id, e.target.checked)}
      />
      <label>
        {label} <strong>({fee}€)</strong>
      </label>
    </StyledCheckbox>
  );
};
export default Checkbox;

import { StyledCheckbox } from "./Form.styles";

//Define types for props
type CheckBoxProps = {
  label: string;
  fee: number;
  checkboxSelectedId: (id: number, checked: boolean) => void;
  id: number;
};

const Checkbox = ({ label, fee, checkboxSelectedId, id }: CheckBoxProps) => {
  return (
    <StyledCheckbox>
      <input
        type="checkbox"
        onChange={(e) => checkboxSelectedId(id, e.target.checked)}
        //onChange={(e) => console.log(e.target.checked)}
      />
      <label>
        {label} <strong>({fee}€)</strong>
      </label>
    </StyledCheckbox>
  );
};
export default Checkbox;

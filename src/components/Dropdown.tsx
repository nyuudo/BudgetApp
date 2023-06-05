import { StyledDropdown } from "./Form.styles";

//Define types for props
type DropdownProps = {
  extraid: string;
  extralabel: string;
  extrafee: number;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Dropdown = ({
  extraid,
  extralabel,
  extrafee,
  handleChange,
}: DropdownProps) => {
  return (
    <StyledDropdown>
      <label>
        {extralabel}
        <input
          name={extraid}
          type="number"
          min="0"
          max="100"
          placeholder="0"
          onChange={handleChange}
        />
        <strong>x {extrafee}€</strong>
      </label>
    </StyledDropdown>
  );
};

export default Dropdown;

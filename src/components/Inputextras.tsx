import { StyledInputExtras } from "./Form.styles";

//Define types for props
type InputExtrasProps = {
  extraid: string;
  extralabel: string;
  extrafee: number;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleDecrement: (
    event: React.MouseEvent<HTMLButtonElement>,
    extraid: string
  ) => void;
  handleIncrement: (
    event: React.MouseEvent<HTMLButtonElement>,
    extraid: string
  ) => void;
  value: number;
};

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
    <StyledInputExtras>
      <label>
        {extralabel}
        <button onClick={(e) => handleDecrement(e, extraid)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4Zm1.75 5.25a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5Z"
            />
          </svg>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4Zm4 9a.75.75 0 0 1-.75-.75v-1.5h-1.5a.75.75 0 0 1 0-1.5h1.5v-1.5a.75.75 0 0 1 1.5 0v1.5h1.5a.75.75 0 0 1 0 1.5h-1.5v1.5A.75.75 0 0 1 8 11Z"
            />
          </svg>
        </button>
        <strong>{extrafee}€</strong>
      </label>
    </StyledInputExtras>
  );
};

export default InputExtras;

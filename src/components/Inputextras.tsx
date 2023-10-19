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
  infoExtra: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

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
      <button className="info" onClick={infoExtra}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16ZM9 5a1 1 0 1 1-2 0a1 1 0 0 1 2 0ZM7 7a.75.75 0 0 0 0 1.5h.25v2h-1a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-1V7H7Z"
          />
        </svg>
      </button>
    </StyledInputExtras>
  );
};

export default InputExtras;

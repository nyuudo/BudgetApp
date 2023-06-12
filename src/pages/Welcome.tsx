import { StyledBackground, StyledWelcome } from "../components/Form.styles";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <StyledBackground>
      <StyledWelcome>
        <h1>Presupuesto</h1>
        <p>
          Si necesitas <strong>servicios web,</strong> a continuación
          encontrarás una lista de diferentes opciones disponibles y que puedes
          seleccionar, de acuerdo a tus necesidades 😉
        </p>
        <br />
        <Link to="/budget">DESCUBRE CÓMO</Link>
      </StyledWelcome>
    </StyledBackground>
  );
};

export default Welcome;

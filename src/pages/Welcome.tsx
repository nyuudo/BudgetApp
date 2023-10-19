import { StyledBackground, StyledWelcome } from "../components/App.styles";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <StyledBackground>
      <StyledWelcome>
        <h1>Budget Calculator</h1>
        <p>
          If You have a particular <strong>web project</strong> in mind, and You
          don't have a clear idea of the costs involved in the development, this
          tool could help You to figure it out.
        </p>
        <br />
        <Link to="/budget">FIND HOW</Link>
      </StyledWelcome>
    </StyledBackground>
  );
};

export default Welcome;

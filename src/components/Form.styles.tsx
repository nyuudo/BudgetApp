// import styled components libraries
import styled from "styled-components";

export const StyledBackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: #e0e0e0;
`;

export const StyledForm = styled.div`
  position: relative;
  font-family: "Exo 2", sans-serif;
  border-radius: 16px;
  padding: 32px;
  background: #e0e0e0;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;

  h1 {
    color: #60a3bc;
  }
  h2 {
    padding-left: 20px;
    color: #0a3d62;
  }
  span {
    color: #e55039;
    font-weight: 700;
  }
  hr {
    border: none;
    border-top: solid 1px hsla(0, 0%, 0%, 0.16);
    border-bottom: solid 1px hsla(0, 0%, 100%, 1);
  }
`;

export const StyledCheckbox = styled.form`
  color: #0a3d62;
  font-size: 1rem;
  line-height: 1.75rem;

  input[type="checkbox"] {
    background-color: #0a3d62;
    border: #0a3d62;
  }
`;

export const StyledDropdown = styled.form`
  padding-left: 20px;
  color: #8395a7;
  font-size: 0.9rem;
  transition-duration: 0.4s;

  input {
    width: 64px;
    margin: 4px;
  }
`;

/* .checkbox-wrapper input[type="checkbox"] {
  removing default appearance
  -webkit-appearance: none;
  appearance: none;
  creating a custom design
  width: 1.6em;
  height: 1.6em;
  border-radius: 0.15em;
  margin-right: 0.5em;
  border: 0.15em solid #007a7e;
  outline: none;
  cursor: pointer;
} */

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

export const StyledInputExtras = styled.form`
  padding-left: 20px;
  color: #8395a7;
  font-size: 0.9rem;

  button {
    background: none;
    border: none;
    fill: #0a3d62;
    vertical-align: middle;
    transition-duration: 0.4s;
  }

  button:hover {
    fill: #e55039;
  }

  input {
    width: 64px;
    margin: 0px;
  }

  input::placeholder {
    color: #e55039;
  }

  .info {
    fill: #60a3bc;
  }

  .info:hover {
    fill: #0a3d62;
  }

  /*   .ExtrasPopup {
    border-radius: 8px;
    height: auto;
    width: 300px;
    align-items: center;
  } */
`;

export const StyledWelcome = styled.div`
  position: relative;
  max-width: 50vh;
  font-family: "Exo 2", sans-serif;
  border-radius: 16px;
  padding: 32px;
  background: #e0e0e0;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;

  h1 {
    color: #0a3d62;
  }
  p {
    margin: 16px, 16px, 32px, 0px;
  }
  a {
    border-radius: 4px;
    padding: 8px;
    color: #e0e0e0;
    background-color: #0a3d62;
    text-decoration: none;
    transition-duration: 0.4s;
  }

  a:hover {
    background-color: #e55039;
  }
`;

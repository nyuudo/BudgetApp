// import styled components libraries
import styled from "styled-components";

const colors = {
  primary: "#0a3d62",
  secondary: "#60a3bc",
  tertiary: "#8395a7",
  danger: "#e55039",
};

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
  font-family: "Signika", sans-serif;
  border-radius: 16px;
  padding: 32px;
  background: #e0e0e0;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;

  h1 {
    color: ${colors.secondary};
  }
  h2 {
    padding-left: 20px;
    color: ${colors.primary};
  }
  span {
    color: ${colors.danger};
    font-weight: 700;
  }
  hr {
    border: none;
    border-top: solid 1px hsla(0, 0%, 0%, 0.16);
    border-bottom: solid 1px hsla(0, 0%, 100%, 1);
  }
`;

export const StyledCheckbox = styled.form`
  color: ${colors.primary};
  font-size: 1rem;
  line-height: 1.75rem;

  input[type="checkbox"] {
    background-color: ${colors.primary};
    border: ${colors.primary};
  }
`;

export const StyledInputExtras = styled.form`
  padding-left: 20px;
  color: ${colors.tertiary};
  font-size: 0.9rem;

  button {
    background: none;
    border: none;
    vertical-align: middle;
  }

  input {
    width: 64px;
    margin: 0px;
  }

  input::placeholder {
    color: ${colors.danger};
  }

  .info {
    fill: ${colors.secondary};
  }

  .info:hover {
    fill: ${colors.primary};
  }
`;

export const Icon = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  background-color: ${colors.tertiary};
  --svg: url("src/assets/images/info.svg");
  -webkit-mask-image: var(--svg);
  mask-image: var(--svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
  transition-duration: 0.4s;

  &:hover {
    background-color: ${colors.primary};
  }

  &.icon--minus {
    --svg: url("src/assets/images/minus.svg");
    background-color: ${colors.primary};

    &:hover {
      background-color: ${colors.danger};
    }
  }

  &.icon--plus {
    --svg: url("src/assets/images/plus.svg");
    background-color: ${colors.primary};

    &:hover {
      background-color: ${colors.danger};
    }
  }
`;

export const StyledWelcome = styled.div`
  position: relative;
  max-width: 50vh;
  font-family: "Signika", sans-serif;
  border-radius: 16px;
  padding: 32px;
  background: #e0e0e0;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;

  h1 {
    color: ${colors.primary};
  }
  p {
    margin: 16px, 16px, 32px, 0px;
  }
  a {
    border-radius: 4px;
    padding: 8px 16px;
    font-size: 0.75rem;
    color: #e0e0e0;
    background-color: ${colors.primary};
    text-decoration: none;
    transition-duration: 0.4s;
  }

  a:hover {
    background-color: ${colors.danger};
  }
`;

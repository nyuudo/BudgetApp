import styled from "styled-components";
import type { InfoProps } from "../types";

const colors = {
  primary: "#0a3d62",
  secondary: "#60a3bc",
  tertiary: "#8395a7",
  danger: "#e55039",
};

export const StyledBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: #e0e0e0;
`;

export const StyledWelcome = styled.section`
  position: relative;
  max-width: 50vh;
  font-family: "Signika", sans-serif;
  border-radius: 16px;
  padding: 32px;
  background: #e0e0e0;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
  mix-blend-mode: multiply;

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

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  height: 420px;
  font-family: "Signika", sans-serif;
  border-radius: 16px;
  padding: 16px 32px;
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
`;

export const StyledCheckbox = styled.div`
  color: ${colors.primary};
  font-size: 1rem;
  line-height: 1.75rem;

  input[type="checkbox"] {
    background-color: ${colors.primary};
    border: ${colors.primary};
  }
`;

export const StyledInputExtras = styled.form<InfoProps>`
  color: ${colors.tertiary};
  font-size: 0.9rem;

  button {
    background: none;
    border: none;
  }

  label {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    align-content: center;
  }

  input {
    height: auto;
    width: 24px;
    margin: 4px 0px;
    border-style: none;
    font-family: "Signika", sans-serif;
  }

  input:placeholder {
    color: ${colors.danger};
  }

  .info {
    position: relative;
    margin-left: 0.5rem;

    &:before {
      position: absolute;
      display: none;
      min-width: 132px;
      background-color: ${colors.tertiary};
      color: white;
      padding: 8px;
      border-radius: 4px;
      z-index: 1;
      left: 150%;
      bottom: -25%;
      content: "${({ infoid }) =>
        `Here indicate the number of EXTRA ${infoid} in your web`}";
      font-size: 0.65rem;
      font-family: "Signika", sans-serif;
      font-weight: 300;
    }

    &:hover:before {
      display: block;
    }

    &:after {
      content: "";
      display: none;
      position: absolute;
      top: 30%;
      left: 14px;
      transform: translateY(-50%);
      border-width: 5px;
      border-style: solid;
      border-color: transparent ${colors.tertiary} transparent transparent;
    }

    &:hover:after {
      display: block;
    }
  }
`;

export const SaveBudget = styled.div`
  padding-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  input {
    padding-left: 4px;
    border-radius: 4px;
    border-style: none;
    font-size: 1rem;
    font-family: "Signika", sans-serif;
    font-weight: 300;
    transition: border-color 0.5s ease-out;
    height: auto;
  }

  button {
    border-style: none;
    border-radius: 4px;
    padding: 8px 16px;
    font-family: "Signika", sans-serif;
    font-size: 0.75rem;
    color: #e0e0e0;
    background-color: ${colors.primary};
    text-decoration: none;
    transition-duration: 0.4s;
  }

  button:hover {
    background-color: ${colors.danger};
  }

  span {
    display: flex;
    gap: 4px;
    font-size: 0.75rem;
    justify-content: center;
  }
`;

export const BudgetSummary = styled.div`
  display: flex;
  flex-direction: column;
  margin-block-end: 0px;
  background-color: white;
  width: 240px;
  height: 400px;
  padding: 16px 24px 16px 32px;
  font-family: "Signika", sans-serif;
  color: #5b5b5b;

  h3 {
    display: block;
    margin: 8px 0px;
  }

  hr {
    color: #757575;
    border-top: 2px dotted;
    border-bottom: none;
    margin: 0px;
  }

  div {
    display: block;
    margin: 0px;
    font-size: 0.75rem;
  }

  .prevbudgets {
    display: flex;
    flex-direction: column;
  }

  .budgetdate {
    font-size: 0.75rem;
    margin: 2px;
    color: #757575;
    align-self: flex-end;
  }

  ul {
    list-style-position: inside;
    margin: 0;
    padding-left: 0;
    color: #757575;
  }

  ul ul li {
    padding-left: 1rem;
  }

  span {
    position: relative;
    left: -4px;
  }

  span.extranumber {
    left: 0px;
  }

  .totalbudget {
    color: black;
    margin: 8px 0px;
  }
`;

export const Icon = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  -webkit-mask-image: var(--svg);
  mask-image: var(--svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
  transition-duration: 0.4s;

  &.icon--info {
    --svg: url("src/assets/images/info.svg");
    background-color: ${colors.tertiary};

    &:hover {
      background-color: ${colors.primary};
    }
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

  &.icon--error {
    --svg: url("src/assets/images/error.svg");
    background-color: ${colors.danger};
  }
`;

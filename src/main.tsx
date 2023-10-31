import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { BudgetProvider } from "./context/BudgetContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <BudgetProvider>
        <App />
      </BudgetProvider>
    </BrowserRouter>
  </React.StrictMode>
);

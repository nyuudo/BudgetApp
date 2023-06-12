import { Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import WebBudget from "./pages/WebBudget";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/budget" element={<WebBudget />} />
    </Routes>
  );
}

export default App;

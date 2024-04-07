import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { PatternBuilder } from "./pages/PatternBuilder";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/putternbuilder" element={<PatternBuilder />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;

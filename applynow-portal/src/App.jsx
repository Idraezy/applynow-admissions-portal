import { Routes, Route, Link } from "react-router-dom";
import Apply from "./pages/Apply";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";

function App() {
  return (
    <div>
      <h1>ApplyNow Portal</h1>

      {/* Navigation */}
      <nav>
        <Link to="/">Apply</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link> |{" "}
        <Link to="/admin">Admin</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Apply />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
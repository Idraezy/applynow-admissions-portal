import { Routes, Route, Link, useLocation } from "react-router-dom";
import Apply from "./pages/Apply";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";

function App() {
  const location = useLocation();

  const linkStyle = (path) =>
    `px-3 py-1 rounded-md transition ${
      location.pathname === path
        ? "bg-blue-600 text-white"
        : "text-gray-600 hover:text-blue-600"
    }`;

  return (
    <div className="min-h-screen bg-gray-100">

      {/* NAVBAR */}
      <div className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">
          ApplyNow Portal
        </h1>

        <nav className="space-x-2">
          <Link to="/" className={linkStyle("/")}>
            Apply
          </Link>

          <Link to="/dashboard" className={linkStyle("/dashboard")}>
            Dashboard
          </Link>

          <Link to="/admin" className={linkStyle("/admin")}>
            Admin
          </Link>
        </nav>
      </div>

      {/* PAGES */}
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Apply />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
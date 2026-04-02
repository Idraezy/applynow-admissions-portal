import { useEffect, useState } from "react";

function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [history, setHistory] = useState([]);

  const status = localStorage.getItem("status") || "Pending";

  useEffect(() => {
    setTimeout(() => {
      const savedData = localStorage.getItem("application");
      const savedHistory =
        JSON.parse(localStorage.getItem("history")) || [];

      if (savedData) setData(JSON.parse(savedData));
      setHistory(savedHistory);

      setLoading(false);
    }, 1000); // simulate loading
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold animate-pulse">
          Loading Dashboard...
        </p>
      </div>
    );

  if (!data)
    return <h2 className="text-center mt-10">No Application Found</h2>;

  const statusColor = {
    Approved: "bg-green-100 text-green-700",
    Rejected: "bg-red-100 text-red-700",
    "Likely Approved": "bg-blue-100 text-blue-700",
    Pending: "bg-yellow-100 text-yellow-700",
  }[status];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        
        
        <div className="bg-white p-6 rounded-2xl shadow flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">Dashboard</h2>
            <p className="text-gray-500">Welcome back 👋</p>
          </div>

          <span
            className={`px-4 py-2 rounded-full text-sm font-semibold ${statusColor}`}
          >
            {status}
          </span>
        </div>

    
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-lg font-semibold mb-4">
            Application Details
          </h3>

          <div className="grid grid-cols-2 gap-4 text-gray-700">
            <p><strong>Name:</strong> {data.name}</p>
            <p><strong>Email:</strong> {data.email}</p>
            <p><strong>School:</strong> {data.school}</p>
            <p><strong>GPA:</strong> {data.gpa}</p>
            <p><strong>Parent:</strong> {data.parent}</p>
          </div>
        </div>

        {/* HISTORY SECTION */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-lg font-semibold mb-4">
            Application History
          </h3>

          {history.length === 0 ? (
            <p className="text-gray-500">
              No previous applications yet.
            </p>
          ) : (
            <ul className="space-y-2">
              {history.map((item, index) => (
                <li
                  key={index}
                  className="p-3 border rounded-lg flex justify-between"
                >
                  <span>{item.date}</span>
                  <span className="font-semibold">{item.status}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
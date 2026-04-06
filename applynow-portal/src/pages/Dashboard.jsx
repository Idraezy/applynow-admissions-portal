import { useEffect, useState } from "react";

function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [history, setHistory] = useState([]);
  const [selected, setSelected] = useState(null); 

  const status = localStorage.getItem("status") || "Pending";

  useEffect(() => {
    setTimeout(() => {
      const savedData = localStorage.getItem("application");
      const savedHistory =
        JSON.parse(localStorage.getItem("history")) || [];

      if (savedData) setData(JSON.parse(savedData));
      setHistory(savedHistory);

      setLoading(false);
    }, 1000);
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
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto space-y-6">

        {/* HEADER */}
        <div className="bg-white p-6 rounded-2xl shadow flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">Dashboard</h2>
            <p className="text-gray-500">Welcome back👋</p>
          </div>

          <span
            className={`px-4 py-2 rounded-full text-sm font-semibold ${statusColor[status]}`}
          >
            {status}
          </span>
        </div>

        {/* CURRENT APPLICATION */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-lg font-semibold mb-4">
            Current Application
          </h3>

          <div className="grid grid-cols-2 gap-4 text-gray-700">
            <p><strong>Name:</strong> {data.name}</p>
            <p><strong>Email:</strong> {data.email}</p>
            <p><strong>School:</strong> {data.school}</p>
            <p><strong>GPA:</strong> {data.gpa}</p>
            <p><strong>Parent:</strong> {data.parent}</p>
          </div>
        </div>

        {/* HISTORY */}
        <div className="grid md:grid-cols-2 gap-6">

          
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-lg font-semibold mb-4">
              Application History
            </h3>

            {history.length === 0 ? (
              <p className="text-gray-500">
                No previous applications yet.
              </p>
            ) : (
              <ul className="space-y-3">
                {history.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => setSelected(item)} // ✅ CLICK
                    className="p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition flex justify-between"
                  >
                    <span className="text-sm text-gray-500">
                      {item.date}
                    </span>

                    <span
                      className={`text-sm font-semibold px-2 py-1 rounded ${statusColor[item.status]}`}
                    >
                      {item.status}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* SELECTED DETAILS */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-lg font-semibold mb-4">
              {selected ? "Selected Application" : "Click a history item"}
            </h3>

            {selected ? (
              <div className="space-y-2 text-gray-700">
                <p><strong>Name:</strong> {selected.name}</p>
                <p><strong>Email:</strong> {selected.email}</p>
                <p><strong>School:</strong> {selected.school}</p>
                <p><strong>GPA:</strong> {selected.gpa}</p>
                <p><strong>Parent:</strong> {selected.parent}</p>
                <p>
                  <strong>Status:</strong>{" "}
                  <span className="font-semibold">
                    {selected.status}
                  </span>
                </p>
                <p className="text-sm text-gray-400">
                  {selected.date}
                </p>
              </div>
            ) : (
              <p className="text-gray-500">
                Select a history item to view details
              </p>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;
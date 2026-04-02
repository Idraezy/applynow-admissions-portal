import { useEffect, useState } from "react";

function Dashboard() {
  const [data, setData] = useState(null);
  const status = localStorage.getItem("status") || "Pending";

  useEffect(() => {
    const savedData = localStorage.getItem("application");
    if (savedData) setData(JSON.parse(savedData));
  }, []);

  if (!data)
    return <h2 className="text-center mt-10">No Application Found</h2>;


  const statusColor = {
    Approved: "text-green-600",
    Rejected: "text-red-600",
    "Likely Approved": "text-blue-600",
    Pending: "text-yellow-600",
  }[status];

  return (
    <div className="p-6">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>

        <p className="mb-3">
          <strong>Status:</strong>{" "}
          <span className={`${statusColor} font-bold`}>{status}</span>
        </p>

        <p>Name: {data.name}</p>
        <p>Email: {data.email}</p>
        <p>School: {data.school}</p>
        <p>GPA: {data.gpa}</p>
        <p>Parent: {data.parent}</p>
      </div>
    </div>
  );
}

export default Dashboard;
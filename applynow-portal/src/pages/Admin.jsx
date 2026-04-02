import { useEffect, useState } from "react";

function Admin() {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("Pending");

  useEffect(() => {
    const savedData = localStorage.getItem("application");
    if (savedData) {
      const parsed = JSON.parse(savedData);
      setData(parsed);

      // 🤖 AI Logic for Likely Approved
      if (parsed.gpa > 3.5 && status === "Pending") {
        setStatus("Likely Approved");
        localStorage.setItem("status", "Likely Approved");
      }
    }

    const savedStatus = localStorage.getItem("status");
    if (savedStatus) setStatus(savedStatus);
  }, []);

  const handleApprove = () => {
    setStatus("Approved");
    localStorage.setItem("status", "Approved");
  };

  const handleReject = () => {
    setStatus("Rejected");
    localStorage.setItem("status", "Rejected");
  };

  if (!data)
    return <h2 className="text-center mt-10">No Application Found</h2>;

  // Map status to Tailwind color classes
  const statusColor = {
    Approved: "text-green-600",
    Rejected: "text-red-600",
    "Likely Approved": "text-blue-600",
    Pending: "text-yellow-600",
  }[status];

  return (
    <div className="p-6">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-xl font-bold mb-4">Admin Panel</h2>

        <p className="mb-3">
          <strong>Status:</strong>{" "}
          <span className={`${statusColor} font-bold`}>{status}</span>
        </p>

        <p>Name: {data.name}</p>
        <p>Email: {data.email}</p>
        <p>School: {data.school}</p>
        <p>GPA: {data.gpa}</p>

        <div className="flex gap-3 mt-4">
          <button
            onClick={handleApprove}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Approve
          </button>

          <button
            onClick={handleReject}
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}

export default Admin;
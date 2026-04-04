import { useEffect, useState } from "react";

function Admin() {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("Pending");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const savedData = localStorage.getItem("application");
      const savedStatus = localStorage.getItem("status");

      if (savedData) {
        const parsed = JSON.parse(savedData);
        setData(parsed);

      
        if (!savedStatus && parsed.gpa > 3.5) {
          setStatus("Likely Approved");
          localStorage.setItem("status", "Likely Approved");
        }
      }

      if (savedStatus) setStatus(savedStatus);

      setLoading(false);
    }, 800);
  }, []);

  const updateHistoryStatus = (newStatus) => {
  const history = JSON.parse(localStorage.getItem("history")) || [];

  // Update the most recent entry's status
  if (history.length > 0) {
    history[history.length - 1].status = newStatus;
    localStorage.setItem("history", JSON.stringify(history));
  }
};

const handleApprove = () => {
  setStatus("Approved");
  localStorage.setItem("status", "Approved");

  updateHistoryStatus("Approved"); 
};

const handleReject = () => {
  setStatus("Rejected");
  localStorage.setItem("status", "Rejected");

  updateHistoryStatus("Rejected"); 
};

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold animate-pulse">
          Loading Admin Panel...
        </p>
      </div>
    );
  }

  if (!data) {
    return (
      <h2 className="text-center mt-10 text-gray-600">
        No Application Found
      </h2>
    );
  }

  
  const statusColor = {
    Approved: "bg-green-100 text-green-700",
    Rejected: "bg-red-100 text-red-700",
    "Likely Approved": "bg-blue-100 text-blue-700",
    Pending: "bg-yellow-100 text-yellow-700",
  }[status];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto space-y-6">

        {/* HEADER */}
        <div className="bg-white p-6 rounded-2xl shadow flex justify-between items-center">
          <h2 className="text-2xl font-bold">Admin Panel</h2>

          <span className={`px-4 py-2 rounded-full text-sm font-semibold ${statusColor}`}>
            {status}
          </span>
        </div>

        {/* USER INFO */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-lg font-semibold mb-4">
            Applicant Details
          </h3>

          <div className="grid grid-cols-2 gap-4 text-gray-700">
            <p><strong>Name:</strong> {data.name}</p>
            <p><strong>Email:</strong> {data.email}</p>
            <p><strong>School:</strong> {data.school}</p>
            <p><strong>GPA:</strong> {data.gpa}</p>
          </div>
        </div>

        
        <div className="bg-white p-6 rounded-2xl shadow flex gap-4">
          <button
            onClick={handleApprove}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition"
          >
            Approve
          </button>

          <button
            onClick={handleReject}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition"
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}

export default Admin;
import { useEffect, useState } from "react";

function Admin() {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("Pending");

  useEffect(() => {
    const savedData = localStorage.getItem("application");
    const savedStatus = localStorage.getItem("status");

    if (savedData) {
      setData(JSON.parse(savedData));
    }

    if (savedStatus) {
      setStatus(savedStatus);
    }
  }, []);

  const handleApprove = () => {
    localStorage.setItem("status", "Approved");
    setStatus("Approved");
  };

  const handleReject = () => {
    localStorage.setItem("status", "Rejected");
    setStatus("Rejected");
  };

  if (!data) {
    return <h2>No Application Found</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Admin Panel</h2>

      <p><strong>Current Status:</strong> {status}</p>

      <h3>Applicant Info</h3>
      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>
      <p>School: {data.school}</p>
      <p>GPA: {data.gpa}</p>
      <p>Parent: {data.parent}</p>

      <br />

      <button onClick={handleApprove} style={{ marginRight: "10px" }}>
        Approve
      </button>

      <button onClick={handleReject}>
        Reject
      </button>
    </div>
  );
}

export default Admin;
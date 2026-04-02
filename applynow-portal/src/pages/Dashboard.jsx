import { useEffect, useState } from "react";

function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const savedData = localStorage.getItem("application");
    if (savedData) {
      setData(JSON.parse(savedData));
    }
  }, []);

  if (!data) {
    return <h2>No Application Submitted Yet</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Application Dashboard</h2>

      <p><strong>Status:</strong> Pending</p>

      <h3>Personal Info</h3>
      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>

      <h3>Academic Info</h3>
      <p>School: {data.school}</p>
      <p>GPA: {data.gpa}</p>

      <h3>Guardian Info</h3>
      <p>Parent: {data.parent}</p>
    </div>
  );
}

export default Dashboard;
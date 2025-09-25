import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const userParam = urlParams.get("user");
    if (userParam) {
      setUser(JSON.parse(decodeURIComponent(userParam)));
    }
  }, []);

  const handleLogout = () => {
    window.location.href = "http://localhost:5000/logout";
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome, {user.displayName || user.username}!</h1>
      <p>Email: {user.emails ? user.emails[0].value : "N/A"}</p>
      <button
        onClick={handleLogout}
        style={{ margin: "10px", padding: "10px 20px" }}
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;

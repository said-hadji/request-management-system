import { useState } from "react";
import UserLayout from "./features/user/UserLayout";
import AdminLayout from "./features/admin/AdminLayout";
import Login from "./features/auth/Login";

function App() {
  const stored = localStorage.getItem("isAdmin");
  const [admin, setAdmin] = useState(stored ? JSON.parse(stored) : null);
  const [requests, setRequests] = useState(
    JSON.parse(localStorage.getItem("requests")) || [],
  );

  return (
    <div className="w-full h-screen lg:h-screen">
      {admin === null && <Login setAdmin={setAdmin} />}
      {admin === true && <AdminLayout admin={admin} setAdmin={setAdmin} requests={requests} setRequests={setRequests} />}
      {admin === false && <UserLayout admin={admin} setAdmin={setAdmin} setRequests={setRequests} />}
    </div>
  );
}

export default App;

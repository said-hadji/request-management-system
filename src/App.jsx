import { useState } from "react";
import UserLayout from "./features/user/UserLayout";
import AdminLayout from "./features/admin/AdminLayout";
import Login from "./features/auth/Login";

function App() {
  const stored = localStorage.getItem("isAdmin");
  const [isAdmin, setIsAdmin] = useState(stored ? JSON.parse(stored) : null);
  const [requests, setRequests] = useState(
    JSON.parse(localStorage.getItem("requests")) || [],
  );

  const [isSidebar, setIsSidebar] = useState(false);

  return (
    <div className="w-full h-screen lg:h-screen">
      {isAdmin === null && <Login setIsAdmin={setIsAdmin} />}
      {isAdmin === true && (
        <AdminLayout
          isSidebar={isSidebar}
          setIsSidebar={setIsSidebar}
          isAdmin={isAdmin}
          setIsAdmin={setIsAdmin}
          requests={requests}
          setRequests={setRequests}
        />
      )}
      {isAdmin === false && (
        <UserLayout
          isSidebar={isSidebar}
          setIsSidebar={setIsSidebar}
          isAdmin={isAdmin}
          setIsAdmin={setIsAdmin}
          setRequests={setRequests}
        />
      )}
    </div>
  );
}

export default App;

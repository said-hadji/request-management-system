import { useState, useEffect } from "react";

import Sidebar from "../../Components/Sidebar";
import Requests from "./LoanRequests";
import Dashboard from "./Dashboard/Dashboard";
import SideDrawer from "./Dashboard/Components/SideDrawer";

export default function AdminLayout({ admin, setAdmin, requests, setRequests }) {
  const [section, setSection] = useState(() => {
    const old = localStorage.getItem("section") || "dashboard";
    const redirectToDashboard = ["welcome", "requestALoan"];
    return redirectToDashboard.includes(old) ? "dashboard" : old || "dashboard";
  });
  const [selectedRequest, setSelectedRequest] = useState(null);

  useEffect(() => {
    localStorage.setItem("section", section);
  }, [section]);

  return (
    <div className="w-full h-full flex">
      <Sidebar
        admin={admin}
        section={section}
        setSection={setSection}
        setAdmin={setAdmin}
      />
      {section === "dashboard" && (
        <Dashboard
          requests={requests}
          setSelectedRequest={setSelectedRequest}
        />
      )}
      {selectedRequest && (
        <SideDrawer
          requests={requests}
          setRequests={setRequests}
          selectedRequest={selectedRequest}
          setSelectedRequest={setSelectedRequest}
        />
      )}
    </div>
  );
}

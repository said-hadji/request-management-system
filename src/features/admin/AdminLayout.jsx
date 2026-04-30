import { useState, useEffect } from "react";

import Sidebar from "../../components/Sidebar";
import Dashboard from "./Dashboard/Dashboard";
import RequestDetailsModal from "./Dashboard/components/RequestDetailsModal";

import { Menu } from "lucide-react";

export default function AdminLayout({
  isSidebar,
  setIsSidebar,
  isAdmin,
  setIsAdmin,
  requests,
  setRequests,
}) {
  const [section, setSection] = useState("dashboard");
  const [selectedRequest, setSelectedRequest] = useState(null);

  useEffect(() => {
    localStorage.setItem("section", section);
  }, [section]);

  return (
    <div className="w-full h-full flex flex-col lg:flex-row lg:gap-6 lg:py-10">
      <Sidebar
        isSidebar={isSidebar}
        setIsSidebar={setIsSidebar}
        isAdmin={isAdmin}
        section={section}
        setSection={setSection}
        setIsAdmin={setIsAdmin}
      />
      <Menu
        onClick={() => setIsSidebar(true)}
        className={`m-4 mt-4.5 lg:hidden`}
      />
      <Dashboard requests={requests} setSelectedRequest={setSelectedRequest} />
      {selectedRequest && (
        <RequestDetailsModal
          requests={requests}
          setRequests={setRequests}
          selectedRequest={selectedRequest}
          setSelectedRequest={setSelectedRequest}
        />
      )}
    </div>
  );
}

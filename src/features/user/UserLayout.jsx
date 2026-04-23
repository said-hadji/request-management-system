import { useState, useEffect } from "react";

import Welcome from "./Welcome";
import LoanRequestFlow from "./loan/LoanRequestFlow";
import Sidebar from "../../Components/Sidebar";
import { Menu } from "lucide-react";

export default function UserLayout({ isSidebar, setIsSidebar, admin, setAdmin, setRequests }) {
  const [section, setSection] = useState(() => {
    const old = localStorage.getItem("section") || "welcome";
    return old === "dashboard" ? "welcome" : old;
  });

  console.log(isSidebar)

  useEffect(() => {
    localStorage.setItem("section", section);
  }, [section]);

  return (
    <div className="w-full min-h-screen lg:h-full flex flex-col lg:gap-10 p-4 lg:p-10">
      <Sidebar
        isSidebar={isSidebar}
        setIsSidebar={setIsSidebar}
        admin={admin}
        section={section}
        setSection={setSection}
        setAdmin={setAdmin}
      />
      <Menu onClick={() => setIsSidebar(true)} className="m-1 lg:hidden"/>
      {section === "welcome" && <Welcome />}
      {section === "requestALoan" && (
        <LoanRequestFlow setRequests={setRequests} />
      )}
    </div>
  );
}

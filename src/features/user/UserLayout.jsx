import { useState, useEffect } from "react";

import Welcome from "./Welcome";
import LoanRequestFlow from "./loan/LoanRequestFlow";
import Sidebar from "../../Components/Sidebar";
import { Menu } from "lucide-react";

export default function UserLayout({ admin, setAdmin, setRequests }) {
  const [section, setSection] = useState(() => {
    const old = localStorage.getItem("section") || "welcome";
    return old === "dashboard" ? "welcome" : old;
  });
  const [isSideBar, setIsSideBar] = useState(false);

  useEffect(() => {
    localStorage.setItem("section", section);
  }, [section]);

  return (
    <div className="w-full min-h-screen lg:h-full flex flex-col lg:gap-10 p-4 lg:p-10">
      <Sidebar
        isSideBar={isSideBar}
        setIsSideBar={setIsSideBar}
        admin={admin}
        section={section}
        setSection={setSection}
        setAdmin={setAdmin}
      />
      <Menu onClick={() => setIsSideBar(true)} className="m-1 lg:hidden"/>
      {section === "welcome" && <Welcome />}
      {section === "requestALoan" && (
        <LoanRequestFlow setRequests={setRequests} />
      )}
    </div>
  );
}

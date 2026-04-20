import { useState, useEffect } from "react";

import Welcome from "./Welcome";
import LoanRequestFlow from "./loan/LoanRequestFlow";
import Sidebar from "../../Components/Sidebar";

export default function UserLayout({ admin, setAdmin, setRequests }) {
  const [section, setSection] = useState(() => {
    const old = localStorage.getItem("section") || "welcome";
    return old === "dashboard" ? "welcome" : old;
  });

  useEffect(() => {
    localStorage.setItem("section", section);
  }, [section]);

  return (
    <div className="w-full h-full flex gap-6 p-10">
      <Sidebar
        admin={admin}
        section={section}
        setSection={setSection}
        setAdmin={setAdmin}
      />
      {section === "welcome" && <Welcome />}
      {section === "requestALoan" && <LoanRequestFlow setRequests={setRequests} />}
    </div>
  );
}

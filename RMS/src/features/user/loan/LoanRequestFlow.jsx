import { useState } from "react";
import LoanForm from "./Components/LoanForm";
import LoanSuccess from "./Components/LoanSuccess";

export default function LoanRequestFlow({ setRequests }) {
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <div className="flex-1">
      {!isSuccess && <LoanForm setIsSuccess={setIsSuccess} setRequests={setRequests} />}
      {isSuccess && <LoanSuccess />}
    </div>
  );
}

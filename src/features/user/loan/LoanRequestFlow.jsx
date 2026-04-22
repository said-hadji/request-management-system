import { useState } from "react";
import LoanForm from "./Components/LoanForm";
import LoanSuccess from "./Components/LoanSuccess";

export default function LoanRequestFlow({ setRequests }) {
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <div className="lg:ml-90 flex-1 flex">
      {!isSuccess && <LoanForm setIsSuccess={setIsSuccess} setRequests={setRequests} />}
      {isSuccess && <LoanSuccess />}
    </div>
  );
}

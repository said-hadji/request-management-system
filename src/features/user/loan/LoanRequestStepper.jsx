import { useState } from "react";
import LoanForm from "./components/LoanForm";
import LoanSuccessMessage from "./components/LoanSuccessMessage";

export default function LoanRequestStepper({ setRequests }) {
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <div className="lg:ml-90 flex-1 flex">
      {!isSuccess && <LoanForm setIsSuccess={setIsSuccess} setRequests={setRequests} />}
      {isSuccess && <LoanSuccessMessage />}
    </div>
  );
}

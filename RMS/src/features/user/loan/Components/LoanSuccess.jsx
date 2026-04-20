export default function LoanSuccess() {
  return (
    <div className="flex-1 h-full flex justify-center items-center">
      <div className="flex flex-col items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="200"
          viewBox="0 0 64 64"
          fill="none"
        >
          {/* <circle cx="32" cy="32" r="30" stroke="#4CAF50" stroke-width="4" /> */}

          <circle cx="32" cy="32" r="28" fill="#030712" />

          <path
            d="M20 34 L28 42 L44 26"
            stroke="#4CAF50"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <h2 className="text-4xl text-center text-gray-950 font-bold leading-12">
          Loan has been submitted{" "}
          <label className="text-green-500">successfully</label>
        </h2>
      </div>
    </div>
  );
}

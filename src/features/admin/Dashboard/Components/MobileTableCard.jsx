export default function MobileTableCard({ request, setSelectedRequest }) {
  const statusStyles = {
    pending:  "border-yellow-400 bg-yellow-50",
    accepted: "border-green-400 bg-green-50",
    rejected: "border-red-400 bg-red-50",
  };

  const style = statusStyles[request.status] || "border-slate-300 bg-slate-50";

  return (
    <div
      onClick={() => setSelectedRequest(request)}
      className={`w-full sm:w-lg rounded-2xl p-4 flex flex-col gap-1 border-l-4 cursor-pointer ${style}`}
    >
      <span className="font-semibold text-lg">{request.firstName} {request.lastName}</span>
      <span className="text-sm text-gray-500">Age: {request.age}</span>
      <span className="text-sm text-gray-500 truncate">Email: {request.email}</span>
      <span className="text-sm text-gray-500">Salary: {request.salary}</span>
      <span className="text-sm text-gray-500">Amount: {request.amount} USD</span>
      <span className={`text-sm font-medium mt-1 capitalize`}>Status: {request.status}</span>
    </div>
  );
}
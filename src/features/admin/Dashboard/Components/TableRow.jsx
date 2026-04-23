export default function TableRow({ request, setSelectedRequest }) {
  const statusStyles = {
    pending: {
      hover: "hover:bg-yellow-200",
      bg: "bg-yellow-200",
    },
    accepted: {
      hover: "hover:bg-green-200",
      bg: "bg-green-200",
    },
    rejected: {
      hover: "hover:bg-red-200",
      bg: "bg-red-200",
    },
  };

  const currentStyle = statusStyles[request.status] || {
    hover: "hover:bg-slate-100",
    bg: "bg-slate-100",
  };

  return (
    <div
      onClick={() => {
        setSelectedRequest(request);
      }}
      className={`w-full grid grid-cols-7 ${currentStyle.hover} border-t border-mauve-300 cursor-pointer`}
    >
      <span className="border-r border-mauve-300 p-4">{request.firstName}</span>
      <span className="border-r border-mauve-300 p-4">{request.lastName}</span>
      <span className="border-r border-mauve-300 p-4">{request.age}</span>
      <span className="truncate border-r border-mauve-300 p-4">
        {request.email}
      </span>
      <span className="truncate border-r border-mauve-300 p-4">
        {request.salary}
      </span>
      <span className="truncate border-r border-mauve-300 p-4">
        {request.amount} USD
      </span>
      <span className={`${currentStyle.bg} p-4`}>
        {request.status}
      </span>
    </div>
  );
}

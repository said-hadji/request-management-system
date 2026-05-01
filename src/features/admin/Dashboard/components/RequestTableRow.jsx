const TABLE_COLUMNS = [
  { key: "firstName" },
  { key: "lastName" },
  { key: "age" },
  { key: "email" },
  { key: "salary" },
  { key: "amount" },
  { key: "status" },
];

const STATUS_STYLE = {
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

export default function RequestTableRow({ request, setSelectedRequest }) {
  const currentStyle = STATUS_STYLE[request.status] || {
    hover: "hover:bg-slate-100",
    bg: "bg-slate-100",
  };

  const renderRequestCells = (request) => {
    return TABLE_COLUMNS.map((col) => {
      const value = request[col.key];

      return col.key !== "status" ? (
        <span key={col.key} className="border-r border-mauve-300 p-4 truncate">
          {value}
        </span>
      ) : (
        <span key={col.key} className={`${currentStyle.bg} p-4`}>
          {value}
        </span>
      );
    });
  };

  return (
    <div
      onClick={() => setSelectedRequest(request)}
      className={`w-full grid grid-cols-7 ${currentStyle.hover} border-t border-mauve-300 cursor-pointer`}
    >
      {renderRequestCells(request)}
    </div>
  );
}

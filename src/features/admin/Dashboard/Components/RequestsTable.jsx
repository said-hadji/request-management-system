import RequestTableRow from "./RequestTableRow";

const TABLE_COLUMNS = [
  { title: "First Name" },
  { title: "Last Name" },
  { title: "Age" },
  { title: "Email" },
  { title: "Salary" },
  { title: "Amount" },
  { title: "Status" },
];

export default function RequestsTable({ requests, setSelectedRequest }) {
  return (
    <div className="h-fit border border-mauve-300 rounded-2xl overflow-y-scroll">
      <header className="sticky top-0 w-full bg-mauve-950 grid grid-cols-7">
        {TABLE_COLUMNS.map((i) => (
          <div key={i.title} className="border-r border-mauve-700 p-4">
            <h2 className="text-white truncate">{i.title}</h2>
          </div>
        ))}
      </header>

      {requests.map((request) => (
        <RequestTableRow
          key={request.id}
          request={request}
          setSelectedRequest={setSelectedRequest}
        />
      ))}
    </div>
  );
}

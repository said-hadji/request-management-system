import TableRow from "./TableRow";

export default function Table({ requests, setSelectedRequest }) {
  return (
    <div className="w-full h-fit border border-mauve-300 rounded-2xl overflow-y-scroll">
      <header className="sticky inset-0 w-full bg-mauve-950 grid grid-cols-7">
        <div className="border-r border-mauve-700 p-4">
          <h2 className="text-white">First name</h2>
        </div>

        <div className="border-r border-mauve-700 p-4">
          <h2 className="text-white">Last name</h2>
        </div>

        <div className="border-r border-mauve-700 p-4">
          <h2 className="text-white">age</h2>
        </div>

        <div className="border-r border-mauve-700 p-4">
          <h2 className="text-white">Email</h2>
        </div>

        <div className="border-r border-mauve-700 p-4">
          <h2 className="text-white">Salary</h2>
        </div>

        <div className="border-r border-mauve-700 p-4">
          <h2 className="text-white">Amount</h2>
        </div>

        <div className="border-r border-mauve-700 p-4">
          <h2 className="text-white">Status</h2>
        </div>
      </header>

      {requests.map((request) => {
        return <TableRow request={request} setSelectedRequest={setSelectedRequest} />;
      })}
    </div>
  );
}

import { X } from "lucide-react";

export default function SideDrawer({
  selectedRequest,
  setSelectedRequest,
  requests,
  setRequests,
}) {
  const closeSideDrawer = () => setSelectedRequest(null);

  const updateStatus = (status) => {
    const newUpdate = requests.map((r) =>
      r.id === selectedRequest.id ? { ...r, status } : r,
    );
    setRequests(newUpdate);
    localStorage.setItem("requests", JSON.stringify(newUpdate));
    closeSideDrawer();
  };

  const statusStyle = {
    pending: "bg-yellow-200",
    accepted: "bg-green-200",
    rejected: "bg-red-200",
  };

  return (
    <div
      onClick={closeSideDrawer}
      className="fixed top-0 left-0 w-full h-screen bg-black/50 flex justify-center items-center p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-lg bg-white p-4 rounded-2xl"
      >
        <div className="flex justify-between items-center">
          <h1>ID: {selectedRequest.id}</h1>
          <button
            onClick={closeSideDrawer}
            className="hover:bg-slate-100 p-2 rounded-full cursor-pointer"
          >
            <X size={22} />
          </button>
        </div>

        <hr className="text-slate-200 mt-4" />

        <div className="flex flex-col gap-2 mt-8">
          <span>
            First name: <span>{selectedRequest.firstName}</span>
          </span>
          <span>
            Last name: <span>{selectedRequest.lastName}</span>
          </span>
          <span>
            Age: <span>{selectedRequest.age}</span>
          </span>
          <span>
            Email: <span>{selectedRequest.email}</span>
          </span>
          <span>
            Salary: <span>{selectedRequest.salary}</span>
          </span>
          <span>
            Amount: <span>{selectedRequest.amount}</span>
          </span>
          <span>
            Status:{" "}
            <span
              className={`${statusStyle[selectedRequest.status]} px-3 py-1 rounded-md`}
            >
              {selectedRequest.status}
            </span>
          </span>
        </div>

        <div className="flex gap-2 mt-8">
          <button
            onClick={() => {
              updateStatus("accepted");
            }}
            disabled={selectedRequest.status !== "pending"}
            style={{
              boxShadow:
                selectedRequest.status === "pending"
                  ? "0px 0px 8px 5px #a1f3be"
                  : "",
            }}
            className="flex-1 py-4 bg-[#1bb454] hover:bg-green-600 duration-300 disabled:bg-gray-100 rounded-2xl text-white disabled:text-gray-300 font-medium cursor-pointer disabled:cursor-not-allowed"
          >
            Accept
          </button>
          <button
            onClick={() => {
              updateStatus("rejected");
            }}
            disabled={selectedRequest.status !== "pending"}
            className="flex-1 py-4 bg-red-500 hover:bg-red-600 duration-300 disabled:bg-gray-100 rounded-2xl text-white disabled:text-gray-300 font-medium cursor-pointer disabled:cursor-not-allowed"
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}

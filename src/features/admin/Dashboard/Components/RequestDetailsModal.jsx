import { X } from "lucide-react";

const REQUEST_DETAILS_FIELDS = [
  { id: 1, title: "First Name", key: "firstName" },
  { id: 2, title: "Last Name", key: "lastName" },
  { id: 3, title: "Age", key: "age" },
  { id: 4, title: "Email", key: "email" },
  { id: 5, title: "Salary", key: "salary" },
  { id: 6, title: "Amount", key: "amount" },
  { id: 7, title: "Status", key: "status" },
];

const BUTTONS = [
  { id: 1, title: "Accept", type: "accepted" },
  { id: 2, title: "Reject", type: "rejected" },
];

const STATUS_STYLE = {
    pending: "bg-yellow-200",
    accepted: "bg-green-200",
    rejected: "bg-red-200",
  };

export default function RequestDetailsModal({
  selectedRequest,
  setSelectedRequest,
  requests,
  setRequests,
}) {
  if (!selectedRequest) return null;
  const closeSideDrawer = () => setSelectedRequest(null);

  const updateStatus = (status) => {
    const newUpdate = requests.map((r) =>
      r.id === selectedRequest.id ? { ...r, status } : r,
    );
    setRequests(newUpdate);
    localStorage.setItem("requests", JSON.stringify(newUpdate));
    closeSideDrawer();
  };

  

  return (
    <div
      onClick={closeSideDrawer}
      className="fixed top-0 left-0 z-100 w-full h-screen bg-black/50 backdrop-blur-sm flex justify-center items-center p-6"
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
          {REQUEST_DETAILS_FIELDS.map((i) => (
            <div key={i.id}>
              <span>{i.title}: </span>
              <span
                className={`${i.key === "status" ? `${STATUS_STYLE[selectedRequest.status] || "bg-gray-200"} px-3 py-1 rounded-md` : ""}`}
              >
                {selectedRequest[i.key] || "-"}
              </span>
            </div>
          ))}
        </div>

        <div className="flex gap-2 mt-8">
          {BUTTONS.map((button) => {
            const isAccept = button.type === "accepted";
            return (
              <button
                key={button.id}
                onClick={() => updateStatus(button.type)}
                disabled={selectedRequest.status !== "pending"}
                style={{
                  boxShadow:
                    isAccept && selectedRequest.status === "pending"
                      ? "0px 0px 8px 5px #a1f3be"
                      : "",
                }}
                className={`flex-1 py-4 ${isAccept ? "bg-[#1bb454] hover:bg-green-600" : "bg-red-500 hover:bg-red-600"} duration-300 disabled:bg-gray-100 rounded-2xl text-white disabled:text-gray-300 font-medium cursor-pointer disabled:cursor-not-allowed`}
              >
                {button.title}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

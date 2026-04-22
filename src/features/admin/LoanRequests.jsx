import { useState } from "react";

export default function LoanRequests() {
  const [hovered, setHovered] = useState(null);

  const key = (requestIndex, buttonId) => `${requestIndex}-${buttonId}`;

  const isHovered = (requestIndex, buttonId) =>
    hovered === `${requestIndex}-${buttonId}`;

  const isSameRequestHovered = (requestIndex) =>
    hovered && hovered.startsWith(`${requestIndex}-`);

  const requests = JSON.parse(localStorage.getItem("requests"));
  const buttons = [
    { id: 1, title: "Reject" },
    { id: 2, title: "Accept" },
  ];

  function changeStatus(requestId, buttonId) {
    const findingRequest = requests.find((request) => request.id === requestId);
    findingRequest.status = buttonId === 1 ? "reject" : "accept";
    localStorage.setItem("requests", JSON.stringify(requests));
  }

  const hasPendingRequests = requests?.some((r) => r.status === "pending");

  return (
    <div className="flex-1 h-full flex flex-col gap-14 p-4">
      <div>
        <h1 className="text-4xl font-bold">Requests</h1>
      </div>

      <div className="relative w-full flex-1 bg-gray-100 border border-gray-300 rounded-3xl flex flex-col gap-4 p-4 overflow-y-scroll">
        {!hasPendingRequests && (
          <span className="absolute top-[50%] -translate-y-1/2 left-[50%] -translate-x-1/2 text-black/60 text-lg font-medium">
            No pending requests
          </span>
        )}
        {requests &&
          requests
            .filter((request) => request.status === "pending")
            .map((request) => {
              return (
                <div
                  key={request.id}
                  className="w-full bg-white rounded-xl flex flex-col gap-4 p-4 hover:shadow-sm"
                >
                  <div className="flex justify-between gap-4">
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-2">
                        <h2 className="bg-gray-100 rounded-lg px-3 py-1">
                          First name
                        </h2>
                        <label>{request.firstName}</label>
                      </div>
                      <div className="flex items-center gap-2">
                        <h2 className="bg-gray-100 rounded-lg px-3 py-1">
                          Last name
                        </h2>
                        <label>{request.lastName}</label>
                      </div>
                      <div className="flex items-center gap-2">
                        <h2 className="bg-gray-100 rounded-lg px-3 py-1">
                          Age
                        </h2>
                        <label>{request.age}</label>
                      </div>
                      <div className="flex items-center gap-2">
                        <h2 className="bg-gray-100 rounded-lg px-3 py-1">
                          Email
                        </h2>
                        <label>{request.email}</label>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex flex-col gap-2">
                        <div className="flex-1 bg-gray-950 rounded-xl p-4">
                          {request.isEmployee && (
                            <div className="text-white">
                              <h2>Employee?</h2>
                              <label>Yes</label>
                            </div>
                          )}
                        </div>

                        <div className="flex-1 bg-gray-950 rounded-xl p-4">
                          <div className="text-white">
                            <h2>Salary?</h2>
                            <label>{request.salary}</label>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <div className="flex-1 bg-gray-950 rounded-xl p-4">
                          <div className="text-white">
                            <h2>Amount?</h2>
                            <label>{request.amount}</label>
                          </div>
                        </div>
                        <div className="flex-1 flex rounded-xl overflow-hidden">
                          {buttons.map((button) => {
                            return (
                              <button
                                onMouseEnter={() =>
                                  setHovered(key(request.id, button.id))
                                }
                                onMouseLeave={() => setHovered(null)}
                                onClick={() =>
                                  changeStatus(request.id, button.id)
                                }
                                key={button.id}
                                className={`
                                ${
                                  isHovered(request.id, button.id)
                                    ? "w-full px-4"
                                    : isSameRequestHovered(request.id)
                                      ? "w-0 px-0"
                                      : "w-1/2 px-4"
                                }
                                ${button.id === 1 ? "bg-red-500" : "bg-green-500"}
                                  text-white font-medium duration-150 cursor-pointer overflow-hidden
                              `}
                              >
                                <span>{button.title}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
}

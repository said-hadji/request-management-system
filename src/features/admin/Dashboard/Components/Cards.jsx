import {
  ChartBarBig,
  ClipboardClock,
  SquareCheckBig,
  SquareX,
  TrendingUp,
  TrendingDown,
} from "lucide-react";
// import { useState } from "react";

export default function Cards({ requests, selectedCard, setSelectedCard }) {
  const totalRequests = requests.length;
  const totalPendingRequests = requests.filter(
    (r) => r.status === "pending",
  ).length;
  const totalAcceptedRequests = requests.filter(
    (r) => r.status === "accepted",
  ).length;
  const totalRejectedRequests = requests.filter(
    (r) => r.status === "rejected",
  ).length;

  return (
    <div className="w-full px-4 py-4 flex xl:grid xl:grid-cols-4 gap-4 overflow-x-scroll xl:overflow-visible">
      <button
        onClick={() => setSelectedCard("total")}
        style={{boxShadow: selectedCard === "total" ? "0px 2px 1px 1px #62748e" : ""}}
        className={`text-start min-w-75 xl:min-w-full bg-linear-to-tr from-slate-50 via-slate-300 to-slate-500 rounded-2xl p-4 space-y-6 cursor-pointer shrink-0 xl:shrink`}
      >
        <div className="flex items-center gap-2">
          <span>
            <ChartBarBig className="text-slate-700" />
          </span>
          <h2 className="text-lg font-medium">Total Requests</h2>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-5xl font-medium">{totalRequests}</span>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <TrendingUp className="text-green-500" />
              <span className="text-green-500 text-sm">+12%</span>
            </div>
            <span className="text-black/90 text-sm">from last week</span>
          </div>
        </div>
      </button>

      <button
        onClick={() => setSelectedCard("pending")}
        style={{boxShadow: selectedCard === "pending" ? "0px 2px 1px 1px #ffdf20" : ""}}
        className={`text-start min-w-75 xl:min-w-full bg-linear-to-tr from-yellow-50 to-yellow-300 rounded-2xl p-4 space-y-6 cursor-pointer shrink-0 xl:shrink`}
      >
        <div className="flex items-center gap-2">
          <span>
            <ClipboardClock className="text-yellow-700" />
          </span>
          <h2 className="text-lg font-medium truncate">Total Pending Requests</h2>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-5xl font-medium">{totalPendingRequests}</span>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <TrendingUp className="text-green-500" />
              <span className="text-green-500 text-sm">+12%</span>
            </div>
            <span className="text-black/90 text-sm">from last week</span>
          </div>
        </div>
      </button>

      <button
        onClick={() => setSelectedCard("accepted")}
        style={{boxShadow: selectedCard === "accepted" ? "0px 2px 1px 1px #7bf1a8" : ""}}
        className={`text-start min-w-75 xl:min-w-full bg-linear-to-tr from-green-50 to-green-300 rounded-2xl p-4 space-y-6 cursor-pointer shrink-0 xl:shrink`}
      >
        <div className="flex items-center gap-2">
          <span>
            <SquareCheckBig className="text-green-700" />
          </span>
          <h2 className="text-lg font-medium truncate">Total Accepted Requests</h2>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-5xl font-medium">{totalAcceptedRequests}</span>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <TrendingDown className="text-red-500" />
              <span className="text-red-500 text-sm">-4.2%</span>
            </div>
            <span className="text-black/90 text-sm">from last week</span>
          </div>
        </div>
      </button>

      <button
        onClick={() => setSelectedCard("rejected")}
        style={{boxShadow: selectedCard === "rejected" ? "0px 2px 1px 1px #ffa2a2" : ""}}
        className={`text-start min-w-75 xl:min-w-full bg-linear-to-tr from-red-50 to-red-300 rounded-2xl p-4 space-y-6 cursor-pointer shrink-0 xl:shrink`}
      >
        <div className="flex items-center gap-2">
          <span>
            <SquareX className="text-red-700" />
          </span>
          <h2 className="text-lg font-medium truncate">Total Rejected Requests</h2>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-5xl font-medium">{totalRejectedRequests}</span>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <TrendingUp className="text-green-500" />
              <span className="text-green-500 text-sm">+6.4%</span>
            </div>
            <span className="text-black/90 text-sm">from last week</span>
          </div>
        </div>
      </button>
    </div>
  );
}

import { useEffect, useState } from "react";
import RequestsStatsCards from "./Components/RequestsStatsCards";
import Requests from "./Components/Requests";

export default function Dashboard({ requests, setSelectedRequest }) {
  const [selectedCard, setSelectedCard] = useState(
    () => localStorage.getItem("selectedCard") || "total",
  );

  useEffect(() => {
    localStorage.setItem("selectedCard", selectedCard);
  }, [selectedCard]);

  return (
    <div className="lg:ml-90 flex-1 h-full flex flex-col gap-10 mt-4 overflow-hidden">
      <div className="px-4">
        <h1 className="text-4xl font-bold">Dashboard</h1>
      </div>

      <div className="w-full min-h-0 flex-1 flex flex-col gap-4 mb-4">
        <RequestsStatsCards
          requests={requests}
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
        />
        <Requests
          requests={requests}
          selectedCard={selectedCard}
          setSelectedRequest={setSelectedRequest}
        />
      </div>
    </div>
  );
}

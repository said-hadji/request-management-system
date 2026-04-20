import { useEffect, useState } from "react";
import Cards from "./Components/Cards";
import Requests from "./Components/Requests";

export default function Dashboard({ requests, setSelectedRequest }) {
  const [selectedCard, setSelectedCard] = useState(() => {
    return localStorage.getItem("selectedCard") || "total";
  });

  useEffect(() => {
    localStorage.setItem("selectedCard", selectedCard);
  }, [selectedCard]);

  return (
    <div className="flex-1 h-full flex flex-col gap-14 p-4">
      <div>
        <h1 className="text-4xl font-bold">Dashboard</h1>
      </div>

      <div className="w-full min-h-0 flex-1 flex flex-col gap-4">
        <Cards
          requests={requests}
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
        />
        <Requests requests={requests} selectedCard={selectedCard} setSelectedRequest={setSelectedRequest} />
      </div>
    </div>
  );
}

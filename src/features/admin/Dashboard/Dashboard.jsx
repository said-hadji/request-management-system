import { useEffect, useState } from "react";
import RequestsStatsCards from "./components/RequestsStatsCards";
import Requests from "./components/Requests";
import SearchBar from "./components/SearchBar";

export default function Dashboard({ requests, setSelectedRequest }) {
  const [selectedCard, setSelectedCard] = useState(
    () => localStorage.getItem("selectedCard") || "total",
  );
  const [searchInputValue, setSearchInputValue] = useState("");

  useEffect(() => {
    localStorage.setItem("selectedCard", selectedCard);
  }, [selectedCard]);

  return (
    <div className="lg:ml-90 flex-1 h-full flex flex-col gap-6 sm:gap-10 mt-4 overflow-hidden">
      <div className="px-4 flex flex-col gap-6 sm:flex-row sm:gap-0 sm:justify-between sm:items-center">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <SearchBar
          searchInputValue={searchInputValue}
          setSearchInputValue={setSearchInputValue}
        />
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
          searchInputValue={searchInputValue}
          setSearchInputValue={setSearchInputValue}
        />
      </div>
    </div>
  );
}

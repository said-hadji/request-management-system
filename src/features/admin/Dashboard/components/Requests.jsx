import EmptyRequestsState from "../../../../components/EmptyRequestsState";
import RequestsTable from "./RequestsTable";
import useIsMobile from "../../../../Utils/IsMobile";
import RequestsMobileList from "./RequestsMobileList";
import { useMemo, useState } from "react";

export default function Requests({
  requests,
  selectedCard,
  setSelectedRequest,
  searchInputValue,
  setSearchInputValue,
}) {
  const isMobile = useIsMobile();

  const filteredArray = useMemo(() => {
    let result = requests;

    if (selectedCard !== "total") {
      result = result.filter((r) => r.status === selectedCard);
    }

    if (searchInputValue !== "") {
      const filteredArray = result.filter((r) => {
        return r.firstName
          .toLowerCase()
          .includes(searchInputValue.toLowerCase());
      });

      result = filteredArray;
    }

    return result;
  }, [requests, selectedCard, searchInputValue]);

  return (
    <div className="relative w-full flex-1 min-h-0 rounded-2xl flex flex-col gap-4 overflow-hidden px-4">
      {filteredArray.length === 0 ? (
        <EmptyRequestsState selectedCard={selectedCard} />
      ) : !isMobile ? (
        <RequestsTable
          requests={filteredArray}
          setSelectedRequest={setSelectedRequest}
        />
      ) : (
        <RequestsMobileList
          requests={filteredArray}
          setSelectedRequest={setSelectedRequest}
        />
      )}
    </div>
  );
}

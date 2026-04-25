// import { useState } from "react";
import EmptyMessage from "../../../../Components/EmptyMessage";
import Table from "./Table";
import useIsMobile from "../../../../Utils/IsMobile";
import MobileTable from "./MobileTable";

export default function Requests({
  requests,
  selectedCard,
  setSelectedRequest,
}) {
  const filteredArray =
    selectedCard === "total"
      ? requests
      : requests.filter((r) => r.status === selectedCard);

  const isMobile = useIsMobile();

  return (
    <div className="relative w-full flex-1 min-h-0 rounded-2xl flex flex-col gap-4 overflow-hidden px-4">
      {filteredArray.length === 0 ? (
        <EmptyMessage selectedCard={selectedCard} />
      ) : filteredArray.length > 0 && !isMobile ? (
        <Table
          requests={filteredArray}
          setSelectedRequest={setSelectedRequest}
        />
      ) : (
        <MobileTable requests={filteredArray} setSelectedRequest={setSelectedRequest} />
      )}
    </div>
  );
}

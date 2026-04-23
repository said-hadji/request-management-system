// import { useState } from "react";
import EmptyMessage from "../../../../Components/EmptyMessage";
import Table from "./Table";

export default function Requests({
  requests,
  selectedCard,
  setSelectedRequest,
}) {
  const filteredArray =
    selectedCard === "total"
      ? requests
      : requests.filter((r) => r.status === selectedCard);

  const isMobile = screen.width < 1024;

  return (
    <div className="relative w-full flex-1 rounded-2xl flex flex-col gap-4 overflow-hidden">
      {filteredArray.length === 0 ? (
        <EmptyMessage selectedCard={selectedCard} />
      ) : (
        filteredArray.length > 0 &&
        !isMobile && (
          <Table
            requests={filteredArray}
            selectedCard={selectedCard}
            setSelectedRequest={setSelectedRequest}
          />
        )
      )}
    </div>
  );
}

import EmptyRequestsState from "../../../../Components/EmptyRequestsState";
import RequestsTable from "./RequestsTable";
import useIsMobile from "../../../../Utils/IsMobile";
import RequestsMobileList from "./RequestsMobileList";

export default function Requests({
  requests,
  selectedCard,
  setSelectedRequest,
}) {
  const isMobile = useIsMobile();

  const filteredArray =
    selectedCard === "total"
      ? requests
      : requests.filter((r) => r.status === selectedCard);

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

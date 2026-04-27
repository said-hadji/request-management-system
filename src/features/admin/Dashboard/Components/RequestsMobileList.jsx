import RequestsMobileCard from "./RequestsMobileCard";

export default function RequestsMobileList({ requests, setSelectedRequest }) {
  return (
    <div className="w-full flex-1 min-h-0 flex flex-col gap-4 pb-2 overflow-y-scroll">
      {requests.map((request) => (
        <RequestsMobileCard
          key={request.id}
          request={request}
          setSelectedRequest={setSelectedRequest}
        />
      ))}
    </div>
  );
}

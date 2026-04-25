import MobileTableCard from "./MobileTableCard";

export default function MobileTable({ requests, setSelectedRequest }) {
  console.log(requests);
  return (
    <div className="w-full flex-1 min-h-0 flex flex-col gap-4 pb-2 overflow-y-scroll">
      {requests.map((request) => {
        return (
          <MobileTableCard
            request={request}
            setSelectedRequest={setSelectedRequest}
          />
        );
      })}
    </div>
  );
}

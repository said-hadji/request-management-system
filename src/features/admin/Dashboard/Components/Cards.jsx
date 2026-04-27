import {
  ChartBarBig,
  ClipboardClock,
  SquareCheckBig,
  SquareX,
  TrendingUp,
  TrendingDown,
} from "lucide-react";
import calculateTrending from "../../../../Utils/calculateTrending";

const CARDS_CONFIG = [
  {
    id: 1,
    title: "Total Requests",
    bg: "bg-linear-to-tr from-slate-50 via-slate-300 to-slate-500",
    shadowColor: "#62748e",
    type: "total",
  },
  {
    id: 2,
    title: "Total Pending Requests",
    bg: "bg-linear-to-tr from-yellow-50 to-yellow-300",
    shadowColor: "#ffdf20",
    type: "pending",
  },
  {
    id: 3,
    title: "Total Accepted Requests",
    bg: "bg-linear-to-tr from-green-50 to-green-300",
    shadowColor: "#7bf1a8",
    type: "accepted",
  },
  {
    id: 4,
    title: "Total Rejected Requests",
    bg: "bg-linear-to-tr from-red-50 to-red-300",
    shadowColor: "#ffa2a2",
    type: "rejected",
  },
];

export default function Cards({ requests, selectedCard, setSelectedCard }) {
  const counts = requests.reduce(
    (acc, r) => {
      if (r.status === undefined) return console.log("Undefined status!");
      acc.total++;
      acc[r.status]++;
      return acc;
    },
    { total: 0, pending: 0, accepted: 0, rejected: 0 },
  );

  const getIcon = (type) => {
    switch (type) {
      case "pending":
        return <ClipboardClock className="text-yellow-700" />;
      case "accepted":
        return <SquareCheckBig className="text-green-700" />;
      case "rejected":
        return <SquareX className="text-red-700" />;
      default:
        return <ChartBarBig className="text-slate-700" />;
    }
  };

  const cards = CARDS_CONFIG.map((card) => ({
    ...card,
    trending: calculateTrending(requests, card.type),
    icon: getIcon(card.type),
  }));

  return (
    <div className="w-full px-4 py-4 flex xl:grid xl:grid-cols-4 gap-4 overflow-x-scroll xl:overflow-visible">
      {cards.map((card) => {
        const trend = Number(card.trending);

        const trendColor =
          trend === 0
            ? "text-slate-600"
            : trend > 0
              ? "text-green-500"
              : "text-red-500";

        return (
          <button
            key={card.id}
            onClick={() => setSelectedCard(card.type)}
            style={{
              boxShadow:
                selectedCard === card.type
                  ? `0px 2px 1px 1px ${card.shadowColor}`
                  : "",
            }}
            className={`text-start min-w-75 xl:min-w-full ${card.bg} rounded-2xl p-4 space-y-6 cursor-pointer shrink-0 xl:shrink`}
          >
            <div className="flex items-center gap-2">
              <span>{card.icon}</span>
              <h2 className="text-lg font-medium">{card.title}</h2>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-5xl font-medium">{counts[card.type]}</span>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {trend !== 0 &&
                    (trend > 0 ? (
                      <TrendingUp className="text-green-500" />
                    ) : (
                      <TrendingDown className="text-red-500" />
                    ))}
                  <span className={`${trendColor} text-sm`}>
                    {trend === 0 ? "Stable" : `${trend}%`}
                  </span>
                </div>
                <span className="text-black/90 text-sm">from last week</span>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}

export default function EmptyMessage({ selectedCard }) {
  const emptyMessage = {
    total: {
      title: "No incoming requests",
      description:
        "When users send requests, they'll show up here for you to review.",
    },
    pending: {
      title: "No pending requests",
      description:
        "When you have pending requests, they'll show up here for you to review.",
    },
    accepted: {
      title: "No accepted requests",
      description:
        "When you have accepted requests, they'll show up here for you to review.",
    },
    rejected: {
      title: "No rejected requests",
      description:
        "When you have rejected requests, they'll show up here for you to review.",
    },
  };

  return (
    <div
      className={`w-full flex-1 text-gray-600 text-lg flex flex-col justify-center items-center gap-2`}
    >
      <div className="mb-5 flex items-center justify-center w-20 h-20 rounded-2xl bg-gray-100 border border-gray-200">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="6"
            y="22"
            width="28"
            height="12"
            rx="3"
            stroke="#9CA3AF"
            strokeWidth="1.5"
            fill="none"
          />
          <line
            x1="6"
            y1="28"
            x2="34"
            y2="28"
            stroke="#9CA3AF"
            strokeWidth="1.5"
          />
          <line
            x1="20"
            y1="6"
            x2="20"
            y2="21"
            stroke="#9CA3AF"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <polyline
            points="14,16 20,22 26,16"
            stroke="#9CA3AF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </div>

      <h2 className="text-base font-medium text-gray-800 mb-1.5">
        {emptyMessage[selectedCard].title}
      </h2>
      <p className="text-center text-sm text-gray-400 leading-relaxed">
        {emptyMessage[selectedCard].description}
      </p>
    </div>
  );
}

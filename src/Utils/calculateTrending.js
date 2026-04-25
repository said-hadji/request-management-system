const getCountByPeriod = (requests, from, to, status) => {
  return requests.filter((r) => {
    const date = new Date(r.createdAt);
    return (
      date >= from && date <= to && (status === "total" || r.status === status)
    );
  }).length;
};

export default function calculateTrending(requests, status) {
  const now = new Date();

  const startOfWeek = new Date();
  startOfWeek.setDate(now.getDate() - 7);

  const prevStart = new Date();
  prevStart.setDate(now.getDate() - 14);

  const prevEnd = startOfWeek;

  const current = getCountByPeriod(requests, startOfWeek, now, status);
  const previous = getCountByPeriod(requests, prevStart, prevEnd, status);

  if (previous === 0) return current > 0 ? 100 : 0;

  return Number(((current - previous) / previous) * 100).toFixed(1);
}

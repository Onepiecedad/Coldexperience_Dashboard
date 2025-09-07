const fetcher = async (url: string, options?: RequestInit) => {
  const res = await fetch(url, options);
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
  return res.json();
};

export const getKpi = () => fetcher("/api/kpi");
export const getNotifications = () => fetcher("/api/notifications");
export const getEconomy = () => fetcher("/api/economy/summary");
export const getToday = () => fetcher("/api/today");

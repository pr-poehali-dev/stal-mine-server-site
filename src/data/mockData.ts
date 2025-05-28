import { ServerData, Player, ServerStats } from "@/types/server";

export const serverData: ServerData = {
  online: true,
  players: 47,
  maxPlayers: 100,
  version: "1.20.1",
  uptime: "12д 8ч 34м",
};

export const playersList: Player[] = [
  { name: "Стрелок", faction: "Одиночки", online: "2ч 15м" },
  { name: "Сидорович", faction: "Торговцы", online: "45м" },
  { name: "Duty_Commander", faction: "Долг", online: "1ч 32м" },
  { name: "Freedom_Fighter", faction: "Свобода", online: "3ч 12м" },
  { name: "Научник", faction: "Ученые", online: "25м" },
];

export const serverStats: ServerStats = {
  totalStalkers: 1247,
  peakToday: 892,
  artifacts: 342,
  anomalies: 89,
};

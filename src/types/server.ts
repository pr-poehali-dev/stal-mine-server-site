export interface ServerData {
  online: boolean;
  players: number;
  maxPlayers: number;
  version: string;
  uptime: string;
}

export interface Player {
  name: string;
  faction: string;
  online: string;
}

export interface ServerStats {
  totalStalkers: number;
  peakToday: number;
  artifacts?: number;
  anomalies?: number;
}

export type FactionType =
  | "Одиночки"
  | "Торговцы"
  | "Долг"
  | "Свобода"
  | "Ученые";

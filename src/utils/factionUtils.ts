import { FactionType } from "@/types/server";

export const getFactionColor = (faction: string): string => {
  const colors: Record<FactionType, string> = {
    Одиночки: "bg-amber-600",
    Торговцы: "bg-green-600",
    Долг: "bg-red-600",
    Свобода: "bg-blue-600",
    Ученые: "bg-purple-600",
  };
  return colors[faction as FactionType] || "bg-gray-600";
};

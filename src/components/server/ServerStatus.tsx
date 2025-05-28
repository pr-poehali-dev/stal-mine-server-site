import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ServerData, ServerStats } from "@/types/server";

interface ServerStatusProps {
  serverData: ServerData;
  serverStats: ServerStats;
}

const ServerStatus: React.FC<ServerStatusProps> = ({
  serverData,
  serverStats,
}) => {
  return (
    <Card className="mb-8 bg-slate-800/50 border-amber-600/30 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-amber-400">
          <div
            className={`w-3 h-3 rounded-full ${serverData.online ? "bg-green-400 animate-pulse" : "bg-red-400"}`}
          />
          Статус сервера
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">
              {serverStats.totalStalkers}
            </div>
            <div className="text-sm text-gray-400">Всего сталкеров</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">
              {serverStats.peakToday}
            </div>
            <div className="text-sm text-gray-400">Пик дня</div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="text-center">
            <div className="text-lg font-bold text-purple-400">
              {serverData.version}
            </div>
            <div className="text-sm text-gray-400">Версия</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-purple-400">
              {serverData.uptime}
            </div>
            <div className="text-sm text-gray-400">Аптайм</div>
          </div>
        </div>
        <div className="mt-6">
          <div className="flex justify-between text-sm mb-2">
            <span>Заполненность сервера</span>
            <span>
              {Math.round((serverData.players / serverData.maxPlayers) * 100)}%
            </span>
          </div>
          <Progress
            value={(serverData.players / serverData.maxPlayers) * 100}
            className="h-2"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default ServerStatus;

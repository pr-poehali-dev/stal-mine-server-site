import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Player } from "@/types/server";
import { getFactionColor } from "@/utils/factionUtils";

interface PlayersListProps {
  players: Player[];
}

const PlayersList: React.FC<PlayersListProps> = ({ players }) => {
  return (
    <Card className="bg-slate-800/50 border-green-600/30 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-green-400">🎯 Активные сталкеры</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {players.map((player, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg border border-slate-600/20"
            >
              <div>
                <div className="font-semibold text-gray-200">{player.name}</div>
                <Badge className={`text-xs ${getFactionColor(player.faction)}`}>
                  {player.faction}
                </Badge>
              </div>
              <div className="text-sm text-gray-400">{player.online}</div>
            </div>
          ))}
        </div>
        <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">
          Подключиться к серверу
        </Button>
      </CardContent>
    </Card>
  );
};

export default PlayersList;

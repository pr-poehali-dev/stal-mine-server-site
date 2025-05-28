import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

const Index = () => {
  // Моковые данные для демонстрации
  const serverData = {
    online: true,
    players: 47,
    maxPlayers: 100,
    version: "1.20.1",
    uptime: "12д 8ч 34м",
  };

  const playersList = [
    { name: "Стрелок", faction: "Одиночки", online: "2ч 15м" },
    { name: "Сидорович", faction: "Торговцы", online: "45м" },
    { name: "Duty_Commander", faction: "Долг", online: "1ч 32м" },
    { name: "Freedom_Fighter", faction: "Свобода", online: "3ч 12м" },
    { name: "Научник", faction: "Ученые", online: "25м" },
  ];

  const serverStats = {
    totalStalkers: 1247,
    peakToday: 892,
  };

  const getFactionColor = (faction: string) => {
    const colors = {
      Одиночки: "bg-amber-600",
      Торговцы: "bg-green-600",
      Долг: "bg-red-600",
      Свобода: "bg-blue-600",
      Ученые: "bg-purple-600",
    };
    return colors[faction as keyof typeof colors] || "bg-gray-600";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-amber-400 mb-4 font-['Oswald'] tracking-wide">
            STALMINE
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Зона ждет тебя, сталкер. Выживай, исследуй аномалии и собирай
            артефакты в самом атмосферном Minecraft сервере S.T.A.L.K.E.R.
          </p>
        </div>

        {/* Статус сервера */}
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
                  {Math.round(
                    (serverData.players / serverData.maxPlayers) * 100,
                  )}
                  %
                </span>
              </div>
              <Progress
                value={(serverData.players / serverData.maxPlayers) * 100}
                className="h-2"
              />
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-1 gap-8 mb-8">
          {/* Список игроков */}
          <Card className="bg-slate-800/50 border-green-600/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-green-400">
                🎯 Активные сталкеры
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {playersList.map((player, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg border border-slate-600/20"
                  >
                    <div>
                      <div className="font-semibold text-gray-200">
                        {player.name}
                      </div>
                      <Badge
                        className={`text-xs ${getFactionColor(player.faction)}`}
                      >
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

          {/* Статистика */}
          <Card className="bg-slate-800/50 border-blue-600/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-blue-400">
                📊 Статистика Зоны
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                  <div className="text-2xl font-bold text-amber-400">
                    {serverStats.totalPlayers}
                  </div>
                  <div className="text-sm text-gray-400">Всего сталкеров</div>
                </div>
                <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                  <div className="text-2xl font-bold text-green-400">
                    {serverStats.peakDay}
                  </div>
                  <div className="text-sm text-gray-400">Пик дня</div>
                </div>
                <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                  <div className="text-2xl font-bold text-purple-400">
                    {serverStats.artifacts}
                  </div>
                  <div className="text-sm text-gray-400">
                    Артефактов найдено
                  </div>
                </div>
                <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                  <div className="text-2xl font-bold text-red-400">
                    {serverStats.anomalies}
                  </div>
                  <div className="text-sm text-gray-400">Активных аномалий</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Информация о сервере */}
        <Card className="bg-slate-800/50 border-amber-600/30 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-amber-400">
              ℹ️ О сервере StalMine
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-bold text-green-400 mb-2">
                  🎮 Особенности
                </h3>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Аномалии и артефакты</li>
                  <li>• Система фракций</li>
                  <li>• Радиация и мутации</li>
                  <li>• Оружие S.T.A.L.K.E.R.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-blue-400 mb-2">⚡ Моды</h3>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Nuclear Tech Mod</li>
                  <li>• MrCrayfish's Gun Mod</li>
                  <li>• Radiation Mod</li>
                  <li>• Custom Stalker Pack</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-purple-400 mb-2">📋 Правила</h3>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Без гриферства</li>
                  <li>• РП обязательно</li>
                  <li>• Уважай других сталкеров</li>
                  <li>• Следуй кодексу Зоны</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* IP адрес */}
        <div className="text-center mt-8 p-6 bg-gradient-to-r from-amber-900/20 to-green-900/20 rounded-lg border border-amber-600/30">
          <h3 className="text-xl font-bold text-amber-400 mb-2">
            Подключение к серверу
          </h3>
          <div className="text-2xl font-mono font-bold text-green-400 bg-slate-800/50 px-4 py-2 rounded inline-block">
            stalmine.ru:25565
          </div>
          <p className="text-sm text-gray-400 mt-2">
            Скопируй IP и подключайся к самой атмосферной Зоне в Minecraft!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;

import React from "react";
import ServerStatus from "@/components/server/ServerStatus";
import PlayersList from "@/components/server/PlayersList";
import { serverData, playersList, serverStats } from "@/data/mockData";

const Index = () => {
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

        <ServerStatus serverData={serverData} serverStats={serverStats} />

        <div className="grid lg:grid-cols-1 gap-8 mb-8">
          <PlayersList players={playersList} />

          {/* Статистика - временно оставляем здесь */}
          <div className="bg-slate-800/50 border-blue-600/30 backdrop-blur-sm p-6 rounded-lg">
            <h3 className="text-blue-400 text-lg font-semibold mb-4">
              📊 Статистика Зоны
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                <div className="text-2xl font-bold text-amber-400">
                  {serverStats.totalStalkers}
                </div>
                <div className="text-sm text-gray-400">Всего сталкеров</div>
              </div>
              <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                <div className="text-2xl font-bold text-green-400">
                  {serverStats.peakToday}
                </div>
                <div className="text-sm text-gray-400">Пик дня</div>
              </div>
            </div>
          </div>
        </div>

        {/* Временно упрощенная информация о сервере */}
        <div className="bg-slate-800/50 border-amber-600/30 backdrop-blur-sm p-6 rounded-lg mb-8">
          <h3 className="text-amber-400 text-lg font-semibold mb-4">
            ℹ️ О сервере StalMine
          </h3>
          <p className="text-gray-300">
            Атмосферный S.T.A.L.K.E.R. сервер с аномалиями, артефактами и
            фракциями.
          </p>
        </div>

        {/* IP адрес */}
        <div className="text-center p-6 bg-gradient-to-r from-amber-900/20 to-green-900/20 rounded-lg border border-amber-600/30">
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

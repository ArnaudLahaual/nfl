import React from "react";
import { useSelector } from "react-redux";

export default function Players() {
  const { playersList } = useSelector((state) => state.players);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">NFL Players</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {playersList.map((player) => (
          <div
            key={player.id}
            className="flex flex-col items-center bg-white rounded-xl shadow-md p-4 w-60 hover:scale-105 transition-transform"
          >
            {/* Image placeholder */}
            <div className="w-32 h-32 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
              <span className="text-gray-400 text-xl">🏈</span>
            </div>

            <div className="flex flex-col items-center text-center">
              <span className="text-xl font-semibold text-black">
                {player.firstName} {player.lastName}
              </span>
              <span className="text-gray-500">{player.position}</span>
              <span className="text-gray-500 text-sm">
                Team ID: {player.teamId}
              </span>
              <span className="text-gray-500 text-sm">
                Age: {player.age} · Draft: {player.draftYear} (Round {player.draftRound})
              </span>
              <span className="text-gray-400 text-sm">{player.college}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
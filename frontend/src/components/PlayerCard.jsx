import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export default function PlayerCard({ players }) {
  const { teamsList } = useSelector((state) => state.teams);

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {players && players.map((player) => {
        const team = teamsList.find((team) => team.id === player.teamId);

        return (
          <div
            key={player.id}
            className="flex flex-col items-center bg-white rounded-xl shadow-md p-1 w-50 hover:scale-105 transition-transform"
          >
            <div className="w-32 h-32 mb-4 flex items-center justify-center">
              <img
                className="object-contain rounded-full"
                src={team.logo}
                alt={team.name}
              />
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
                Age: {player.age} · Draft: {player.draftYear} (Round{" "}
                {player.draftRound})
              </span>
              <span className="text-gray-400 text-sm">{player.college}</span>
            </div>
          </div>
        );
      })}{" "}
    </div>
  );
}

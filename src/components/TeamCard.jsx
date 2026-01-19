import React from "react";
import { useSelector } from "react-redux";

export default function TeamCard() {
  const { teamsList } = useSelector((state) => state.teams);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 p-6 rounded-xl shadow-md">
      {teamsList &&
        teamsList.map((team) => {
          return (
            <div
              key={team.id}
              className="p-4 flex flex-col items-center bg-white rounded"
            >
              <img
                className="h-20 w-20 object-contain mb-2 mx-auto"
                src={team.logo}
                alt={team.name}
              />
              <div className="text-sm text-gray-900 font-semibold">
                {team.name}
              </div>
              <img
                className="h-8 w-8 object-contain mb-1"
                src={team.conferenceLogo}
                alt={team.conference}
              />
              <div className="text-sm text-gray-600">{team.division}</div>
            </div>
          );
        })}
    </div>
  );
}

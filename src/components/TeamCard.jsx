import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function TeamCard({ teams }) {
  // const { teamsList } = useSelector((state) => state.teams);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 p-6 rounded-xl shadow-md">
      {teams &&
        teams.map((team) => {
          return (
            <div
              key={team.id}
              className="flex flex-col bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="p-4 flex flex-col items-center">
                <img
                  className="h-20 w-20 mb-2 object-contain"
                  src={team.logo}
                  alt={team.name}
                />
                <div className="text-sm font-semibold text-gray-900">
                  {team.name}
                </div>
                <img
                  className="h-6 w-6 my-1 object-contain"
                  src={team.conferenceLogo}
                  alt=""
                />
                <div className="text-xs text-gray-500">{team.division}</div>
              </div>

              <div className="bg-gray-50 p-2 flex justify-center">
                <Link to={`/teams/${team.id}`}>
                  <button
                    className="text-xs text-gray-700 px-3 py-1 rounded hover:bg-gray-200 transition"
                    style={{ cursor: "pointer" }}
                  >
                    Découvrir l'équipe
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
    </div>
  );
}

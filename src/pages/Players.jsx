import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { setSearchValue } from "../redux/Players/players";
import SearchData from "../components/SearchData";

export default function Players() {
  const { playersList, searchValue } = useSelector((state) => state.players);
  const { teamsList } = useSelector((state) => state.teams);

  const filteredPlayers = playersList.filter(
    (player) =>
      player.firstName.toLowerCase().includes(searchValue.toLowerCase()) ||
      player.lastName.toLowerCase().includes(searchValue.toLowerCase()),
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">NFL Players</h1>
      <div className="w-full max-w-md mx-auto mb-4">
        <SearchData
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          placeholder={"Recherchez un joueur"}
        />
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {filteredPlayers.map((player) => {
          const team = teamsList.find((team) => team.id === player.teamId);

          return (
            <div
              key={player.id}
              className="flex flex-col items-center bg-white rounded-xl shadow-md p-4 w-60 hover:scale-105 transition-transform"
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
    </div>
  );
}

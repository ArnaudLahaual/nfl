import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue, setSelectedTeamById } from "../redux/Players/players";
import SearchData from "../components/SearchData";
import PlayerCard from "../components/PlayerCard";
import { Select } from "antd";

export default function Players() {
  const { playersList, searchValue, selectedTeamById } = useSelector(
    (state) => state.players,
  );
  const dispatch = useDispatch();
  const { teamsList } = useSelector((state) => state.teams);
  const teams = teamsList.filter((team) => team.id);

  //filtre des joueurs par nom & prenom
  const filteredPlayers = playersList.filter((player) =>
    `${player.firstName} ${player.lastName}`
      .toLowerCase()
      .includes(searchValue.toLowerCase()),
  );

  //filtre des joueurs par équipe
  const playersToDisplay = selectedTeamById
    ? playersList.filter((player) => player.teamId === selectedTeamById)
    : filteredPlayers;

  const onChange = (value) => {
    dispatch(setSelectedTeamById(value));
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">NFL Players</h1>
      <div className="flex flex-col md:flex-row justify-center gap-4 mb-6">
        <div className="flex-1 max-w-md">
          <SearchData
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            placeholder={"Recherchez un joueur"}
            size='medium'
          />
        </div>

        <div className="flex-1 max-w-md">
          <Select
            showSearch
            allowClear
            placeholder="Afficher joueurs par franchise"
            onChange={onChange}
            options={teams.map((team) => ({
              value: team.id,
              label: team.name,
            }))}
            style={{ width: "100%" }}
          />
        </div>
      </div>
      <PlayerCard players={playersToDisplay} />
    </div>
  );
}

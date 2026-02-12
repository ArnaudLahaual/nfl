import React, { useEffect, useState } from "react";
import { Input } from "antd";
import TeamCard from "../components/TeamCard";
import { Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  setConferenceFilter,
  setDivisionFilter,
  setSearchValue,
} from "../redux/Teams/teams";
import { useNavigate } from "react-router-dom";
import SearchData from "../components/SearchData";

const { Search } = Input;
const { Option } = Select;

export default function Teams() {
  const navigate = useNavigate();
  const { teamsList, searchValue, conferenceFilter, divisionFilter } =
    useSelector((state) => state.teams);

  const dispatch = useDispatch();

  const filteredTeams = teamsList.filter(
    (team) =>
      team.name.toLowerCase().includes(searchValue.toLowerCase()) &&
      (conferenceFilter ? team.conference === conferenceFilter : true) &&
      (divisionFilter ? team.division === divisionFilter : true),
  );

  return (
    <main className="flex flex-col items-center text-center px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Équipes</h1>

      <div className="w-full max-w-md mx-auto">
        <SearchData
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          placeholder={"Recherchez une équipe"}
        />
      </div>

      <div className="flex gap-6 items-center mt-8">
        {" "}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => navigate("/map")}
        >
          Voir les équipes sur la map !
        </button>
        <Select
          allowClear
          placeholder="Trier par conférence"
          size="large"
          onChange={(value) => dispatch(setConferenceFilter(value))}
        >
          <Option value="AFC">AFC</Option>
          <Option value="NFC">NFC</Option>
        </Select>
        {conferenceFilter && (
          <Select
            allowClear
            placeholder="Trier par division"
            size="large"
            onChange={(value) => dispatch(setDivisionFilter(value))}
          >
            <Option value="North">North</Option>
            <Option value="West">West</Option>
            <Option value="East">East</Option>
            <Option value="South">South</Option>
          </Select>
        )}
      </div>

      {/* équipes */}
      <div className="mt-6 w-full max-w-6xl">
        {filteredTeams.length > 0 ? (
          <TeamCard teams={filteredTeams} />
        ) : (
          <p className="text-white-500 text-center text-lg mt-10">
            Aucune équipe trouvée
          </p>
        )}
      </div>
    </main>
  );
}

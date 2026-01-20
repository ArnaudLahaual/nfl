import React, { useEffect, useState } from "react";
import { Input } from "antd";
import TeamCard from "../components/TeamCard";
import { Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../redux/Teams/teams";

const { Search } = Input;
const { Option } = Select;

export default function Teams() {
  const [conferenceFilter, setConferenceFilter] = useState(null);
  const { teamsList, searchValue } = useSelector((state) => state.teams);

  const dispatch = useDispatch();

  const filteredTeams = teamsList.filter(
    (team) =>
      team.name.toLowerCase().includes(searchValue.toLowerCase()) &&
      (conferenceFilter ? team.conference === conferenceFilter : true),
  );

  useEffect(() => {
    console.log("conferenceFilter:", conferenceFilter);
  });

  return (
    <main className="flex flex-col items-center text-center px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Équipes</h1>

      <div className="w-full max-w-md mx-auto">
        <Search
          placeholder="Recherchez une équipe"
          value={searchValue}
          onChange={(e) => dispatch(setSearchValue(e.target.value))}
          allowClear
          enterButton
          size="large"
        />
      </div>

      <div className="flex gap-6 items-center mt-8">
        {" "}
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Voir les équipes sur la map !
        </button>
        <Select
          allowClear
          placeholder="Trier par conférence"
          // style={{ width: 150 }}
          size="large"
          onChange={(value) => setConferenceFilter(value)}
        >
          <Option value="AFC">AFC</Option>
          <Option value="NFC">NFC</Option>
        </Select>
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

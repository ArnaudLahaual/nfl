import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import DivisionTable from "../components/DivisionTable";
import PlayerCard from "../components/PlayerCard";

export default function TeamDetails() {
  const { teamsList } = useSelector((state) => state.teams);
  const { playersList, selectedTeamById } = useSelector(
    (state) => state.players,
  );

  const { id } = useParams();
  const navigate = useNavigate();

  const team = teamsList.find((team) => team.id === parseInt(id));

  const playersToDisplay = playersList.filter(
    (player) => player.teamId === team.id,
  );

  if (!team) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Équipe non trouvée.</p>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start p-6 text-white"
      style={{ backgroundColor: team.bgColor }}
    >
      <div className="self-start mb-6">
        <button
          onClick={() => navigate("/teams")}
          className="flex items-center gap-2 mb-6 hover:opacity-80 transition"
          style={{ cursor: "pointer" }}
        >
          <ArrowLeftOutlined /> Retour aux équipes
        </button>
      </div>

      <img
        className="h-32 w-32 object-contain mb-4"
        src={team.logo}
        alt={team.name}
      />
      <h1 className="text-4xl font-bold mb-2">{team.name}</h1>

      <div className="flex items-center gap-4 mb-4">
        <p className="text-lg">
          Division : {team.division} | Conférence : {team.conference}
        </p>
      </div>

      <p className="max-w-2xl text-center text-lg leading-relaxed">
        {team.name} est une franchise de la ville de {team.city || "N/A"},
        appartenant à la conférence {team.conference}, créée en{" "}
        {team.creationYear || "Non communiquée"}.
      </p>

      {/* SuperBowl */}
      <div className="mt-4 text-center">
        {team.superBowlAppearances.length === 0 ? (
          <p>La franchise n'est jamais apparue au SuperBowl.</p>
        ) : (
          <div>
            <p className="mb-2">
              La franchise est apparue au SuperBowl{" "}
              {team.superBowlAppearances.length} fois :
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {team.superBowlAppearances.map((year) => {
                const won = team.superBowlWins.includes(year);
                return (
                  <span
                    key={year}
                    className={`px-2 py-1 rounded-full text-sm font-semibold ${
                      won
                        ? "bg-amber-500 text-white"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {year}
                  </span>
                );
              })}
            </div>
          </div>
        )}

        <div className="mt-6">
          <p>
            {team.name} est en compétition directe avec 3 autres équipes dans la
            division {team.division} de la conference {team.conference} :
            <div className="mt-2">
              <DivisionTable
                conference={team.conference}
                division={team.division}
              />
            </div>
          </p>

          <h1 className="text-4xl font-bold mb-4">Joueurs de l'équipe : </h1>
          <div>
            <PlayerCard players={playersToDisplay} />
          </div>
        </div>
      </div>
    </div>
  );
}

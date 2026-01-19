import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";

export default function TeamDetails() {
  const { teamsList } = useSelector((state) => state.teams);
  const { id } = useParams();
  const navigate = useNavigate();

  // Récupération de l'équipe sélectionnée
  const team = teamsList.find((team) => team.id === parseInt(id));

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
          style={{cursor:"pointer"}}
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
        {/* <img
          className="h-8 w-8 object-contain"
          src={team.conferenceLogo}
          alt={team.conference}
        /> */}
        <p className="text-lg">
          Division : {team.division} | Conférence : {team.conference}
        </p>
      </div>

      <p className="max-w-2xl text-center text-lg leading-relaxed">
        {team.name} est une franchise de la ville de {team.city || "N/A"},
        appartenant à la conférence {team.conference}, créée en{" "}
        {team.creationYear || "N/A"}. La franchise est apparue{" "}
        {team.superBowlAppearances} fois au Superbowl et en a remporté{" "}
        {team.superBowlWins}
      </p>
    </div>
  );
}

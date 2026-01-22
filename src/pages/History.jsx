import React from "react";
import afcLogo from "../../public/assets/logos/AFC.png";
import nfcLogo from "../../public/assets/logos/NFC.jpg";
import TimeLine from "../components/TimeLine";
import { useNavigate } from "react-router-dom";

export default function History() {
  const navigate = useNavigate();
  const conferences = [
    {
      id: "AFC",
      name: "American Football Conference",
      abbreviation: "AFC",
      logo: afcLogo,
      color: "#E41E26",
      description:
        "La AFC regroupe 16 équipes réparties dans 4 divisions. Fondée en 1970 après la fusion avec l'AFL, elle possède une riche histoire et de nombreux SuperBowls remportés.",
    },
    {
      id: "NFC",
      name: "National Football Conference",
      abbreviation: "NFC",
      logo: nfcLogo,
      color: "#002C66",
      description:
        "La NFC regroupe également 16 équipes réparties dans 4 divisions. Depuis la fusion AFL/NFL, elle est l’autre grande conférence de la NFL, avec une histoire pleine de champions et de moments légendaires.",
    },
  ];
  return (
    <main className="flex flex-col items-center px-4 py-10 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-center mb-6">
          Histoire de la NFL
        </h1>

        <p className="max-w-3xl text-center text-lg leading-relaxed text-white-700">
          La <strong>National Football League (NFL)</strong> est bien plus qu’un
          simple championnat sportif : c’est une véritable institution aux
          États-Unis. Fondée au début du XXᵉ siècle, elle est devenue au fil des
          décennies la ligue de football américain la plus prestigieuse et la
          plus suivie au monde.
          <br />
          <br />À travers ses <strong>32 franchises</strong> réparties entre
          deux conférences mythiques — l’AFC et la NFC — la NFL raconte une
          histoire faite de rivalités, de dynasties légendaires, de moments
          épiques et d’innovations constantes.
          <br />
          <br />
          Cette page vous invite à remonter le temps pour découvrir comment un
          sport encore confidentiel est devenu un phénomène culturel majeur,
          culminant chaque année avec l’événement sportif le plus regardé aux
          États-Unis : le <strong>Super Bowl</strong>.
        </p>
      </div>

      <div className="bg-[#002C66] min-h-screen px-6 py-10">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <h1 className="text-2xl font-bold text-white text-center mb-8">
            Quelques dates clés pour t'aider à suivre !
          </h1>

          <div className="w-full">
            <TimeLine />
          </div>
        </div>
      </div>

      <h1 className="text-2xl font-bold text-white text-center mb-8">
        Les 2 conférences de la ligue !
      </h1>
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-6xl">
        {conferences.map((conf) => (
          <div
            key={conf.id}
            className="flex-1 rounded-2xl shadow-lg overflow-hidden flex flex-col justify-between"
            style={{ backgroundColor: conf.color }}
          >
            <div className="flex items-center p-6 gap-4">
              <img
                src={conf.logo}
                alt={conf.abbreviation}
                className="h-16 w-16"
              />
              <h2 className="text-white text-2xl font-bold">{conf.name}</h2>
            </div>

            <p className="text-white p-6 text-lg leading-relaxed flex-1">
              {conf.description}
            </p>

            <div className="p-6 flex justify-center">
              <button
                onClick={() => navigate(`/conference/${conf.id}`)}
                className="bg-white text-gray-800 font-semibold px-6 py-2 rounded-full hover:bg-gray-200 transition"
              >
                Voir les équipes {conf.abbreviation} par division
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

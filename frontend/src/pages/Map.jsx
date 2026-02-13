import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Leaflet from "leaflet";
import { useDispatch, useSelector } from "react-redux";
import { Segmented } from "antd";
import { setConferenceFilter } from "../redux/Teams/teams";

export default function Map() {
  const { teamsList, conferenceFilter } = useSelector((state) => state.teams);

  const filteredTeams =
    conferenceFilter === null
      ? teamsList
      : teamsList.filter((team) => team.conference === conferenceFilter);

  const dispatch = useDispatch();
  return (
    <div style={{ position: "relative" }}>
      <h1>Carte NFL</h1>

      <div
        style={{
          position: "absolute",
          top: 16,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1000,
          backdropFilter: "blur(12px)",
          background: "rgba(255,255,255,0.75)",
          padding: "10px 14px",
          borderRadius: "18px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
          border: "1px solid rgba(255,255,255,0.4)",
          transition: "all 0.3s ease",
        }}
      >
        <Segmented
          options={[
            { label: "🏈", value: null },
            { label: "AFC", value: "AFC" },
            { label: "NFC", value: "NFC" },
          ]}
          value={conferenceFilter}
          onChange={(value) => dispatch(setConferenceFilter(value))}
          style={{
            background: "transparent",
            fontWeight: 600,
          }}
        />
      </div>

      {/* carte des usa */}
      <MapContainer
        center={[39.8283, -98.5795]}
        zoom={5}
        scrollWheelZoom={true}
        style={{ height: "600px", width: "100%" }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {filteredTeams.map((team) => {
          const teamIcon = Leaflet.divIcon({
            className: "custom-marker",
            html: `
      <div style="
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: ${team.bgColor};
        border: 3px solid white;
        box-shadow: 0 3px 8px rgba(0,0,0,0.4);
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      ">
        <img 
          src="${team.logo}" 
          alt="${team.name}" 
          style="width: 38px; height: 38px; object-fit: contain; border-radius: 50%;"
        />
      </div>
    `,
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [0, -50],
          });

          return (
            <Marker
              // icone de chaque équipe
              key={team.id}
              position={[team.latitude, team.longitude]}
              icon={teamIcon}
            >
              <Popup maxWidth={250}>
                <div style={{ textAlign: "center", minWidth: "250px" }}>
                  <div className="flex items-center text-center gap-3">
                    <img
                      src={team.logo}
                      alt={team.name}
                      style={{ width: "60px", marginBottom: "10px" }}
                    />
                    <h3
                      style={{
                        margin: "5px 0",
                        color: team.bgColor,
                        fontSize: "18px",
                      }}
                    >
                      {team.name}
                    </h3>
                  </div>

                  <div style={{ textAlign: "left", marginTop: "10px" }}>
                    <p style={{ margin: "5px 0" }}>
                      <strong>📍 Ville :</strong> {team.city}, {team.state}
                    </p>
                    <p style={{ margin: "5px 0" }}>
                      <strong>🏟️ Stade :</strong> {team.stadium}
                    </p>
                    <p style={{ margin: "5px 0" }}>
                      <strong>👥 Capacité :</strong>{" "}
                      {team.capacity?.toLocaleString()} places
                    </p>
                    <p style={{ margin: "5px 0" }}>
                      <strong>🏈 Division :</strong> {team.conference}{" "}
                      {team.division}
                    </p>
                    <p style={{ margin: "5px 0" }}>
                      <strong>📅 Création :</strong> {team.creationYear}
                    </p>
                    <p style={{ margin: "5px 0" }}>
                      <strong>🏆 Super Bowls :</strong>{" "}
                      {team.superBowlWins?.length || 0} victoire(s)
                    </p>
                    {team.superBowlWins && team.superBowlWins.length > 0 && (
                      <p
                        style={{
                          margin: "5px 0",
                          fontSize: "12px",
                          color: "#666",
                        }}
                      >
                        Années : {team.superBowlWins.join(", ")}
                      </p>
                    )}
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Leaflet from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { useSelector } from "react-redux";

export default function Map() {
  const { teamsList } = useSelector((state) => state.teams);

  return (
    <div>
      <h1>Carte NFL</h1>
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
        {teamsList.map((team) => {
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
              <Popup maxWidth={300}>
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

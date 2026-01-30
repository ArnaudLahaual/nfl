import { Segmented, Select } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DivisionTable from "../components/DivisionTable";
import "../../src/index.css";

export default function Conference() {
  const { conference } = useParams();
  const { conferencesList } = useSelector((state) => state.conferences);
  const [displayConference, setDisplayConference] = useState("divisions");
  const { Option } = Select;

  const divisions = ["East", "West", "North", "South"];

  const confCode = conferencesList.find((conf) => conf.code === conference);

  return (
    <main
      className="flex flex-col px-6 py-10 min-h-screen"
      style={{ backgroundColor: confCode.color }}
    >
      <div className="flex justify-center items-center">
        <img
          src={confCode.logo}
          alt={confCode.name}
          className="h-20 w-20 object-contain m-6"
        />
        <p className="text-white text-lg leading-relaxed max-w-3xl">
          {confCode.description}
        </p>
      </div>
      <div className="flex justify-end px-10">
        <Segmented
          options={[
            { label: "Conférence", value: "conference" },
            { label: "Divisions", value: "divisions" },
          ]}
          value={displayConference}
          onChange={(value) => setDisplayConference(value)}
        />
      </div>

      <div className="px-10 flex flex-col gap-2">
        {displayConference === "divisions" ? (
          divisions.map((division) => (
            <React.Fragment key={division}>
              <h2 className="text-white text-xl font-bold">{division}</h2>
              <DivisionTable conference={conference} division={division} />
            </React.Fragment>
          ))
        ) : (
          <>
            <></>
            <h2 className="text-white text-xl font-bold">{conference}</h2>
            <DivisionTable conference={conference} />
          </>
        )}
      </div>
    </main>
  );
}

import { Table } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DivisionTable from "../components/DivisionTable";

export default function Conference() {
  const { conference } = useParams();

  const divisions = ["East", "West", "North", "South"];

  return (
    <main className="flex flex-col px-6 py-10 bg-[#002C66] min-h-screen">
      <h1>Conférence{conference} </h1>
      <p>La conférence{conference} est composée de 16 équipes</p>
      <div className="px-10">
        {divisions.map((division) => (
          <DivisionTable conference={conference} division={division} />
        ))}
      </div>
    </main>
  );
}

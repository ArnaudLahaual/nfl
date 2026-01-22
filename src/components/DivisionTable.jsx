import { Table } from "antd";
import React from "react";
import { useSelector } from "react-redux";

export default function DivisionTable({ conference, division }) {
  const { teamsList } = useSelector((state) => state.teams);

  const filteredTeams = teamsList.filter(
    (team) => team.conference === conference && team.division === division,
  );
  const columns = [
    {
      title: "Logo",
      dataIndex: "logo",
      key: "logo",
      render: (logo, record) => (
        <img
          src={logo}
          alt={record.name}
          className="h-10 w-10 object-contain"
        />
      ),
    },
    {
      title: "Equipe",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Division",
      dataIndex: "division",
      key: "division",
    },
    {
      title: "SuperBowl_Apparence",
      dataIndex: "superBowlAppearances",
      key: "superBowlAppearances",
      render: (arr) => arr.length,
    },
    {
      title: "SuperBowl_Win",
      dataIndex: "superBowlWins",
      key: "superBowlWins",
      render: (arr) => arr.length,
    },
  ];
  return (
    <div className="">
      <h2 className="text-white text-xl font-bold mb-2">{division}</h2>
      <Table dataSource={filteredTeams} columns={columns} rowKey="id" />
    </div>
  );
}

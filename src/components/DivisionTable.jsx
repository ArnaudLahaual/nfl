import React, { useEffect } from "react";
import { Table } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function DivisionTable({ conference, division }) {
  const navigate = useNavigate();
  const { teamsList } = useSelector((state) => state.teams);

  const filteredTeams = teamsList.filter(
    (team) =>
      team.conference === conference &&
      (division ? team.division === division : true),
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
      title: "Ville",
      dataIndex: "city",
      key: "city",
    },
    {
      title: "Stade",
      dataIndex: "stadium",
      key: "stadium",
    },
    {
      title: "Appartions SuperBowl",
      dataIndex: "superBowlAppearances",
      key: "superBowlAppearances",
      render: (arr) => arr.length,
    },
    {
      title: "Victoires SuperBowl",
      dataIndex: "superBowlWins",
      key: "superBowlWins",
      render: (arr) => arr.length,
    },
  ];

  const handleFilterData = () => {
    return columns.map((column) => {
      if (column.dataIndex === "logo" || column.dataIndex === "division") {
        return column;
      }

      if (
        column.dataIndex === "superBowlAppearances" ||
        column.dataIndex === "superBowlWins"
      ) {
        const uniqueLengths = Array.from(
          //suppression des doublons Set
          new Set(filteredTeams.map((team) => team[column.dataIndex].length)),
        );

        return {
          ...column,
          filters: uniqueLengths.map((val) => ({
            text: val.toString(),
            value: val,
          })),
          onFilter: (value, record) =>
            record[column.dataIndex].length === value,
          sorter: (a, b) =>
            a[column.dataIndex].length - b[column.dataIndex].length,
          sortDirections: ["ascend", "descend"],
        };
      }

      const uniqueValues = Array.from(
        new Set(filteredTeams.map((team) => team[column.dataIndex])),
      );

      return {
        ...column,
        filters: uniqueValues.map((val) => ({ text: val, value: val })),
        onFilter: (value, record) => record[column.dataIndex] === value,
        sorter: (a, b) =>
          a[column.dataIndex].localeCompare(b[column.dataIndex]),
        sortDirections: ["ascend", "descend"],
      };
    });
  };

  return (
    <div className="overflow-hidden rounded-xl shadow-lg">
      <Table
        dataSource={filteredTeams}
        columns={handleFilterData()}
        pagination={false}
        rowKey="id"
        size="small"
        onRow={(record) => {
          return {
            onClick: () => navigate(`/teams/${record.id}`),
            style: { cursor: "pointer" },
          };
        }}
      />
    </div>
  );
}

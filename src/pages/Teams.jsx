import React from "react";
import { Input, Space } from "antd";
import TeamCard from "../components/TeamCard";
const { Search } = Input;
const onSearch = (value, _e, info) => console.log(info?.source, value);

export default function Teams() {
  return (
    <main className="flex flex-col items-center justify-center text-center px-6 py-24">
      <h1>Equipes</h1>
      <Search
        placeholder="Recherchez une équipe"
        onSearch={onSearch}
        allowClear
        enterButton
      />
      <div className="mt-8">
        <TeamCard />
      </div>
    </main>
  );
}

import React from "react";
import { Input } from "antd";
import TeamCard from "../components/TeamCard";
const { Search } = Input;

const onSearch = (value) => console.log(value);

export default function Teams() {
  return (
    <main className="flex flex-col items-center text-center px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Équipes</h1>

      <div className="w-full max-w-md mx-auto">
        <Search
          placeholder="Recherchez une équipe"
          onSearch={onSearch}
          allowClear
          enterButton
          size="large"
        />
      </div>

      {/* équipes */}
      <div className="mt-12 w-full max-w-6xl">
        <TeamCard />
      </div>
    </main>
  );
}

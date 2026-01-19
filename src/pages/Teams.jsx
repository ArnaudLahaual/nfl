import React from "react";
import { Input } from "antd";
import TeamCard from "../components/TeamCard";
const { Search } = Input;
import { Select } from "antd";

const onSearch = (value) => console.log(value);
const { Option } = Select;

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

      <div className="flex gap-6 items-center mt-8">
        {" "}
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Voir les équipes sur la map !
        </button>
        <Select
          allowClear
          placeholder="Trier par conférence"
          // style={{ width: 150 }}
          size="large"
          onChange={(value) => console.log("conférence :", value)}
        >
          <Option value="AFC">AFC</Option>
          <Option value="NFC">NFC</Option>
        </Select>
      </div>

      {/* équipes */}
      <div className="mt-6 w-full max-w-6xl">
        <TeamCard />
      </div>
    </main>
  );
}

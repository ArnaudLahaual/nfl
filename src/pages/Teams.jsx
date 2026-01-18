import React from "react";
import { Input, Space } from "antd";
import ArizonaLogo from "../assets/logos/Arizona.gif";
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
      <div className="mt-10">
        <div className="max-w-sm rounded-xl bg-white border border-gray-200 shadow-md p-6">
          <img
            className="h-16 w-16 object-contain mb-4 mx-auto"
            src={ArizonaLogo}
            alt="Arizona Cardinals"
          />

          <div className="flex flex-col items-center">
            <div className="font-semibold text-gray-900">Arizona Cardinals</div>

            <p className="text-gray-700 text-sm m-0">Conférence : NFC</p>
          </div>
        </div>
      </div>
    </main>
  );
}

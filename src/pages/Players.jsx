import React from "react";

export default function Players() {
  return (
    <div>
      Players
      <div>
        <div class="flex flex-wrap justify-center gap-6 p-6 rounded-xl shadow-md">
          <div>
            {/* <img
              class="size-48 shadow-xl rounded-md"
              alt=""
              src="/img/cover.png"
            /> */}
          </div>
          <div class="flex flex-col">
            <span class="text-2xl font-medium">Class Warfare</span>
            <span>The Anti-Patterns</span>
            <span class="flex">
              <span>No. 4</span>
              <span>·</span>
              <span>2025</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

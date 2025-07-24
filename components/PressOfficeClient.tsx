"use client";
import { useState } from "react";
import Image from "next/image";
import { urlFor } from "@/app/lib/sanity";

function alphabetArray() {
  return [
    "ALL",
    ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)),
    // "0-9",
  ];
}

export default function PressOfficeClient({ companies }: { companies: any[] }) {
  const [search, setSearch] = useState("");
  const [activeAlpha, setActiveAlpha] = useState("ALL");

  let filtered = companies;
  if (activeAlpha !== "ALL") {
    if (activeAlpha === "0-9") {
      filtered = filtered.filter((c) => /^[0-9]/.test(c.name));
    } else {
      filtered = filtered.filter((c) => c.name?.toUpperCase().startsWith(activeAlpha));
    }
  }
  if (search.trim()) {
    filtered = filtered.filter((c) => c.name?.toLowerCase().includes(search.toLowerCase()));
  }

  return (
    <>
      <div className="">
        <h4 className="text-[20px] pb-2">Search</h4>
        <input
          className="border border-[#ddd] rounded-[10px] p-3"
          type="text"
          placeholder="search for a company.."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <ul className="flex gap-x-5 py-3 flex-wrap">
          {alphabetArray().map((alpha) => (
            <li key={alpha}>
              <button
                className={`px-2 py-1 rounded ${activeAlpha === alpha ? 'bg-[#ac8a4a] text-white' : 'bg-[#eee]'}`}
                onClick={() => setActiveAlpha(alpha)}
              >
                {alpha}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-wrap gap-8">
        {filtered.length === 0 ? (
          <div>No companies found.</div>
        ) : (
          filtered.map((company) => (
            <div className="w-[22%]" key={company._id}>
              <a href="#">
                <Image
                  className="rounded-[8px] shadow-xl/20"
                  src={urlFor(company.logo).url() || "/assets/images/of-one.jpg"}
                  width={511}
                  height={287}
                  alt={company.name}
                />
                <div className="text-center mt-2 font-semibold">{company.name}</div>
              </a>
            </div>
          ))
        )}
      </div>
    </>
  );
}

"use client";
import React, { useEffect, useState } from "react";

interface Company {
  _id?: string;
  name?: string;
}

interface AdvantagesProps {
  annoucements: any[];
  whatson: any[];
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://miningdiscovery.com";

const Advantages: React.FC<AdvantagesProps> = ({ annoucements, whatson }) => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCompanies() {
      try {
        const res = await fetch(`${baseUrl}/api/companies`, { cache: "no-store" });
        if (!res.ok) {
          const errorText = await res.text();
          throw new Error(`Failed to fetch companies: ${res.status} ${res.statusText} - ${errorText}`);
        }
        const data = await res.json();
        setCompanies(data.data || []);
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    }
    fetchCompanies();
  }, []);

  return (
    <div className="flex gap-x-5 mt-4 mb-12">
      <div className="w-[33.3%] bg-light-bg rounded-[10px] p-8">
        <h3>Press Office</h3>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          <ul className="flex flex-wrap flex-col gap-y-3">
            {companies.map((company) => (
              <li key={company?._id} className="border-b-[1px] border-[#ffc355] py-4">
                <a href="#">{company?.name}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="w-[33.3%] bg-light-bg rounded-[10px] p-8">
        <h3>Announcements</h3>
        <ul className="flex flex-wrap flex-col gap-y-3">
          {annoucements.map((announcement: any) => (
            <li key={announcement?._id} className="border-b-[1px] border-[#ffc355] py-4">
              <a href="#">{announcement?.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-[33.3%] bg-light-bg rounded-[10px] p-8">
        <h3>{`What's On`}</h3>
        <ul className="flex flex-wrap flex-col gap-y-3">
          {whatson.map((whatson: any) => (
            <li key={whatson?._id} className="border-b-[1px] border-[#ffc355] py-4">
              <a href="#">{whatson?.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Advantages;

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
    <div className="w-full mt-4 mb-12">
      {/* Mobile: Stack vertically, Tablet: 2 columns, Desktop: 3 columns */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-5">
        
        {/* Press Office Section */}
        <div className="w-full md:w-1/2 lg:w-1/3 bg-gray-50 rounded-lg p-4 md:p-6 lg:p-8">
          <h3 className="text-lg md:text-xl font-bold mb-4 text-gray-800 border-b-2 border-[#ffc355] pb-2">
            Press Office
          </h3>
          {loading ? (
            <div className="flex justify-center items-center py-8">
              <div className="text-gray-500">Loading...</div>
            </div>
          ) : error ? (
            <div className="text-red-500 text-sm bg-red-50 p-3 rounded-md">
              Error: {error}
            </div>
          ) : companies.length > 0 ? (
            <ul className="space-y-3">
              {companies.slice(0, 8).map((company) => (
                <li 
                  key={company?._id} 
                  className="border-b border-[#ffc355] py-3 last:border-b-0 transition-all duration-200 hover:bg-gray-100 hover:px-2 rounded"
                >
                  <a 
                    href="#" 
                    className="text-gray-700 hover:text-[#ac8a4a] transition-colors duration-200 text-sm md:text-base font-medium block"
                  >
                    {company?.name}
                  </a>
                </li>
              ))}
              {companies.length > 8 && (
                <li className="pt-3">
                  <a 
                    href="#" 
                    className="text-[#ac8a4a] hover:text-[#8b7139] text-sm font-medium underline"
                  >
                    View all companies ({companies.length})
                  </a>
                </li>
              )}
            </ul>
          ) : (
            <div className="text-gray-500 italic text-sm">No companies available</div>
          )}
        </div>

        {/* Announcements Section */}
        <div className="w-full md:w-1/2 lg:w-1/3 bg-gray-50 rounded-lg p-4 md:p-6 lg:p-8">
          <h3 className="text-lg md:text-xl font-bold mb-4 text-gray-800 border-b-2 border-[#ffc355] pb-2">
            Announcements
          </h3>
          {annoucements && annoucements.length > 0 ? (
            <ul className="space-y-3">
              {annoucements.slice(0, 6).map((announcement: any, index: number) => (
                <li 
                  key={announcement?._id || `announcement-${index}`} 
                  className="border-b border-[#ffc355] py-3 last:border-b-0 transition-all duration-200 hover:bg-gray-100 hover:px-2 rounded"
                >
                  <a 
                    href="#" 
                    className="text-gray-700 hover:text-[#ac8a4a] transition-colors duration-200 text-sm md:text-base font-medium block line-clamp-2"
                  >
                    {announcement?.title || `Announcement ${index + 1}`}
                  </a>
                  {announcement?.publishedAt && (
                    <span className="text-xs text-gray-500 mt-1 block">
                      {new Date(announcement.publishedAt).toLocaleDateString()}
                    </span>
                  )}
                </li>
              ))}
              {annoucements.length > 6 && (
                <li className="pt-3">
                  <a 
                    href="#" 
                    className="text-[#ac8a4a] hover:text-[#8b7139] text-sm font-medium underline"
                  >
                    View all announcements ({annoucements.length})
                  </a>
                </li>
              )}
            </ul>
          ) : (
            <div className="text-gray-500 italic text-sm">No announcements available</div>
          )}
        </div>

        {/* What's On Section */}
        <div className="w-full md:w-full lg:w-1/3 bg-gray-50 rounded-lg p-4 md:p-6 lg:p-8">
          <h3 className="text-lg md:text-xl font-bold mb-4 text-gray-800 border-b-2 border-[#ffc355] pb-2">
            What's On
          </h3>
          {whatson && whatson.length > 0 ? (
            <ul className="space-y-3">
              {whatson.slice(0, 6).map((event: any, index: number) => (
                <li 
                  key={event?._id || `whatson-${index}`} 
                  className="border-b border-[#ffc355] py-3 last:border-b-0 transition-all duration-200 hover:bg-gray-100 hover:px-2 rounded"
                >
                  <a 
                    href="#" 
                    className="text-gray-700 hover:text-[#ac8a4a] transition-colors duration-200 text-sm md:text-base font-medium block line-clamp-2"
                  >
                    {event?.title || `Event ${index + 1}`}
                  </a>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-2 gap-1">
                    {event?.publishedAt && (
                      <span className="text-xs text-gray-500">
                        {new Date(event.publishedAt).toLocaleDateString()}
                      </span>
                    )}
                    {event?.location && (
                      <span className="text-xs text-[#ac8a4a] font-medium">
                        📍 {event.location}
                      </span>
                    )}
                  </div>
                </li>
              ))}
              {whatson.length > 6 && (
                <li className="pt-3">
                  <a 
                    href="#" 
                    className="text-[#ac8a4a] hover:text-[#8b7139] text-sm font-medium underline"
                  >
                    View all events ({whatson.length})
                  </a>
                </li>
              )}
            </ul>
          ) : (
            <div className="text-gray-500 italic text-sm">No events scheduled</div>
          )}
        </div>
      </div>

      {/* Optional: Mobile View Toggle for Better UX */}
      <div className="md:hidden mt-6 text-center">
        <p className="text-xs text-gray-500">
          Swipe horizontally to view more content on mobile
        </p>
      </div>
    </div>
  );
};

export default Advantages;
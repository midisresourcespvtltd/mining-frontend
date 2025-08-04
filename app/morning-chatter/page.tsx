"use client";
import React, { useEffect, useState } from "react";
import Adds from "@/components/adds";
import Latestmedia from "@/components/cards/latestmedia";
import NewsImageCard from "@/components/cards/NewsImageCard";
import PopularCard from "@/components/cards/popular";
import Projects from "@/components/cards/projects";
import Researchreport from "@/components/cards/researchreport";
import Image from "next/image";
import Loader from "@/components/Loader";
import FloatingVideo from "@/components/FloatingVideo";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://miningdiscovery.com";

function getNews() {
  return fetch(`${baseUrl}/api/sanity-data`, { cache: "no-store" }).then(
    async (res) => {
      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(
          `Failed to fetch news: ${res.status} ${res.statusText} - ${errorText}`
        );
      }
      return res.json();
    }
  );
}

const MorningChatterPage: React.FC = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getNews()
      .then((data) => {
        setNews(data.data || []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader />;
  if (error) return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="p-4 text-red-500 bg-red-50 border border-red-200 rounded-lg">
        Error: {error}
      </div>
    </div>
  );

  return (
    <div className="w-full min-h-screen container mx-auto ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="py-6 md:py-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            Morning Chatter
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            Stay updated with the latest mining industry insights and discussions
          </p>
        </div>

        {/* Main Layout */}
        <div className="flex flex-col xl:flex-row gap-6 lg:gap-8">
          
          {/* Main Content Area */}
          <div className="w-full xl:w-[72%]">
            
            {/* Top Section */}
            <div className="">
              <div className="flex flex-col lg:flex-row gap-6">
                
                {/* Left Sidebar Content */}
                <div className="w-full lg:w-[30%] order-2 lg:order-1">
                  
                  {/* Research Reports */}
                  <div className="mb-8">
                    <h3 className="text-lg md:text-xl font-bold mb-4 text-gray-800 border-b-2 border-[#ac8a4a] pb-2">
                      Research Reports
                    </h3>
                    <Researchreport />
                  </div>

                  {/* Popular/Projects Section */}
                  <div className="mb-8">
                    <h3 className="text-lg md:text-xl font-bold mb-4 text-gray-800 border-b-2 border-[#ac8a4a] pb-2">
                      Popular This Week
                    </h3>
                    <PopularCard />
                  </div>

                  {/* Advertisement Images */}
                  <div className="space-y-4 mb-8">
                    {["/assets/images/pop.gif", "/assets/images/pop.gif", "/assets/images/bov.jpg"].map((src, index) => (
                      <div key={index} className="w-full">
                        <Image
                          className="w-full h-auto rounded-lg"
                          src={src}
                          width={300}
                          height={150}
                          alt={`Advertisement ${index + 1}`}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Projects */}
                  <div className="mb-8">
                    <h3 className="text-lg md:text-xl font-bold mb-4 text-gray-800 border-b-2 border-[#ac8a4a] pb-2">
                      Projects
                    </h3>
                    <Projects />
                  </div>

                  {/* Bottom Ad */}
                  <div className="w-full">
                    <Image
                      className="w-full h-auto rounded-lg"
                      src="/assets/images/doc.gif"
                      width={300}
                      height={150}
                      alt="Advertisement"
                    />
                  </div>
                </div>

                {/* Main News Content */}
                <div className="w-full lg:w-[70%] order-1 lg:order-2">
                  
                  {/* Top Banner */}
                  <div className="mb-6">
                    <Image
                      className="w-full h-auto rounded-lg"
                      src="/assets/images/curry.jpg"
                      width={800}
                      height={200}
                      alt="Morning Chatter Banner"
                      priority
                    />
                  </div>

                  {/* Morning Chatter Section */}
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-800 border-b-2 border-[#ac8a4a] pb-2">
                      Morning Chatter
                    </h2>
                    <div className="space-y-6">
                      <NewsImageCard news={news} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Latest Multimedia Section */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6">
              <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-800 border-b-2 border-[#ac8a4a] pb-2">
                Latest Multimedia
              </h2>
              <div className="w-full">
                <Latestmedia />
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-full xl:w-[28%] flex flex-col lg:flex-row xl:flex-col gap-6">
            
            {/* Ads Component */}
            <div className="w-full lg:w-1/2 xl:w-full">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                <h3 className="text-lg font-bold mb-4 text-gray-800">Sponsored</h3>
                <Adds />
              </div>
            </div>

            {/* YouTube Videos */}
            <div className="w-full lg:w-1/2 xl:w-full">
            
              <FloatingVideo />
            
            </div>
          </div>
        </div>

        {/* Bottom Spacing */}
        <div className="pb-8"></div>
      </div>
    </div>
  );
};

export default MorningChatterPage;
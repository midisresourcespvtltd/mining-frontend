"use client";
import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import SmallCard from "@/components/cards/SmallCard";
import BigCard from "@/components/cards/BigCard";
import TextCard from "@/components/cards/TextCard";
import NewsCard from "@/components/cards/NewsCard";
import SponsorPost from "@/components/cards/SponsorPost";
import MagazineCard from "@/components/cards/MagazineCard";
import Advantages from "@/components/Advantages";
import Adds from "@/components/adds";
import PopularCard from "@/components/cards/popular";
import Latestmedia from "@/components/cards/latestmedia";
import Researchreport from "@/components/cards/researchreport";
import Projects from "@/components/cards/projects";

import { urlFor } from "./lib/sanity";

const baseUrl = "http://localhost:3000"
  // process.env.NEXT_PUBLIC_BASE_URL || "https://miningdiscovery.com";

function getRandomNews(newsArray: any[], count: number, type?: string) {
  if (type === "latest") return newsArray.slice(0, count);
  const shuffled = [...newsArray].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function getFilteredNews(newsArray: any[], count: number, type?: string) {
  let filteredNews = newsArray;
  if (type) {
    filteredNews = newsArray.filter(
      (item: any) =>
        Array.isArray(item.category) &&
        item.category.some((cat: any) => cat.name === type)
    );
  }
  const shuffled = [...filteredNews].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

interface Ad {
  _id?: string;
  displayOn?: string;
  position?: string;
  banner?: any;
}

export default function HomeClient() {
  const [news, setNews] = useState<any[]>([]);
  const [advertisments, setAdvertisments] = useState<Ad[]>([]);
  const [adsData, setAdsData] = useState<Ad[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const newsRes = await fetch(`${baseUrl}/api/sanity-data`, {
          cache: "no-store",
        });
        const newsJson = await newsRes.json();
        const adsRes = await fetch(`${baseUrl}/api/advertisements`);
        const adsJson = await adsRes.json();
        
        setNews(newsJson.data || []);
        setAdvertisments(adsJson.data || []);
        setAdsData(adsJson.data || []);
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return (
    <div className="flex justify-center items-center min-h-screen">
      <Image
        src="/assets/images/loader.gif"
        alt="Loading..."
        width={100}
        height={100}
        // className="animate-spin"
      />
    </div>
  );
  
  if (error) return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-red-500">Error: {error}</div>
    </div>
  );

  // Filter ads by position
  const topAds = advertisments?.filter(
    (ad) => ad.displayOn === "home" && ad.position === "top"
  );
  
  const betweenContentAds = advertisments?.filter(
    (ad) => ad.displayOn === "home" && ad.position === "between-content"
  );

  return (
    <Fragment>
      {/* Top Banner Advertisement - Full Width */}
      {topAds && topAds.length > 0 && (
        <div className="w-full mb-4 md:mb-6">
          <div className="max-w-7xl mx-auto px-4">
            <Image
              className="w-full h-auto rounded-lg"
              src={
                topAds[0]?.banner
                  ? urlFor(topAds[0].banner).url()
                  : "/assets/images/fallback.jpg"
              }
              width={1200}
              height={200}
              alt="Top Advertisement"
              priority
            />
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Layout */}
        <div className="flex flex-col xl:flex-row gap-4 lg:gap-6 pt-4 md:pt-8">
          
          {/* Main Content Area */}
          <div className="w-full xl:w-[72%]">
            
            {/* Top Section */}
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-5 border-b border-gray-400 pb-6 mb-6">
              
              {/* Small Cards - Hidden on mobile, visible on lg+ */}
              <div className="hidden lg:block lg:w-[25%]">
                <SmallCard news={getRandomNews(news, 2)} key="smallcard-top" />
              </div>
              
              {/* Center Content */}
              <div className="w-full lg:w-[40%]">
                <BigCard news={getRandomNews(news, 1)[0]} key="bigcard-top" />
              </div>
              
              {/* Latest News */}
              <div className="w-full lg:w-[35%]">
                <h3 className="text-lg md:text-xl font-bold mb-4">Latest</h3>
                <TextCard
                  news={getRandomNews(news, 4, "latest")}
                  key="textcard-latest"
                />
              </div>
            </div>

            {/* Between Content Ads */}
            {betweenContentAds && betweenContentAds.length > 0 && (
              <div className="flex flex-col sm:flex-row gap-4 max-w-4xl mx-auto py-6 md:py-9">
                {betweenContentAds.slice(0, 2).map((ad: any, idx: number) => (
                  <div className="flex-1" key={ad._id || `between-content-${idx}`}>
                    <Image
                      className="w-full h-auto rounded-lg"
                      src={urlFor(ad.banner).url()}
                      width={400}
                      height={200}
                      alt={`Advertisement ${idx + 1}`}
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Most Read Section */}
            <div className="py-6 md:py-7">
              <h3 className="text-lg md:text-xl font-bold mb-4">Most Read</h3>
              <div className="w-full">
                <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap gap-4 lg:gap-6">
                  <NewsCard news={getRandomNews(news, 4)} key="newscard-mostread" />
                </div>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="bg-[#ac8a4a] py-6 md:py-10 px-4 md:px-6 rounded-lg mb-6">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                <h3 className="text-white text-lg md:text-xl font-bold m-0 text-center lg:text-left">
                  Receive our free daily newsletter:
                </h3>
                <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                  <input
                    className="h-12 px-4 rounded-md border border-white bg-white text-sm w-full sm:min-w-[300px] lg:min-w-[400px]"
                    type="text"
                    placeholder="Enter your email address..."
                  />
                  <button
                    className="bg-white px-6 py-3 rounded-md text-[#ac8a4a] text-sm font-medium whitespace-nowrap"
                    type="submit"
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="flex flex-col xl:flex-row gap-6">
              
              {/* Left Content */}
              <div className="w-full xl:w-[70%]">
                
                {/* Sponsored Posts */}
                <div className="mb-8">
                  <h3 className="text-lg md:text-xl font-bold mb-4">Sponsored Posts</h3>
                  <div className="space-y-4">
                    <SponsorPost news={getRandomNews(news, 4)} key="sponsorpost-main" />
                  </div>
                </div>

                {/* Ad Banner */}
                {betweenContentAds && betweenContentAds[2] && (
                  <div className="py-4 mb-6">
                    <Image
                      className="w-full h-auto rounded-lg"
                      src={urlFor(betweenContentAds[2].banner).url()}
                      width={800}
                      height={200}
                      alt="Advertisement"
                    />
                  </div>
                )}

                {/* News Sections */}
                {[
                  { title: "Copper News", filter: "Copper News", component: TextCard },
                  { title: "Precious Metals", filter: "Precious Metals", component: SponsorPost },
                  { title: "World News", filter: "World News", component: TextCard },
                  { title: "Leadership Thoughts", filter: "Leadership Thoughts", component: SponsorPost },
                  { title: "Corporate News", filter: "Corporate News", component: TextCard },
                ].map((section, index) => (
                  <div key={section.title} className="mb-8">
                    <h3 className="text-lg md:text-xl font-bold mb-4">{section.title}</h3>
                    <section.component
                      news={getFilteredNews(news, 4, section.filter)}
                      key={`${section.title.toLowerCase().replace(' ', '')}-section`}
                    />
                    
                    {/* Ad between sections */}
                    {betweenContentAds && betweenContentAds[index % betweenContentAds.length] && (
                      <div className="py-4 mt-6">
                        <Image
                          className="w-full h-auto rounded-lg"
                          src={urlFor(betweenContentAds[index % betweenContentAds.length].banner).url()}
                          width={800}
                          height={200}
                          alt="Advertisement"
                        />
                      </div>
                    )}
                  </div>
                ))}

                {/* Magazine Section */}
                <div className="pt-6 border-t border-gray-400 mt-8">
                  <h3 className="text-lg md:text-xl font-bold mb-4">Magazine</h3>
                  <MagazineCard key="magazinecard-main" />
                </div>
              </div>

              {/* Right Sidebar */}
              <div className="w-full xl:w-[30%]">
                <div className="space-y-8">
                  
                  {/* Popular This Week */}
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-4">Popular This Week</h3>
                    <PopularCard
                      news={getFilteredNews(news, 4, "Popular This Week")}
                      key="popularcard-main"
                    />
                  </div>

                  {/* Latest Multimedia */}
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-4">Latest Multimedia</h3>
                    <Latestmedia key="latestmedia-main" />
                  </div>

                  {/* Research Reports */}
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-4">Research Reports</h3>
                    <Researchreport
                      key="researchreport-main"
                      news={getFilteredNews(news, 4, "Research Reports")}
                    />
                  </div>

                  {/* Projects */}
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-4">Projects</h3>
                    <Projects
                      key="projects-main"
                      news={getFilteredNews(news, 4, "Projects")}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Press Office & What's On Section */}
            <div className="mt-12">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                
                {/* Press Office Section */}
                <div className="w-full lg:w-1/2">
                  <h2 className="text-xl md:text-2xl font-bold mb-6 text-[#ac8a4a] border-b-2 border-[#ac8a4a] pb-2">
                    Press Office
                  </h2>
                  <div className="space-y-4">
                    {getFilteredNews(news, 5, "Announcement").length > 0 ? (
                      getFilteredNews(news, 5, "Announcement").map((announcement: any, index: number) => (
                        <div key={`announcement-${index}`} className="border-b border-gray-200 pb-3 last:border-b-0">
                          <h4 className="font-semibold text-gray-800 hover:text-[#ac8a4a] transition-colors cursor-pointer">
                            {announcement.title || `Announcement ${index + 1}`}
                          </h4>
                          <p className="text-sm text-gray-600 mt-1">
                            {announcement.excerpt || announcement.description || "Important announcement from the press office."}
                          </p>
                          <span className="text-xs text-gray-500">
                            {announcement.publishedAt ? new Date(announcement.publishedAt).toLocaleDateString() : "Recent"}
                          </span>
                        </div>
                      ))
                    ) : (
                      <div className="text-gray-500 italic">No announcements available at this time.</div>
                    )}
                  </div>
                </div>

                {/* What's On Section */}
                <div className="w-full lg:w-1/2">
                  <h2 className="text-xl md:text-2xl font-bold mb-6 text-[#ac8a4a] border-b-2 border-[#ac8a4a] pb-2">
                    What's On
                  </h2>
                  <div className="space-y-4">
                    {getFilteredNews(news, 5, "What's On").length > 0 ? (
                      getFilteredNews(news, 5, "What's On").map((event: any, index: number) => (
                        <div key={`whatson-${index}`} className="border-b border-gray-200 pb-3 last:border-b-0">
                          <h4 className="font-semibold text-gray-800 hover:text-[#ac8a4a] transition-colors cursor-pointer">
                            {event.title || `Event ${index + 1}`}
                          </h4>
                          <p className="text-sm text-gray-600 mt-1">
                            {event.excerpt || event.description || "Upcoming event in the mining industry."}
                          </p>
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-2">
                            <span className="text-xs text-gray-500">
                              {event.publishedAt ? new Date(event.publishedAt).toLocaleDateString() : "Date TBA"}
                            </span>
                            {event.location && (
                              <span className="text-xs text-[#ac8a4a] font-medium">
                                📍 {event.location}
                              </span>
                            )}
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-gray-500 italic">No events scheduled at this time.</div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Advantages Section */}
            <div className="mt-12">
              <Advantages
                annoucements={getFilteredNews(news, 5, "Announcement")}
                whatson={getFilteredNews(news, 5, "What's On")}
                key="advantages-main"
              />
            </div>
          </div>

          {/* Right Side Content */}
          <div className="w-full xl:w-[28%] flex flex-col lg:flex-row xl:flex-col gap-6">
            
            {/* Adds Component */}
            <div className="w-full lg:w-1/2 xl:w-full">
              <Adds key="adds-main" />
            </div>

            {/* YouTube Videos */}
            <div className="w-full lg:w-1/2 xl:w-full">
              <div className="space-y-4">
                <h3 className="text-lg md:text-xl font-bold mb-4">Featured Videos</h3>
                
                {/* First Video */}
                <div className="relative w-full aspect-video">
                  <iframe
                    className="absolute inset-0 w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/Fg06vz1Krcc?si=gwWIU-4UA7cHCQBK"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>

                {/* Second Video */}
                <div className="relative w-full aspect-video">
                  <iframe
                    className="absolute inset-0 w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/Syeu_l3sAJE?si=HxxYp0UrwVkz1AM2"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
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
// import { useState } from "react";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://miningdiscovery.com";

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

// Fix: add type for ad objects
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
        // If you have a helper for advertisments, fetch it here as well
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Fragment>
      {/* top-section */}
      <div className="max-w-[97%] m-auto">
        <div className="flex gap-x-5 pt-8">
          <div className="w-[72%] ">
            {/* top-section */}
            <div className="flex gap-x-5 pt-8 border-b-1 border-[#9a9a9a] pb-6">
              <div className="w-[25%]">
                <SmallCard news={getRandomNews(news, 2)} key="smallcard-top" />
              </div>
              <div className="w-[40%]">
                <div className="pb-4">
                  <Image
                    className=""
                    src={
                      advertisments?.filter(
                        (ad) => ad.displayOn == "home" && ad.position == "top"
                      )[0]?.banner
                        ? urlFor(
                            advertisments?.filter(
                              (ad) =>
                                ad.displayOn == "home" && ad.position == "top"
                            )[0]?.banner
                          ).url()
                        : "/assets/images/fallback.jpg"
                    }
                    width={1000}
                    height={100}
                    alt=""
                  />
                </div>
                <BigCard news={getRandomNews(news, 1)[0]} key="bigcard-top" />
              </div>
              <div className="w-[35%]">
                <h3>Latest</h3>
                <TextCard
                  news={getRandomNews(news, 4, "latest")}
                  key="textcard-latest"
                />
              </div>
            </div>
            {/* top-Adds */}
            <div className="flex gap-x-6 max-w-[700px] m-auto py-9">
              {advertisments
                ?.filter(
                  (ad: any) =>
                    ad.displayOn == "home" && ad.position == "between-content"
                )
                .map((ad: any, idx: number) => (
                  <div className="" key={ad._id || `between-content-${idx}`}>
                    <Image
                      className=""
                      src={urlFor(ad.banner).url()}
                      width={1000}
                      height={100}
                      alt=""
                    />
                  </div>
                ))}
              {/* <div className="">
                <Image
                  className=""
                  src="/assets/images/cnttwo.jpg"
                  width={1000}
                  height={100}
                  alt=""
                />
              </div> */}
            </div>

            {/* More-Read */}
            <div className="max-w-[97%] m-auto">
              <div className="py-7">
                <h3 className="pb-2">Most Read</h3>
                <div className="flex gap-x-4">
                  <NewsCard
                    news={getRandomNews(news, 4)}
                    key="newscard-mostread"
                  />
                </div>
              </div>
            </div>
            {/* Latest newsletter-sec */}
            <div className="max-w-[97%] m-auto">
              <div className="bg-[#ac8a4a] py-10 px-6 flex items-center justify-between rounded-[10px] newsletter">
                <h3 className="text-white m-0">
                  Receive our free daily newsletter:
                </h3>
                <div className="flex gap-x-4">
                  <input
                    className="h-[50px] px-5 rounded-[5px] border-1 border-white bg-white text-[13px] w-full min-w-[400px]"
                    type="text"
                    placeholder="Enter your email address..."
                  />
                  <button
                    className="bg-white px-5 rounded-[5px] text-[#ac8a4a] text-[15px]"
                    type="submit"
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
            {/* new- design */}
            <div className="max-w-[97%] m-auto">
              <div className="flex gap-x-5 pt-5">
                <div className="w-[70%]">
                  <div className="py-4">
                    <Image
                      className=""
                      src={
                        adsData?.filter(
                          (ad) =>
                            ad.displayOn === "home" &&
                            ad.position === "between-content"
                        )[2]?.banner
                          ? urlFor(
                              adsData?.filter(
                                (ad) =>
                                  ad.displayOn === "home" &&
                                  ad.position === "between-content"
                              )[2]?.banner
                            ).url()
                          : "/assets/images/fallback.jpg"
                      }
                      width={1000}
                      height={100}
                      alt=""
                    />
                  </div>

                  {/* sponsor-sec */}
                  <div className="">
                    <div className="pt-2 pb-7">
                      <h3 className="pb-2">Sponsored Posts</h3>
                      <div className="flex flex-col  gap-y-4">
                        <SponsorPost
                          news={getRandomNews(news, 4)}
                          key="sponsorpost-main"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="py-4">
                    <Image
                      className=""
                      src={
                        adsData?.filter(
                          (ad) =>
                            ad.displayOn === "home" &&
                            ad.position === "between-content"
                        )[1]?.banner
                          ? urlFor(
                              adsData?.filter(
                                (ad) =>
                                  ad.displayOn === "home" &&
                                  ad.position === "between-content"
                              )[1]?.banner
                            ).url()
                          : "/assets/images/fallback.jpg"
                      }
                      width={1000}
                      height={100}
                      alt=""
                    />
                  </div>
                  {/* Latest-news  */}
                  <div className="">
                    <div className="pt-7 pb-5">
                      <h3 className="pb-2">Copper News</h3>
                      <div className="flex gap-x-6 items-start  ">
                        <div className=" flex gap-y-4 flex-col">
                          <TextCard
                            news={getRandomNews(news, 4, "Copper News")}
                            key="textcard-copper"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="py-4">
                    <Image
                      className=""
                      src={
                        adsData?.filter(
                          (ad) =>
                            ad.displayOn === "home" &&
                            ad.position === "between-content"
                        )[0]?.banner
                          ? urlFor(
                              adsData?.filter(
                                (ad) =>
                                  ad.displayOn === "home" &&
                                  ad.position === "between-content"
                              )[0]?.banner
                            ).url()
                          : "/assets/images/fallback.jpg"
                      }
                      width={1000}
                      height={100}
                      alt=""
                    />
                  </div>
                  {/* sponsor-post  */}
                  <div className="">
                    <div className="pt-7 pb-5">
                      <h3 className="pb-2">Precious Metals</h3>
                      <div className="flex gap-x-6 items-start  ">
                        <div className="flex gap-y-4 flex-col">
                          <SponsorPost
                            news={getFilteredNews(news, 4, "Precious Metals")}
                            key="sponsorpost-precious"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="py-4">
                    <Image
                      className=""
                      src={
                        adsData?.filter(
                          (ad) =>
                            ad.displayOn === "home" &&
                            ad.position === "between-content"
                        )[1]?.banner
                          ? urlFor(
                              adsData?.filter(
                                (ad) =>
                                  ad.displayOn === "home" &&
                                  ad.position === "between-content"
                              )[1]?.banner
                            ).url()
                          : "/assets/images/fallback.jpg"
                      }
                      width={1000}
                      height={100}
                      alt=""
                    />
                  </div>
                  {/* Latest-news  */}
                  <div className="">
                    <div className="pt-7 pb-5">
                      <h3 className="pb-2">World News</h3>
                      <div className="flex gap-x-6 items-start  ">
                        <div className=" flex gap-y-4 flex-col">
                          <TextCard
                            news={getFilteredNews(news, 4, "World News")}
                            key="textcard-world"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="py-4">
                    <Image
                      className=""
                      src="/assets/images/flow.gif"
                      width={1000}
                      height={100}
                      alt=""
                    />
                  </div>
                  {/* sponsor-post  */}
                  <div className="">
                    <div className="pt-7 pb-5">
                      <h3 className="pb-2">Leadership Thoughts</h3>
                      <div className="flex gap-x-6 items-start  ">
                        <div className="flex gap-y-4 flex-col">
                          <SponsorPost
                            news={getFilteredNews(
                              news,
                              4,
                              "Leadership Thoughts"
                            )}
                            key="sponsorpost-leadership"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="py-4">
                    <Image
                      className=""
                      src={
                        adsData?.filter(
                          (ad) =>
                            ad.displayOn === "home" &&
                            ad.position === "between-content"
                        )[2]?.banner
                          ? urlFor(
                              adsData?.filter(
                                (ad) =>
                                  ad.displayOn === "home" &&
                                  ad.position === "between-content"
                              )[2]?.banner
                            ).url()
                          : "/assets/images/fallback.jpg"
                      }
                      width={1000}
                      height={100}
                      alt=""
                    />
                  </div>
                  {/* Latest-news  */}
                  <div className="">
                    <div className="pt-7 pb-5">
                      <h3 className="pb-2">Corporate News</h3>
                      <div className="flex gap-x-6 items-start  ">
                        <div className=" flex gap-y-4 flex-col">
                          {/* <NewsImageCard /> */}
                          <TextCard
                            news={getFilteredNews(news, 4, "Corporate News")}
                            key="textcard-corporate"
                          />
                        </div>
                      </div>
                    </div>
                    {/* <div className="text-right">
                      <a className="bk-btn">
                        More <i className="fas fa-arrow-right"></i>
                      </a>
                    </div> */}

                    {/* Sector -news  */}
                    <div className="pt-1 border-t-1 border-[#9a9a9a] pb-6 mt-9">
                      <div className="pt-7 pb-5">
                        {/* <h3 className="pb-2">Sector News</h3> */}
                        <div className="flex gap-x-6 items-start  ">
                          <div className=" flex gap-y-4 flex-col">
                            {/* <SectorList /> */}
                            <div className="">
                              <h3 className="pb-2">Magazine</h3>
                              <MagazineCard key="magazinecard-main" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[30%]">
                  <div className="">
                    <h3 className="pb-2">Popular This Week</h3>
                    <PopularCard
                      news={getFilteredNews(news, 4, "Popular This Week")}
                      key="popularcard-main"
                    />

                    {/* <div className="pt-4 pb-5">
                      <Image
                        className=""
                        src="/assets/images/pop.gif"
                        width={1000}
                        height={100}
                        alt=""
                      />
                    </div> */}
                    <h3 className="pb-2">Latest Multimedia</h3>
                    <Latestmedia key="latestmedia-main" />

                    {/* <div className="pt-4 pb-5">
                      <Image
                        className=""
                        src="/assets/images/pop.gif"
                        width={1000}
                        height={100}
                        alt=""
                      />
                    </div> */}
                    <h3 className="pb-2">Research Reports</h3>
                    <Researchreport
                      key="researchreport-main"
                      news={getFilteredNews(news, 4, "Research Reports")}
                    />
                    {/* <div className="pt-4 pb-5">
                      <Image
                        className=""
                        src="/assets/images/bov.jpg"
                        width={1000}
                        height={100}
                        alt=""
                      />
                    </div> */}
                    <h3 className="pb-2">Projects</h3>
                    <Projects
                      key="projects-main"
                      news={getFilteredNews(news, 4, "Projects")}
                    />
                    {/* <div className="pt-4 pb-5">
                      <Image
                        className=""
                        src="/assets/images/doc.gif"
                        width={1000}
                        height={100}
                        alt=""
                      />
                    </div>
                    <h3 className="pb-2">Showroom</h3>
                    <Showroom /> */}
                  </div>
                </div>
              </div>
              {/* advantages-page */}
              <div className="max-w-[97%] m-auto">
                <Advantages
                  annoucements={getFilteredNews(news, 5, "Announcement")}
                  whatson={getFilteredNews(news, 5, "What's On")}
                  key="advantages-main"
                />
              </div>
            </div>
          </div>
          <div className="w-[10%]">
            <Adds key="adds-main" />
          </div>
          <div className="w-[18%]">
            <div className="last-bar top-[325px]">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Fg06vz1Krcc?si=gwWIU-4UA7cHCQBK"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Syeu_l3sAJE?si=HxxYp0UrwVkz1AM2"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
       
      </div>
    </Fragment>
  );
}

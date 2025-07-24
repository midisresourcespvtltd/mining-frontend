import { Fragment } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmallCard from "@/components/cards/SmallCard";
import BigCard from "@/components/cards/BigCard";
import TextCard from "@/components/cards/TextCard";
import NewsCard from "@/components/cards/NewsCard";
import SponsorPost from "@/components/cards/SponsorPost";
import NewsImageCard from "@/components/cards/NewsImageCard";
import SponsorImageCard from "@/components/cards/SponsorImageCard";
import SectorList from "@/components/cards/SectorList";
import MagazineCard from "@/components/cards/MagazineCard";
import Advantages from "@/components/Advantages";
import Adds from "@/components/adds";
import PopularCard from "@/components/cards/popular";
import Latestmedia from "@/components/cards/latestmedia";
import Researchreport from "@/components/cards/researchreport";
import Projects from "@/components/cards/projects";
import Showroom from "@/components/cards/showroom";
import React from "react";
import Topics from "@/components/cards/topics";
import PressOfficeClient from "@/components/PressOfficeClient";
import { fetchAds } from "@/app/utilities/fetchAds";
import { getRandomAd } from "@/app/utilities/getRandomAd";
import { urlFor } from "../lib/sanity";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://miningdiscovery.com";

function alphabetArray() {
  return [
    "ALL",
    ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)),
    "0-9",
  ];
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
async function fetchCompanies() {
  const res = await fetch(`${baseUrl}/api/companies`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch companies");
  const data = await res.json();
  return data.data || [];
}
async function fetchData() {
  const newsRes = await fetch(`${baseUrl}/api/sanity-data`, {
    cache: "no-store",
  });

  return newsRes.json();
}

export default async function Pressofice() {
  const companies = await fetchCompanies();
  const { data: news } = await fetchData();
  const { data: ads } = await fetchAds();
  // Example usage: get 2 random ads
  const randomAds = getRandomAd(ads, 2);
  // console.log("Random Ads:",randomAds, randomAds?.filter(
  //                     (ad: any) =>
  //                       ad.displayOn === "home" &&
  //                       ad.position === "between-content"
  //                   )[0]);

  return (
    <div>
      <div className="max-w-[97%] m-auto">
        <div className="flex gap-x-5 pt-8">
          <div className="w-[72%] ">
            <div className="flex justify-between items-center pb-9">
              <h3 className="text-left">Press Office</h3>
              <Image
                className="rounded-[8px] shadow-xl/20"
                src="/assets/images/pres.jpg"
                width={468}
                height={60}
                alt=""
              />
            </div>
            <PressOfficeClient companies={companies} />
            <div className="text-center py-12">
              <Image
                className="m-auto"
                src="/assets/images/air.jpg"
                width={800}
                height={200}
                alt=""
              />
            </div>
            <div className="flex gap-x-6">
              <div className="w-[50%]">
                <h3 className="pb-2">Sponsored Post</h3>
                <SponsorPost
                  news={getFilteredNews(news, 4, "Sponsored Post")}
                  key="sponsorpost-precious"
                />
              </div>
              <div className="w-[50%] showrom-line">
                <h3 className="pb-2">World News</h3>
                <TextCard
                  news={getFilteredNews(news, 4, "World News")}
                  key="textcard-world"
                />
              </div>
            </div>
            <div className="text-center py-12">
              <Image
                className="m-auto"
                src={
                  urlFor(
                    (randomAds?.filter(
                      (ad: any) =>
                        ad.displayOn === "home" &&
                        ad.position === "between-content"
                    )[0] as any)?.banner
                  ).url() || "/assets/images/air.jpg"
                }
                width={800}
                height={200}
                alt=""
              />
            </div>
            <h3 className="text-center">
              Login or subscribe to improve your user experience...
            </h3>
            <div className="flex gap-x-5 justify-center pb-13">
              <a className="bk-btn" href="#">
                Login
              </a>
              <a className="bk-btn" href="#">
                Not a Subscriber
              </a>
            </div>
          </div>
          <div className="w-[10%]">
            <Adds />
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
    </div>
  );
}

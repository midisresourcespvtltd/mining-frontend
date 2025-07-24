'use client'

import { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Adds from "@/components/adds";
import React from "react";
import { urlFor } from "@/app/lib/sanity";

interface MagazineItem {
  _id: string;
  title: string;
  description: string;
  coverImage: string;
  pdfFile: string;
  publishedAt: string;
  createdBy: string;
  category: string;
  issueNumber: string;
  volume: string;
}

function page() {
  const [magazineData, setMagazineData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState("2025");

  useEffect(() => {
    const fetchMagazineData = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/magazine');
        const result = await response.json();
        // console.log(result?.data)
        if (result.success) {
          setMagazineData(result.data);
        } else {
          setError('Failed to fetch magazine data');
        }
      } catch (err) {
        setError('An error occurred while fetching magazine data');
      } finally {
        setLoading(false);
      }
    };

    fetchMagazineData();
  }, []);

  const years = ["2025", "2024", "2023", "2022", "2021", "2020", "2019", "2018", "PRIOR 2018"];

  const filteredMagazines = magazineData.filter(magazine => {
    const magazineYear = new Date(magazine._createdAt).getFullYear().toString();
    if (selectedYear === "PRIOR 2018") {
      return parseInt(magazineYear) < 2018;
    }
    return magazineYear === selectedYear;
  });
console.log("ff",filteredMagazines)
  if (loading) {
    return (
      <div>
        <Header />
        <div className="max-w-[97%] m-auto">
          <div className="flex justify-center items-center h-64">
            <div>Loading magazine data...</div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Header />
        <div className="max-w-[97%] m-auto">
          <div className="flex justify-center items-center h-64">
            <div>Error: {error}</div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <div className="max-w-[97%] m-auto">
        <div className="flex gap-x-5 pt-8">
          <div className="w-[72%] ">
            <h3 className="text-center">
              Login or subscribe to improve your user experience...
            </h3>
            <div className="flex gap-x-5 justify-center">
              <a className="bk-btn" href="#">
                Login
              </a>
              <a className="bk-btn" href="#">
                Not a Subscriber
              </a>
            </div>
            <div className="pt-8">
              <ul className="flex gap-x-6 justify-center">
                {years.map((year) => (
                  <li key={year} className={selectedYear === year ? "active" : ""}>
                    <span 
                      className="cursor-pointer" 
                      onClick={() => setSelectedYear(year)}
                    >
                      {year}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-8">
              {filteredMagazines.length > 0 ? (
                <ul className="flex gap-x-4 justify-center">
                  {filteredMagazines.slice(0, 9).map((magazine) => (
                    <li key={magazine._id}>
                      <div className="">
                        <h4 className="text-[35px]">
                          {magazine.issueNumber || "13"}{" "}
                          <span className="text-[12px] text-[#000] w-[10px] inline-block">
                            {new Date(magazine._createdAt).toLocaleDateString('en-US', {
                              month: 'short',
                              year: 'numeric'
                            })}
                          </span>
                        </h4>
                      </div>
                      <Image
                        className="rounded-[8px] shadow-xl/20"
                        src={urlFor(magazine.thumbnail).url()}
                        width={95}
                        height={123}
                        alt={magazine.name}
                      />
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="text-center py-8">
                  <p>No magazines found for {selectedYear}</p>
                </div>
              )}
            </div>
            <div className="flex pt-14">
              <div className="w-[33%]">
                <Image
                  className="rounded-[8px] shadow-xl/20"
                  src={urlFor(filteredMagazines[0]?.thumbnail)?.url()}
                  width={500}
                  height={382}
                  alt={filteredMagazines[0].name}
                />
                <div className="flex gap-x-5 justify-center pt-6">
                  <a className="with-border" href="#">
                    Digital Flipbox
                  </a>
                  <a className="with-border" href={filteredMagazines[0].magazineFile || "#"}>
                    Download PDF
                  </a>
                </div>
              </div>
              <div className="w-[27%] pl-12">
                <ul className="flex flex-col gap-y-3">
                  <li>
                    <a href="#">All Articles</a>
                  </li>
                  <li>
                    <a href="#">Cover Story</a>
                  </li>
                  <li>
                    <a href="#">First Word</a>
                  </li>
                  <li>
                    <a href="#">Mining News</a>
                  </li>
                  <li>
                    <a href="#">Editorial Insight</a>
                  </li>
                  <li>
                    <a href="#">Engineering News</a>
                  </li>
                  <li>
                    <a href="#">Mining Weekly Features</a>
                  </li>
                  <li>
                    <a href="#">Engineering News Features</a>
                  </li>
                  <li>
                    <a href="#">Cartoon</a>
                  </li>
                </ul>
              </div>
              <div className="w-[40%]">
                <ul className="pl-4 max-h-[500px] overflow-y-auto">
                  {filteredMagazines.slice(0, 17).map((magazine, index) => (
                    <li key={magazine._id} className="text-[15px] flex gap-x-4 items-center border-b-1 border-[#ddd] py-3">
                      {magazine.name}
                      <span>{index + 1}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="py-4">
              <Image
                className=""
                src="/assets/images/eco.jpg"
                width={1000}
                height={100}
                alt=""
              />
            </div>
          </div>
          <div className="w-[10%]">
            <Adds />
          </div>
          <div className="w-[18%]">
           <div className="last-bar top-[325px]">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/Fg06vz1Krcc?si=gwWIU-4UA7cHCQBK" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/Syeu_l3sAJE?si=HxxYp0UrwVkz1AM2" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default page;

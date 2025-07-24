'use client';
import React, { useEffect, useState } from 'react';
import Adds from '@/components/adds';
import Latestmedia from '@/components/cards/latestmedia';
import NewsImageCard from '@/components/cards/NewsImageCard';
import PopularCard from '@/components/cards/popular';
import Projects from '@/components/cards/projects';
import Researchreport from '@/components/cards/researchreport';
import Image from 'next/image';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://miningdiscovery.com";

function getNews() {
  return fetch(`${baseUrl}/api/sanity-data`, { cache: "no-store" })
    .then(async (res) => {
      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Failed to fetch news: ${res.status} ${res.statusText} - ${errorText}`);
      }
      return res.json();
    });
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className="max-w-[97%] m-auto">
        <div className="flex gap-x-5 pt-8">
          <div className="w-[72%] ">
            {/* top-section */}
            <div className="flex gap-x-5 pt-8 border-b-1 border-[#9a9a9a] pb-6">
              <div className="w-[25%]">
                <h3 className="pb-2">Research Reports</h3>
                <Researchreport />
                <div className="">
                  <h3 className="pb-2">Projects</h3>
                  <PopularCard />
                  <div className="pt-4 pb-5">
                    <Image className="" src="/assets/images/pop.gif" width={1000} height={100} alt="" />
                  </div>
                  <div className="pt-4 pb-5">
                    <Image className="" src="/assets/images/pop.gif" width={1000} height={100} alt="" />
                  </div>
                  <div className="pt-4 pb-5">
                    <Image className="" src="/assets/images/bov.jpg" width={1000} height={100} alt="" />
                  </div>
                  <h3 className="pb-2">Projects</h3>
                  <Projects />
                  <div className="pt-4 pb-5">
                    <Image className="" src="/assets/images/doc.gif" width={1000} height={100} alt="" />
                  </div>
                  {/* <h3 className="pb-2">Showroom</h3>
                  <Showroom /> */}
                </div>
              </div>
              <div className="w-[75%]">
                <div className="pb-4">
                  <Image className="" src="/assets/images/curry.jpg" width={1000} height={100} alt="" />
                </div>
                <h3 className="pb-2">Morning chatter</h3>
                <div className="flex gap-x-6 items-start  ">
                  <div className=" flex gap-y-4 flex-col">
                    <NewsImageCard news={news} />
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-9">
              <h3 className="pb-2">Latest Multimedia</h3>
              <div className="detail-col">
                <Latestmedia />
              </div>
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
};

export default MorningChatterPage;
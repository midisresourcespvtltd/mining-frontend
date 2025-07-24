'use client';

import Image from "next/image";

import Adds from "@/components/adds";
import PopularCard from "@/components/cards/popular";
import Researchreport from "@/components/cards/researchreport";
import Projects from "@/components/cards/projects";
import Showroom from "@/components/cards/showroom";
import NewsImageCard from "@/components/cards/NewsImageCard";
import Latestmedia from "@/components/cards/latestmedia";

interface CategoryClientProps {
  news: any[];
  catId: string;
}

const CategoryClient: React.FC<CategoryClientProps> = ({ news,catId }) => {
  if (!news || news.length === 0) {
    return (
      <div className="max-w-[97%] m-auto py-16 text-center text-xl text-gray-500">
        No news found for this category.<br />
        (It may be because the category does not exist or there is no news assigned to it.)
      </div>
    );
  }
  return (
    <>
      
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
                  <h3 className="pb-2">Showroom</h3>
                  <Showroom />
                </div>
              </div>
              <div className="w-[75%]">
                <div className="pb-4">
                  <Image className="" src="/assets/images/curry.jpg" width={1000} height={100} alt="" />
                </div>
                <h3 className="pb-2">{news[0]?.category?.filter((cat:any)=>cat?._id==catId)[0]?.name}</h3>
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
    
    </>
  );
};

export default CategoryClient;
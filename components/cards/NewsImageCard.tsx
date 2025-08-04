import Image from "next/image";
import { Fragment } from "react";
import { urlFor } from "@/app/lib/sanity";
import { useRouter } from "next/navigation";

const NewsImageCard = ({ news }: { news: any[] }) => {
  const router = useRouter();
  
  const truncateToWords = (text: string, wordLimit: number = 20) => {
    if (!text) return "No description available";
    
    const words = text.split(' ');
    if (words.length <= wordLimit) {
      return text;
    }
    
    return words.slice(0, wordLimit).join(' ') + '...';
  };

  return (
    <Fragment>
      {news?.map((newsObj: any) => (
        <div 
          key={newsObj._id}
          className="w-full border border-gray-200 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg hover:border-[#ac8a4a] transition-all duration-300 bg-white group"
          onClick={() => router.push(`/news/${newsObj._id}`)}
        >
          <div className="p-4 flex items-center gap-x-4">
            <div className="w-[35%]">
              <img
                className="rounded-[10px]"
                src={urlFor(newsObj?.bannerImage).width(600).url()}
                width={400}
                height={150}
                alt={newsObj?.title || ""}
              />
            </div>
            <div className="w-[65%]">
              {/* <div className="flex gap-1 flex-wrap">
                {newsObj?.category?.map((cat: any) => (
                  <label key={cat._id} className="border-[1px] border-[#ddd] px-3 py-1 rounded-full inline-block text-[12px] text-[#b8b8b8]">
                    {cat.name}
                  </label>
                ))}
              </div> */}
              <h4 className="text-[16px] font-semibold pt-2">
                {newsObj?.title}
              </h4>
              <p className="text-[14px] py-2">{truncateToWords(newsObj?.shortDescription)}</p>
              <div className="flex gap-x-2 pt-2 flex-col">
                <span key="date" className="text-custom-bg text-[13px]">
                  {newsObj?.createdAt && !isNaN(Date.parse(newsObj.createdAt))
                    ? new Date(newsObj.createdAt).toLocaleDateString()
                    : "Date not available"}
                </span>
                <h6 key="author" className="text-[13px]">
                  By: <span className="text-blue-600">{newsObj?.createdBy}</span>
                </h6>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default NewsImageCard;

'use client'
import { urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SmallCard = ({ news }: any) => {
  const router = useRouter()
  return (
    <div className="flex wrap flex-col gap-y-4">
      {news?.map((newsObj: any) => (
        <div className="border-[1px] border-[#ddd] rounded-[10px] overflow-hidden cursor-pointer" key={newsObj?._id} onClick={()=>router.push(`/news/${newsObj?._id}`)}>
          <img
            className=""
            src={urlFor(newsObj?.bannerImage).width(600).url()}
            width={400}
            height={100}
            alt=""
          />
          <div className="p-4">
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
            <span className="text-custom-bg text-[13px]">30th April 2025</span>
            <h6 className="text-[13px] pt-1">
              By: <a href="#">{newsObj?.createdBy}</a>
            </h6>
          </div>
        </div>
      ))}
      {/* <div className="border-[1px] border-[#ddd] rounded-[10px] overflow-hidden">
        <Image
          className=""
          src="/assets/images/new-three.jpeg"
          width={400}
          height={100}
          alt=""
        />
        <div className="p-4">
          <label className="border-[1px] border-[#ddd] px-3 py-1 rounded-full inline-block text-[12px] text-[#b8b8b8]">
            GOLD
          </label>
          <h4 className="text-[16px] font-semibold pt-2">
            First-quarter gold demand underpinned by increasing ETF inflows
          </h4>
          <span className="text-custom-bg text-[13px]">30th April 2025</span>
          <h6 className="text-[13px] pt-1">
            By: <a href="#">Tasneem Bulbulia</a>
          </h6>
        </div>
      </div> */}
    </div>
  );
};

export default SmallCard;

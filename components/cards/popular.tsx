import React from "react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/app/lib/sanity";

function PopularCard({ news }: any) {
  return (
    <div className="flex wrap flex-col gap-y-4">
      {news?.map((newsObj: any) => (
        <Link href={`/news/${newsObj?._id}`} key={newsObj?._id}>
          <div className="border-[1px] border-[#ddd] rounded-[10px] overflow-hidden">
            <img
              className=""
              src={urlFor(newsObj?.bannerImage).width(600).url()}
              width={400}
              height={100}
              alt=""
            />
            <div className="p-4">
              {/* <div className="flex gap-x-2 items-center">
                {newsObj?.category?.map((cat: any) => (
                  <span key={cat._id} className="border-[1px] border-[#ddd] px-3 py-1 rounded-full inline-block text-[12px] text-[#b8b8b8]">
                    {cat.name}
                  </span>
                ))}
              </div> */}
              <h4 className="text-[16px] font-semibold pt-2">
                {newsObj?.title}
              </h4>
              <span className="text-custom-bg text-[13px]">30th April 2025</span>
              <h6 className="text-[13px] pt-1">
              By: <span className="text-blue-600">{news[0]?.createdBy}</span>
              </h6>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default PopularCard;

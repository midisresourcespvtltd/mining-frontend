'use client'

import { urlFor } from "@/app/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const BigCard = ({ news }: any) => {
  const router = useRouter()
  return (
    <div>
      <div className="border-[1px] border-[#ddd] rounded-[10px] overflow-hidden" onClick={()=>router.push(`/news/${news?._id}`)}>
        <img
          className=""
          src={urlFor(news?.bannerImage).width(600).url()}
          width={1000}
          height={100}
          alt=""
        />

        <div className="p-4">
          <p className="opacity-[0.7] text-sm pb-2">{`Flashback to Glencore's winter wheat pilot project in Mpumalanga.`}</p>
          {/* <div className="flex gap-1 flex-wrap">
            {news?.category?.map((cat: any) => (
              <label key={cat._id} className="border-[1px] border-[#ddd] px-3 py-1 rounded-full inline-block text-sm text-[#b8b8b8]">
                {cat.name}
              </label>
            ))}
          </div> */}
          <h4 className="text-[22px] pt-2 pb-2 font-semibold">{news?.title}</h4>
          <p className="opacity-[0.7] text-[18px] pb-2">
            {/* The energy coal produced by Glencore in South Africa in the first
            three months of this year was up on the first quarter of last year,
            the London- and Johannesburg-listed mining and marketing company
            reported on Wednesday. This year's 5% higher...{" "} */}
            {news?.shortDescription}
            {}
            {/* <PortableText
              value={news.longDescription}
              components={{
                types: {
                  image: ({ value }) => (
                    <img
                      src={urlFor(value).width(800).url()}
                      alt={value.alt || "Image"}
                      style={{ maxWidth: "100%" }}
                    />
                  ),
                },
              }}
            /> */}
          </p>
          <div className="flex items-center gap-x-2">
            <span className="text-custom-bg text-sm">30th April 2025</span>
            <h6 className="text-sm">
              By: <a href="#">{news?.createdBy}</a>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigCard;

import React from "react";
import Image from "next/image";
import { urlFor } from "@/app/lib/sanity";

function Projects({ news }: any) {
  
  return (
    <div key="projects" className="flex wrap flex-col gap-y-4">
      {news?.map((newsObj: any) => (
      <div key={newsObj?._id} className="border-[1px] border-[#ddd] rounded-[10px] overflow-hidden">
        <Image
          className=""
          src={urlFor(newsObj?.bannerImage).width(600).url()}
          width={400}
          height={100}
          alt=""
        />
        <div className="p-4">
          <h4 className="text-[16px] font-semibold pt-2">
            {newsObj?.title}
          </h4>
          <span className="text-custom-bg text-[13px]"> {newsObj?.createdAt && !isNaN(Date.parse(newsObj.createdAt))
                    ? new Date(newsObj.createdAt).toLocaleDateString()
                    : "Date not available"}</span>
          <h6 className="text-[13px] pt-1">
            By: <a href="#">{newsObj?.createdBy}</a>
          </h6>
        </div>
      </div>
      ))}

      <div className="text-right">
        <a className="bk-btn">
          More <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  );
}

export default Projects;

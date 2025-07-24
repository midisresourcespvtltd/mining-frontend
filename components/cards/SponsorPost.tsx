import { urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import { Fragment } from "react";

const SponsorPost = ({news}:any) => {
  return (
    <Fragment>
      {news?.map((newsObj: any) => (
      <div className="w-[100%] flex items-center bg-[#ac8a4a21] border-[1px] border-[#ddd] rounded-[10px] overflow-hidden" key={newsObj?._id}>
        <div className="w-[35%]">
        <img
          className=""
          src={urlFor(newsObj?.bannerImage).width(600).url()}
          width={400}
          height={100}
          alt=""
        />
        </div>
        <div className="w-[65%]">
        <div className="p-4">
          <label className="border-[1px] border-[#767676] px-3 py-1 rounded-full inline-block text-[13px] text-[#767676]">
            SPONSORED POST
          </label>
          <h4 className="text-[16px] font-semibold pt-2">
            {newsObj?.title}
          </h4>
        </div>
        </div>
      </div>)
      )}

      {/* <div className="w-[100%] flex items-center bg-[#ac8a4a21] border-[1px] border-[#ddd] rounded-[10px] overflow-hidden">
        <div className="w-[35%]">
        <Image
          className=""
          src="/assets/images/media-two.jpg"
          width={400}
          height={100}
          alt=""
        />
        </div>
         <div className="w-[65%]">
        <div className="p-4">
          <label className="border-[1px] border-[#767676] px-3 py-1 rounded-full inline-block text-[13px] text-[#767676]">
            SPONSORED POST
          </label>
          <h4 className="text-[16px] font-semibold pt-2">
            Webinar to spotlight innovation, export growth in SA agriculture
          </h4>
        </div>
        </div>
      </div>
      <div className="w-[100%] flex items-center bg-[#ac8a4a21] border-[1px] border-[#ddd] rounded-[10px] overflow-hidden">
        <div className="w-[35%]">
        <Image
          className=""
          src="/assets/images/media-three.jpeg"
          width={400}
          height={100}
          alt=""
        />
        </div>
        
        <div className="w-[65%]">
        <div className="p-4">
          <label className="border-[1px] border-[#767676] px-3 py-1 rounded-full inline-block text-[13px] text-[#767676]">
            SPONSORED POST
          </label>
          <h4 className="text-[16px] font-semibold pt-2">
            Webinar to spotlight innovation, export growth in SA agriculture
          </h4>
        </div>
        </div>
      </div>

      <div className="w-[100%] flex items-center bg-[#ac8a4a21] border-[1px] border-[#ddd] rounded-[10px] overflow-hidden">
        <div className="w-[35%]">
        <Image
          className=""
          src="/assets/images/media-four.jpg"
          width={400}
          height={100}
          alt=""
        />
        </div>
        <div className="w-[65%]">
        <div className="p-4">
          <label className="border-[1px] border-[#767676] px-3 py-1 rounded-full inline-block text-[13px] text-[#767676]">
            SPONSORED POST
          </label>
          <h4 className="text-[16px] font-semibold pt-2">
            Webinar to spotlight innovation, export growth in SA agriculture
          </h4>
        </div>
        </div>
      </div> */}
    </Fragment>
  );
};

export default SponsorPost;

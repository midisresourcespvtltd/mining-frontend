import Image from "next/image";
import { Fragment } from "react";

const MediaCard = () => {
  return (
    <Fragment>
      <div className="w-[25%] border-[1px] border-[#ddd] rounded-[10px] overflow-hidden">
        <Image
          className=""
          src="/assets/images/new-one.jpg"
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
      </div>

      <div className="w-[25%] border-[1px] border-[#ddd] rounded-[10px] overflow-hidden">
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
      </div>
      <div className="w-[25%] border-[1px] border-[#ddd] rounded-[10px] overflow-hidden">
        <Image
          className=""
          src="/assets/images/new-one.jpg"
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
      </div>

      <div className="w-[25%] border-[1px] border-[#ddd] rounded-[10px] overflow-hidden">
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
      </div>
    </Fragment>
  );
};

export default MediaCard;

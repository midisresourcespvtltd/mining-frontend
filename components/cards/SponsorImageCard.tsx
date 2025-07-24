import Image from "next/image";
import { Fragment } from "react";

const SponsorImageCard = () => {
  return (
    <Fragment>
      <div className="w-[100%] bg-[#ddd] border-[1px] border-[#ddd] rounded-[10px] overflow-hidden">
        <div className="p-3 flex items-center gap-x-4">
          <div className="w-[30%]">
            <Image
              className="rounded-[10px]"
              src="/assets/images/media-one.jpg"
              width={400}
              height={100}
              alt=""
            />
          </div>
          <div className="w-[70%]">
            <label className="border-[1px] border-[#767676] px-3 py-1 rounded-full inline-block text-[13px] text-[#767676]">
              SPONSORED POST
            </label>
            <h4 className="text-[16px] font-semibold pt-2">
              Elevate your engine performance with Astron Energy
            </h4>
          </div>
        </div>
      </div>

           <div className="w-[100%] bg-[#ddd] border-[1px] border-[#ddd] rounded-[10px] overflow-hidden">
        <div className="p-3 flex items-center gap-x-4">
          <div className="w-[30%]">
            <Image
              className="rounded-[10px]"
              src="/assets/images/media-two.jpg"
              width={400}
              height={100}
              alt=""
            />
          </div>
          <div className="w-[70%]">
            <label className="border-[1px] border-[#767676] px-3 py-1 rounded-full inline-block text-[13px] text-[#767676]">
              SPONSORED POST
            </label>
            <h4 className="text-[16px] font-semibold pt-2">
              Elevate your engine performance with Astron Energy
            </h4>
          </div>
        </div>
      </div>
     <div className="w-[100%] bg-[#ddd] border-[1px] border-[#ddd] rounded-[10px] overflow-hidden">
        <div className="p-3 flex items-center gap-x-4">
          <div className="w-[30%]">
            <Image
              className="rounded-[10px]"
              src="/assets/images/media-three.jpeg"
              width={400}
              height={100}
              alt=""
            />
          </div>
          <div className="w-[70%]">
            <label className="border-[1px] border-[#767676] px-3 py-1 rounded-full inline-block text-[13px] text-[#767676]">
              SPONSORED POST
            </label>
            <h4 className="text-[16px] font-semibold pt-2">
              Elevate your engine performance with Astron Energy
            </h4>
          </div>
        </div>
      </div>

          <div className="w-[100%] bg-[#ddd] border-[1px] border-[#ddd] rounded-[10px] overflow-hidden">
        <div className="p-3 flex items-center gap-x-4">
          <div className="w-[30%]">
            <Image
              className="rounded-[10px]"
              src="/assets/images/media-four.jpg"
              width={400}
              height={100}
              alt=""
            />
          </div>
          <div className="w-[70%]">
            <label className="border-[1px] border-[#767676] px-3 py-1 rounded-full inline-block text-[13px] text-[#767676]">
              SPONSORED POST
            </label>
            <h4 className="text-[16px] font-semibold pt-2">
              Elevate your engine performance with Astron Energy
            </h4>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SponsorImageCard;

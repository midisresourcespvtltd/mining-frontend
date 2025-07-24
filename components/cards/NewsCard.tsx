import { Fragment } from "react";

const NewsCard = ({ news }: any) => {
  return (
    <Fragment>
      {news?.map((newsObj: any) => (
        <div className="w-[25%] border-[1px] border-[#ddd] rounded-[10px] overflow-hidden" key={newsObj._id}>
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
            <div className="flex  gap-x-2 pt-2 flex-col">
              <span className="text-custom-bg text-[13px]">
                30th April 2025
              </span>
              <h6 className="text-[13px] ">
                By: <a href="#">{newsObj?.createdBy}</a>
              </h6>
            </div>
          </div>
        </div>
      ))}
      {/* <div className="w-[25%] border-[1px] border-[#ddd] rounded-[10px] overflow-hidden">
        <div className="p-4">
          <label className="border-[1px] border-[#ddd] px-3 py-1 rounded-full inline-block text-[12px] text-[#b8b8b8]">
            MANGANESE
          </label>
          <h4 className="text-[16px] font-semibold pt-2">
            Jupiter reports strong quarterly performance at Tshipi
          </h4>
          <div className="flex  gap-x-2 pt-2 flex-col">
            <span className="text-custom-bg text-[13px]">30th April 2025</span>
            <h6 className="text-[13px] ">
              By: <a href="#">Tasneem Bulbulia</a>
            </h6>
          </div>
        </div>
      </div>
      <div className="w-[25%] border-[1px] border-[#ddd] rounded-[10px] overflow-hidden">
        <div className="p-4">
          <label className="border-[1px] border-[#ddd] px-3 py-1 rounded-full inline-block text-[12px] text-[#b8b8b8]">
            PLATINUM GROUP METALS
          </label>
          <h4 className="text-[16px] font-semibold pt-2">
            Sylvania increases full-year output guidance again
          </h4>
          <div className="flex  gap-x-2 pt-2 flex-col">
            <span className="text-custom-bg text-[13px]">30th April 2025</span>
            <h6 className="text-[13px] ">
              By: <a href="#">Tasneem Bulbulia</a>
            </h6>
          </div>
        </div>
      </div>
      <div className="w-[25%] border-[1px] border-[#ddd] rounded-[10px] overflow-hidden">
        <div className="p-4">
          <label className="border-[1px] border-[#ddd] px-3 py-1 rounded-full inline-block text-[12px] text-[#b8b8b8]">
            MINING SERVICES
          </label>
          <h4 className="text-[16px] font-semibold pt-2">
            MC Mining achieves significant development milestones at Makhado
          </h4>
          <div className="flex gap-x-2 pt-2 flex-col">
            <span className="text-custom-bg text-[13px]">30th April 2025</span>
            <h6 className="text-[13px] ">
              By: <a href="#">Tasneem Bulbulia</a>
            </h6>
          </div>
        </div>
      </div> */}
    </Fragment>
  );
};

export default NewsCard;

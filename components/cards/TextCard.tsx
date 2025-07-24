'use client'

import { useRouter } from "next/navigation";

const TextCard = ({news}:any) => {
  const router = useRouter()
  return (
    <div className="flex wrap flex-col gap-y-4">
      {news?.map((newsObj:any)=>
      <div className="border-[1px] border-[#ddd] rounded-[10px] overflow-hidden" key={newsObj._id}  onClick={()=>router.push(`/news/${newsObj?._id}`)}>
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
          <div className="flex items-center gap-x-2 pt-2">
            <span className="text-custom-bg text-[13px]">30th April 2025</span>
            <h6 className="text-[13px] ">
              By: <a href="#">{newsObj?.createdBy}</a>
            </h6>
          </div>
        </div>
      </div>
      )}
      {/* <div className="border-[1px] border-[#ddd] rounded-[10px] overflow-hidden">
        <div className="p-4">
          <label className="border-[1px] border-[#ddd] px-3 py-1 rounded-full inline-block text-[12px] text-[#b8b8b8]">
            MANGANESE
          </label>
          <h4 className="text-[16px] font-semibold pt-2">
            Jupiter reports strong quarterly performance at Tshipi
          </h4>
          <div className="flex items-center gap-x-2 pt-2">
            <span className="text-custom-bg text-[13px]">30th April 2025</span>
            <h6 className="text-[13px] ">
              By: <a href="#">Tasneem Bulbulia</a>
            </h6>
          </div>
        </div>
      </div>
      <div className="border-[1px] border-[#ddd] rounded-[10px] overflow-hidden">
        <div className="p-4">
          <label className="border-[1px] border-[#ddd] px-3 py-1 rounded-full inline-block text-[12px] text-[#b8b8b8]">
            PLATINUM GROUP METALS
          </label>
          <h4 className="text-[16px] font-semibold pt-2">
            Sylvania increases full-year output guidance again
          </h4>
          <div className="flex items-center gap-x-2 pt-2">
            <span className="text-custom-bg text-[13px]">30th April 2025</span>
            <h6 className="text-[13px] ">
              By: <a href="#">Tasneem Bulbulia</a>
            </h6>
          </div>
        </div>
      </div>
      <div className="border-[1px] border-[#ddd] rounded-[10px] overflow-hidden">
        <div className="p-4">
          <label className="border-[1px] border-[#ddd] px-3 py-1 rounded-full inline-block text-[12px] text-[#b8b8b8]">
            MINING SERVICES
          </label>
          <h4 className="text-[16px] font-semibold pt-2">
            MC Mining achieves significant development milestones at Makhado
          </h4>
          <div className="flex items-center gap-x-2 pt-2">
            <span className="text-custom-bg text-[13px]">30th April 2025</span>
            <h6 className="text-[13px] ">
              By: <a href="#">Tasneem Bulbulia</a>
            </h6>
          </div>
        </div>
      </div> */}
      <div className="text-right">
        <a className='bk-btn'>More <i className="fas fa-arrow-right"></i></a>
      </div>
    </div>
  );
};

export default TextCard;

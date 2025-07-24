import React from 'react'
import Image from "next/image";

function Topics() {
  return (
     <div className="flex wrap flex-col gap-y-4">
                       <div className="flex gap-x-3 items-center border-[1px] border-[#ddd] rounded-[10px] overflow-hidden">
                         <Image
                           className=""
                           src="/assets/images/wer.jpg"
                           width={511}
                           height={275}
                           alt=""
                         />
                         <div className="p-4">
                           <h4 className="text-[16px] font-semibold pt-2">
                            Africa
                           </h4>
                           <p className='py-2 text-[14px]'>Weir Minerals is committed to delivering market-leading products and services. Our whole project, whole process solutions are designed to meet both... </p>
                         </div>
                       </div>
                   <div className="flex gap-x-3 items-center border-[1px] border-[#ddd] rounded-[10px] overflow-hidden">
                         <Image
                           className=""
                           src="/assets/images/wer.jpg"
                           width={511}
                           height={275}
                           alt=""
                         />
                         <div className="p-4">
                           <h4 className="text-[16px] font-semibold pt-2">
                            Africa
                           </h4>
                           <p className='py-2 text-[14px]'>Weir Minerals is committed to delivering market-leading products and services. Our whole project, whole process solutions are designed to meet both... </p>
                         </div>
                       </div>
                         <div className="flex gap-x-3 items-center border-[1px] border-[#ddd] rounded-[10px] overflow-hidden">
                         <Image
                           className=""
                           src="/assets/images/wer.jpg"
                           width={511}
                           height={275}
                           alt=""
                         />
                         <div className="p-4">
                           <h4 className="text-[16px] font-semibold pt-2">
                            Africa
                           </h4>
                           <p className='py-2 text-[14px]'>Weir Minerals is committed to delivering market-leading products and services. Our whole project, whole process solutions are designed to meet both... </p>
                         </div>
                       </div>
                         <div className="flex gap-x-3 items-center border-[1px] border-[#ddd] rounded-[10px] overflow-hidden">
                         <Image
                           className=""
                           src="/assets/images/wer.jpg"
                           width={511}
                           height={275}
                           alt=""
                         />
                         <div className="p-4">
                           <h4 className="text-[16px] font-semibold pt-2">
                            Africa
                           </h4>
                           <p className='py-2 text-[14px]'>Weir Minerals is committed to delivering market-leading products and services. Our whole project, whole process solutions are designed to meet both... </p>
                         </div>
                       </div>
                       <div className='text-right'>
               <a className="bk-btn">More <i className="fas fa-arrow-right"></i></a>
                       </div>
                      
                     </div>
  )
}

export default Topics

import React from 'react'
import Image from "next/image";

function Showroom() {
  return (
      <div className="flex wrap flex-col gap-y-4">
                   <div className="border-[1px] border-[#ddd] rounded-[10px] overflow-hidden">
                     <Image
                       className=""
                       src="/assets/images/roomone.jpg"
                       width={400}
                       height={100}
                       alt=""
                     />
                     <div className="p-4">
                     <span className='border rounded-full px-4 py-1'>Sewer Cleaning</span>
                       <h4 className="text-[16px] font-semibold pt-2">
                         Werner South Africa Pumps & Equipment (PTY) LTD
                       </h4>
                       <p className='py-2 text-[14px]'>For over 30 years, Werner South Africa Pumps & Equipment (PTY) LTD has been designing, manufacturing, supplying and maintaining specialist...</p>
                       <a className='text-[#ac8a4a] text-[14px]' href='#'>VISIT SHOWROOM <i className="fas fa-arrow-right"></i></a>
                     </div>
                   </div>
             
                   <div className="border-[1px] border-[#ddd] rounded-[10px] overflow-hidden">
                     <Image
                       className=""
                       src="/assets/images/roomtwo.jpg"
                       width={400}
                       height={100}
                       alt=""
                     />
                       <div className="p-4">
                     <span className='border rounded-full px-4 py-1'>Sewer Cleaning</span>
                       <h4 className="text-[16px] font-semibold pt-2">
                         Werner South Africa Pumps & Equipment (PTY) LTD
                       </h4>
                       <p className='py-2 text-[14px]'>For over 30 years, Werner South Africa Pumps & Equipment (PTY) LTD has been designing, manufacturing, supplying and maintaining specialist...</p>
                       <a className='text-[#ac8a4a] text-[14px]' href='#'>VISIT SHOWROOM <i className="fas fa-arrow-right"></i></a>
                     </div>
                   </div>
                     <div className="border-[1px] border-[#ddd] rounded-[10px] overflow-hidden">
                     <Image
                       className=""
                       src="/assets/images/roomthree.jpg"
                       width={400}
                       height={100}
                       alt=""
                     />
                    <div className="p-4">
                     <span className='border rounded-full px-4 py-1'>Sewer Cleaning</span>
                       <h4 className="text-[16px] font-semibold pt-2">
                         Werner South Africa Pumps & Equipment (PTY) LTD
                       </h4>
                       <p className='py-2 text-[14px]'>For over 30 years, Werner South Africa Pumps & Equipment (PTY) LTD has been designing, manufacturing, supplying and maintaining specialist...</p>
                       <a className='text-[#ac8a4a] text-[14px]' href='#'>VISIT SHOWROOM <i className="fas fa-arrow-right"></i></a>
                     </div>
                   </div>
             
                   <div className="border-[1px] border-[#ddd] rounded-[10px] overflow-hidden">
                     <Image
                       className=""
                       src="/assets/images/roomfour.jpg"
                       width={400}
                       height={100}
                       alt=""
                     />
                 <div className="p-4">
                     <span className='border rounded-full px-4 py-1'>Sewer Cleaning</span>
                       <h4 className="text-[16px] font-semibold pt-2">
                         Werner South Africa Pumps & Equipment (PTY) LTD
                       </h4>
                       <p className='py-2 text-[14px]'>For over 30 years, Werner South Africa Pumps & Equipment (PTY) LTD has been designing, manufacturing, supplying and maintaining specialist...</p>
                       <a className='text-[#ac8a4a] text-[14px]' href='#'>VISIT SHOWROOM <i className="fas fa-arrow-right"></i></a>
                     </div>
                   </div>
                   <div className='text-right'>
           <a className="bk-btn">More <i className="fas fa-arrow-right"></i></a>
                   </div>
                  
                 </div>
  )
}

export default Showroom

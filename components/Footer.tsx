
import Image from "next/image";
import Slider from "react-slick";

export default function Footer() {

  return (
    <div className="bg-[#000] pt-[90px]">
      <div className="max-w-[1300px] m-auto">
        <div className="flex flex-wrap">
          <div className="w-[100%] pr-0 text-center">
            <Image
              className="m-auto"
              src="/assets/images/logo-png.png"
              width={250}
              height={100}
              alt=""
            />
          </div>
          <div className="w-[100%]">
            <ul className="flex gap-x-12 justify-center pt-10">
              <li className="pb-2">
                <a href="#" className="text-[#ECECEC] text-15xl font-medium">
                  TOPIC
                </a>
              </li>
              <li className="pb-2">
                <a href="#" className="text-[#ECECEC] text-15xl font-medium">
                  ABOUT US
                </a>
              </li>
              <li className="pb-2">
                <a href="#" className="text-[#ECECEC] text-15xl font-medium">
                  MARKETING VIDEOS
                </a>
              </li>
              <li className="pb-2">
                <a href="#" className="text-[#ECECEC] text-15xl font-medium">
                  SUBSCRIPTION
                </a>
              </li>
              <li className="pb-2">
                <a href="#" className="text-[#ECECEC] text-15xl font-medium">
                  APPS
                </a>
              </li>
            </ul>
            <ul className="flex gap-x-12 justify-center pt-3 pb-10">
              <li className="pb-2">
                <a href="#" className="text-[#ECECEC] text-15xl font-medium">
                  Comment Guideline
                </a>
              </li>
              <li className="pb-2">
                <a href="#" className="text-[#ECECEC] text-15xl font-medium">
                  Legal Notice
                </a>
              </li>
              <li className="pb-2">
                <a href="#" className="text-[#ECECEC] text-15xl font-medium">
                  Copyright © 2025
                </a>
              </li>
            </ul>
          </div>
          <div className="w-[100%]">
            <ul className="fotter-logo flex flex-wrap gap-x-12 justify-center border-t-[1px]  border-b-[1px] border-[#fff] py-8 ">
              <li>
                {" "}
                <Image
                  className="m-auto"
                  src="/assets/images/ftone.png"
                  width={130}
                  height={100}
                  alt=""
                />
              </li>
              <li>
                {" "}
                <Image
                  className="m-auto"
                  src="/assets/images/fttwo.png"
                  width={130}
                  height={100}
                  alt=""
                />
              </li>
              <li>
                {" "}
                <Image
                  className="m-auto"
                  src="/assets/images/ftthree.png"
                  width={130}
                  height={100}
                  alt=""
                />
              </li>
              <li>
                {" "}
                <Image
                  className="m-auto"
                  src="/assets/images/ftfour.png"
                  width={130}
                  height={100}
                  alt=""
                />
              </li>
              <li>
                {" "}
                <Image
                  className="m-auto"
                  src="/assets/images/ftfive.png"
                  width={180}
                  height={130}
                  alt=""
                />
              </li>
              <li>
                {" "}
                <Image
                  className="m-auto"
                  src="/assets/images/ftsix-n.png"
                  width={180}
                  height={130}
                  alt=""
                />
              </li>
              <li>
                {" "}
                <Image
                  className="m-auto"
                  src="/assets/images/ftseven.png"
                  width={180}
                  height={130}
                  alt=""
                />
              </li>
               <li>
                {" "}
                <Image
                  className="m-auto"
                  src="/assets/images/fteight.png"
                  width={180}
                  height={130}
                  alt=""
                />
              </li>
               <li>
                {" "}
                <Image
                  className="m-auto"
                  src="/assets/images/ftnine.png"
                  width={180}
                  height={130}
                  alt=""
                />
              </li>
               <li>
                {" "}
                <Image
                  className="m-auto"
                  src="/assets/images/ftten.png"
                  width={180}
                  height={130}
                  alt=""
                />
              </li>
               <li>
                {" "}
                <Image
                  className="m-auto"
                  src="/assets/images/fteleven-n.png"
                  width={180}
                  height={130}
                  alt=""
                />
              </li>
            </ul>
          </div>
          {/* <div className="w-[100%]">
            <ul className="flex gap-x-12 justify-center  py-8 items-center">
              <li>
                {" "}
                <Image
                  className="m-auto"
                  src="/assets/images/lab-one.png"
                  width={60}
                  height={60}
                  alt=""
                />
              </li>
              <li>
                {" "}
                <Image
                  className="m-auto"
                  src="/assets/images/lab-two.jpg"
                  width={60}
                  height={60}
                  alt=""
                />
              </li>
              <li>
                {" "}
                <Image
                  className="m-auto"
                  src="/assets/images/lab-three.png"
                  width={60}
                  height={60}
                  alt=""
                />
              </li>
            </ul>
          </div> */}
          <div className="slick-main-slider">

          </div>
        </div>
      </div>
    </div>
  );
}

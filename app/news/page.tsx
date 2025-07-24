'use client';

import { Fragment } from "react";
import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmallCard from "@/components/cards/SmallCard";
import BigCard from "@/components/cards/BigCard";
import TextCard from "@/components/cards/TextCard";
import NewsCard from "@/components/cards/NewsCard";
import SponsorPost from "@/components/cards/SponsorPost";
import NewsImageCard from "@/components/cards/NewsImageCard";
import SponsorImageCard from "@/components/cards/SponsorImageCard";
import SectorList from "@/components/cards/SectorList";
import MagazineCard from "@/components/cards/MagazineCard";
import Advantages from "@/components/Advantages";
import Adds from "@/components/adds";
import PopularCard from "@/components/cards/popular";
import Latestmedia from "@/components/cards/latestmedia";
import Researchreport from "@/components/cards/researchreport";
import Projects from "@/components/cards/projects";
import Showroom from "@/components/cards/showroom";

function Detail() {
  return (
    <>
      
      <div className="max-w-[97%] m-auto">
        <div className="flex gap-x-5 pt-8">
          <div className="w-[72%] ">
            {/* top-section */}
            <div className="flex gap-x-5 pt-8 border-b-1 border-[#9a9a9a] pb-6">
              <div className="w-[25%]">
                <div className="pb-6">
                  <Image
                    className=""
                    src="/assets/images/delta.jpg"
                    width={1000}
                    height={100}
                    alt=""
                  />
                </div>
                <h3 className="pb-2">Research Reports</h3>
                <Researchreport />
                <div className="">
                  <h3 className="pb-2">Projects</h3>
                  <PopularCard />

                  <div className="pt-4 pb-5">
                    <Image
                      className=""
                      src="/assets/images/pop.gif"
                      width={1000}
                      height={100}
                      alt=""
                    />
                  </div>

                  <div className="pt-4 pb-5">
                    <Image
                      className=""
                      src="/assets/images/pop.gif"
                      width={1000}
                      height={100}
                      alt=""
                    />
                  </div>

                  <div className="pt-4 pb-5">
                    <Image
                      className=""
                      src="/assets/images/bov.jpg"
                      width={1000}
                      height={100}
                      alt=""
                    />
                  </div>
                  <h3 className="pb-2">Projects</h3>
                  <Projects />
                  <div className="pt-4 pb-5">
                    <Image
                      className=""
                      src="/assets/images/doc.gif"
                      width={1000}
                      height={100}
                      alt=""
                    />
                  </div>
                  <h3 className="pb-2">Showroom</h3>
                  <Showroom />
                </div>
              </div>
              <div className="w-[75%]">
                <div className="pb-4">
                  <Image
                    className=""
                    src="/assets/images/curry.jpg"
                    width={1000}
                    height={100}
                    alt=""
                  />
                </div>
                <div className="border-[1px] border-[#ddd] rounded-[15px] mt-5 p-9">
                  <div className="flex justify-between">
                    <span className="border-[1px] border-[#ddd] px-3 py-1 rounded-full inline-block text-[12px] text-[#b8b8b8]">
                      GOLD
                    </span>
                    <a href="#">Back</a>
                  </div>
                  <h3 className="text-[30px] font-bold leading-9 mt-4 mb-5">
                    AngloGold cash up 607%, earnings up 671%, gold output up
                    22%, costs up only 1%
                  </h3>
                  <Image
                    className="rounded-[10px]"
                    src="/assets/images/new-two.jpg"
                    width={1000}
                    height={100}
                    alt=""
                  />
                  <p className="text-[15px] my-3 ">
                    AngloGold{" "}
                    {`Ashanti first-quarter presentation covered by Mining Weekly's Martin Creamer. Video: Darlene Creamer.`}
                  </p>
                  <ul className="flex gap-x-4 mb-5">
                    <li className="text-[#999595]">9th May 2025</li>
                    <li className="text-[#999595]">
                      By: <a href="#">Martin Creamer</a>
                    </li>
                    <li className="text-[#999595]">Creamer Media Editor</li>
                  </ul>
                  <p className="mb-4 text-[#454545] text-[23px] ">
                    JOHANNESBURG (miningweekly.com) â€“ In the first quarter
                    (Q1) of this year, gold mining company AngloGold Ashanti has
                    reported a sevenfold increase in free cash flow and an
                    almost eightfold rise in profit attributable to equity
                    shareholders compared with the corresponding period of last
                    year, underpinned by higher gold production, while there was
                    a smidgen in cost rise, amid an average gold price received
                    per ounce increasing to $2 874/oz from $2 063/oz in Q1 2024.
                  </p>
                  <p className="mb-4 text-[#454545] text-[18px]">
                    Free cash flow was up by a stunning 607% to $403-million on
                    22% more gold production and the cost rise was a mere 1%.
                    (Also watch attached Creamer Media video.)
                  </p>
                  <p className="mb-4 text-[#454545] text-[18px]">
                    Managed operations delivered an even higher 28% increase
                    year-on-year, primarily driven by the first-time
                    contribution from the recently acquired Sukari gold mine in
                    Egypt and solid output improvements at Siguiri in Guinea and
                    Tropicana in Australia.
                  </p>
                  <p className="mb-4 text-[#454545] text-[18px]">
                    {`"This is a very strong start to the year, particularly at our
            managed operations,â€ AngloGold CEO Alberto Calderon remarked during
            Friday's presentation of results covered by Mining Weekly.`}
                  </p>
                  <p className="mb-4 text-[18px] text-[#454545]">
                    â€œWeâ€™ve seen strong growth in production with the
                    addition of Sukari and our cost control efforts continue to
                    offset inflation, which has ensured that we capture the
                    benefit of the higher gold price.â€
                  </p>
                  <p className="mb-4 text-[18px] text-[#454545]">
                    AngloGold Ashanti remains committed to closing the valuation
                    gap with its North American peers by driving continuous
                    improvements in operating performance, enhancing cash
                    conversion, extending life-of-mine, and maintaining a
                    disciplined approach to capital allocation.
                  </p>
                  <h4 className="text-[20px] font-bold mb-4">
                    QUARTERLY DIVIDEND IN LINE WITH NEW POLICY
                  </h4>
                  <p className="mb-4 text-[18px] text-[#454545]">
                    Under its new dividend policy, AngloGold Ashanti will target
                    a 50% payout of annual free cash flow, subject to
                    maintaining an adjusted net debt to adjusted Ebitda ratio of
                    1.0 times.
                  </p>
                  <p className="mb-4 text-[18px] text-[#454545]">
                    The new dividend policy also introduced a base dividend of
                    $0.50 a share a year, payable in quarterly instalments of
                    $0.125 a share.
                  </p>
                  <div className="py-4">
                    <Image
                      className=""
                      src="/assets/images/curry.jpg"
                      width={1000}
                      height={100}
                      alt=""
                    />
                  </div>
                  <p className="mb-4 text-[18px] text-[#454545]">
                    When required, a true-up payment in Q4 of each year will top
                    up the annual base dividend of $0.50 a share to reach the
                    50% annual free cash flow target. The base dividend
                    establishes a minimum return, ensuring consistent
                    shareholder payouts throughout commodity price cycles. An
                    interim dividend of $63-million, or $0.125 a share, was
                    declared for Q1 2025.
                  </p>
                  <h4 className="text-[20px] font-bold mb-4">
                    QUARTERLY DIVIDEND IN LINE WITH NEW POLICY
                  </h4>
                  <p className="mb-4 text-[18px] text-[#454545]">
                    Under its new dividend policy, AngloGold Ashanti will target
                    a 50% payout of annual free cash flow, subject to
                    maintaining an adjusted net debt to adjusted Ebitda ratio of
                    1.0 times.
                  </p>
                  <p className="mb-4 text-[18px] text-[#454545]">
                    The new dividend policy also introduced a base dividend of
                    $0.50 a share a year, payable in quarterly instalments of
                    $0.125 a share.
                  </p>
                  <div className="py-4">
                    <Image
                      className=""
                      src="/assets/images/curry.jpg"
                      width={1000}
                      height={100}
                      alt=""
                    />
                  </div>
                  <p className="mb-4 text-[18px] text-[#454545]">
                    When required, a true-up payment in Q4 of each year will top
                    up the annual base dividend of $0.50 a share to reach the
                    50% annual free cash flow target. The base dividend
                    establishes a minimum return, ensuring consistent
                    shareholder payouts throughout commodity price cycles. An
                    interim dividend of $63-million, or $0.125 a share, was
                    declared for Q1 2025.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-9">
              <h3 className="pb-2">Latest Multimedia</h3>
              <div className="detail-col">
                <Latestmedia />
              </div>
            </div>
          </div>
          <div className="w-[10%]">
            <Adds />
          </div>
          <div className="w-[18%]">
            <div className="last-bar top-[325px]">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/Fg06vz1Krcc?si=gwWIU-4UA7cHCQBK" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/Syeu_l3sAJE?si=HxxYp0UrwVkz1AM2" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Detail;

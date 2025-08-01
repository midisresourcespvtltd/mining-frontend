import { partnerLogosData } from "@/data";
import Image from "next/image";
import Slider from "react-slick";
import { Marquee } from "./magicui/marquee";

export default function Footer() {
  return (
    <div className="bg-black pt-16 md:pt-20 lg:pt-24 px-4 sm:px-6 lg:px-8 my-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap">
          {/* Logo Section */}
          <div className="w-full text-center mb-8 md:mb-10">
            <Image
              className="mx-auto"
              src="/assets/images/logo-png.png"
              width={200}
              height={80}
              alt="Company Logo"
              priority
            />
          </div>

          {/* Navigation Links */}
          <div className="w-full">
            {/* Main Navigation */}
            <ul className="flex flex-wrap gap-x-4 gap-y-3 sm:gap-x-8 md:gap-x-12 justify-center mb-6 md:mb-8">
              <li>
                <a
                  href="#"
                  className="text-gray-200 text-sm sm:text-base md:text-lg font-medium hover:text-white transition-colors duration-200"
                >
                  TOPIC
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 text-sm sm:text-base md:text-lg font-medium hover:text-white transition-colors duration-200"
                >
                  ABOUT US
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 text-sm sm:text-base md:text-lg font-medium hover:text-white transition-colors duration-200"
                >
                  MARKETING VIDEOS
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 text-sm sm:text-base md:text-lg font-medium hover:text-white transition-colors duration-200"
                >
                  SUBSCRIPTION
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 text-sm sm:text-base md:text-lg font-medium hover:text-white transition-colors duration-200"
                >
                  APPS
                </a>
              </li>
            </ul>

            {/* Secondary Navigation */}
            <ul className="flex flex-wrap gap-x-4 gap-y-3 sm:gap-x-8 md:gap-x-12 justify-center mb-8 md:mb-10">
              <li>
                <a
                  href="#"
                  className="text-gray-200 text-sm sm:text-base md:text-lg font-medium hover:text-white transition-colors duration-200"
                >
                  Comment Guideline
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 text-sm sm:text-base md:text-lg font-medium hover:text-white transition-colors duration-200"
                >
                  Legal Notice
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 text-sm sm:text-base md:text-lg font-medium hover:text-white transition-colors duration-200"
                >
                  Copyright © 2025
                </a>
              </li>
            </ul>
          </div>
          {/* Partner/Client Logos Section */}
          <div className="w-full">
            <div className="border-t border-b border-white py-6 md:py-8 space-y-6">
              {(() => {
                const topLogos = partnerLogosData.slice(0, 6);
                const bottomLogos = partnerLogosData.slice(6);

                return (
                  <>
                    {/* First Line - Left to Right */}
                    <Marquee
                      pauseOnHover={true}
                      className="gap-8 md:gap-12 lg:gap-16"
                    >
                      {topLogos.map((logo) => (
                        <div
                          key={logo.id}
                          className={`flex items-center justify-center min-w-[140px] md:min-w-[180px] lg:min-w-[200px] ${
                            logo.specialClass || ""
                          }`}
                        >
                          <Image
                            src={logo.src}
                            width={logo.width}
                            height={logo.height}
                            alt={logo.alt}
                            title={logo.name}
                            className="max-w-full h-auto hover:opacity-80 transition-opacity duration-200 cursor-pointer bg-white px-4 py-4 rounded-lg"
                          />
                        </div>
                      ))}
                    </Marquee>

                    {/* Second Line - Right to Left */}
                    <Marquee
                      reverse={true}
                      pauseOnHover={true}
                      className="gap-8 md:gap-12 lg:gap-16"
                    >
                      {bottomLogos.map((logo) => (
                        <div
                          key={`second-${logo.id}`}
                          className={`flex items-center justify-center min-w-[140px] md:min-w-[180px] lg:min-w-[200px] ${
                            logo.specialClass || ""
                          }`}
                        >
                          <Image
                            src={logo.src}
                            width={logo.width}
                            height={logo.height}
                            alt={logo.alt}
                            title={logo.name}
                            className="max-w-full h-auto hover:opacity-80 transition-opacity duration-200 cursor-pointer bg-white px-4 py-4 rounded-lg"
                          />
                        </div>
                      ))}
                    </Marquee>
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";

const AboutUsPage: React.FC = () => {
  return (
    <div>
      {/* Top Banner */}
      <div className="bg-[#ddd] mt-[-22px] md:mt-[-25px]">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left py-10 sm:py-16">
            <h2 className="text-2xl sm:text-3xl md:text-[35px] font-bold mb-2">
              About Us
            </h2>
            <p className="text-sm sm:text-base md:text-lg">
              “Discover the Pulse of the Mining Industry: Your Go-To Source for
              News, Insights, and Investment Opportunities”
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 sm:py-12">
          <p className="mb-5 text-sm sm:text-base leading-relaxed">
            Mining Discovery provides daily mining news, a weekly mining
            newsletter, a monthly mining magazine and an interactive mining
            website for mining companies, mining associations and mining
            executives globally. Mining Discovery is an innovative digital
            publication aimed at bringing business executives up-to-date with
            the latest news, information and trends from across the mining
            industry. Our digital platform includes an interactive website and
            magazine experience that will bring you inside the world of mining
            including comprehensive insight and analysis about the sector.
          </p>
          <p className="mb-5 text-sm sm:text-base leading-relaxed">
            We help businesses fast-track their way to success on digital
            platforms through conversion-optimized campaigns. Let us help you
            take an integrated approach to achieve your business goals through
            Search Engine Optimization, PPC, Social Media Marketing, Video
            Marketing, and more.
          </p>
          <p className="mb-5 text-sm sm:text-base leading-relaxed">
            Mining Discovery is an agency dedicated to finding creative
            solutions for our clients through brand strategy, creative
            communication, and technology. Based in Bangalore, India, Mining
            Discovery is a team of highly experienced core members. We have
            developed as our customers have dependably requested more from us
            than what we do taking a look at the outcomes. With the firm
            conviction that your prosperity is totally basic to our own, we want
            all our clients, regardless of size, to consider us as long-term
            partners.
          </p>
          <p className="text-sm sm:text-base leading-relaxed">
            We do not believe that our work is over once the service is
            delivered. We believe that it begins after the service is generated,
            with the ripples it creates. We want to create success stories of
            brands that glow brightest in the digital space. Our purpose is to
            imprint value to a brand so that it knits a wonderful tell-tale.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pb-8 sm:pb-12">
          <h2 className="text-2xl sm:text-3xl md:text-[35px] font-bold mb-3">
            We Provide High Quality Customer Service
          </h2>
          <p className="mb-5 text-sm sm:text-base leading-relaxed">
            We expertise in Brand Building & Online Reputation Management of
            Local Businesses, Corporate, Politicians, Celebrities, internet
            marketing of Educational or Academic institutes under one roof. We
            strive to bridge the much-needed gap of online and offline marketing
            for our brands hence giving sustainable marketing and faithful
            engaged fans till eternity. We make this conceivable by utilizing
            devices and advances that are:
          </p>
          <a
            className="common-btn inline-block mt-3 px-5 py-2 bg-black text-white text-sm sm:text-base rounded hover:bg-gray-800 transition"
            href="#"
          >
            Contact us
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;

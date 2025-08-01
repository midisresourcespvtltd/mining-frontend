import { Fragment } from "react";

const NewsCard = ({ news }: any) => {
  return (
    <Fragment>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 w-full">
        {news?.map((newsObj: any) => (
          <div 
            className="border border-gray-300 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white" 
            key={newsObj._id}
          >
            <div className="p-4 md:p-5">
              {/* Category Tags - Show on larger screens */}
              {newsObj?.category && newsObj.category.length > 0 && (
                <div className="hidden sm:flex gap-2 flex-wrap mb-3">
                  {newsObj.category.slice(0, 2).map((cat: any) => (
                    <span 
                      key={cat._id} 
                      className="border border-gray-300 px-2 py-1 rounded-full text-xs text-gray-600 bg-gray-50"
                    >
                      {cat.name}
                    </span>
                  ))}
                  {newsObj.category.length > 2 && (
                    <span className="text-xs text-gray-500 self-center">
                      +{newsObj.category.length - 2} more
                    </span>
                  )}
                </div>
              )}

              {/* Title */}
              <h4 className="text-sm sm:text-base lg:text-lg font-semibold leading-tight mb-3 text-gray-800 line-clamp-3 hover:text-[#ac8a4a] transition-colors duration-200">
                {newsObj?.title || "Untitled Article"}
              </h4>

              {/* Excerpt - Show on medium screens and up */}
              {newsObj?.excerpt && (
                <p className="hidden md:block text-sm text-gray-600 mb-3 line-clamp-2">
                  {newsObj.excerpt}
                </p>
              )}

              {/* Meta Information */}
              <div className="flex flex-col gap-2 pt-2 border-t border-gray-100">
                <span className="text-xs sm:text-sm text-[#ac8a4a] font-medium">
                  {newsObj?.publishedAt 
                    ? new Date(newsObj.publishedAt).toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })
                    : "30th April 2025"
                  }
                </span>
                <div className="text-xs sm:text-sm text-gray-600">
                  By: {" "}
                  <a 
                    href="#" 
                    className="text-[#ac8a4a] hover:text-[#8b7139] transition-colors duration-200 font-medium"
                  >
                    {newsObj?.createdBy || newsObj?.author || "Staff Writer"}
                  </a>
                </div>
              </div>

              {/* Read More Link - Show on larger screens */}
              <div className="hidden lg:block mt-4">
                <a 
                  href="#" 
                  className="text-sm text-[#ac8a4a] hover:text-[#8b7139] font-medium inline-flex items-center gap-1 transition-colors duration-200"
                >
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fallback when no news */}
      {(!news || news.length === 0) && (
        <div className="col-span-full text-center py-8">
          <div className="text-gray-500 text-sm">
            No news articles available at this time.
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default NewsCard;
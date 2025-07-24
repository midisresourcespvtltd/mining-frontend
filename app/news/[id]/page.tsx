import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SponsorPost from "@/components/cards/SponsorPost";
import BackButton from "@/app/components/BackButton";
import { urlFor } from "@/app/lib/sanity";
import { Fragment } from "react";


async function getNewsById(id: string) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ;
  const res = await fetch(`${baseUrl}/api/news/${id}`, {
    cache: 'no-store'
  });
  
  if (!res.ok) {
    console.log("err",res)
    throw new Error('Failed to fetch news');
  }
  
  const data = await res.json();
  console.log("refg",data)
  return data.data;
}

// Server Component for data fetching
async function NewsData({ params }: { params: { id: string } }) {
  const news = await getNewsById(params.id);
  return <NewsClient news={news} />;
}

// Client Component for rendering
const NewsClient: React.FC<{ news: any }> = ({ news }) => {
  return (
    <Fragment>
    
      <div className="max-w-[1000px] m-auto">
        <div className="border-[1px] border-[#ddd] rounded-[15px] mt-5 p-9">
          <div className="flex justify-between">
            {/* <div className="flex gap-1 flex-wrap">
              {news?.category?.map((cat: any) => (
                <span key={cat._id} className="border-[1px] border-[#ddd] px-3 py-1 rounded-full inline-block text-[12px] text-[#b8b8b8]">
                  {cat.name}
                </span>
              ))}
            </div> */}
            <BackButton />
          </div>
          <h3 className="text-[30px] font-bold leading-9 mt-4 mb-5">
            {news?.title}
          </h3>
          <img
            className="rounded-[10px]"
            src={urlFor(news?.bannerImage).url()}
            width={1000}
            height={100}
            alt={news?.title}
          />
          <p className="text-[15px] my-3 ">
            {news?.shortDescription}
          </p>
          <ul className="flex gap-x-4 mb-5">
            <li className="text-[#999595]">{new Date(news?.publishedAt).toLocaleDateString()}</li>
            <li className="text-[#999595]">
              By: <a href="#">{news?.createdBy}</a>
            </li>
          </ul>
          <div className="prose max-w-none [&_table]:w-full [&_table]:border-collapse [&_table]:my-4 [&_th]:border [&_th]:border-gray-300 [&_th]:px-4 [&_th]:py-2 [&_th]:bg-gray-100 [&_td]:border [&_td]:border-gray-300 [&_td]:px-4 [&_td]:py-2">
            <div dangerouslySetInnerHTML={{ __html: news?.longDescription }} />
          </div>
        </div>
      </div>
      {/* sponsor-sec */}
      <div className="max-w-[1300px] m-auto">
        <div className="pt-12 pb-12">
          <h3 className="pb-2 text-[22px] font-bold">Sponsored Posts</h3>
          <div className="flex gap-x-4">
            <SponsorPost />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default NewsData;

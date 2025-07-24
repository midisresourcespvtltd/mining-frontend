'use client'

import React, { useEffect, useState } from 'react'
import Image from "next/image";
import { urlFor } from '@/app/lib/sanity';

interface MediaItem {
  _id: string;
  thumbnail: string;
  category: string;
  title: string;
  date: string;
  createdBy: string;
}

function Latestmedia() {
  const [mediaData, setMediaData] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  
  useEffect(() => {
    const fetchLatestMedia = async () => {
      try {
        const response = await fetch('/api/latest-media');
        const result = await response.json();
        console.log(result?.data)
        if (result.success) {
          setMediaData(result.data);
        } else {
          setError('Failed to fetch latest media');
        }
      } catch (err) {
        setError('An error occurred while fetching latest media');
      } finally {
        setLoading(false);
      }
    };

    fetchLatestMedia();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log(mediaData)
  return (
    <>
      <div className="flex wrap flex-col gap-y-4">
        {mediaData.map((item) => (
          <div key={item._id} className="border-[1px] border-[#ddd] rounded-[10px] overflow-hidden">
            {item.thumbnail &&
            <Image
              className=""
              src={urlFor(item.thumbnail)?.url()}
              width={400}
              height={100}
              alt={item.title}
            />}
            <div className="p-4">
              {/* <label className="border-[1px] border-[#ddd] px-3 py-1 rounded-full inline-block text-[12px] text-[#b8b8b8]">
                {item.category}
              </label> */}
              <h4 className="text-[16px] font-semibold pt-2">
                {item.title}
              </h4>
              <span className="text-custom-bg text-[13px]">{item.date}</span>
              <h6 className="text-[13px] pt-1">
                By: <a href="#">{item.createdBy || 'Unknown'}</a>
              </h6>
            </div>
          </div>
        ))}
      </div>
      <div className='text-right'>
        <a className="bk-btn">More <i className="fas fa-arrow-right"></i></a>
      </div>
    </>
  )
}

export default Latestmedia

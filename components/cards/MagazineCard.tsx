'use client'

import React, { useEffect, useState } from 'react';
import Image from "next/image";
import { urlFor } from '@/app/lib/sanity';

// interface MagazineItem {
//   _id: string;
//   title: string;
//   description: string;
//   coverImage: string;
//   pdfFile: string;
//   publishedAt: string;
//   createdBy: string;
//   category: string;
//   issueNumber: string;
//   volume: string;
// }

const MagazineCard = () => {
  const [magazineData, setMagazineData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMagazineData = async () => {
      try {
        const response = await fetch('/api/magazine');
        const result = await response.json();
        
        if (result.success) {
          setMagazineData(result.data);
        } else {
          setError('Failed to fetch magazine data');
        }
      } catch (err) {
        setError('An error occurred while fetching magazine data');
      } finally {
        setLoading(false);
      }
    };

    fetchMagazineData();
  }, []);

  if (loading) {
    return <div>Loading magazine data...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Split data into two columns
  const leftColumn = magazineData.slice(0, Math.ceil(magazineData.length / 2));
  const rightColumn = magazineData.slice(Math.ceil(magazineData.length / 2));

  return (
    <div>
      <div className="flex gap-x-5">
        <div className="w-[50%] flex flex-wrap gap-y-4">
          {leftColumn.map((item) => (
            <div key={item._id} className="border-[1px] border-[#ddd] rounded-[10px] overflow-hidden">
              <Image
                className=""
                src={urlFor(item.thumbnail).url()}
                width={700}
                height={100}
                alt={item.name}
              />
              <div className="p-4">
                <label className="border-[1px] border-[#ddd] px-3 py-1 rounded-full inline-block text-[12px] text-[#b8b8b8]">
                  {item.category}
                </label>
                <h4 className="text-[16px] font-semibold pt-2">
                  {item.name}
                </h4>
                {item.description && (
                  <p className="text-[15px]">
                    {item.shortDescription}
                  </p>
                )}
                <span className="text-custom-bg text-[13px]">
                  {new Date(item._createdAt).toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </span>
                <h6 className="text-[13px] pt-1">
                  By: <a href="#">{item.createdBy || 'Unknown'}</a>
                </h6>
              </div>
            </div>
          ))}
        </div>
        <div className="w-[50%] flex flex-wrap gap-y-4">
          {rightColumn.map((item) => (
            <div key={item._id} className="border-[1px] border-[#ddd] rounded-[10px] overflow-hidden">
              <Image
                className=""
                src={urlFor(item.thumbnail).url()}
                width={700}
                height={100}
                alt={item.title}
              />
              <div className="p-4">
                <label className="border-[1px] border-[#ddd] px-3 py-1 rounded-full inline-block text-[12px] text-[#b8b8b8]">
                  {item.category}
                </label>
                <h4 className="text-[16px] font-semibold pt-2">
                  {item.name}
                </h4>
                {item.description && (
                  <p className="text-[15px]">
                    {item.shortDescription}
                  </p>
                )}
                <span className="text-custom-bg text-[13px]">
                  {new Date(item.publishedAt).toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </span>
                <h6 className="text-[13px] pt-1">
                  By: <a href="#">{item.createdBy || 'Unknown'}</a>
                </h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MagazineCard;

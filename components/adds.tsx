'use client';
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import { urlFor } from "@/app/lib/sanity";

// Fisher-Yates shuffle algorithm
const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export default function Adds() {
  const [advertisments, setAdvertisments] = useState<any[]>([]);

  useEffect(() => {
    const fetchAds = async () => {
      const res = await fetch('/api/advertisements');
      const { data } = await res.json();
      // Shuffle the advertisements before setting them in state
      setAdvertisments(shuffleArray([...data]));
    };
    fetchAds();
  }, []);

  return (
    <div>
      {advertisments
        ?.filter((ad: any) => ad.displayOn === "home" && ad.position === "sidebar")
        .map((ad: any) => (
          <div key={ad?._id} className="pb-3">
            <Image
              src={urlFor(ad.banner).url()}
              width={1000}
              height={100}
              alt=""
            />
          </div>
        ))}
    </div>
  );
}

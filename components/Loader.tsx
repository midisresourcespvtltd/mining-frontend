import Image from 'next/image'
import React from 'react'

export default function Loader() {
  return (
    <div className="flex justify-center items-center min-h-screen">
            <Image
              src="/assets/images/loader.gif"
              alt="Loading..."
              width={100}
              height={100}
              // className="animate-spin"
            />
          </div>
  )
}

import React from 'react'
import Image from 'next/image'
import Card from '../Cards/page'
import Link from 'next/link'

const HeroSection = () => {
  return (
<div>
  {/* Hero Section */}
  <div className="relative">
    <Image
      src="/MaskGroup.png"
      alt="pic"
      width={1000}
      height={1000}
      className="w-full h-auto"
    />
  </div>

  {/* Browse The Range Section */}
  <div className="max-w-7xl mx-auto px-4 lg:px-0 my-16 text-center">
    <h1 className="text-2xl lg:text-3xl font-bold font-Poppins text-[#333333]">
      Browse The Range
    </h1>
    <p className="mt-4 text-lg text-[#666666]">
      Lorem ipsum sit amet, consectetur adipiscing elit
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
      <Image
        src="/Mask Group.png"
        alt="Dining"
        width={500}
        height={500}
        className="w-full h-auto"
      />
      <Image
        src="/Mask Group2.png"
        alt="Living"
        width={500}
        height={500}
        className="w-full h-auto"
      />
      <Image
        src="/Mask Group3.png"
        alt="Bedroom"
        width={500}
        height={500}
        className="w-full h-auto"
      />
    </div>

    <div className="flex justify-center space-x-8 mt-6">
      <span className="text-lg font-semibold">Dining</span>
      <span className="text-lg font-semibold">Living</span>
      <span className="text-lg font-semibold">Bedroom</span>
    </div>
  </div>

  {/* Our Products Section */}
  <div className="max-w-7xl mx-auto px-4 lg:px-0 my-16">
    <h1 className="text-center text-2xl lg:text-3xl font-bold font-Poppins">
      Our Products
    </h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
      <Card
        img="/image 1.png"
        title="Syltherine"
        description="Stylish cafe chair"
        price="Rp 2,500,000"
        oldprice="Rp 3,500,000"
      />
      <Card
        img="/image 2.png"
        title="Leviosa"
        description="Stylish cafe chair"
        price="Rp 2,500,000"
        oldprice=""
      />
      <Card
        img="/image 3.png"
        title="Lolito"
        description="Stylish cafe chair"
        price="Rp 7,000,000"
        oldprice="Rp 14,000,000"
      />
      <Card
        img="/images.png"
        title="Syltherine"
        description="Stylish cafe chair"
        price="Rp 5,000,000"
      />
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
      <Card
        img="/image 9.png"
        title="Grifo"
        description="Night lamp"
        price="Rp 1,500,000"
      />
      <Card
        img="/image 6.png"
        title="Muggo"
        description="Small mug"
        price="Rp 150,000"
      />
      <Card
        img="/image 7.png"
        title="Pingky"
        description="Cute bed set"
        price="Rp 7,000,000"
        oldprice="Rp 14,000,000"
      />
      <Card
        img="/images 8.png"
        title="Potty"
        description="Minimalist flower pot"
        price="Rp 5,000,000"
      />
    </div>

    <div className="flex justify-center mt-8">
      <button className="px-6 py-2 border-2 border-[#B88E2F] text-[#B88E2F] font-semibold">
        Show More
      </button>
    </div>
  </div>

  {/* Inspiration Section */}
  <div className="bg-gray-50 py-16">
    <div className="max-w-7xl mx-auto px-4 lg:px-0 flex flex-col lg:flex-row items-center lg:space-x-16">
      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-2xl lg:text-3xl font-bold font-Poppins text-[#3A3A3A]">
          50+ Beautiful rooms <br /> inspiration
        </h1>
        <p className="mt-4 text-[#666666]">
          Our designer already made a lot of beautiful <br /> prototype rooms
          that inspire you.
        </p>
        <button className="mt-6 px-6 py-2 bg-[#B88E2F] text-white font-semibold">
          Explore More
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 lg:mt-0">
        <Image
          src="/Rectangle 24.png"
          alt="Inspiration 1"
          width={500}
          height={500}
          className="w-full h-auto"
        />
        <Image
          src="/Rectangle 25.png"
          alt="Inspiration 2"
          width={500}
          height={500}
          className="w-full h-auto"
        />
      <Image
  src="/Rectangle 26.png"
  alt="Inspiration 3"
  width={500}
  height={500}
  className="w-screen h-[486px] "
/>

      </div>
    </div>
  </div>
</div>

  )
}

export default HeroSection
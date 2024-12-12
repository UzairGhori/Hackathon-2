import Image from "next/image";
import React from "react";
import BlowHero from "../Component/ShopBelow/page";
import { IoIosArrowForward } from "react-icons/io";

export default function ShopHero() {
  interface Card {
    name: string;
    age: number;
    description: string;
    image: string;
    price: string;
  }

  const data: Card[] = [
    {
      name: "Syltherine",
      price: "Rp 2.500.000",
      age: 30,
      image: "/Mask Group.png",
      description: "Stylish cafe chair",
    },
    {
      name: "Repira",
      price: "Rp 2.500.000",
      age: 25,
      image: "/images.png",
      description: "A New Item description.",
    },
    {
      name: "New Item",
      price: "Rp 2.500.000",
      age: 35,
      image: "/image 1.png",
      description: "A new item description.",
    },
    {
      name: "",
      price: "Rp 2.500.000",
      age: 28,
      image: "/Featured Products.png",
      description: "Stylish cafe chair",
    },
    {
        name: "Syltherine",
        price: "Rp 2.500.000",
        age: 30,
        image: "/Mask Group.png",
        description: "Stylish cafe chair",
      },
      {
        name: "Repira",
        price: "Rp 2.500.000",
        age: 25,
        image: "/images.png",
        description: "A New Item description.",
      },
      {
        name: "New Item",
        price: "Rp 2.500.000",
        age: 35,
        image: "/image 1.png",
        description: "A new item description.",
      },
      {
        name: "Leviosa",
        price: "Rp 2.500.000",
        age: 28,
        image: "/image 2.png",
        description: "Stylish cafe chair",
      },
      {
        name: "Syltherine",
        price: "Rp 2.500.000",
        age: 30,
        image: "/Mask Group.png",
        description: "Stylish cafe chair",
      },
      {
        name: "Repira",
        price: "Rp 2.500.000",
        age: 25,
        image: "/images.png",
        description: "A New Item description.",
      },
      {
        name: "New Item",
        price: "Rp 2.500.000",
        age: 35,
        image: "/image 1.png",
        description: "A new item description.",
      },
      {
        name: "Leviosa",
        price: "Rp 2.500.000",
        age: 28,
        image: "/image 2.png",
        description: "Stylish cafe chair",
      },
      {
        name: "Syltherine",
        price: "Rp 2.500.000",
        age: 30,
        image: "/Mask Group.png",
        description: "Stylish cafe chair",
      },
      {
        name: "Repira",
        price: "Rp 2.500.000",
        age: 25,
        image: "/images.png",
        description: "A New Item description.",
      },
      {
        name: "New Item",
        price: "Rp 2.500.000",
        age: 35,
        image: "/image 1.png",
        description: "A new item description.",
      },
      {
        name: "Leviosa",
        price: "Rp 2.500.000",
        age: 28,
        image: "/image 2.png",
        description: "Stylish cafe chair",
      },
    // Add more items as needed
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[340px] flex items-center justify-center bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 text-white">
        <Image
          src="/shophero.png"
          alt="Shop Background"
          layout="fill"
          objectFit="cover"
          className="absolute z-0"
        />
        <div className="absolute z-10 text-center">
          <h3 className="font-bold text-4xl text-black">Shop</h3>
          <h5 className="flex items-center justify-center mt-2 text-lg">
            <span className="font-medium  text-black">Home</span>
            <IoIosArrowForward className="mx-2 text-black" />
            <span className="text-black">Shop</span>
          </h5>
        </div>
      </div>

      {/* Content Section */}
      <BlowHero />

      {/* Cards Section */}
<div className="w-full max-w-[1920px] px-2 sm:px-4 md:px-6 lg:px-8 py-6 mx-auto">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
    {data.map((card, index) => (
      <div
        key={index}
        className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
      >
        <div className="relative aspect-square">
          <Image
            src={card.image}
            alt={card.name}
            fill
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          
          />
        </div>
        <div className="p-3 sm:p-4">
          <h5 className="text-base sm:text-lg font-semibold text-gray-900 truncate">
            {card.name}
          </h5>
          <p className="mt-2 text-sm sm:text-base text-gray-600 line-clamp-2">
            {card.description}
          </p>
          <h5 className="mt-3 text-lg sm:text-xl font-bold text-gray-900">
            {card.price}
          </h5>
        </div>
      </div>
    ))}
  </div>

  <div className="flex justify-center items-center mt-20 space-x-4">
              <button className="px-8 py-4 bg-yellow-600 text-white rounded-md hover:bg-yellow-700">
                1
              </button>
              <button className="px-8 py-4 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">
                2
              </button>
              <button className="px-8 py-4 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">
                3
              </button>
              <button className="px-8 py-4 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">
                Next
              </button>
            </div>

  
 
</div>

{/* Bottom Image Section */}
<div className="w-full mt-8 -mb-20 ">
    <div className="relative w-full max-w-full mx-auto">
      <Image
        src="/Frame161(1).png"
        alt="pic"
        width={1440}
        height={570}
        className="w-full h-auto object-cover"
        priority
      />
    </div>
  </div>
</>
  );
}

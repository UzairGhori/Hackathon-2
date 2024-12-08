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
      name: "Jane Smith",
      price: "Rp 2.500.000",
      age: 25,
      image: "/images.png",
      description: "A creative designer who loves creating stunning visuals.",
    },
    {
      name: "New Item",
      price: "Rp 2.500.000",
      age: 35,
      image: "/image 1.png",
      description: "A new item description.",
    },
    {
      name: "Sam Wilson",
      price: "Rp 2.500.000",
      age: 28,
      image: "/image 2.png",
      description: "A software engineer specializing in backend systems.",
    },
    {
        name: "Syltherine",
        price: "Rp 2.500.000",
        age: 30,
        image: "/Mask Group.png",
        description: "Stylish cafe chair",
      },
      {
        name: "Jane Smith",
        price: "Rp 2.500.000",
        age: 25,
        image: "/images.png",
        description: "A creative designer who loves creating stunning visuals.",
      },
      {
        name: "New Item",
        price: "Rp 2.500.000",
        age: 35,
        image: "/image 1.png",
        description: "A new item description.",
      },
      {
        name: "Sam Wilson",
        price: "Rp 2.500.000",
        age: 28,
        image: "/image 2.png",
        description: "A software engineer specializing in backend systems.",
      },
      {
        name: "Syltherine",
        price: "Rp 2.500.000",
        age: 30,
        image: "/Mask Group.png",
        description: "Stylish cafe chair",
      },
      {
        name: "Jane Smith",
        price: "Rp 2.500.000",
        age: 25,
        image: "/images.png",
        description: "A creative designer who loves creating stunning visuals.",
      },
      {
        name: "New Item",
        price: "Rp 2.500.000",
        age: 35,
        image: "/image 1.png",
        description: "A new item description.",
      },
      {
        name: "Sam Wilson",
        price: "Rp 2.500.000",
        age: 28,
        image: "/image 2.png",
        description: "A software engineer specializing in backend systems.",
      },
      {
        name: "Syltherine",
        price: "Rp 2.500.000",
        age: 30,
        image: "/Mask Group.png",
        description: "Stylish cafe chair",
      },
      {
        name: "Jane Smith",
        price: "Rp 2.500.000",
        age: 25,
        image: "/images.png",
        description: "A creative designer who loves creating stunning visuals.",
      },
      {
        name: "New Item",
        price: "Rp 2.500.000",
        age: 35,
        image: "/image 1.png",
        description: "A new item description.",
      },
      {
        name: "Sam Wilson",
        price: "Rp 2.500.000",
        age: 28,
        image: "/image 2.png",
        description: "A software engineer specializing in backend systems.",
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
      <div className="px-4  py-8 mx-auto max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {data.map((card, index) => (
          <div
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105"
            key={index}
          >
            <Image
              src={card.image}
              alt={card.name}
              width={300}
              height={300}
              className="w-full h-[250px] object-cover"
            />
            <div className="p-4">
              <h5 className="text-lg font-semibold">{card.name}</h5>
              <p className="text-gray-500 mt-2">{card.description}</p>
              <h5 className="text-xl font-bold text-gray-800 mt-4">
                {card.price}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

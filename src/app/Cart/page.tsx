import React from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

// Cart Component
const Cart = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[340px] flex items-center justify-center bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 text-white">
        <Image
          src="/shophero.png"
          alt="Shop Background"
          layout="fill"
          objectFit="cover"
          className="absolute z-0"
        />
        <div className="absolute z-10 text-center px-4">
          <Image
            src="/p1.png"
            alt="logo"
            width={100}
            height={100}
            className="mx-auto mb-4"
          />
          <h3 className="font-bold text-4xl text-black">Cart</h3>
          <h5 className="flex items-center justify-center mt-2 text-lg">
            <span className="font-medium text-black">Home</span>
            <IoIosArrowForward className="mx-2 text-black" />
            <span className="text-black font-light">Cart</span>
          </h5>
        </div>
      </div>
      <div className="w-full h-auto mb-20 mt-20">
      <div className="container mx-auto px-4">
        {/* Cart Items Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          {/* Product Table */}
          <div className="lg:w-2/3 w-full">
            <div className="p-4 rounded-lg shadow-md">
              {/* Table Header */}
              <div className="hidden lg:flex justify-between bg-[#F9F1E7] py-4 px-4 text-center font-Poppins font-medium text-[16px] text-black">
                <h2 className="w-1/4">Product</h2>
                <h2 className="w-1/4">Price</h2>
                <h2 className="w-1/4">Quantity</h2>
                <h2 className="w-1/4">Subtotal</h2>
              </div>

              {/* Product Row */}
              <div className="flex flex-col lg:flex-row items-center justify-between py-4 border-b">
                {/* Product Image */}
                <Image
                  src="/Asgaardsofa 5.png"
                  alt="Product Image"
                  width={80}
                  height={80}
                  className="w-16 h-16 object-contain"
                />
                {/* Product Info */}
                <div className="flex-1 flex flex-col lg:flex-row justify-between items-center mt-4 lg:mt-0 gap-4 lg:gap-0">
                  <h2 className="text-gray-600 text-sm text-center lg:text-left">
                    Asgaard Sofa
                  </h2>
                  <h2 className="text-gray-600 text-sm text-center lg:text-left">
                    Rs. 250,000.00
                  </h2>
                  <input
                    type="number"
                    name="count"
                    defaultValue={1}
                    placeholder="1"
                    className="w-12 h-8 border border-gray-300 rounded text-center"
                  />
                  <h2 className="text-gray-800 font-semibold text-center lg:text-left">
                    Rs. 250,000.00
                  </h2>
                  <Image
                    src="/ant-design (2).png"
                    alt="Delete Icon"
                    width={28}
                    height={28}
                    className="cursor-pointer mx-auto lg:mx-0"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Cart Total Section */}
          <div className="lg:w-1/3 w-full bg-[#F9F1E7] rounded-lg shadow-md p-6">
            <h1 className="text-[24px] font-semibold font-Poppins text-center mb-6">
              Cart Total
            </h1>
            <div className="flex justify-between items-center mt-4">
              <h3 className="text-gray-800 text-base font-Poppins">Subtotal</h3>
              <p className="text-gray-600 text-base">Rs. 250,000.00</p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <h3 className="text-gray-800 text-base font-Poppins">Total</h3>
              <p className="text-[#B88E2F] text-[20px] font-semibold">
                Rs. 250,000.00
              </p>
            </div>
            <button
              type="button"
              className="w-full mt-6 py-4 border-black border-[1px] text-black text-lg font-medium font-Poppins rounded-[15px] hover:bg-gray-800 hover:text-white transition-all"
            >
              Check Out
            </button>
          </div>
        </div>
      </div>
    </div>
       
        


 {/* Cart Banner Section */}            
      <div className="w-full mt-8 -mb-[65px]">
        <div className="relative w-full max-w-full mx-auto">
          <Image
            src="/Frame161(1).png"
            alt="Cart Banner"
            width={1440}
            height={570}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;

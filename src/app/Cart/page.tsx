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

      {/* Cart Section */}
      <div className=" w-full h-auto mb-[250px] mt-20">
        <div className=" container mx-auto px-4">
          {/* Cart Items Section */}
          <div className="flex flex-col lg:flex-row justify-between">
            {/* Product Table */}
            <div className="lg:w-2/3 w-full">
              <div className="p-4 rounded-lg shadow-md">
                {/* Header */}
                <div className="flex justify-between bg-[#F9F1E7] py-4 px-4 text-center font-Poppins font-medium text-[16px] text-black">
                  <h2 className="w-1/4">Product</h2>
                  <h2 className="w-1/4">Price</h2>
                  <h2 className="w-1/4">Quantity</h2>
                  <h2 className="w-1/4">Subtotal</h2>
                </div>
                {/* Product Row */}
                <div className="flex items-center py-4 border-b">
                  <Image
                    src="/Asgaardsofa 5.png"
                    alt="Product Image"
                    width={100}
                    height={100}
                    className="w-16 h-16 object-contain"
                  />
                  <div className="flex flex-1 justify-between items-center ml-4">
                    <h2 className="text-gray-600 text-sm">Asgaard Sofa</h2>
                    <h2 className="text-gray-600 text-sm">Rs. 250,000.00</h2>
                    <input
                      type="number"
                      name="count"
                      defaultValue={1}
                      placeholder="1"
                      className="w-12 h-8 border border-gray-300 rounded text-center"
                    />
                    <h2 className="text-gray-800 font-semibold">
                      Rs. 250,000.00
                    </h2>
                    <Image
                      src="/ant-design (2).png"
                      alt="Delete Icon"
                      width={28}
                      height={28}
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Cart Total Section */}
      <div
        className="lg:w-1/3 w-full -mt-[420px] ml-[880px] bg-[#F9F1E7] lg:ml-aut
            ronded-lg shadow-md"
      >
        <h1 className="text-[32px] font-semibold font-Poppins text-center">
          Cart Total
        </h1>
        <div className=" mt-10 ml-8 justify-between items-center">
          <h3 className="text-gray-800 text-base font-Poppins">Subtotal</h3>
          <p className="text-gray-600 text-base ml-[200px] -mt-[20px] font-Poppins">
            Rs. 250,000.00
          </p>

          <h3 className="text-gray-800 font-Poppins text-base mt-[30px]">
            Total
          </h3>
          <p className="text-[#B88E2F] text-[20px] font-Poppins  ml-[200px] -mt-[20px]">
            Rs. 250,000.00
          </p>
        </div>
        <button className=" mt-[80px] mb-10  py-4 px-16  border-black border-[1px] text-black text-lg font-medium font-Poppins rounded-[15px] hover:bg-gray-800 hover:text-white transition-all ml-[100px]">
          Check Out
        </button>
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

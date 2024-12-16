import React from 'react'
import Image from 'next/image'
import { IoIosArrowForward } from 'react-icons/io'
import { FaAngleDown } from 'react-icons/fa'

const ProductComparison = () => {
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
                  <h3 className="font-bold text-4xl text-black">Product Comparison</h3>
                  <h5 className="flex items-center justify-center mt-2 text-lg">
                    <span className="font-medium text-black">Home</span>
                    <IoIosArrowForward className="mx-2 text-black" />
                    <span className="text-black font-light">Product Comparison</span>
                  </h5>
                </div>
              </div>

              <div className="w-full bg-white py-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <div className="flex justify-between items-center mb-6">
         <div className='ml-7'>
          <h1 className='-mt-[500px] w-[223px] h-[105px] font-Poppins font-semibold text-[28px] text-[#000000]'>Go to Product <br /> Page for more <br /> Products</h1>
          
        <button className='w-[115px] h-[33px] mt-6 border-b-[2px] border-[#727272] text-[20px] text-[#727272] font-Poppins font-medium '>View More</button>
        </div>
        {/* Product Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-200">
          {/* Product Card 1 */}
          <div className="border-r border-gray-200 px-4 md:px-8 py-6">
            <div className="mb-4">
              <Image
                src="/Asgaard sofa 3.png"
                alt="Product 1"
                width={200}
                height={200}
                className="mx-auto w-[283px] h-[211px]"
              />
            </div>
            <h3 className="text-xl font-semibold font-Poppins ml-9 mb-2">
              Asgaard Sofa
            </h3>
            <p className=' ml-9 text-[18px] font-Poppins font-medium text-black'>RS. 250,000.00</p>
            <p className="text-sm text-center text-gray-500 mb-4">
              ⭐⭐⭐⭐✭ | 204 Reviews
            </p>
            
          </div>

          {/* Product Card 2 */}
          <div className="border-r border-gray-200 px-4 md:px-8 py-6">
            <div className="mb-4">
              <Image
                src="/Group 94.png"
                alt="Product 2"
                width={200}
                height={200}
                className="w-[283px] h-[211px]"
              />
            </div>
            <h3 className="text-xl font-semibold font-Poppins ml-9 mb-2">
              Outdoor Sofa Set
            </h3>
            <p className=' ml-9 text-[18px] font-Poppins font-medium text-black'>RS. 224,000.00</p>
            <p className="text-sm text-center text-gray-500 mb-4">
              ⭐⭐⭐⭐✭ | 148 Reviews
            </p>
            
          </div>
          <div className='w-[242px] h-[79px] mt-28 '>
           <h1 className='w-[174px] h-[26px] text-[24px] text-black font-Poppins font-semibold mb-3'>Add A Product</h1>
           <button className='bg-[#B88E2F] w-[242px] h-[39px] rounded-[6px] text-[16px] text-[#FFFFFF] font-Poppins font-semibold text-center pt-[8px]  '>Choose a Product <FaAngleDown className='ml-[200px] -mt-7 w-[40px] h-[35px]' /></button>
          </div>
          <div className='w-[1332px] h-[802px] border-t-[1px] border-t-[#E8E8E8] mt-[80px] -ml-[54px]'></div>

          <div className="flex mt-[150px] -ml-[500px]  flex-wrap lg:flex-nowrap lg:gap-16 lg:w-3/4 justify-between">
          
          {/* Links Column */}
          <div className="mx-10 lg:mb-0">
            <h4 className="text-black text-[28px] mb-4 font-medium">General</h4>
            <ul className="space-y-4 text-[20px] w-[250px] text-gray-800 font-semibold">
              <li>Sale Package</li>
              <li>Model Number</li>
              <li>Seacondary Matarial</li>
              <li>Configuration</li>
              <li>Upholstery Material</li>
              <li>Upholstery Color</li>
            </ul>
          </div>
  
          {/* Help Column */}
          <div className="mx-10 mt-16 lg:mb-0">
            
            <ul className="space-y-4 text-[20px] w-[150px] text-gray-800 font-semibold">
              <li>1 sectional sofa</li>
              <li>TFCBLIGRBL6SRHS</li>
              <li>Solid Wood</li>
              <li>L-shaped</li>
              <li>Fabric + Cotton</li>
              <li>Bright Grey & Lion</li>
            </ul>
          </div>
  
          {/* Newsletter Column */}
          <div className="mt-16 mx-10 lg:w-1/3">
            
            <ul className="space-y-4 text-[20px] w-[150px] text-gray-800 font-semibold">
              <li>1 Three Seater, 2 Single Seater</li>
              <li>DTUBLIGRBL568</li>
              <li>DTUBLIGRBL568</li>
              <li>L-shaped</li>
              <li>Fabric + Cotton</li>
              <li>Bright Grey & Lion</li>
            </ul>
          </div>
        </div>
      </div>
      <br />
      <div className="flex mt-[150px] -ml-[500px]  flex-wrap lg:flex-nowrap lg:gap-16 lg:w-3/4 justify-between">
          
          {/* Links Column */}
          <div className="mx-10 lg:mb-0">
            <h4 className="text-black text-[28px] mb-4 font-medium">General</h4>
            <ul className="space-y-4 text-[20px] w-[250px] text-gray-800 font-semibold">
              <li>Sale Package</li>
              <li>Model Number</li>
              <li>Seacondary Matarial</li>
              <li>Configuration</li>
              <li>Upholstery Material</li>
              <li>Upholstery Color</li>
            </ul>
          </div>
  
          {/* Help Column */}
          <div className="mx-10 mt-16 lg:mb-0">
            
            <ul className="space-y-4 text-[20px] w-[150px] text-gray-800 font-semibold">
              <li>1 sectional sofa</li>
              <li>TFCBLIGRBL6SRHS</li>
              <li>Solid Wood</li>
              <li>L-shaped</li>
              <li>Fabric + Cotton</li>
              <li>Bright Grey & Lion</li>
            </ul>
          </div>
  
          {/* Newsletter Column */}
          <div className="mt-16 mx-10 lg:w-1/3">
            
            <ul className="space-y-4 text-[20px] w-[150px] text-gray-800 font-semibold">
              <li>1 Three Seater, 2 Single Seater</li>
              <li>DTUBLIGRBL568</li>
              <li>DTUBLIGRBL568</li>
              <li>L-shaped</li>
              <li>Fabric + Cotton</li>
              <li>Bright Grey & Lion</li>
            </ul>
          </div>
        </div>
      </div>
      <br />
      <div className="flex mt-[150px] -ml-[500px]  flex-wrap lg:flex-nowrap lg:gap-16 lg:w-3/4 justify-between">
          
          {/* Links Column */}
          <div className="mx-10 lg:mb-0">
            <h4 className="text-black text-[28px] mb-4 font-medium">General</h4>
            <ul className="space-y-4 text-[20px] w-[250px] text-gray-800 font-semibold">
              <li>Sale Package</li>
              <li>Model Number</li>
              <li>Seacondary Matarial</li>
              <li>Configuration</li>
              <li>Upholstery Material</li>
              <li>Upholstery Color</li>
            </ul>
          </div>
  
          {/* Help Column */}
          <div className="mx-10 mt-16 lg:mb-0">
            
            <ul className="space-y-4 text-[20px] w-[150px] text-gray-800 font-semibold">
              <li>1 sectional sofa</li>
              <li>TFCBLIGRBL6SRHS</li>
              <li>Solid Wood</li>
              <li>L-shaped</li>
              <li>Fabric + Cotton</li>
              <li>Bright Grey & Lion</li>
            </ul>
          </div>
  
          {/* Newsletter Column */}
          <div className="mt-16 mx-10 lg:w-1/3">
            
            <ul className="space-y-4 text-[20px] w-[150px] text-gray-800 font-semibold">
              <li>1 Three Seater, 2 Single Seater</li>
              <li>DTUBLIGRBL568</li>
              <li>DTUBLIGRBL568</li>
              <li>L-shaped</li>
              <li>Fabric + Cotton</li>
              <li>Bright Grey & Lion</li>
            </ul>
          </div>
        </div>
      </div>
      <br />
      <div className="flex mt-[150px] -ml-[500px]  flex-wrap lg:flex-nowrap lg:gap-16 lg:w-3/4 justify-between">
          
          {/* Links Column */}
          <div className="mx-10 lg:mb-0">
            <h4 className="text-black text-[28px] mb-4 font-medium">General</h4>
            <ul className="space-y-4 text-[20px] w-[250px] text-gray-800 font-semibold">
              <li>Sale Package</li>
              <li>Model Number</li>
              <li>Seacondary Matarial</li>
              <li>Configuration</li>
              <li>Upholstery Material</li>
              <li>Upholstery Color</li>
            </ul>
          </div>
  
          {/* Help Column */}
          <div className="mx-10 mt-16 lg:mb-0">
            
            <ul className="space-y-4 text-[20px] w-[150px] text-gray-800 font-semibold">
              <li>1 sectional sofa</li>
              <li>TFCBLIGRBL6SRHS</li>
              <li>Solid Wood</li>
              <li>L-shaped</li>
              <li>Fabric + Cotton</li>
              <li>Bright Grey & Lion</li>
            </ul>
          </div>
  
          {/* Newsletter Column */}
          <div className="mt-16 mx-10 lg:w-1/3">
            
            <ul className="space-y-4 text-[20px] w-[150px] text-gray-800 font-semibold">
              <li>1 Three Seater, 2 Single Seater</li>
              <li>DTUBLIGRBL568</li>
              <li>DTUBLIGRBL568</li>
              <li>L-shaped</li>
              <li>Fabric + Cotton</li>
              <li>Bright Grey & Lion</li>
            </ul>
          </div>
        </div>
      </div>

        </div>

    
    
  )
}

export default ProductComparison
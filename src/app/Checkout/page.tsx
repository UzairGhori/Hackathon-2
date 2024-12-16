import React from 'react'
import Image from 'next/image'
import { IoIosArrowForward } from 'react-icons/io'

const Checkout = () => {
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
  
    <div className="container mt-20 mx-auto px-4 py-8">
      {/* Billing Details Section */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Billing Form */}
        <div className="flex-1">
          <h2 className="text-2xl lg:text-3xl font-semibold text-black mb-6">Billing Details</h2>

          {/* Form Fields */}
          <div className="space-y-6">
            {/* First & Last Name */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="First Name"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Last Name"
                />
              </div>
            </div>

            {/* Company Name */}
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                Company Name (Optional)
              </label>
              <input
                type="text"
                id="companyName"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Company Name"
              />
            </div>

            {/* Country/Region */}
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                Country/Region
              </label>
              <select
                id="country"
                className="w-full p-3 border border-gray-300 rounded-md"
              >
                <option value="">Select Country/Region</option>
                <option value="Pakistan">Pakistan</option>
                <option value="India">India</option>
                <option value="Dubai">Dubai</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                {/* Add more countries */}
              </select>
            </div>

            {/* Street Address */}
            <div>
              <label htmlFor="streetAddress" className="block text-sm font-medium text-gray-700 mb-2">
                Street Address
              </label>
              <input
                type="text"
                id="streetAddress"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Street Address"
              />
            </div>

            {/* Town/City */}
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                Town/City
              </label>
              <input
                type="text"
                id="city"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Town/City"
              />
            </div>

            {/* Province/State */}
            <div>
              <label htmlFor="province" className="block text-sm font-medium text-gray-700 mb-2">
                Province
              </label>
              <select
                id="province"
                className="w-full p-3 border border-gray-300 rounded-md"
              >
                <option value="Sindh">Sindh</option>
                <option value="Punjab">Punjab</option>
                <option value="Khyber Pakhtunkhwa">Khyber Pakhtunkhwa</option>
                <option value="Balochistan">Balochistan</option>
              </select>
            </div>

            {/* ZIP Code */}
            <div>
              <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-2">
                ZIP Code
              </label>
              <input
                type="text"
                id="zip"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="ZIP Code"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone
              </label>
              <input
                type="text"
                id="phone"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Phone Number"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Email Address"
              />
            </div>

            {/* Additional Info */}
            <div>
              <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-2">
                Additional Information
              </label>
              <textarea
                id="additionalInfo"
                className="w-full p-3 border border-gray-300 rounded-md"
                rows={4}
                placeholder="Any additional information"
              />
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="flex-1 bg-gray-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-black mb-6">Product</h2>
          <h2 className="text-2xl ml-[400px] -mt-16 font-semibold text-black mb-6">Subtotal</h2>
          {/* Order Items */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <p className="text-gray-700">Asgaard Sofa (x1)</p>
              <p className="text-gray-800 font-semibold">Rs. 250,000.00</p>
            </div>
          </div>

           {/* Subtotal */}
          <div className="flex justify-between mt-5 items-center">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-800 font-semibold">Rs. 250,000.00</p>
          </div>

          {/* Total */}
          <div className="flex justify-between items-center mt-4">
            <p className="text-gray-700">Total</p>
            <p className="text-xl font-bold text-yellow-600">Rs. 250,000.00</p>
          </div>

          <hr className="my-6 border-gray-300" />

          <div className='bg-black w-[20px] h-[20px] rounded-full'></div>
          <h2 className='w-[160px] h-[24px] text-[16px] font-Poppins font-normal text-black ml-8 -mt-5'>Direct Bank Transfer</h2>
          <p className="text-sm text-gray-600 mt-2">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>          

          {/* Payment Methods */}
          <div className="mt-6 space-y-4">
            <div className="flex items-center">
              <input type="radio" id="bankTransfer" name="payment" className="mr-2" />
              <label htmlFor="bankTransfer" className="text-gray-700">Direct Bank Transfer</label>
            </div>
            <div className="flex items-center">
              <input type="radio" id="cashOnDelivery" name="payment" className="mr-2" />
              <label htmlFor="cashOnDelivery" className="text-gray-700">Cash on Delivery</label>
            </div>
          </div>

          {/* Privacy Notice */}
          <p className="text-sm text-gray-600 mt-6">
            Your personal data will be used to process your order and for other purposes described in our
            <span className="text-gray-800 font-semibold"> privacy policy</span>.
          </p>

          {/* Place Order Button */}
          <button className="w-full mt-6 py-4  text-black text-[20px] rounded-[15px] font-Poppins font-normal hover:bg-gray-800 transition-all border-[1px] border-black">
            Place Order
          </button>
        </div>
      </div>
    </div>

{/*  Banner Section */}            
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
              
    
  )
}

export default Checkout;
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
const Header = () => {
  return (
<div className="w-full bg-[#FFFFFF] py-2">
  <div className="flex flex-wrap items-center justify-between max-w-[1280px] mx-auto px-4">
    {/* Logo Section */}
    <div className="flex items-center gap-2">
      <Image
        src="/p1.png"
        alt="logo"
        width={50}
        height={32}
        className="w-[50px] h-[32px]"
      />
      <h1 className="text-[24px] md:text-[34px] font-bold text-[#000000]">
        Furniro
      </h1>
    </div>

    {/* Navigation Links */}
    <ul className="hidden md:flex items-center gap-8 text-[#000000] font-Poppins text-[14px] md:text-[16px] font-medium">
      <li className="hover:text-[#f4a261] cursor-pointer"><Link href="/">Home</Link></li>
      <li className="hover:text-[#f4a261] cursor-pointer"><Link rel="stylesheet" href="/Shop">Shop</Link> </li>
      <li className="hover:text-[#f4a261] cursor-pointer"><Link href="/Blog" >Blog</Link></li>
      <li className="hover:text-[#f4a261] cursor-pointer"><Link href="/Contact">Contact</Link></li>
    </ul>

    {/* Icons Section */}
    <div className="flex gap-4 items-center mt-2 md:mt-0">
      <Image
        src="/account-alert (1).png"
        alt="icon"
        width={28}
        height={28}
        className="w-[28px] h-[28px]"
      />
      <Image
        src="/account-alert (2).png"
        alt="icon"
        width={28}
        height={28}
        className="w-[28px] h-[28px]"
      />
      <Image
        src="/account-alert (3).png"
        alt="icon"
        width={23.33}
        height={28}
        className="w-[23.33px] h-[28px]"
      />
      <Link href='/Cart'><Image
        src="/account-alert (4).png"
        alt="icon"
        width={28}
        height={28}
        className="w-[28px] h-[28px]"
      /></Link>
    </div>

    {/* Mobile Menu */}
    <div className="flex md:hidden mt-4 w-full justify-center">
      <ul className="flex flex-col gap-4 text-center text-[#000000] font-Poppins text-[14px] font-medium">
        <li className="hover:text-[#f4a261] cursor-pointer">Home</li>
        <li className="hover:text-[#f4a261] cursor-pointer">Shop</li>
        <li className="hover:text-[#f4a261] cursor-pointer">About</li>
        <li className="hover:text-[#f4a261] cursor-pointer">Contact</li>
      </ul>
    </div>
  </div>
</div>

  )
}

export default Header;
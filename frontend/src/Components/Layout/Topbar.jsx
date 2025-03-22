import React from "react";
import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";

export default function Topbar() {
  return (
    <div className="bg-norooz-red text-white">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="hover:text-gray-300 ">
            <TbBrandMeta className='h-7 w-7'/>
          </a>
          <a href="#" className="hover:text-gray-300 ">
            <IoLogoInstagram className='h-7 w-7'/>
          </a>
          <a href="#" className="hover:text-gray-300 ">
            <RiTwitterXLine className='h-6 w-6'/>
          </a>
        </div>
        <div className="text-sm text-center flex-grow">
            <span>
                We ship worldwide - Fast and reliable shipping!
            </span>
        </div>
        <div className="text-sm hidden md:block">
            <a href="tel:+1234567890" className="hover:text-gray-300">
                +1 (234) 567 
            </a>
        </div>
      </div>
    </div>
  );
}

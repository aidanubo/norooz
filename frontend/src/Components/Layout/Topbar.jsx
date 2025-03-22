import React from "react";
import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";

export default function Topbar() {
  return (
    <div className="bg-red-600 text-white">
      <div className="mx-20">
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-gray-300 ">
            <TbBrandMeta className='h-5 w-5'/>
          </a>
          <a href="#" className="hover:text-gray-300 ">
            <IoLogoInstagram className='h-5 w-5'/>
          </a>
          <a href="#" className="hover:text-gray-300 ">
            <RiTwitterXLine className='h-4 w-4'/>
          </a>
        </div>
      </div>
    </div>
  );
}

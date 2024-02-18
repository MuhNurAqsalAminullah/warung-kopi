import React from "react";

// <><><><><> react icons <><><><>
import * as ImIcons from "react-icons/im";

// <><><><><> image Items <><><><>
import { bgFooter } from "../../data/images";

const Footer = () => {
  return (
    <div>
      <div
        className="w-full bg-cover bg-no-repeat bg-center sm:p-5 md:p-10 lg:flex lg:justify-between"
        style={{ backgroundImage: `url(${bgFooter})` }}
      >
        <div className="mb-8 lg:w-[33%]">
          <h4 className="text-white uppercase sm:text-2xl font-['Marcellus'] border-b-4 border-white w-fit">
            Address
          </h4>
          <div className="flex items-center mt-5">
            <ImIcons.ImLocation2 size={24} color={"white"} />
            <p className="text-white font-['Marcellus'] ml-3">
              Lorem Ipsun, 105, Indonesia
            </p>
          </div>
          <div className="flex items-center mt-5">
            <ImIcons.ImPhone size={24} color={"white"} />
            <p className="text-white font-['Marcellus'] ml-3">
              +62 333 888 222
            </p>
          </div>
          <div className="flex items-center mt-5">
            <ImIcons.ImMail4 size={24} color={"white"} />
            <p className="text-white font-['Marcellus'] ml-3">
              Lorem Ipsun04@gmail.com
            </p>
          </div>
        </div>

        <div className="mb-8 lg:w-[33%]">
          <h4 className="text-white uppercase sm:text-2xl font-['Marcellus'] border-b-4 border-white w-fit">
            Street
          </h4>
          <p className="text-white font-['Marcellus'] mt-5">
            Monday – Thursday: 08AM – 10PM
          </p>
          <p className="text-white font-['Marcellus'] mt-5">
            Friday – Saturday: 10AM–11:30PM
          </p>
          <p className="text-white font-['Marcellus'] mt-5">
            Sunday: 1PM – 10PM
          </p>
        </div>

        <div className="lg:w-[33%]">
          <h4 className="text-white uppercase sm:text-2xl font-['Marcellus'] border-b-4 border-white w-fit">
            SUBSCRIBE NOW
          </h4>
          <p className="text-white font-['Marcellus'] mt-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
            eaque ad veritatis aliquam odio illo accusantium placeat sunt!
            Placeat quos id sequi quas illo labore sint cum nisi molestias
            animi.
          </p>
        </div>
      </div>

      <div className="sm:flex sm:flex-col sm:items-center sm:p-5 sm:gap-y-3 md:gap-y-5 lg:flex-row lg:justify-between lg:px-10">
        <p className="sm:text-center text-[#3D1C05] lg:w-[20%] lg:text-start">
          &#169; 2023 Muh Nur Aqsal Aminullah. All Rights Reserved
        </p>

        <ul className="sm:flex sm:flex-wrap justify-center lg:w-[50%]">
          <li className="text-center py-3 sm:w-[100px] hover:border-b-2 border-[#3D1C05] font-bold text-[#3D1C05] cursor-pointer">
            Home
          </li>
          <li className="text-center py-3 sm:w-[100px] hover:border-b-2 border-[#3D1C05] font-bold text-[#3D1C05] cursor-pointer">
            About
          </li>
          <li className="text-center py-3 sm:w-[100px] hover:border-b-2 border-[#3D1C05] font-bold text-[#3D1C05] cursor-pointer">
            Menu
          </li>
          <li className="text-center py-3 sm:w-[100px] hover:border-b-2 border-[#3D1C05] font-bold text-[#3D1C05] cursor-pointer">
            Contact
          </li>
          <li className="text-center py-3 sm:w-[100px] hover:border-b-2 border-[#3D1C05] font-bold text-[#3D1C05] cursor-pointer">
            Portfolio
          </li>
        </ul>

        <div className="flex gap-x-5 lg:w-[20%] lg:justify-center">
          <ImIcons.ImFacebook size={24} />
          <ImIcons.ImMail4 size={24} />
          <ImIcons.ImTwitter size={24} />
          <ImIcons.ImInstagram size={24} />
        </div>
      </div>
    </div>
  );
};

export default Footer;

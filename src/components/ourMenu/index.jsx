import React from "react";
import * as MdIcons from "react-icons/md";
import * as ImIcons from "react-icons/im";

// <><><><><> image background <><><><>
import bgKasar from "../../assets/images/bg-footer.jpg";
import bgOutMenu from "../../assets/images/out-menu.jpg";

// <><><><><> image Items <><><><>
import imgIconCoffee from "../../assets/images/iconcoffee1.png";
import imgCoffee1 from "../../assets/images/kopi1.jpg";
import imgCoffee2 from "../../assets/images/kopi2.jpg";
import imgCoffee3 from "../../assets/images/kopi3.jpg";
import imgCoffee4 from "../../assets/images/kopi4.jpg";
import imgFood1 from "../../assets/images/makan1.jpeg";
import imgFood2 from "../../assets/images/makan2.jpeg";
import imgFood3 from "../../assets/images/makan3.jpeg";
import imgFood4 from "../../assets/images/makan4.jpg";

const OurMenu = () => {
  return (
    <div>
      <div className="overflow-hidden fixed z-[-1] sm:h-[200px] md:h-[350px] lg:h-[450px] bg-[#848484]">
        <img
          className="sm:w-full md:relative md:bottom-[50px] lg:bottom-[200px]"
          src={bgOutMenu}
          alt="our-menu"
        />
      </div>
      <div className=" sm:h-[200px] sm:flex sm:justify-center sm:items-center md:h-[350px] lg:h-[450px]">
        <h1 className="uppercase text-white font-['Marcellus'] sm:text-5xl md:text-6xl lg:text-7xl">
          Our Menu
        </h1>
      </div>
      <div className="bg-white">
        <div className="py-20">
          <h1 className="uppercase text-center font-['Marcellus'] text-[#3D1C05] sm:text-5xl md:text-6xl lg:text-7xl">
            street drink
          </h1>
          <div className="flex justify-center gap-x-3">
            <div className="border-b border-[#3D1C05] sm:w-[20%]"></div>
            <img
              src={imgIconCoffee}
              className="sm:w-[25px] md:w-[30px] lg:w-[35px] relative top-2"
            />
            <div className="border-b border-[#3D1C05] sm:w-[20%]"></div>
          </div>
          <p className="font-['Montserrat'] text-[#3E3733] text-center tracking-wider sm:text-lg mt-5 sm:px-3 md:px-20 lg:px-48">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit nemo minus praesentium consequatur accusamus adipisci.
          </p>
        </div>

        <div className="sm:mx-5 md:mx-10 lg:mx-20 pb-20 lg:flex lg:flex-wrap">
          <div className="sm:mb-8 md:flex lg:w-1/2">
            <div className="sm:w-full sm:h-[250px] md:w-[300px] md:h-[150px] rounded-md overflow-hidden">
              <img src={imgCoffee1} className="w-full" />
            </div>
            <div className="sm:p-5 md:py-0 leading-8 flex justify-between w-full">
              <div>
                <p className="font-['Lato'] font-bold text-[#3E3733] sm:text-xl">
                  Coffee Street 01
                </p>
                <p className="font-['Lato'] text-[#726D67]">
                  Lorem ipsum dolor sit amet.
                </p>
                <p className="font-['Lato'] font-bold text-[#3E3733] sm:text-lg">
                  Rp. 15.000
                </p>
              </div>
              <div className="border border-[#4DA656] w-fit h-fit p-1 rounded-full">
                <MdIcons.MdAddShoppingCart size={24} color={"#4DA656"} />
              </div>
            </div>
          </div>
          <div className="sm:mb-8 md:flex lg:w-1/2">
            <div className="sm:w-full sm:h-[250px] md:w-[300px] md:h-[150px] rounded-md overflow-hidden">
              <img src={imgCoffee2} className="w-full" />
            </div>
            <div className="sm:p-5 md:py-0 leading-8 flex justify-between w-full">
              <div>
                <p className="font-['Lato'] font-bold text-[#3E3733] sm:text-xl">
                  Coffee Street 02
                </p>
                <p className="font-['Lato'] text-[#726D67]">
                  Lorem ipsum dolor sit amet.
                </p>
                <p className="font-['Lato'] font-bold text-[#3E3733] sm:text-lg">
                  Rp. 15.000
                </p>
              </div>
              <div className="border border-[#4DA656] w-fit h-fit p-1 rounded-full">
                <MdIcons.MdAddShoppingCart size={24} color={"#4DA656"} />
              </div>
            </div>
          </div>
          <div className="sm:mb-8 md:flex lg:w-1/2">
            <div className="sm:w-full sm:h-[250px] md:w-[300px] md:h-[150px] rounded-md overflow-hidden">
              <img src={imgCoffee3} className="w-full" />
            </div>
            <div className="sm:p-5 md:py-0 leading-8 flex justify-between w-full">
              <div>
                <p className="font-['Lato'] font-bold text-[#3E3733] sm:text-xl">
                  Coffee Street 03
                </p>
                <p className="font-['Lato'] text-[#726D67]">
                  Lorem ipsum dolor sit amet.
                </p>
                <p className="font-['Lato'] font-bold text-[#3E3733] sm:text-lg">
                  Rp. 15.000
                </p>
              </div>
              <div className="border border-[#4DA656] w-fit h-fit p-1 rounded-full">
                <MdIcons.MdAddShoppingCart size={24} color={"#4DA656"} />
              </div>
            </div>
          </div>
          <div className="sm:mb-8 md:flex lg:w-1/2">
            <div className="sm:w-full sm:h-[250px] md:w-[300px] md:h-[150px] rounded-md overflow-hidden">
              <img src={imgCoffee4} className="w-full" />
            </div>
            <div className="sm:p-5 md:py-0 leading-8 flex justify-between w-full">
              <div>
                <p className="font-['Lato'] font-bold text-[#3E3733] sm:text-xl">
                  Coffee Street 04
                </p>
                <p className="font-['Lato'] text-[#726D67]">
                  Lorem ipsum dolor sit amet.
                </p>
                <p className="font-['Lato'] font-bold text-[#3E3733] sm:text-lg">
                  Rp. 15.000
                </p>
              </div>
              <div className="border border-[#4DA656] w-fit h-fit p-1 rounded-full">
                <MdIcons.MdAddShoppingCart size={24} color={"#4DA656"} />
              </div>
            </div>
          </div>
        </div>

        <div className="py-20">
          <h1 className="uppercase text-center font-['Marcellus'] text-[#3D1C05] sm:text-5xl md:text-6xl lg:text-7xl">
            street food
          </h1>
          <div className="flex justify-center gap-x-3">
            <div className="border-b border-[#3D1C05] sm:w-[20%]"></div>
            <img
              src={imgIconCoffee}
              className="sm:w-[25px] md:w-[30px] lg:w-[35px] relative top-2"
            />
            <div className="border-b border-[#3D1C05] sm:w-[20%]"></div>
          </div>
          <p className="font-['Montserrat'] text-[#3E3733] text-center tracking-wider sm:text-lg mt-5 sm:px-3 md:px-20 lg:px-48">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit nemo minus praesentium consequatur accusamus adipisci.
          </p>
        </div>

        <div className="sm:mx-5 md:mx-10 lg:mx-20 pb-20 lg:flex lg:flex-wrap">
          <div className="sm:mb-8 md:flex lg:w-1/2">
            <div className="sm:w-full sm:h-[250px] md:w-[300px] md:h-[150px] rounded-md overflow-hidden">
              <img src={imgFood1} className="w-full" />
            </div>
            <div className="sm:p-5 md:py-0 leading-8 flex justify-between w-full">
              <div>
                <p className="font-['Lato'] font-bold text-[#3E3733] sm:text-xl">
                  Coffee Street 01
                </p>
                <p className="font-['Lato'] text-[#726D67]">
                  Lorem ipsum dolor sit amet.
                </p>
                <p className="font-['Lato'] font-bold text-[#3E3733] sm:text-lg">
                  Rp. 15.000
                </p>
              </div>
              <div className="border border-[#4DA656] w-fit h-fit p-1 rounded-full">
                <MdIcons.MdAddShoppingCart size={24} color={"#4DA656"} />
              </div>
            </div>
          </div>
          <div className="sm:mb-8 md:flex lg:w-1/2">
            <div className="sm:w-full sm:h-[250px] md:w-[300px] md:h-[150px] rounded-md overflow-hidden">
              <img src={imgFood2} className="w-full" />
            </div>
            <div className="sm:p-5 md:py-0 leading-8 flex justify-between w-full">
              <div>
                <p className="font-['Lato'] font-bold text-[#3E3733] sm:text-xl">
                  Coffee Street 02
                </p>
                <p className="font-['Lato'] text-[#726D67]">
                  Lorem ipsum dolor sit amet.
                </p>
                <p className="font-['Lato'] font-bold text-[#3E3733] sm:text-lg">
                  Rp. 15.000
                </p>
              </div>
              <div className="border border-[#4DA656] w-fit h-fit p-1 rounded-full">
                <MdIcons.MdAddShoppingCart size={24} color={"#4DA656"} />
              </div>
            </div>
          </div>
          <div className="sm:mb-8 md:flex lg:w-1/2">
            <div className="sm:w-full sm:h-[250px] md:w-[300px] md:h-[150px] rounded-md overflow-hidden">
              <img src={imgFood3} className="w-full" />
            </div>
            <div className="sm:p-5 md:py-0 leading-8 flex justify-between w-full">
              <div>
                <p className="font-['Lato'] font-bold text-[#3E3733] sm:text-xl">
                  Coffee Street 03
                </p>
                <p className="font-['Lato'] text-[#726D67]">
                  Lorem ipsum dolor sit amet.
                </p>
                <p className="font-['Lato'] font-bold text-[#3E3733] sm:text-lg">
                  Rp. 15.000
                </p>
              </div>
              <div className="border border-[#4DA656] w-fit h-fit p-1 rounded-full">
                <MdIcons.MdAddShoppingCart size={24} color={"#4DA656"} />
              </div>
            </div>
          </div>
          <div className="sm:mb-8 md:flex lg:w-1/2">
            <div className="sm:w-full sm:h-[250px] md:w-[300px] md:h-[150px] rounded-md overflow-hidden">
              <img src={imgFood4} className="w-full" />
            </div>
            <div className="sm:p-5 md:py-0 leading-8 flex justify-between w-full">
              <div>
                <p className="font-['Lato'] font-bold text-[#3E3733] sm:text-xl">
                  Coffee Street 04
                </p>
                <p className="font-['Lato'] text-[#726D67]">
                  Lorem ipsum dolor sit amet.
                </p>
                <p className="font-['Lato'] font-bold text-[#3E3733] sm:text-lg">
                  Rp. 15.000
                </p>
              </div>
              <div className="border border-[#4DA656] w-fit h-fit p-1 rounded-full">
                <MdIcons.MdAddShoppingCart size={24} color={"#4DA656"} />
              </div>
            </div>
          </div>
        </div>

        <div
          className="w-full bg-cover bg-no-repeat bg-center sm:p-5 md:p-10 lg:flex lg:justify-between"
          style={{ backgroundImage: `url(${bgKasar})` }}
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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laudantium eaque ad veritatis aliquam odio illo accusantium
              placeat sunt! Placeat quos id sequi quas illo labore sint cum nisi
              molestias animi.
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
    </div>
  );
};

export default OurMenu;

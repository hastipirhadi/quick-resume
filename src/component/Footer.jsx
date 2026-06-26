import { ImGithub } from "react-icons/im";
import { FaSnapchat } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="pb-10">
      <div className="flex items-center justify-around pt-6">
        <img className="w-11 h-11" src="./public/image1.png" alt="" />
        <p className="text-[#838189]">
          © 2023 Resume Builder, All rights reserved
        </p>
        <div className="flex gap-5">
          <button className="border rounded-full bg-[#e7ecf0] w-8 h-8 flex justify-center items-center border-[#e7ecf0]">
            <i>
              <ImGithub />
            </i>
          </button>
          <button className="border rounded-full bg-[#e7ecf0] w-8 h-8 flex justify-center items-center border-[#e7ecf0]">
            <i>
              <FaSnapchat />
            </i>
          </button>
          <button className="border rounded-full bg-[#e7ecf0] w-8 h-8 flex justify-center items-center border-[#e7ecf0]">
            <i>
              <IoLogoInstagram />
            </i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;

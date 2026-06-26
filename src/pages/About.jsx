import { FaHeart } from "react-icons/fa";
import Header from "../component/Header";
import { FaQuoteLeft } from "react-icons/fa6";

const About = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center bg-white ">
      <Header />
      <div className="flex flex-col justify-center items-center px-4 gap-6 mt-8">
        <p className="text-ocean-200 text-2xl font-medium">People love us</p>
        <h1 className="text-[#2c3749] text-5xl font-bold">Resume Builder</h1>
        <p className="text-[#718599]">Build the Resume That Gets You Hired!</p>
        <div className="flex flex-col gap-1 border rounded-2xl border-white shadow-xl w-160 h-62 pl-10 pr-10">
          <FaQuoteLeft className="pt-2 mb-3 w-12 h-12 text-ocean-200" />

          <div className="flex justify-between items-start ">
            <p className="text-[#8e939b] w-107.5 ">
              A resume builder website is a web-based tool that allows users to
              create and customize a professional resume to their desired
              specifications. These websites typically provide templates for
              creating a resume.
            </p>
            <img className="rounded-full w-20 h-20"  src="./public/images3.png"/>
          </div>
          <p className="text-start mt-8 ">
            Hasti Pirhadi
            <span className="text-[#848795]"> - Fronted Web Developer</span>
          </p>
        </div>
        <div className="text-5xl text-[#38b2ad] pt-10">
          <FaHeart />
        </div>
      </div>
    </div>
  );
};

export default About;

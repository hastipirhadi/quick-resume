import React from "react";
import SelectTemplate from "./SelectTemplate";
import { Link } from "react-router";

const FirstPage = () => {
  return (
    <section className="flex flex-row justify-center items-center  ">
      <div className="flex flex-col gap-2.5 px-20 w-1/2">
        <h1 className="text-6xl font-semibold text-center px-10">
          Your resume in three <span className="text-ocean"> easy </span> steps
        </h1>
        <p className="text-center mt-9 px-4 text-text-100">
          Resume builder tools that assemble well-formatted resume. Through a
          resume builder, you can create a professional-looking resume in a few
          easy steps. This resume builder offer different template options, so
          you can select the template that best fits your needs and style.
        </p>
        <div className="flex items-center justify-baseline gap-3 mt-10 ">
          <button className="bg-gray-200 w-10 h-10 rounded-[5px]">1</button>
          <p className="text-xl"> Select a template from our collection.</p>
        </div>
        <div className="flex items-center justify-baseline gap-3 ">
          <button className="bg-gray-200 w-10 h-10 rounded-[5px]">2</button>
          <p className="text-xl">
            Build you resume using our easy to use resume builder.
          </p>
        </div>
        <div className="flex items-center justify-baseline gap-3 ">
          <button className="bg-gray-200 w-10 h-10 rounded-[5px]">3</button>
          <p className="text-xl">Download your resume.</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center my-24 ">
        <img className="w-[512px] h-[512px]" src="./public/image2.png" />

        <Link
          to="/select-template"
          className="w-full bg-ocean text-white px-10 mt-5 rounded-3xl py-3 text-base font-medium text-center"
        >
          select Template
        </Link>
        
      </div>
    </section>
  );
};

export default FirstPage;

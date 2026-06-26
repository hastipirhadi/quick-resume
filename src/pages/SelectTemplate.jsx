import React from 'react'
import { Link } from "react-router";
import Header from '../component/Header';

const SelectTemplate = () => {
  return (
    <>
      <div className="pb-20">
        <Header />
        <div className="flex justify-center gap-16 pt-10 items-center ">
          <div to="/create-template" className=" h-49.5">
            <h1 className="text-6xl  leading-20">
              Select a <br /> <span className="text-[#3bb2ae]">Template</span> from <br /> the
              list
            </h1>
          </div>
          <Link
            to="/create-template"
            className="flex flex-wrap gap-7 w-[761px] justify-center items-center "
          >
            <img
              className="w-49.5 h-74.5 border rounded-xl"
              src="./public/images4.png"
              alt=""
            />
            <img
              className="w-49.5 h-74.5 border rounded-xl"
              src="./public/images5.jpg"
              alt=""
            />
            <img
              className="w-49.5 h-74.5 border rounded-xl"
              src="./public/images6.jpg"
              alt=""
            />

            <img
              className="w-49.5 h-74.5 border rounded-xl"
              src="./public/image7.png"
            />
            <img
              className="w-49.5 h-74.5 border rounded-xl"
              src="./public/images8.jpg"
              alt=""
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default SelectTemplate;
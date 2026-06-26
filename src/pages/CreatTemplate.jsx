import React from "react";
import Footer from "../component/Footer";
import Header from "../Component/Header";
import { MdCloudUpload } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { Link } from "react-router";
import { useState } from "react";


const CreateTemplate = () => {
  const [form, setForm] = useState({
    picture: null,
    name: "",
    summary: "",
    workProfile: "",
    address: "",
    phone: "",
    email: "",
    skills: "",
    education: [{ title: "", description: "" }],
    projectsEnabled: true,
    projects: [{ title: "", description: "" }],
    experienceEnabled: true,
    experiences: [{ title: "", description: "" }],
    awardsEnabled: true,
    awards: "",
  });
  const handleChange = (e) => {
    if (name === "picture") {
      const file = e.target.files[0];

      setForm((prev) => ({
        ...prev,
        picture: file ? URL.createObjectURL(file) : null,
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const handleEducationChange = (index, field, value) => {
    const updated = [...form.education];
    updated[index][field] = value;
    setForm((prev) => ({ ...prev, education: updated }));
  };

  const addEducation = () => {
    setForm((prev) => ({
      ...prev,
      education: [...prev.education, { title: "", description: "" }],
    }));
  };

  const handleProjectChange = (index, field, value) => {
    const updated = [...form.projects];
    updated[index][field] = value;
    setForm((prev) => ({ ...prev, projects: updated }));
  };

  const addProject = () => {
    setForm((prev) => ({
      ...prev,
      projects: [...prev.projects, { title: "", description: "" }],
    }));
  };

  const handleExperienceChange = (index, field, value) => {
    const updated = [...form.experiences];
    updated[index][field] = value;
    setForm((prev) => ({ ...prev, experiences: updated }));
  };

  const addExperience = () => {
    setForm((prev) => ({
      ...prev,
      experiences: [...prev.experiences, { title: "", description: "" }],
    }));
  };

  const toggleSection = (section) => {
    setForm((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const printResume = () => {
    window.print();
  };

  const cleanList = (text) =>
    text
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);

  return (
    <div>
      <Header />
      <div className="px-8">
        <div className="flex justify-between mt-10">
          <div className="flex flex-col gap-4 p-2">
            <h3 className="font-bold border-b border-[#cecece] w-103.25 pt-5">
              Personal Details
            </h3>
            <div className=" flex gap-3 items-center">
              <label
                type="file"
                name="Picture"
                className="flex justify-center gap-3 border border-[#e6e6e6] rounded-xl w-83.5 h-16 items-center"
                htmlFor=""
              >
                <i>
                  <MdCloudUpload />
                </i>
                <p className="text-[#a2a09f]">Select a file</p>
              </label>
              <img
                className="w-14.75 h-14.75 rounded-xl"
                src="./public/image9.png"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-2">
              <input
                className="border-2 w-103.5 h-11 rounded-xl p-2 border-[e2e8f0] text-[#97a0b9] font-bold hover:border-[#0d6efd] "
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
              />
              <input
                className="border-2 w-103.5 h-11 rounded-xl p-2 border-[e2e8f0] text-[#97a0b9] font-bold hover:border-[#0d6efd]"
                type="text"
                name="summary"
                value={form.summary}
                onChange={handleChange}
                placeholder="Your Summary"
              />
              <input
                className="border-2 w-103.5 h-11 rounded-xl p-2 border-[e2e8f0] text-[#97a0b9] font-bold hover:border-[#0d6efd]"
                type="text"
                name="workProfile"
                value={form.workProfile}
                onChange={handleChange}
                placeholder="Work Profile"
              />
              <input
                className="border-2 w-103.5 h-11 rounded-xl p-2 border-[e2e8f0] text-[#97a0b9] font-bold hover:border-[#0d6efd]"
                type="text"
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="Address"
              />
              <input
                className="border-2 w-103.5 h-11 rounded-xl p-2 border-[e2e8f0] text-[#97a0b9] font-bold hover:border-[#0d6efd]"
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
              />
              <input
                className="border-2 w-103.5 h-11 rounded-xl p-2 border-[e2e8f0] text-[#97a0b9] font-bold hover:border-[#0d6efd]"
                type="text"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email id"
              />
            </div>
            <h3 className="font-bold border-b border-[#cecece] w-103.25 pt-5">
              Technical Skills
            </h3>
            <input
              name="skills"
              type="text"
              value={form.skills}
              onChange={handleChange}
              className="border-2 w-103.5 h-11 rounded-xl p-2 border-[e2e8f0] text-[#97a0b9] font-bold hover:border-[#0d6efd]"
              placeholder="Separate skills by comma"
            />
            <h3 className="font-bold border-b border-[#cecece] w-103.25 pt-5">
              Education
            </h3>
            <div className="flex-col  items-baseline gap-10 text-center -left-4">
              <button
                onClick={addEducation}
                className="border-2 bg-[#309794] w-103.5 h-11 rounded-xl border-[#309794] text-white font-bold ]"
              >
                Add Education
              </button>
              <div className="">
                {form.education.map((edu, index) => (
                  <div key={index} className="p-4 space-y-3">
                    <input
                      type="text"
                      placeholder="Enter Title"
                      value={edu.title}
                      onChange={(e) =>
                        handleEducationChange(index, "title", e.target.value)
                      }
                      className="w-full border rounded-lg px-3 py-2"
                    />
                    <input
                      type="text"
                      placeholder="Use comma to separate description"
                      value={edu.description}
                      onChange={(e) =>
                        handleEducationChange(
                          index,
                          "description",
                          e.target.value,
                        )
                      }
                      className="w-full border rounded-lg px-3 py-2"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="font-bold border-b border-[#cecece] w-103.25 pt-5 flex justify-between pb-3">
              <p>Projects</p>
              <button className="relative h-6 w-10.5 rounded-full bg-teal-500">
                <span className="absolute right-0.75 top-0.75 h-4.5 w-4.5 rounded-full bg-white shadow" />
              </button>
            </div>
            <button className="border-2 bg-[#309794] w-103.5 h-11 rounded-xl p-2 border-[#309794] text-white font-bold ]">
              Add Projects
            </button>
            <div className="font-bold border-b border-[#cecece] w-103.25 pt-5 flex justify-between pb-3">
              <p>Work Experience</p>
              <button className="relative h-6 w-10.5 rounded-full bg-teal-500">
                <span className="absolute right-0.75 top-0.75 h-4.5 w-4.5 rounded-full bg-white shadow" />
              </button>
            </div>
            <button className="border-2 bg-[#309794] w-103.5 h-11 rounded-xl p-2 border-[#309794] text-white font-bold ]">
              Add Experience
            </button>
            <div className="font-bold border-b border-[#cecece] w-103.25 pt-5 flex justify-between pb-3">
              <p>Awards & Achievement</p>
              <button className="relative h-6 w-10.5 rounded-full bg-teal-500">
                <span className="absolute right-0.75 top-0.75 h-4.5 w-4.5 rounded-full bg-white shadow" />
              </button>
            </div>
            <textarea
              className="border w-103.5 p-2 rounded-xl h-20 border-[#97a0b9] hover:border-[#0d6efd]"
              name=""
              id=""
              placeholder="Use comma to separate Achievement"
            ></textarea>
          </div>
          <div className="flex flex-col  shadow-xl/50 border p-10 gap-3 w-200 h-fit">
            <h1 className="text-5xl font-bold text-center">
              {form.name || "Your Name"}
            </h1>
            <div className="flex gap-4 items-center justify-center pb-3">
              <div className="flex gap-3 items-center  ">
                <i className="text-[#6c757c]">
                  <ImLocation />
                </i>
                <p className="text-[#d4d7d3] text-xl">
                  {form.address || "address"}
                </p>
                <div className="border-r h-7 border-[#d4d7d3]"></div>
              </div>
              <div className="flex gap-3 items-center ">
                <i className="text-[#6c757c]">
                  <MdEmail />
                </i>
                <p className="text-[#d4d7d3] text-xl">
                  {form.email || "emailAddress"}
                </p>
                <div className="border-r h-7 border-[#d4d7d3]"></div>
              </div>
              <div className="flex gap-3 items-center ">
                <i className="text-[#6c757c]">
                  <FaPhone />
                </i>
                <p className="text-[#d4d7d3] text-xl">
                  {form.phone || "phoneNumber"}
                </p>
                <div className="border-r h-7 border-[#d4d7d3]"></div>
              </div>
            </div>
            <div className="text-2xl font-bold text-center">
              {form.workProfile || "Work Profile"}
            </div>
            <div className="bg-[#d1e4e2] flex items-start justify-self-start text-start w-full p-2 ">
              <h1 className="text-2xl font-bold">TECHNICAL SKILLS</h1>
            </div>
            <div>
              <ul className="flex gap-4 justify-center items-center font-bold text-xl">
                {cleanList(form.skills).map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className="bg-[#d1e4e2] flex items-start justify-self-start text-start w-full p-2 ">
              <h1 className="text-2xl font-bold">PROJECTS</h1>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl">Project Title</h1>
              <ul className="list-disc text-[#1A202C] font-medium pl-5">
                <li>Project Description are Shown here</li>
                <li>with Bullet Points</li>
              </ul>
            </div>
            <div className="bg-[#d1e4e2] flex items-start justify-self-start text-start w-full p-2 ">
              <h1 className="text-2xl font-bold">EDUCATION</h1>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl">
                {form.education.map((edu, index) => (
                  <div key={index} className="mb-3">
                    <h3 className="text-2xl mb-2">{edu.title}</h3>
                    <p className="text-gray-700 text-base pt-2">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </h1>
              <ul className="list-disc text-[#1A202C] font-medium"></ul>
            </div>
            <div className="bg-[#d1e4e2] flex items-start justify-self-start text-start w-full p-2 ">
              <h1 className="text-2xl font-bold">WORK EXPERIENCE</h1>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl">Work Title</h1>
              <ul className="list-disc text-[#1A202C] font-medium pl-5">
                <li>Project Description are Shown here</li>
                <li>with Bullet Points</li>
              </ul>
            </div>
            <div className="bg-[#d1e4e2] flex items-start justify-self-start text-start w-full p-2 ">
              <h1 className="text-2xl font-bold">AWARDS & ACHIEVEMENTS</h1>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl">Work Title</h1>
              <ul className="list-disc text-[#1A202C] font-medium pl-5">
                <li>Your Awards are shown here</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex gap-4 justify-center items-center">
          <button
            onClick={printResume}
            className="border border-[#62807e] text-[#40776c] w-17.25 h-10 rounded-xl"
          >
            Print
          </button>
          <Link
            to="/select-template"
            className="flex justify-center items-center border border-[#62807e] text-[#40776c] w-52.75 h-10 rounded-xl"
          >
            Select Another Template
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CreateTemplate;
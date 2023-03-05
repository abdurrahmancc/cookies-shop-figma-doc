import React from "react";
import { useForm } from "react-hook-form";
import { Outlet } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import { useSelector } from "react-redux";
import FrontEndMenu from "./frontEnd/FrontEndMenu";

const DocSidebar = () => {
  const { theme } = useSelector((state) => state.theme);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    reset();
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="flex gap-x-20">
          <div className="w-[350px] h-[calc(100vh-64px)] relative overflow-y-scroll">
            <form
              className={`${
                theme === "dark" ? "bg-[#0F172A]" : "bg-white"
              } w-full  max-w-[233px] fixed top-[64px] px-0 py-8`}
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="form-control w-full">
                <div className="relative max-w-[233px] w-full">
                  <input
                    placeholder="Search..."
                    type="text"
                    name="search"
                    {...register("search")}
                    className={`placeholder:italic w-full cursor-pointer block h-10 pl-5 pr-3 focus:outline-none shadow-sm input rounded-lg  focus:ring-0 sm:text-sm ${
                      theme === "dark" ? "border-none" : "border-1 border-gray-200"
                    }`}
                  />
                  <button className=" absolute right-[2px] p-3 rounded top-[-2px] ">
                    <BiSearchAlt className="text-xl opacity-60" />
                  </button>
                </div>
              </div>
            </form>
            <ul className="mt-[100px]">
              <FrontEndMenu />
            </ul>
          </div>
          <div id="documents-content" className="w-full h-[calc(100vh-64px)]">
            <div className="my-10">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DocSidebar;

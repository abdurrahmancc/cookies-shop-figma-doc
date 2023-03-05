import React from "react";
import Collapsible from "react-collapsible";
import { useForm } from "react-hook-form";
import { BiSearchAlt } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../../assets/logo/logo-1.png";
import { IoMdClose } from "react-icons/io";

const MobileSidebar = ({ toggle, setToggle }) => {
  const { pathname } = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
  });

  return (
    <div
      id="navSidebar"
      className={`fixed top-0 w-[260px] h-screen bg-white shadow-xl
             transition-[2s] z-[100] ${
               pathname.includes("/home2")
                 ? toggle
                   ? "active left-0"
                   : "left-[-300px]"
                 : toggle
                 ? "active right-0"
                 : "right-[-300px]"
             } `}
    >
      <div id="mobile-top" className="px-6 py-[15px] border-b flex justify-between items-center">
        <div>
          <Link href={"/"}>
            <img src={logo} width={100} height={36} className="w-[100px] h-auto" alt="logo" />
          </Link>
        </div>
        <div>
          <button
            className="bg-primary text-white rounded-full p-1"
            title="close"
            onClick={() => setToggle(!toggle)}
          >
            {" "}
            <IoMdClose />
          </button>
        </div>
      </div>
      <div id="mobile-menu" className="p-6 pt-8">
        <div className="">
          <form className="" onSubmit={onSubmit}>
            <div className="form-control">
              <div className="relative">
                <input
                  id="mobile-Search"
                  placeholder="Search..."
                  type="text"
                  {...register("search")}
                  className="placeholder:italic w-full placeholder:text-gray-500 block pl-5  pr-9 shadow-xs 
                      bg-inherit focus:bg-inherit
                      focus:outline-none h-[45px] focus:border-[#515251] rounded-sm border border-gray-200 focus:ring-0 sm:text-sm"
                />
                <button
                  type="submit"
                  className=" absolute right-[2px] p-2 rounded top-[5px]"
                  aria-label="search"
                >
                  <BiSearchAlt id="search-product" className="text-xl text-gray-400" />
                </button>
              </div>
            </div>
          </form>
        </div>
        <ul className="relative mt-5">
          {/*--------------- home -------------- */}
          <li className="inline-block py-[6px] border-b text-black list-none w-full">
            <NavLink
              to={"/documents/font-end/welcome"}
              className={({ isActive }) =>
                isActive
                  ? "pl-5 leading-7 ml-[-20px] border-l border-primary text-primary "
                  : "pl-5 leading-7 hover:border-l ml-[-20px] hover:border-slate-400 border-slate-700"
              }
            >
              welcome
            </NavLink>
          </li>
          <li className="inline-block py-[6px] border-b text-black list-none w-full">
            <NavLink
              to={"/documents/font-end/installation"}
              className={({ isActive }) =>
                isActive
                  ? "pl-5 leading-7 ml-[-20px] border-l border-primary text-primary "
                  : "pl-5 leading-7 hover:border-l ml-[-20px] hover:border-slate-400 border-slate-700"
              }
            >
              Installation
            </NavLink>
          </li>
          <li className="inline-block py-[6px] border-b text-black list-none w-full">
            <NavLink
              to={"/documents/font-end/customization"}
              className={({ isActive }) =>
                isActive
                  ? "pl-5 leading-7 ml-[-20px] border-l border-primary text-primary "
                  : "pl-5 leading-7 hover:border-l ml-[-20px] hover:border-slate-400 border-slate-700"
              }
            >
              Customization
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileSidebar;

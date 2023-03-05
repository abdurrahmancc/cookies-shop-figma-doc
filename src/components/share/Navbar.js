import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo_white.png";
import logo_1 from "../../assets/logo/logo-1.png";
import { VscThreeBars } from "react-icons/vsc";
import Theme from "./Theme";
import { useSelector } from "react-redux";
import MobileSidebar from "../documents/docSidebar/MobileSidebar";

const Navbar = () => {
  const { theme } = useSelector((state) => state.theme);
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div
        className={`border-b z-50 top-0 sticky h-16 ${
          theme === "dark" ? "border-[#232b3e] bg-[#0F172A]" : "bg-white"
        }`}
      >
        <div className="container mx-auto">
          <div className="navbar  w-full container">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  {/* ========= for mobile toggle start ========= */}
                  <div
                    className="lg:hidden flex items-center cursor-pointer"
                    id="navToggle2"
                    onClick={() => setToggle(!toggle)}
                  >
                    <VscThreeBars className="text-3xl text-white" />
                  </div>
                  {/* ========= for mobile toggle end ========= */}
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52"
                >
                  <li>
                    <Link to={"/documents"}>Item 1</Link>
                  </li>
                  <li tabIndex={0}>
                    <a className="justify-between">
                      Parent
                      <svg
                        className="fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                      </svg>
                    </a>
                    <ul className="p-2">
                      <li>
                        <a>Submenu 1</a>
                      </li>
                      <li>
                        <a>Submenu 2</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>Item 3</a>
                  </li>
                </ul>
              </div>
              <Link to={"/"} className="">
                <img
                  src={theme === "dark" ? logo : logo_1}
                  className="max-w-[120px] h-auto"
                  alt="logo"
                />
              </Link>
            </div>
            <div className="navbar-end gap-x-8">
              <div className="hidden lg:flex">
                <ul className="menu gap-x-4 menu-horizontal p-0">
                  <li>
                    <NavLink
                      to={"/documents"}
                      className={({ isActive }) =>
                        isActive
                          ? `text-neutral ${theme === "dark" ? "bg-[#0284C7]" : "bg-primary"}  `
                          : ""
                      }
                    >
                      Documents
                    </NavLink>
                  </li>

                  <li>
                    <a href="https://support-29169.web.app/inbox" target="_blank" rel="noreferrer">
                      Support
                    </a>
                  </li>
                </ul>
              </div>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src="https://placeimg.com/80/80/people" />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
              <Theme />
            </div>
          </div>
        </div>
      </div>
      <MobileSidebar toggle={toggle} setToggle={setToggle} />
    </>
  );
};

export default Navbar;

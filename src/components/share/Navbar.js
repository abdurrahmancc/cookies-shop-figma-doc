import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import logo_1 from "../../assets/logo/logo.png";
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
                <label className="lg:hidden">
                  {/* ========= for mobile toggle start ========= */}
                  <div
                    className="lg:hidden flex items-center cursor-pointer"
                    id="navToggle2"
                    onClick={() => setToggle(!toggle)}
                  >
                    <VscThreeBars
                      className={`text-3xl  ${theme === "dark" ? "text-white" : "text-[#000]"}`}
                    />
                  </div>
                  {/* ========= for mobile toggle end ========= */}
                </label>
              </div>
              <Link to={"/"} className="md:flex hidden items-center gap-2 text-[18px] font-[600]">
                <img
                  src={theme === "dark" ? logo : logo_1}
                  className="max-w-[40px]  h-auto"
                  alt="logo"
                />
                <span>Cookie Shop</span>
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

import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const FrontEndMenu = () => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <>
      <li>
        <span className="font-semibold pb-2 inline-block">Doc Navigation</span>
        <ul
          className={`pl-5 leading-8 border-l ${
            theme === "dark" ? "border-slate-700" : "border-slate-200"
          } `}
        >
          <li>
            <NavLink
              to={"font-end/welcome"}
              className={({ isActive }) =>
                isActive
                  ? "pl-5 leading-7 ml-[-20px] border-l border-primary text-primary "
                  : "pl-5 leading-7 hover:border-l ml-[-20px] hover:border-slate-400 border-slate-700"
              }
            >
              welcome
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"font-end/installation"}
              className={({ isActive }) =>
                isActive
                  ? "pl-5 leading-7 ml-[-20px] border-l border-primary text-primary "
                  : "pl-5 leading-7 hover:border-l ml-[-20px] hover:border-slate-400 border-slate-700"
              }
            >
              Installation
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"font-end/customization"}
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
      </li>
    </>
  );
};

export default FrontEndMenu;

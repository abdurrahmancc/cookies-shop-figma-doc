import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <div className="h-[calc(100vh-64px)]">
      <div className="h-full  flex flex-col justify-center items-center">
        <h1 className="lg:text-5xl md:text-3xl text-2xl max-w-[500px] lg:max-w-[800px] pb-20 font-bold text-center lg:leading-[60px]">
          Cookie Shop - Modern eCommerce Figma Template
        </h1>
        <Link to="documents">
          <button
            className={`bg-[#0284C7] flex items-center gap-3 border-none text-xl text-neutral px-10 py-4 rounded-full font-semibold ${
              theme === "dark" ? "bg-[#0284C7]" : "bg-primary"
            } `}
          >
            Documentation <BsArrowRight className="mt-1 text-2xl font-bold" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import { useSelector } from "react-redux";
import img from "../../../../assets/img/Screenshot-2.png";

const Installation = () => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <div>
      <h2 className="text-4xl leading-[54px] pb-4 pt-5 font-bold">Installation:</h2>
      <p className="pb-4">
        open your{" "}
        <a
          className="text-primary font-semibold"
          href="https://www.figma.com/files/recent?fuid=1167900227633773256"
          target="_blank"
          rel="noreferrer"
        >
          figma
        </a>{" "}
        and then just drag and drop or import this figma file.
      </p>
      <figure>
        <img src={img} alt="imgae" />
      </figure>
    </div>
  );
};

export default Installation;

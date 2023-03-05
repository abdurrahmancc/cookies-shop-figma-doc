import React from "react";
import { useSelector } from "react-redux";
import included from "../../../../../assets/img/included_Screenshot.png";
import layer from "../../../../../assets/img/layer_Structure.png";

const features = [
  "02 Awesome Homepage Versions.",
  "15+ Total Pages.",
  "Unique and Modern Style.",
  "Super Clear and Clean Layout.",
  "Awesome and Creative Design.",
  "Easily customizable Figma files.",
  "Pixel Perfect.",
  "Good color combination",
  "Fully Customizable.",
  "24/7 Awesome support",
  "Image are not included",
  "Well Documentation",
  "And many more…",
];

const packageStructure = [
  "Home page 1",
  "Home page 2",
  "Shop page 1",
  "Shop page 2",
  "Shop page 3",
  "Product Details Page",
  "Product Details Review Page",
  "Quick View Page",
  "Add to cart page",
  "Proceed to checkout Page",
  "Wishlist Page",
  "About Us Page",
  "FAQ Page",
  "Contact Page",
  "Blog Details Page",
  "Blog Page",
  "Order Info Page",
  "Address Info Page",
  "Account Dashboard Page",
  "404 Error Page",
  "Account Info Page",
  "Sign Up",
  "Login",
];

const Features = () => {
  const { theme } = useSelector((state) => state.theme);
  const isLastFeatures = features?.length - 1;
  const isLastStructure = packageStructure?.length - 1;

  return (
    <div className="mt-10">
      <div>
        <h2 className="text-2xl font-bold pb-4">Template Features</h2>
        <ol
          className={`pl-5  rounded-sm leading-8 mb-10 p-5 ${
            theme === "dark"
              ? "border-slate-700 bg-base-100 border-[0.5px]"
              : " border-[0.5px] shadow-sm"
          }`}
        >
          {features &&
            features.map((feature, i) => (
              <li key={i}>
                <div className="flex items-center gap-2">
                  <div className="flex justify-center items-center p-1 lg:w-5 cursor-pointer lg:h-5 h-5 w-5 rounded-full  text-white  indicator-item  bg-primary top-2 right-1 text-[0.6875rem]">
                    {i + 1}
                  </div>
                  <strong className={`text-[16px] font-[400]`}>{feature}</strong>{" "}
                </div>

                <div
                  className={`${
                    isLastFeatures === i ||
                    "divider relative right-[5px] h-3 bg-slate-400  w-[0.5px] divider-horizontal"
                  }`}
                ></div>
              </li>
            ))}
        </ol>
      </div>
      <div>
        <h2 className="text-2xl font-bold pb-4">Package Structure</h2>
        <p className="pb-4">
          In the purchased package, we will include figma folder (14 figma files) and documentation
          folder. The list below will list out all figma files in the package.
        </p>
        <ol
          className={`pl-5  rounded-sm leading-8 mb-10 p-5 ${
            theme === "dark"
              ? "border-slate-700 bg-base-100 border-[0.5px]"
              : " border-[0.5px] shadow-sm"
          }`}
        >
          {packageStructure &&
            packageStructure.map((structure, i) => (
              <li key={i}>
                <div className="flex items-center gap-2">
                  <div className="flex justify-center items-center p-1 lg:w-5 cursor-pointer lg:h-5 h-5 w-5 rounded-full  text-white  indicator-item  bg-primary top-2 right-1 text-[0.6875rem]">
                    {i + 1}
                  </div>
                  <strong className={`text-[16px] font-[400]`}>{structure}</strong>{" "}
                </div>

                <div
                  className={`${
                    isLastStructure === i ||
                    "divider relative right-[5px] h-3 bg-slate-400  w-[0.5px] divider-horizontal"
                  }`}
                ></div>
              </li>
            ))}
        </ol>
      </div>
      <div>
        <h3 className="text-2xl leading-9 font-bold pb-4">Layer Structure</h3>
        <p className="text-[16px] leading-7 pb-4">
          As you can see in the images below, ưe created some folders which was named clearly based
          on its position in the layout and all of them are well organized.
        </p>

        <figure>
          <img src={layer} alt="screenshot" />
        </figure>
      </div>
      <div className="mt-10">
        <h3 className="text-2xl leading-9 font-bold pb-4">What's Included</h3>
        <p className="text-[16px] leading-7 pb-4">
          Go to your Download page after purchasing the Cookie Shop Figma template on
          Themeforest.net with your Envato account. You can download the cookies-shop template
          package, which includes the following files:
        </p>

        <figure className="border shadow-sm">
          <img src={included} width="100%" alt="screenshot" />
        </figure>
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-bold">
          The contents of the template package downloaded from ThemeForest
        </h3>
        <div className="mt-4">
          <ol
            className={`pl-5  rounded-sm leading-8 mt-5 mb-10 p-5 ${
              theme === "dark"
                ? "border-slate-700 bg-base-100 border-[0.5px]"
                : " border-[0.5px] shadow-sm"
            }`}
          >
            <li>
              <div className="flex items-center gap-2">
                <strong className="before:content-['1'] before:rounded-full before:font-normal before:bg-primary before:px-[7px] before:py-[1px] before:text-white before:mr-3 before:text-sm text-[16px] font-bold">
                  cookies-shop:
                </strong>
                <span className="text-[16px]">
                  A figma Template file. You can edit and use this file for your company.
                </span>
              </div>
              <div className="divider relative right-[5px] h-3 bg-slate-400  w-[0.5px] divider-horizontal"></div>
            </li>

            <li>
              <div className="flex items-center gap-2">
                <strong className="before:content-['3'] before:rounded-full before:font-normal before:bg-primary before:px-[7px] before:py-[1px] before:text-white before:mr-3 before:text-sm text-[16px] font-bold">
                  Documentation :
                </strong>{" "}
                <span className="text-[16px]">This folder contains what you are reading now.</span>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Features;

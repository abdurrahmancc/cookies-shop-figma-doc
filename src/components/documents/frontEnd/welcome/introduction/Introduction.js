import React from "react";
import { useSelector } from "react-redux";
import screenshot from "../../../../../assets/img/screenshot_1.png";

const Introduction = () => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <div>
      <div className="mt-20">
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
                Template Name:
              </strong>{" "}
              <span className="text-[16px]">Cookie Shop - Modern eCommerce Figma Template </span>
            </div>
            <div className="divider relative right-[5px] h-3 bg-slate-400  w-[0.5px] divider-horizontal"></div>
          </li>
          <li>
            <div className="flex items-center gap-2">
              <strong className="before:content-['2'] before:rounded-full before:font-normal before:bg-primary before:px-[7px] before:py-[1px] before:text-white before:mr-3 before:text-sm text-[16px] font-bold">
                Version:
              </strong>{" "}
              <span className="text-[16px]">1.0.0</span>
            </div>
            <div className="divider relative right-[5px] h-3 bg-slate-400  w-[0.5px] divider-horizontal"></div>
          </li>
          <li>
            <div className="flex items-center gap-2">
              <strong className="before:content-['3'] before:rounded-full before:font-normal before:bg-primary before:px-[7px] before:py-[1px] before:text-white before:mr-3 before:text-sm text-[16px] font-bold">
                Last Updated On:
              </strong>{" "}
              <span className="text-[16px]">5 march, 2023</span>
            </div>
            <div className="divider relative right-[5px] h-3 bg-slate-400  w-[0.5px] divider-horizontal"></div>
          </li>
          <li>
            <div className="flex items-center gap-2">
              <strong className="before:content-['4'] before:rounded-full before:font-normal before:bg-primary before:px-[7px] before:py-[1px] before:text-white before:mr-3 before:text-sm text-[16px] font-bold">
                Author:
              </strong>{" "}
              <span className="text-[16px]">twocoderssolution</span>
            </div>
            <div className="divider relative right-[5px] h-3 bg-slate-400  w-[0.5px] divider-horizontal"></div>
          </li>
          <li>
            <div className="flex items-center gap-2">
              <strong className="before:content-['5'] before:rounded-full before:font-normal before:bg-primary before:px-[7px] before:py-[1px] before:text-white before:mr-3 before:text-sm text-[16px] font-bold">
                Support:
              </strong>{" "}
              <a
                href="https://support-29169.web.app/inbox"
                target="_blank"
                rel="noreferrer"
                className="text-[16px] text-primary"
              >
                https://support-29169.web.app
              </a>
            </div>
          </li>
        </ol>
      </div>

      <div className="mt-10">
        <figure className="">
          <img src={screenshot} alt="screenshot" />
        </figure>
      </div>
      <section className="mt-20">
        <h2 className="text-4xl mb-5 leading-[54px] font-bold">Introduction</h2>
        <div>
          <h3 className="text-xl font-bold mb-4">
            Cookie Shop - Modern eCommerce Figma Template ( Documentation )
          </h3>

          <p className="text-[16px] leading-7">
            Thank you so much for choosing this template. Your comments and ratings would be highly
            appreciated. You have purchased this template so, you will get full support from us. We
            will update this template time to time and we want to hear from you for the future
            updates or for complete new templates. If you have any questions that are beyond the
            scope of this document, feel free to contact us at{" "}
            <span>
              <address className="inline">
                <code>
                  <a
                    href="https://support-29169.web.app/inbox"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[18px] text-primary"
                  >
                    Support.
                  </a>
                </code>
              </address>
            </span>
          </p>
        </div>
      </section>
      <section className="mt-10">
        <div>
          <h3 className="text-2xl font-bold mb-4">Getting started</h3>
          <p className="text-[16px] ">
            Cookie Shop - Modern eCommerce Figma Template” is modern, clean, and is professional. It
            has 2 homepage layouts Options! This template suits any type of eCommerce, Cookie Shop,
            stores, online shop. Additionally, it is perfect for Cookie Shop and online shops. The
            design is very easy to customize.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Introduction;

import React from "react";
import { useSelector } from "react-redux";
import img1 from "../../../../assets/img/Screenshot-1.png";
import background_color from "../../../../assets/img/background_color.png";
import text_size from "../../../../assets/img/text_size.png";
import font_weight from "../../../../assets/img/font_weight.png";
import font_family from "../../../../assets/img/font_family.png";
import change_img from "../../../../assets/img/change_image.png";
import text_color from "../../../../assets/img/text_color.png";

const Customization = () => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <div>
      <h2 className="text-4xl leading-[54px] pb-4 pt-5 font-bold">Customization:</h2>
      <p className="text-lg">
        You can customize this template with your own content. Here are some basic changes you need.
      </p>
      <div className="mt-20">
        <h3 className="text-2xl font-bold">When you open this figma file</h3>
        <div className="mt-4">
          <figure>
            <img src={img1} alt="favicon" />
          </figure>
        </div>
      </div>

      <div className="mt-20">
        <h3 className="text-2xl font-bold">How to change text color</h3>
        <p className="text-lg mt-5">Just replace the color code.</p>
        <div className="mt-4">
          <figure className="mt-5">
            <img src={text_color} alt="title" />
          </figure>
        </div>
      </div>
      <div className="mt-20">
        <h3 className="text-2xl font-bold">How to change background color</h3>
        <p className="text-lg mt-5">Just replace the color code.</p>
        <div className="mt-4">
          <figure className="mt-5">
            <img src={background_color} alt="background_color" />
          </figure>
        </div>
      </div>
      <div className="mt-20">
        <h3 className="text-2xl font-bold">How to change text size</h3>
        <p className="text-lg mt-5">Just replace the text size.</p>
        <div className="mt-4">
          <figure className="mt-5">
            <img src={text_size} alt="text size" />
          </figure>
        </div>
      </div>
      <div className="mt-20">
        <h3 className="text-2xl font-bold">How to change font weight</h3>
        <p className="text-lg mt-5">Just replace the font weight</p>
        <div className="mt-4">
          <figure className="mt-5">
            <img src={font_weight} alt="font_weight" />
          </figure>
        </div>
      </div>
      <div className="mt-20">
        <h3 className="text-2xl font-bold">How to change font-family</h3>
        <p className="text-lg mt-5">Just replace the font-family</p>
        <div className="mt-4">
          <figure className="mt-5">
            <img src={font_family} alt="font_family" />
          </figure>
        </div>
      </div>
      <div className="mt-20">
        <h3 className="text-2xl font-bold">How to change image</h3>
        <p className="text-lg mt-5">Just replace the image</p>
        <div className="mt-4">
          <figure className="mt-5">
            <img src={change_img} alt="chage_img" />
          </figure>
        </div>
      </div>

      {/*--------------- support ----------------*/}
      <div className="mt-20">
        <h3 className="text-2xl font-bold">Support</h3>
        <p className="text-lg mt-5">
          If you face any issues please contact us at{" "}
          <a href="https://support-29169.web.app/inbox" target="_blank" rel="noopener noreferrer">
            <i className="text-primary">Support</i>
          </a>
          . We provide 42/7 real-time support for our customers.
        </p>
        <p className="text-lg mt-5">Thank you for purchasing our template!</p>
      </div>
    </div>
  );
};

export default Customization;

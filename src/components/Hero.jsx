import React from "react";
import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section className={`flex flex-col md:flex-row ${styles.paddingY}`}>
      <div
        className={` flex-1 flex-col xl:px-0 sm:px-16 px-6 ${styles.flexStart}`}
      >
        <div className="flex flex-row items-center px-4 py-[6px] bg-discount-gradient rounded-[10px] mb-2">
          <img
            src={discount}
            alt="discount icon"
            className="w-[32px] h-[32px]"
          />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month </span> Account
          </p>
        </div>

        {/* div for heading */}
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold text-[52px] ss:text-[72px] text-white leading-[75px] ss:leading-[100px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>{" "}
          </h1>

          {/* div for the button */}
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        {/* Heading below the button */}
        <h1 className="font-poppins font-semibold text-[52px] ss:text-[68px] text-white leading-[75px] ss:leading-[100px]">
          Payment Method.
        </h1>

        {/* Paragraph below the heading */}
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
          veniam rerum sint debitis delectus molestiae? Amet quidem
          necessitatibus et quo?
        </p>
      </div>

      {/* div for the image side */}
      <div>
        <img
          src={robot}
          alt="Billing"
          className="relative w-[100%] h-[100%] z-[5]"
        />
      </div>
    </section>
  );
};

export default Hero;

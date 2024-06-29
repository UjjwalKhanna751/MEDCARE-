import React from "react";

import { Img, Text } from "../../components";

const MainPagePage = () => {
  return (
    <>
      <div className="flex flex-col font-dmsans items-center justify-start mx-auto w-full">
        <div className="bg-gradient  flex flex-col items-center justify-end p-[46px] md:px-10 sm:px-5 w-full">
          <Img
            className="h-[523px] sm:h-auto mt-3.5 object-cover w-[39%] md:w-full"
            src="images/img_rectangle34.png"
            alt="rectangleThirtyFour"
          />
          <Text className="font-bold mt-[39px] md:text-5xl text-8xl text-black-900 tracking-[1.92px]">MEDCARE +</Text>
          <Text className="font-bold sm:text-[34px] md:text-[40px] text-[44px] text-black-900 tracking-[0.88px]">
            <span className="text-black-900 font-dmsans text-left font-medium">AI-BASED MEDICAL ASSISTANT</span>
            <span className="text-black-900 font-dmsans text-left"> </span>
          </Text>
          <Text className="font-bold mt-[136px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900 tracking-[0.50px]">
            “Treatment without prevention is simply unsustainable.”
          </Text>
        </div>
      </div>
    </>
  );
};

export default MainPagePage;
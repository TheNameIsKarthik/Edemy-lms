import React from "react";
import { assets } from "../../assets/assets";

const CallToAction = () => {
  return (
    <div className='flex flex-col items-center gap-4 pt-10 pb-24 px-8 md:px-0'>
      <h1 className='text-xl md:text-4xl text-gray-800 font-semibold'>Learn anything, anytime, anywhere.</h1>
      <p className='text-gray-500 sm:text-sm'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia aut commodi corporis blanditiis <br /> quo reprehenderit recusandae
        reiciendis officia aliquam consectetur!
      </p>
      <div className='flex items-center gap-6 font-medium mt-4'>
        <button className='px-10 py-3 rounded-md text-white bg-blue-600 cursor-pointer'>Get Started</button>
        <button className='flex items-center gap-3 cursor-pointer'>
          Learn More <img src={assets.arrow_icon} alt='arrow' />
        </button>
      </div>
    </div>
  );
};

export default CallToAction;

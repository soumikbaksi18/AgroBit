import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div>
        <div className='flex justify-center items-center flex-col'>
        <div className=" mt-8 text-center text-green-900 text-[56px] font-semibold leading-[84px]">We empower agriculture by helping you make smarter choices</div>

          <p className="mt-4 text-center text-zinc-700 text-lg font-semibold leading-[27px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
        </div>

        <div className='flex justify-center mt-12'>
          <div className='px-8 py-4 bg-green-900  rounded-lg'><a href="" className='text-white poppins'>Get Started today</a></div>
        </div>

    </div>
  )
}

export default Hero;
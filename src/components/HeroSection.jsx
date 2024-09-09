import React from 'react';
import video from "../assets/hero.mp4";
import AvailableMeal from './AvailableMeal';
// import logo from "../assets/logo.png";
// import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <>
        <div className='relative flex  items-center justify-center'>
            <div className='absolute inset-0 -z-20 h-full w-full overflow-hidden'>
                <video
                    src={video}
                    autoPlay muted playsInline poster={video}
                    className='h-full w-full object-cover'
                ></video>
            </div>
            <div className='absolute inset-0 -z-20 bg-gradient-to-b from-transparent from-70% to-black'></div>
            <div className='relative  flex h-screen flex-col items-center justify-center md:top-40 gap-5 text-white pb-7 sm:pb-10'>
                {/* <motion.img
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    src={logo}
                    alt="restura"
                    className='w-[80%] sm:w-[50%] md:w-[40%] lg:w-[30%] mx-auto p-4'
                /> */}
                <button className='border border-lime-300 w-1/3 px-3 py-2 rounded  order-3 md:order-1'>View Recipe </button>
                {/* <p className='ps-8 sm:ps-16 md:ps-32 text-sm sm:text-base md:text-lg tracking-tighter text-white'>Paris</p> */}
                <h2 className='text-5xl lg:text-7xl text-lime-400'>French Cuisine</h2>
                <p className='text-sm  tracking-wide text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil magni velit, .</p>
            </div>
        </div>
        <AvailableMeal />
        </>
    );
};

export default HeroSection;

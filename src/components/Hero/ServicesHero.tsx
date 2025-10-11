"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
export default function AboutHero() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "Safe",
    },
    {
      text: "Future",
    },
    {
      text: "with",
    },
    {
      text: "Quadra",
      className: "text-gray-500 dark:text-blue-500",
    },
    {
      text: "Security",
      className: "text-indigo-400 dark:text-blue-500",
    },
  ];
  const MotionImage = motion(Image);
  return (
    <div className="h-auto w-full  bg-gradient-to-b from-blue-900 to-indigo-700 pt-15 ">
      <section className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 py-12 md:py-16">

        {/* <div className="flex-1 text-center md:text-left space-y-6 pl-15">
          <h1 className="text-4xl md:text-8xl font-bold text-[#B7D3FF] text-shadow-md">
            Services
          </h1>bg-gradient-to-b from-blue-900 to-indigo-700
          <p className="text-lg white">
            Quadra Security: Committed to
            <br />
            Safeguarding Your Home, Business,
            <br />
            and Community
          </p>
          <button className="px-4 py-3 bg-[#434CFF] text-white rounded-3xl shadow-md hover:bg-yellow-600 flex gap-2">
            Explore Services
            <img src="/ServicesImages/LinkArrow.svg" alt="icon" width={30} height={30} />
          </button>
        </div>

        <div className="flex-1 mt-8 md:mt-0">
          <MotionImage
            src="/ServicesImages/servicesheroimage.svg"
            alt="dot"
            width={400} // required in next/image
            height={400}
            className=""
            initial={{ scale: 0 }}
            animate={{ scale: 1.2 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          />
        </div> */}
        <div className="flex flex-col items-center justify-center h-[25rem] bg-gradient-to-b from-blue-900 to-indigo-700 mx-auto ">
         
          <TypewriterEffect words={words}  />
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
            <div className="flex-1 mt-8 md:mt-0">
              <MotionImage
                src="/ServicesImages/servicesheroimage.svg"
                alt="dot"
                width={350} // required in next/image
                height={350}
                className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 "
                initial={{ scale: 0 }}
                animate={{ scale: 1.2 }}
                transition={{ duration: 1.1, ease: "easeOut",delay:3.4 }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

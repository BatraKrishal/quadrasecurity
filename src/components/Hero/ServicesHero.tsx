"use client";
import Image from "next/image";
import { motion } from "framer-motion";
export default function AboutHero() {
  const MotionImage = motion(Image);
  return (
    <div className="h-auto w-full  bg-gradient-to-b from-[#040630] to-[#1F07DE] pt-15 ">
      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16">
        <div className="flex-1 text-center md:text-left space-y-6 pl-15">
          <h1 className="text-4xl md:text-8xl font-bold text-[#B7D3FF] text-shadow-md">
            Services
          </h1>
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
        </div>
      </section>
    </div>
  );
}

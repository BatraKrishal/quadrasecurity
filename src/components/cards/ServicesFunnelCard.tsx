"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function StrategyCard() {
  const [active, setActive] = useState<string | null>(null);

  const items = [
    { label: "Threat Response", comment: "Quick actions to mitigate risks." },
    { label: "Access Control", comment: "Manage entry and permissions securely." },
    { label: "Surveillance", comment: "Monitor activities and detect anomalies." },
  ];

  // Ref + inView for image animation
  const imageRef = useRef(null);
  const isInView = useInView(imageRef, { once: true, margin: "-100px" });

  return (
    <div className="flex flex-col md:flex-row py-10">
      {/* Main Card */}
      <div className="bg-[#0D0544] text-white px-6 mt-6 rounded-2xl shadow-xl flex flex-col md:flex-row w-full md:w-[600px] mx-4 md:ml-20 h-auto md:h-80">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center pr-4 py-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-4 h-4 bg-purple-400 rounded-sm"></div>
            <p className="uppercase text-sm font-semibold">Strategy</p>
          </div>
          <h2 className="text-2xl font-semibold leading-snug">
            Strategy to ensure <br /> your complete <br /> safety solution...
          </h2>
          <p className="text-sm text-gray-300 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore quis
            delectus assumenda quidem quibusdam rerum vero veniam architecto,
            consectetur tempora voluptates libero commodi quo aperiam ab, numquam
            beatae culpa consequuntur!
          </p>
        </div>

        {/* Right Funnel */}
        <div className="w-full md:w-1/2 flex justify-center items-center relative py-4">
          <div className="flex flex-col items-center gap-3 relative">
            {items.map((item, index) => (
              <div
                key={index}
                className="relative group"
                // Hover for desktop
                onMouseEnter={() => setActive(item.label)}
                onMouseLeave={() => setActive(null)}
                // Tap for mobile
                onClick={() =>
                  setActive(active === item.label ? null : item.label)
                }
              >
                {/* Funnel Step */}
                <div
                  className={`relative text-center text-lg font-semibold text-[#10003A] cursor-pointer transition 
                  ${active === item.label ? "bg-white" : "bg-[#8E9DE2]"}`}
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%)",
                    width: `${240 - index * 46}px`,
                    padding: "20px 0",
                  }}
                >
                  {item.label}
                </div>

                {/* Tooltip */}
                {active === item.label && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="absolute left-[105%] md:left-[125%] top-1/2 -translate-y-1/2 bg-white text-black text-sm p-2 rounded-lg shadow-md w-48"
                  >
                    {item.comment}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Arrow */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 ml-4 hidden md:block">
            <Image
              src="/ServicesImages/Uparrow.svg"
              alt="Arrow"
              width={30}
              height={40}
            />
          </div>
        </div>
      </div>

      {/* Image with in-view animation (Hidden on mobile) */}
      <motion.div
        ref={imageRef}
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="hidden md:block "
      >
        <Image
          src="/ServicesImages/servicesstrategyimage.png"
          alt="dot"
          width={600}
          height={180}
        />
      </motion.div>
    </div>
  );
}

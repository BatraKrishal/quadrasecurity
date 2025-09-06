"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

type FAQ = {
  question: string;
  answer: string;
};

type ServiceCardProps = {
  title: string;
  faqs: FAQ[];
  image: string;
  dotSvg?: string;
};

export default function ServiceCard({
  title,
  faqs,
  image,
  dotSvg,
}: ServiceCardProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<number>(0); // 0 = FAQs, 1 = Tab2, 2 = Tab3
  const [hoveredTab, setHoveredTab] = useState<number | null>(null);

  const cardRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);

  // detect when card comes into view
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (cardRef.current) {
      setLineHeight(cardRef.current.offsetHeight);
    }
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-6 w-[950px] mx-auto">
      {/* Title */}
      <h2 className="text-3xl font-bold text-white pl-10">{title}</h2>

      <div className="flex items-stretch gap-4">
        {/* Dot + Gradient Line */}
        <div className="flex flex-col items-center relative">
          {/* Dot */}
          {dotSvg ? (
            <motion.img
              src={dotSvg}
              alt="dot"
              className="w-5 h-5"
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          ) : (
            <motion.div
              className="w-5 h-5 bg-gradient-to-b from-red-400 to-yellow-400 rounded-full shadow-md"
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          )}

          {/* Gradient Line (full card height) */}
          {/* Gradient Line (with 5 colors and sharp ends) */}
          <motion.div
            ref={lineRef}
            initial={{ height: 0 }}
            animate={isInView ? { height: lineHeight } : {}}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-[3px] bg-gradient-to-b from-pink-500 via-purple-500 via-blue-500 via-green-400 to-yellow-400"
            style={{
              clipPath:
                "polygon(100% 100% , 0 0, 20% 0, 50% 10%, 100% 95%, 100% 100%, 0 100%, 100% 100%, 50% 90%, 0 5%)",
            }}
          />
        </div>

        {/* Card */}
        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, y: 80 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-gradient-to-b from-[#8582DD] to-[#532D6A] rounded-2xl shadow-2xl p-6 flex flex-col md:flex-row items-center gap-6 flex-1 relative"
        >
          {/* Top-left Tab Buttons */}
          <div className="absolute top-4 left-6 flex gap-6">
            {["FAQs", "Tab 2", "Tab 3"].map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                onMouseEnter={() => setHoveredTab(index)}
                onMouseLeave={() => setHoveredTab(null)}
                className="relative text-white font-semibold text-lg pb-1"
              >
                {tab}
                {/* Gradient underline on active OR hover */}
                <motion.span
                  className="absolute left-0 bottom-0 h-[2px] w-full bg-gradient-to-r from-pink-500 to-yellow-400"
                  initial={{ scaleX: 0 }}
                  animate={{
                    scaleX: activeTab === index || hoveredTab === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ transformOrigin: "left" }}
                />
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="flex-1 w-full mt-10">
            {activeTab === 0 && (
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-white/30 pb-2">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="flex justify-between items-center w-full text-left text-lg text-white font-medium"
                    >
                      {faq.question}
                      {openIndex === index ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                    {openIndex === index && (
                      <p className="mt-2 text-white/90 text-sm">{faq.answer}</p>
                    )}
                  </div>
                ))}
              </div>
            )}

            {activeTab === 1 && (
              <div className="text-white text-lg">
                <p>✨ Content for Tab 2 goes here.</p>
              </div>
            )}

            {activeTab === 2 && (
              <div className="text-white text-lg">
                <p>🚀 Content for Tab 3 goes here.</p>
              </div>
            )}
          </div>

          {/* Image Section */}
          <div className="flex-1 flex justify-center">
            <img
              src={image}
              alt={title}
              className="w-full max-w-xs rounded-lg shadow-md"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

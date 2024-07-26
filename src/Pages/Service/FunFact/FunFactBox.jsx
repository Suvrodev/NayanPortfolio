import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useInView } from "react-intersection-observer";

const FunFactBox = ({ fun }) => {
  // console.log(fun);

  const { number, title, after, botText } = fun;

  const [counterOn, setCounterOn] = useState(false);
  const handleShowCounter = () => {
    setCounterOn(!counterOn);
  };

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  // console.log("InView: ", inView);

  return (
    <div className="flex  items-center justify-center border-[1px] c gap-4 p-10">
      <div className="flex flex-col gap-8">
        <div className="text-2xl font-bold text-center">{title}</div>
        <div className="flex items-center justify-center gap-1 text-2xl font-bold">
          <h1 className="text-[60px] font-bold">
            <ScrollTrigger
              onEnter={handleShowCounter}
              onExit={handleShowCounter}
            >
              <div ref={ref}>{counterOn && <CountUp end={number} />}</div>
            </ScrollTrigger>
          </h1>
        </div>
        <div className="text-2xl font-bold text-center">{botText}</div>
      </div>
    </div>
  );
};

export default FunFactBox;

/**
 * urls: https://www.npmjs.com/package/react-intersection-observer
 */

/**
 * urls: //www.youtube.com/watch?v=NWyWoW61B3I&t=2s
 */

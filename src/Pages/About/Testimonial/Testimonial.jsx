import React from "react";
import TestimonialCard from "./TestimonialCard/TestimonialCard";

const Testimonial = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-10">Testimonial</h1>

      <div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-white mb-10">
            OUR SATISFIED CUSTOMERS FEEDBACK
          </h1>
        </div>
        <div>
          <TestimonialCard />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

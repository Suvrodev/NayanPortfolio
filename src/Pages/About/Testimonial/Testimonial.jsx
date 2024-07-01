import React, { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard/TestimonialCard";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch("./testimonial.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

  console.log("Testimonials: ", testimonials);
  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-10">Testimonial</h1>

      <div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold text-white mb-10">
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

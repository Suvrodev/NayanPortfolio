import React from "react";
import mapImage from "../../assets/Map/Map.jpg";
import LinkBox from "../../Shared/LinkBox/LinkBox";
import ContactBox from "./ContactBox/ContactBox";
const Contact = () => {
  return (
    <div className="overflow-hidden">
      <div className="pageMargin">
        <LinkBox text1={"Home  >  Contact"} />
        {/* <h1 className="my-10 text-3xl text-white font-bold">About Me</h1> */}
        <h1 className="my-10 pageTitle">About Me</h1>
        <div className="my-20">
          <ContactBox />
        </div>
        <img src={mapImage} alt="" />

        <div className="mt-10 ">
          <form action="">
            <input
              type="text"
              name=""
              id=""
              className="w-full bg-transparent border p-5"
              placeholder="Name"
            />
            <input
              type="text"
              name=""
              id=""
              className="w-full bg-transparent border p-5 mt-10"
              placeholder="Email"
            />

            <textarea
              type=""
              name=""
              id=""
              className="w-full bg-transparent border p-5 h-60 mt-10"
              placeholder="Message"
            />

            <button className="btn text-white w-[250px] mt-10 bg-[#222222] hover:bg-[#444444] border-0">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

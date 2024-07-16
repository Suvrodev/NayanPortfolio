import React, { useRef } from "react";
import mapImage from "../../assets/Map/Map.jpg";
import LinkBox from "../../Shared/LinkBox/LinkBox";
import ContactBox from "./ContactBox/ContactBox";
import pageTitle from "../../JS/pageTitle";
import goLink from "../../JS/goLink";
import emailjs from "@emailjs/browser";
import SendMail from "./SendMail/SendMail";

const Contact = () => {
  pageTitle("Contact");

  // const newMapImage = "https://i.ibb.co/hmSk8ch/Google-Map.png";
  const newMapImage = "https://i.ibb.co/r01KyRD/Google-Map.png";
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_fup4rjf", "template_xqxicq8", form.current, {
        publicKey: "_kzTXrFfQk2uFNUe9",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="overflow-hidden">
      <div className="pageMargin">
        <LinkBox text1={"Home  >  Contact"} />
        {/* <h1 className="my-10 text-3xl text-white font-bold">About Me</h1> */}
        <h1 className="my-10 pageTitle">About Me</h1>
        <div className="my-20">
          <ContactBox />
        </div>
        {/* <img src={mapImage} alt="" /> */}
        <div
          className=""
          onClick={() =>
            goLink(
              "https://www.google.com/maps/place/Sarkar+Nayan/@22.7992224,89.5565426,15z/data=!4m6!3m5!1s0x39ff8f6d0da24ee9:0xecfc2f0112caac29!8m2!3d22.7992224!4d89.5565426!16s%2Fg%2F11vxjcxy9w?entry=ttu"
            )
          }
        >
          <img src={newMapImage} alt="" className="w-full" />
        </div>

        <div className="my-10">
          <SendMail />
        </div>
      </div>
    </div>
  );
};

export default Contact;

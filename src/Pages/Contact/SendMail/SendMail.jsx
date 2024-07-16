import React, { useContext, useRef } from "react";
import emailjs from "@emailjs/browser";
import { AuthContext } from "../../../Provider/AuthProvider";

const SendMail = () => {
  const { successfullToast } = useContext(AuthContext);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_35x6jai", "template_8wdgyy8", form.current, {
        publicKey: "wCPHjijFy4iAwlqCa",
      })
      .then(
        (result) => {
          console.log("SUCCESS!");
          console.log(result);
          if (result.text == "OK") {
            successfullToast("Your mail send successfully");
          }
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          name="user_name"
          id=""
          className="w-full bg-transparent border p-5"
          placeholder="Name"
        />

        <input
          type="text"
          name="user_email"
          id=""
          className="w-full bg-transparent border p-5 mt-10"
          placeholder="Email"
        />
        {/* <label>Message</label>
        <textarea name="message" /> */}
        <textarea
          type=""
          name="message"
          id=""
          className="w-full bg-transparent border p-5 h-60 mt-10"
          placeholder="Message"
        />
        <input
          type="submit"
          value="Send"
          className="btn text-white w-[250px] mt-10 bg-[#222222] hover:bg-[#444444] border-0"
        />
      </form>
    </div>
  );
};

export default SendMail;

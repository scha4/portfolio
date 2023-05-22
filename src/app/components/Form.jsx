"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Form() {
  const form = useRef();
  const showToastMessage = () => {
    toast.success("Mail Sent!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lrqg1fg",
        "template_um9sous",
        form.current,
        "VkYzIg5LAEc2I2jKj"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          showToastMessage();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      {" "}
      <div>
        <ToastContainer />
      </div>
      <div className="flex items-center justify-center  mt-9 ">
        <h1
          className="text-4xl font-bold
 "
        >
          {" "}
        </h1>
      </div>
      <div className=" mt-7 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto w-full sm:w-full md:w-3/4 lg:w-1/2 ">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col 
"
        >
          <div className="flex flex-col">
            <label>Name</label>
            <input
              type="text"
              name="user_name"
              className="bg-gray-100 h-9 indent-2 "
              placeholder="Enter Name"
              required
            />
          </div>
          <div className="flex flex-col mt-2">
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              className="bg-gray-100 h-9 indent-2 "
              placeholder="Enter Your Email"
              required
            />
          </div>

          <div className="flex flex-col mt-2">
            <label>Message</label>
            <textarea
              name="user_message"
              placeholder="Enter Your Message"
              required
              className="bg-gray-100 h-20 indent-2 "
            />
          </div>

          <input
            type="submit"
            value="SUBMIT"
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded w-44 ml-auto mr-auto mt-7"
          />
        </form>
      </div>
    </>
  );
}

export default Form;

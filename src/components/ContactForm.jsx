import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { BsSendFill } from "react-icons/bs";

import toast, { Toaster } from 'react-hot-toast'; 

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    const loadingToast = toast.loading('Sending message...');

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(
        SERVICE_ID,    
        TEMPLATE_ID,   
        form.current,
        PUBLIC_KEY     
    )
      .then(
        (result) => {
          console.log(result.text);

          toast.success("Send! Thank you for reaching out.", { id: loadingToast });
          form.current.reset();
        },
        (error) => {
          console.log(error.text);

          toast.error("Oops! Something zipped away. Let's try sending that again?", { id: loadingToast });
        }
      );
  };

  return (
    <div className="mt-[100px] xl:mt-0">

      <Toaster 
        position="top-center" 
        reverseOrder={false}
      />
      
      <h3 className="text-xl items-center sm:text-2xl md:text-4xl font-bold latest justify-end flex gap-2 sm:gap-4">
        <BsSendFill className="text-[#55d63b]" />
        Send me a message
      </h3>

      <div className="w-full pt-[60px]">
        <div className="flex-1">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="p-3 text-right rounded-lg bg-transparent border-b border-gray-400 focus:outline-none focus:border-blue-500 text-sm sm:text-base xl:text-left"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="p-3 text-right rounded-lg bg-transparent border-b border-gray-400 focus:outline-none focus:border-blue-500 text-sm sm:text-base xl:text-left"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              className="p-3 text-right rounded-lg bg-transparent border border-gray-700 focus:outline-none focus:border-blue-500 text-sm sm:text-base xl:text-left"
              required
            ></textarea>

            <div className="text-center md:text-right">
              <button
                type="submit"
                className="px-6 w-full sm:w-[200px] py-3 rounded-lg bg-gray-300 text-black cursor-pointer transition-transform duration-150 ease-in-out font-semibold active:scale-95"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
    
      
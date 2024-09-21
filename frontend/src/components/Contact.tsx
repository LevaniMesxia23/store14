import Footer from "./Footer";
import { Mycontext } from "../App";
import { useContext, useEffect } from "react";
import AOS from "aos";

function Contact() {
  const context = useContext(Mycontext);
  if (!context) {
    throw new Error("Header must be used within a MyContext.Provider");
  }
  const { onSubmit } = context;

  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);
  return (
    <>
      <div className="min-h-[39.7rem] bg-gray-100 flex flex-col items-center p-6">
        <h2
          className="text-3xl font-bold text-gray-800 mb-2 text-center"
          data-aos="fade-down"
        >
          Contact Us
        </h2>
        <div className="flex items-start">
          <p className="text-gray-600 mb-6 max-w-[42rem]" data-aos="fade-right">
            We'd love to hear from you. Please fill out the form below and we'll
            get back to you as soon as possible.
          </p>
        </div>
        <div className="w-full max-w-2xl">
          <form onSubmit={onSubmit} className="space-y-4" data-aos="fade-up">
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                style={{ borderWidth: "1px" }}
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                id="email"
                name="email"
                type="email"
                placeholder="Your Email"
                style={{ borderWidth: "1px" }}
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                id="phone"
                name="number"
                type="tel"
                placeholder="Your Phone Number"
                style={{ borderWidth: "1px" }}
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                id="message"
                name="message"
                placeholder="Your Message"
                style={{ borderWidth: "1px" }}
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                className="bg-gray-800 text-white font-bold py-2 px-6 rounded-lg hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;

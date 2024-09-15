import Footer from "./Footer";

function Contact() {
  return (
    <>
    
    <div className="min-h-[39.7rem] bg-gray-100 flex flex-col items-center p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">Contact Us</h2>
      <div className="flex items-start">

      <p className="text-gray-600 mb-6 max-w-[42rem]">
        We'd love to hear from you. Please fill out the form below and we'll get back to you as soon as possible.
      </p>
      </div>
      <div className="w-full max-w-2xl">
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              id="name"
              type="text"
              placeholder="Your Name"
              style={{ borderWidth: '1px' }}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              id="email"
              type="email"
              placeholder="Your Email"
              style={{ borderWidth: '1px' }}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input
              className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              id="phone"
              type="tel"
              placeholder="Your Phone Number"
              style={{ borderWidth: '1px' }}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              id="message"
              placeholder="Your Message"
              style={{ borderWidth: '1px' }}
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
    <Footer/>
    </>
  );
}

export default Contact;

import { useState } from "react";

const ContactForm = () => {
  const [error, setError] = useState({});
  const handleSub = (e) => {
    e.preventDefault();
    e.target.reset();
    const data = {};

    const formData = new FormData(e.target);
    for (let [key, value] of formData.entries()) {
      data[key] = value.trim();
      if (key !== "message" && !value.trim()) {
        setError((prev) => {
          return { ...prev, [key]: `${key} is required` };
        });
      }
    }
    // if (Object.keys(error).length > 0) return;

    console.log(error);
    console.log(data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name,value);

    if (name === "message") return;
    setError((prev) => {
      const updatedErrors = { ...prev };

      if (!value.trim()) {
        updatedErrors[name] = `${name} is required`;
      } else {
        delete updatedErrors[name];
      }

      return updatedErrors;
    });
  };

  return (
    <div className="bg-white rounded-sm shadow-xs border border-gray-100 ">
      <form className="py-11.5 px-8" onSubmit={handleSub}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="relative">
            <input
              type="text"
              name="name"
              onChange={handleChange}
              // value={FormData.value}
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-sm border border-gray-200 bg-gray-50 placeholder-gray-400 focus:outline-none"
            />
            {error.name && (
              <p className="text-red-500 text-sm mt-1">{error.name}</p>
            )}
            <span className="text-[#E89C9C] absolute top-3 left-27.5">*</span>
          </div>
          <div className="relative">
            <input
              type="email"
              onChange={handleChange}
              // value={FormData.value}
              name="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 placeholder-gray-400 focus:outline-none"
            />
            {error.email && (
              <p className="text-red-500 text-sm mt-1">{error.email}</p>
            )}
            <span className="text-[#E89C9C] absolute top-3 left-33.5">*</span>
          </div>
          <div className="relative">
            <input
              type="tel"
              onChange={handleChange}
              // value={FormData.value}
              name="phone"
              placeholder="Phone Number"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 placeholder-gray-400 focus:outline-none"
            />
            {error.phone && (
              <p className="text-red-500 text-sm mt-1">{error.phone}</p>
            )}
            <span className="text-[#E89C9C] absolute top-3 left-34.5">*</span>
          </div>
        </div>
        <div className=" mt-8">
          <textarea
            placeholder="Your Message"
            // value={message}
            name="message"
            rows="5"
            className="w-full pl-4 pt-3 pb-16.5 rounded-lg border border-gray-200 bg-gray-50 placeholder-gray-400 focus:outline-none "
          ></textarea>
        </div>
        <div className="relative pt-8 pb-10">
          <button
            // onClick={handleSub}
            type="submit"
            name=""
            className=" bg-secondary hover:bg-red-600 text-white font-medium py-4 px-12 rounded-sm transition-colors duration-200 absolute right-0 cursor-pointer"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

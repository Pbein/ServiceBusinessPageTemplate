import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target as HTMLInputElement | HTMLTextAreaElement;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Process form data
    console.log(formData);
  };

  return (
    <>
      <div className="pt-16">
        {" "}
        {/* This adds 100 pixels of padding to the top */}
      </div>
      <div className="container mx-auto px-4 md:px-6 py-24 pt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="mb-8 text-gray-600">
              Have questions? We'd love to hear from you. Fill out the form
              below and we'll get back to you as soon as possible.
            </p>
            <form onSubmit={handleSubmit}>
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                onChange={handleChange}
                className="shadow border rounded py-2 px-3 text-gray-700 mb-3 w-full"
              />

              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                onChange={handleChange}
                className="shadow border rounded py-2 px-3 text-gray-700 mb-3 w-full"
              />

              <label
                htmlFor="message"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                onChange={handleChange}
                className="shadow border rounded py-2 px-3 text-gray-700 mb-3 w-full"
                rows={4}
              ></textarea>

              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="flex flex-col justify-center items-center h-full text-center max-w-lg mx-auto">
            <h3 className="text-3xl font-bold text-blue-600 mb-6">
              Get in Touch
            </h3>
            <p className="mb-6 text-gray-600 text-lg">
              Sample Services Inc.
              <br />
              1234 Street Name
              <br />
              City, State, 56789
            </p>
            <p className="mb-6 text-gray-600 text-lg">
              Email:{" "}
              <a
                href="mailto:info@sampleservices.com"
                className="text-blue-500 hover:text-blue-700"
              >
                info@sampleservices.com
              </a>
              <br />
              Phone:{" "}
              <a
                href="tel:+11234567890"
                className="text-blue-500 hover:text-blue-700"
              >
                (123) 456-7890
              </a>
            </p>
            {/* Add a map or additional contact details here */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

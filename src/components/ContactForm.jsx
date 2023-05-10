import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    //Add logic to send form data to backend for processing

    console.log({ name, email, message });
    setSubmitSuccess(true);
    setIsSubmitting(false);
  };

  return (
    <div className="max-w-lg mx-auto">
      <form onSubmit={handleSubmit} className="bg-sandybrown p-6 rounded-lg shadow-md border-2 border-neutral-700 mt-2 ">
        <h2 className="text-2xl text-neutral-700 font-bold mb-6">Contact Us</h2>
        {submitSuccess ? (
          <p className="text-neutral-700 mb-4">Thanks for your message!</p>
        ) : (
          <>
            <div className="mb-4">
              <label htmlFor="name" className="block font-medium mb-2 text-neutral-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-neutral-300 border-gray-300 py-2 px-4 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-medium mb-2 text-neutral-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-neutral-300 border-gray-300 py-2 px-4 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block font-medium mb-2 text-neutral-700">
                Message
              </label>
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="5"
                className="bg-neutral-300 border-gray-300 py-2 px-4 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-orange-500 py-2 px-4 rounded-md text-white hover:bg-orange-600 transition-colors"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}

export default ContactForm
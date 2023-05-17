import { useState } from "react";
import axios from "axios";
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
    axios
      .post("http://localhost:4000/api/sendmail", { name, email, message })
      .then((res) => {
        //if bad request set error to error message
        if (res.data.error) {
          setSubmitSuccess(false);
        }
        //if good request set error to success message
        else {
          setSubmitSuccess(true);
        }
      });

    console.log({ name, email, message });
    setSubmitSuccess(true);
    setIsSubmitting(false);
  };

  return (
    <div className="mx-auto max-w-lg">
      <form
        onSubmit={handleSubmit}
        className="mt-2 rounded-lg border-2 border-neutral-700 bg-sandybrown p-6 shadow-md "
      >
        <h2 className="mb-6 text-2xl font-bold text-neutral-700">Contact Us</h2>
        {submitSuccess ? (
          <p className="mb-4 text-neutral-700">Thanks for your message!</p>
        ) : (
          <>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="mb-2 block font-medium text-neutral-700"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-md border-gray-300 bg-neutral-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="mb-2 block font-medium text-neutral-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border-gray-300 bg-neutral-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="mb-2 block font-medium text-neutral-700"
              >
                Message
              </label>
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="5"
                className="w-full rounded-md border-gray-300 bg-neutral-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="rounded-md bg-orange-500 px-4 py-2 text-white transition-colors hover:bg-orange-600"
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

export default ContactForm;

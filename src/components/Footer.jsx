import React, {useState} from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import axios from 'axios';

function Footer() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubscribe = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    //Add logic to send form data to backend for processing
    axios
      .post("http://localhost:4000/api/subscribe", { email })
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

    console.log({email});
    setSubmitSuccess(true);
    setIsSubmitting(false);
  };

  return (
    <>
      <div className="bg-sandybrown h-1"></div>
      <footer className="bg-neutral-700 py-8 lg:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between">
            <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
              <h3 className="text-lg font-semibold text-gray-100 mb-4">About Us</h3>
              <p className="text-gray-400 leading-loose">
                Faris Hadziabdic <br/>
                Adnan Silajdzic <br/>
                Kenan Sabic <br />
                Ismar Aganovic <br />
                Nedzmija Karic <br />
              </p>
            </div>
            <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
              <h3 className="text-lg font-semibold text-gray-100 mb-4">Navigation</h3>
              <ul className="text-gray-400 leading-loose">
                <li><a href="/">Home</a></li>
                <li><a href="/browse">Browse</a></li>
                <li><a href="/user/recipes">Profile</a></li>
              </ul>
            </div>
            <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
              <h3 className="text-lg font-semibold text-gray-100 mb-4">Newsletter</h3>
              <ul className="text-gray-400 leading-loose">
              <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                />
              </ul>
              <div className="mt-4">
                
                <button
                  onClick={handleSubscribe}
                  type="button"
                  className="bg-sandybrown text-white px-4 py-2 rounded-md hover:bg-orange-400 focus:outline-none focus:bg-orange-400"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-8">
            <div className="flex items-center">
              <a href="#" className="text-orange-500 hover:text-orange-400 mr-4">
                <FaFacebook />
              </a>
              <a href="#" className="text-orange-500 hover:text-orange-400 mr-4">
                <FaTwitter />
              </a>
              <a href="#" className="text-orange-500 hover:text-orange-400">
                <FaInstagram />
              </a>
            </div>
            <p className="text-gray-400 text-sm">&copy; 2023. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;


import { React, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      name,
      email,
      bio,
      password,
    };

    axios.post("http://localhost:4000/api/user", user).then((res) => {
      console.log(user);
    });
  };

  return (
    <div>
      <Navbar />
      <div className="grid min-h-screen w-full grid-cols-11 bg-jet bg-cover pt-20 md:bg-spices">
        <div className="h-7/8 col-start-5 col-end-8 mb-auto mt-auto rounded-3xl bg-white">
          <div className=" mb-0 h-full w-full rounded-3xl ">
            <form
              action="#"
              className="lg:h-100 z-10 flex h-full flex-col  items-center justify-center rounded-3xl bg-white bg-opacity-80 pb-20"
              onSubmit={handleSubmit}
            >
              <h2 className="mb-2 mt-4 font-Imprima text-5xl  font-medium">
                Register
              </h2>
              <div className="mb-5 mt-4 w-[240px]">
                <label htmlFor="email" className="w-1/5 text-left text-2xl">
                  Username
                </label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  placeholder="Username"
                  maxLength={30}
                  name="username"
                  id="username"
                  className="h-12 w-full rounded bg-gray-200 p-3 text-lg"
                />
              </div>
              <div className="mb-5  w-[240px]">
                <label htmlFor="email" className="w-1/5 text-left text-2xl">
                  Email
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  placeholder="Email"
                  name="email"
                  id="email"
                  className="h-12 w-full rounded bg-gray-200 p-3 text-lg"
                />
              </div>
              <div className="mb-3 w-[240px]">
                <label
                  htmlFor="password"
                  maxLength={30}
                  className="w-1/5 text-left text-2xl"
                >
                  {" "}
                  Password
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                  placeholder="Password"
                  name="password"
                  id="password"
                  className="h-12 w-full rounded bg-gray-200 p-3 text-lg"
                />
              </div>
              <div className="w[240px] mb-10">
                <label
                  htmlFor="bioTextArea"
                  className="w-1/5 text-left text-2xl"
                >
                  Bio
                </label>
                <textarea
                  onChange={(e) => setBio(e.target.value)}
                  value={bio}
                  rows={3}
                  maxLength={150}
                  placeholder="Bio"
                  name="bio"
                  id="bioTextArea"
                  className="h-12 w-full rounded bg-gray-200 p-3 text-lg"
                />
              </div>

              <input
                type="submit"
                className="mb-4 w-64 cursor-pointer rounded bg-sandybrown p-3.5 text-3xl font-bold text-jet"
              />
              <p>Already have an account?</p>
              <a
                href="../login"
                className="w-36 p-2 text-center text-3xl text-sandybrown"
              >
                Log in
              </a>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Registration;

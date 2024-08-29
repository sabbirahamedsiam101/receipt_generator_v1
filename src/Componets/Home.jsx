import React, { useContext, useState } from "react";
import { authContext } from "../Provider/AuthProvider";
import Navbar from "./Navbar";

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn, user } = useContext(authContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });

    // console.log(email , password)
  };

  return (
    <div
      className="mt-20 bg-center flex items-center justify-center"
     
    >
      <Navbar />

      <form
        onSubmit={handleLogin}
        className={`bg-white p-8 rounded-lg shadow-lg w-full max-w-sm ${user && 'hidden'}`}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full p-3 border rounded-lg"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="w-full p-3 border rounded-lg"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Home;

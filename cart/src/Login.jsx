import React, { useState } from "react";

import { login, useLoggedIn } from "./cart";

export default function Login() {
  const loggedIn = useLoggedIn();
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState('sally');
  const [password, setPassword] = useState('123');

  if (loggedIn) return null;
  return (
    <>
      <span onClick={() => setShowLogin(!showLogin)}>
        <i className="text-2xl ri-fingerprint-line" id="showlogin"></i>
      </span>
      {showLogin && (
        <div
          className="absolute p-5 text-black bg-white border-4 border-blue-800 rounded-xl"
          style={{
            width: 300,
            top: "2rem",
            left: -250,
          }}
        >
          <input
            type="text"
            placeholder="User Name"
            value={username}
            onChange={(evt) => setUsername(evt.target.value)}
            className="w-full p-2 text-sm border border-gray-400 rounded-md"
          />
          <input
            type="password"
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
            className="w-full p-2 mt-3 text-sm border border-gray-400 rounded-md"
          />
          <button
            className="px-5 py-2 mt-5 text-sm text-white bg-green-900 rounded-md"
            onClick={() => login(username, password)}
            id="loginbtn"
          >
            Login
          </button>
        </div>
      )}
    </>
  )
}
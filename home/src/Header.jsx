import React from "react";
import { Link } from "react-router-dom";

import MiniCart from "cart/MiniCart";
import Login from "cart/Login";

export default function Header() {
  return (
    <div className="p-5 text-3xl font-bold text-white bg-blue-500">
      <div className="flex">
        <div className="flex flex-grow">
          <Link to="/">Fidget Spinner World</Link>
          <div className="mx-5">|</div>
          <Link id="cart" to="/cart">
            Cart
          </Link>
        </div>
        <div className="relative flex-end">
          <MiniCart />
          <Login />
        </div>
      </div>
    </div>
  );
}

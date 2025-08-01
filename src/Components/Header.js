import { useState } from "react";
import { LOGO_URL } from "../Utils/url";
import { Link } from "react-router-dom";

const Header = () => {
  const [login, setLogin] = useState("Login");

  return (
    <div className="flex justify-between border-solid border-b-2 border-black items-center">
      <div className="flex items-center">
        <Link to="/">
          <img className="w-40 h-40" src={LOGO_URL} alt="food-logo" />
        </Link>
      </div>
      <div>
        <ul className="flex items-center px-2 text-xl">
          <li className="px-4 border-solid border-r-2 border-b-white m-4 hover:text-neutral-500 ">
            <Link to="/home">Home</Link>
          </li>
          <li className="px-4 border-solid border-r-2 border-b-white m-4 hover:text-neutral-500">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4 border-solid border-r-2 border-b-white m-4 hover:text-neutral-500">
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li className="px-4 border-solid borde-r-2 border-b-white m-4 hover:text-neutral-500">
            <Link to="/groceries">Groceries</Link>
          </li>
          <li className="px-4 border-solid border-r-2 border-b-white m-4 hover:text-neutral-500">
            Cart
          </li>
          <li className="px-4  hover:text-white">
            <button
              className="border-solid border-2 rounded-lg text-base border-black py-1 px-3 hover:bg-zinc-800"
              onClick={() => {
                setLogin(login === "Login" ? "Logout" : "Login");
              }}
            >
              {login}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

import { useState } from "react";
import { LOGO_URL } from "../Utils/url";
import { Link } from "react-router-dom";

const Header = () => {
  const [login, setLogin] = useState("Login");

  return (
    <div className="flex justify-between bg-gray-400 items-center">
      <div className="flex items-center">
        <Link to="/">
          <img className="w-56" src={LOGO_URL} alt="food-logo" />
        </Link>
      </div>
      <div>
        <ul className="flex items-center px-2 text-2xl">
          <li className="px-4 border-solid border-r-2 border-b-white m-4 hover:text-white ">
            <Link to="/home">Home</Link>
          </li>
          <li className="px-4 border-solid border-r-2 border-b-white m-4 hover:text-white">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4 border-solid border-r-2 border-b-white m-4 hover:text-white">
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li className="px-4 border-solid borde-r-2 border-b-white m-4 hover:text-white">
            <Link to="/groceries">Groceries</Link>
          </li>
          <li className="px-4 border-solid border-r-2 border-b-white m-4 hover:text-white">
            Cart
          </li>
          <li className="px-4 border-solid border-r-2 border-b-white m-4 hover:text-white">
            <button
              className="login-btn"
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

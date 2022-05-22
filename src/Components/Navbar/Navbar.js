import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import "./Navbar.css";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <div className="navbar bg-base-100 border color">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabindex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link className="text-xl" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-xl" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="text-xl" to="/shop">
                Shop
              </Link>
            </li>
            <li>
              <Link className="text-xl" to="/review">
                Review
              </Link>
            </li>
            <li>
              <Link className="text-xl" to="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link className="text-xl" to="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="text-xl" to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link className="text-xl" to="/signUp">
                SignUp
              </Link>
            </li>
            <li tabindex="0">
              <a className="justify-between text-xl">
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li></li>
                <li>
                  <a>dksajfkasdjfkljsdkfjsdf</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-3xl ml-20 lin">
          Auto Parts Place
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link className="text-xl lin" to="/">
              Home
            </Link>
          </li>
          <li tabindex="0">
            <Link className="text-xl lin" to="/">
              Parent
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </Link>
            <ul className="p-2">
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </li>
          <li>
            <Link className="text-xl lin" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="text-xl lin" to="/shop">
              Shop
            </Link>
          </li>
          <li>
            <Link className="text-2xl lin" to="/review">
              Review
            </Link>
          </li>
          <li>
            <Link className="text-xl lin" to="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link className="text-xl lin" to="/contact">
              Contact
            </Link>
          </li>
          <li>
            {user ? (
              <>
                <Link
                  onClick={handleSignOut}
                  className="text-xl lin"
                  as={Link}
                  to="/login"
                >
                  Sign Out
                </Link>
              </>
            ) : (
              <Link className="text-xl lin" as={Link} to="/login">
                Login
              </Link>
            )}
          </li>
          <li>
            <Link className="text-xl lin" to="/signUp">
              SignUp
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

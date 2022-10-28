import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export const NavBar = (props) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-5 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="text-gray-600 text-sm font-bold leading-relaxed inline-block mr-3 py-3 whitespace-nowrap uppercase"
            >
              ZonaGamer
            </Link>
            <button
              className="cursor-pointer text-gray-600 text-xl leading-none px-3 py-1 border border-solid  rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto lg:ml-8">
              <li className="flex items-center">
                <NavLink
                  to="/"
                  className={(navData) =>
                    navData.isActive ? "hover:text-gray-600 text-gray-800 px-2 py-4 lg:py-2 flex items-center text-xs uppercase font-bold underline" : "hover:text-gray-600 text-gray-800 px-2 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  }
                >
                  Inicio
                </NavLink>
              </li>
              <li className="flex items-center">
                <NavLink
                  to="/service"
                  className={(navData) =>
                    navData.isActive ? "hover:text-gray-600 text-gray-800 px-2 py-4 lg:py-2 flex items-center text-xs uppercase font-bold underline" : "hover:text-gray-600 text-gray-800 px-2 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  }
                >
                  Servicios
                </NavLink>
              </li>
              <li className="flex items-center">
                <NavLink
                  to="/reservation"
                  className={(navData) =>
                    navData.isActive ? "hover:text-gray-600 text-gray-800 px-2 py-4 lg:py-2 flex items-center text-xs uppercase font-bold underline" : "hover:text-gray-600 text-gray-800 px-2 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  }
                >
                  Reservas
                </NavLink>
              </li>
              <li className="flex items-center">
                <NavLink
                  to="/about"
                  className={(navData) =>
                    navData.isActive ? "hover:text-gray-600 text-gray-800 px-2 py-4 lg:py-2 flex items-center text-xs uppercase font-bold underline" : "hover:text-gray-600 text-gray-800 px-2 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  }
                >
                  Quienes somos
                </NavLink>
              </li>
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {/* <li className="flex items-center">
                <a
                  className="hover:text-gray-500 text-gray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href=""
                  target="_blank"
                >
                  <i className="text-gray-600 fab fa-github text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Github</span>
                </a>
              </li> */}

              <li className="flex items-center">
                <button
                  className="bg-red-400 text-white active:bg-red-600 text-xs font-bold uppercase px-5 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                >
                  <i className="fas fa-user"></i> Login
                </button>
                <button
                  className="bg-red-400 text-white active:bg-red-600 text-xs font-bold uppercase px-5 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-1 mb-3 ease-linear transition-all duration-150"
                  type="button"
                >
                  <i className="fas fa-user"></i> Register
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

import { useEffect, useState } from "react";
import Logo from "../assets/cenergija-logo.svg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <div
      className={`navbar fixed z-50 mx-auto transform transition-all duration-500 ease-in-out ${isScrolled ? " left-1/2 top-5 w-[1200px] -translate-x-1/2 rounded-2xl bg-light-blue/70 shadow-md backdrop-blur-md" : "left-0 top-0 w-full translate-x-0 bg-light-blue"}`}
    >
      <div className="navbar-start flex gap-3">
        <img src={Logo} alt="Cenergija" className="h-12 w-12" />
        <a className="text-xl font-semibold">CENERGIJA</a>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="group btn btn-ghost rounded-xl  border-transparent hover:border-transparent hover:bg-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 transition-all duration-200 group-hover:scale-110"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content menu-lg z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
          >
            <li>
              <a>Homepage</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

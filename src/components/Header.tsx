import { useEffect, useState, useContext } from "react";
import { ColorContext } from "../utils/ColorContext";
import Logo from "../assets/cenergija-logo.svg";

const Header = () => {
  // const [isScrolled, setIsScrolled] = useState(false);
  const { dotColor } = useContext(ColorContext);

  // useEffect(() => {
  //   const checkScroll = () => {
  //     setIsScrolled(window.scrollY > 50);
  //   };

  //   window.addEventListener("scroll", checkScroll);

  //   return () => {
  //     window.removeEventListener("scroll", checkScroll);
  //   };
  // }, []);

  return (
    <div
      // className={`fixed left-0 top-0 z-50 w-full bg-table-yellow/70 transition-all duration-200 ease-in-out ${isScrolled ? " bg-table-yellow/70 shadow-md backdrop-blur-lg" : ""}`}
      className="fixed left-0 top-0 z-50 w-full"
    >
      <div className={`navbar mx-auto max-w-[1440px]`}>
        <div className="navbar-start flex gap-3">
          <img src={Logo} alt="Cenergija" className="h-12 w-12" />
          <a className="text-2xl font-semibold" href="/">
            <span className="text-blue-500">cEne</span>rgija
          </a>
        </div>
        <div className="navbar-center">
          <h1 className="text-center text-4xl font-bold">
            Trenutna cena električne omrežnine
          </h1>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="group btn btn-ghost rounded-xl  border-transparent hover:border-transparent"
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
                <a href="/">Domov</a>
              </li>
              <li>
                <a href="#faq">Vpršanja</a>
              </li>
              <li>
                <a href="mailto:rubuz23@gmail.com">Kontakt</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute -top-9 left-0 -z-20 w-full min-w-[1920px]"
      >
        {/* <path
          fill="#ffc444"
          fill-opacity="1"
          d="M0,128L120,133.3C240,139,480,149,720,149.3C960,149,1200,139,1320,133.3L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
        ></path> */}
        <path
          fill={dotColor}
          fill-opacity="1"
          d="M0,96L120,90.7C240,85,480,75,720,80C960,85,1200,107,1320,117.3L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
};

export default Header;

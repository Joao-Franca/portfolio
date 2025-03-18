import "../../App.css";
import Marca from "/Marca.svg";

const Header = () => {
  return (
    <div>
      <div className="navbar fixed z-50 top-0 left-0 w-full bg-gray-950 flex flex-col">
        {/* Início da Navbar */}
        <div className="navbar-start flex items-center justify-between w-full px-4">
          <div className="dropdown relative">
            {/* Botão de Menu Mobile */}
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden hover:bg-gray-700 transition duration-200 focus:outline-none"
              aria-label="Abrir menu de navegação"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#809DE9"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>

            {/* Dropdown Menu - Mobile */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-gray-950 rounded-md z-10 mt-3 w-52 p-2 shadow transition duration-200"
            >
              <li>
                <a href="#home" className="hover:bg-gray-800 transition duration-200 p-2 rounded">
                  HOME
                </a>
              </li>
              <li>
                <a href="#about" className="hover:bg-gray-800 transition duration-200 p-2 rounded">
                  ABOUT ME
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:bg-gray-800 transition duration-200 p-2 rounded">
                  SKILLS
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:bg-gray-800 transition duration-200 p-2 rounded">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>

          {/* LOGO CENTRALIZADA */}
          <img src={Marca} alt="Marca" className="w-12 h-12" />
        </div>

        {/* Navbar Central - Menu Desktop */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">
            <li>
              <a href="#home" className="hover:bg-gray-800 transition duration-200 p-2 rounded">
                HOME
              </a>
            </li>
            <li>
              <a href="#about" className="hover:bg-gray-800 transition duration-200 p-2 rounded">
                ABOUT ME
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:bg-gray-800 transition duration-200 p-2 rounded">
                SKILLS
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:bg-gray-800 transition duration-200 p-2 rounded">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

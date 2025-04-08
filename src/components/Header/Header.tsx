import "../../App.css";
import Marca from "/Marca.svg";

const Header = () => {
  return (
    <div>
      <div className="navbar fixed z-50 top-0 left-0 w-full bg-gray-950 px-4 h-16 flex items-center">
        {/* MOBILE: Botão de menu à esquerda */}
        <div className="flex-1 flex items-center justify-between lg:hidden w-full">
          {/* Botão dropdown mobile */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost hover:bg-gray-700 transition duration-200 focus:outline-none"
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

            {/* Dropdown Menu */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-gray-950 rounded-md z-10 mt-3 w-52 p-2 shadow transition duration-200"
            >
              <li><a href="#home">HOME</a></li>
              <li><a href="#about">ABOUT ME</a></li>
              <li><a href="#skills">SKILLS</a></li>
              <li><a href="#projects">PROJECTS</a></li>
              <li><a href="#contact">CONTACT</a></li>
            </ul>
          </div>

          {/* Logo à direita (Mobile) */}
          <img src={Marca} alt="Marca" className="w-12 h-12 xl:w-15 xl:h-15" />
        </div>

        {/* DESKTOP: Menu centralizado e logo à direita */}
        <div className="hidden lg:flex items-center justify-between w-full relative">
          {/* Menu centralizado */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <ul className="menu menu-horizontal text-white gap-4">
              <li><a href="#home" className="hover:bg-gray-800 p-2 rounded font-roboto">HOME</a></li>
              <li><a href="#about" className="hover:bg-gray-800 p-2 rounded font-roboto">ABOUT ME</a></li>
              <li><a href="#skills" className="hover:bg-gray-800 p-2 rounded font-roboto">SKILLS</a></li>
              <li><a href="#projects" className="hover:bg-gray-800 p-2 rounded font-roboto">PROJECTS</a></li>
              <li><a href="#contact" className="hover:bg-gray-800 p-2 rounded font-roboto">CONTACT</a></li>
            </ul>
          </div>

          {/* Logo à direita (Desktop) */}
          <div className="ml-auto">
            <img src={Marca} alt="Marca" className="w-12 h-12" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

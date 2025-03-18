import "../../App.css";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import arrow from "../../assets/arrow.svg";
import { BackgroundLines } from "../ui/background-lines";

const Main = () => {
  return (
    <div className="bg-black  flex flex-col items-center justify-center  w-screen relative pt-24">
      {/* Fundo animado com conteúdo centralizado */}
      <BackgroundLines className=" inset-0 flex flex-col items-center justify-center text-center">
        <h2 className="bg-clip-text font-righteous text-white text-5xl mb-2 py-1 md:py-4 font-bold tracking-tight">
          Front-End <br />
          Back-End <br />
          Developer
        </h2>
        <button className="button-projects mt-6 px-5 py-2 bg-transparent border border-white text-white font-poppins rounded-lg inline-flex gap-x-2 items-center hover:bg-white hover:text-black transition duration-200">
          PROJECTS <img src={arrow} alt="arrow" className="h-5 w-5" />
        </button>

        <ul className="flex space-x-4 mt-6 relative z-20">
          <li>
            <a
              href="https://www.linkedin.com/in/jo%C3%A3o-pedro-ferreira-fran%C3%A7a-820462312/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedin}
                alt="LinkedIn"
                className="w-10 h-10 hover:opacity-75 transition duration-200"
              />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Joao-Franca"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={github}
                alt="GitHub"
                className="w-10 h-10 hover:opacity-75 transition duration-200"
              />
            </a>
          </li>
        </ul>
      </BackgroundLines>
    </div>
  );
}

export default Main;
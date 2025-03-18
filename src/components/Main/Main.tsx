import "../../App.css";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import arrow from "../../assets/arrow.svg";
import { BackgroundLines } from "../ui/background-lines";

const Main = () => {
  const lines = ["Front-End", "Back-End", "Developer"];

  return (
    <div className="bg-black flex flex-col items-center justify-center w-screen relative pt-24">
      <BackgroundLines className="inset-0 flex flex-col items-center justify-center text-center">
        
        {/* Texto animado com letras separadas */}
        <h2 className="bg-clip-text font-righteous text-white text-5xl mb-2 py-1 md:py-4 font-bold tracking-tight">
          {lines.map((line, lineIndex) => (
            <div key={lineIndex} className="wave-fade">
              {line.split("").map((letter, letterIndex) => (
                <span key={letterIndex}>{letter === " " ? "\u00A0" : letter}</span>
              ))}
            </div>
          ))}
        </h2>

        <button className="button-projects mt-6 px-5 py-2 bg-transparent border border-white text-white font-poppins rounded-lg inline-flex gap-x-2 items-center hover:bg-white hover:text-black transition duration-200">
          PROJECTS <img src={arrow} alt="arrow" className="h-5 w-5" />
        </button>

        {/* Ícones Sociais Animados */}
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
                className="w-10 h-10 icon-animated"
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
                className="w-10 h-10 icon-animated"
              />
            </a>
          </li>
        </ul>
      </BackgroundLines>
    </div>
  );
};

export default Main;

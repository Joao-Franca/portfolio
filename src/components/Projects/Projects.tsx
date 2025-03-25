import "../../App.css";
import { Timeline } from "../ui/timeline";
import VirtuaFab from "../../assets/VirtuaFab.svg";
import VirtuaFab_Home from "../../assets/VirtuaFab_Home.svg";
import VirtuaFab_3 from "../../assets/VirtuaFab_3.svg";
import VirtuaFab_4 from "../../assets/VirtuaFab_4.svg";
import Aeroswift from "../../assets/Aeroswift.svg";
import Aeroswift_Login from "../../assets/Aeroswift_Login.svg"; 
import Aeroswift_Home from "../../assets/Aeroswift_Home.svg";
import Aeroswift_4 from "../../assets/Aeroswift_4.svg";

function Projects () {
  const data = [
    {
      title: "VirtuaFab",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 font-roboto">
            VirtuaFab is an augmented reality software developed for industrial machine monitoring, providing an interactive and detailed view of the machine components. Presented at the Grand Prix SENAI 2024 with the theme Industry 4.0, the project won 1st place in Latin America.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <a href="https://www.linkedin.com/feed/update/urn:li:activity:7273450395920678912/" target="_blank" rel="noopener noreferrer">
              <img
                src={VirtuaFab}
                alt="VirtuaFab"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </a>
            <a href="https://www.linkedin.com/feed/update/urn:li:activity:7273450395920678912/" target="_blank" rel="noopener noreferrer">
              <img
                src={VirtuaFab_Home}
                alt="VirtuaFab Home"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </a>
            <a href="https://www.linkedin.com/feed/update/urn:li:activity:7273450395920678912/" target="_blank" rel="noopener noreferrer">
              <img
                src={VirtuaFab_3}
                alt="VirtuaFab 3"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </a>
            <a href="https://www.linkedin.com/feed/update/urn:li:activity:7273450395920678912/" target="_blank" rel="noopener noreferrer">
              <img
                src={VirtuaFab_4}
                alt="VirtuaFab 4"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </a>
          </div>
        </div>
      ),
    },
    {
      title: "Aeroswift",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 font-roboto">
            Aeroswift is a software for scheduling drone applications, where you can register a farm in the system and schedule the applications, improving the management of these tasks by defining the time, location, and method of application.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <a href="https://github.com/Joao-Franca/AeroSwift" target="_blank" rel="noopener noreferrer">
              <img
                src={Aeroswift}
                alt="Aeroswift"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </a>
            <a href="https://github.com/Joao-Franca/AeroSwift" target="_blank" rel="noopener noreferrer">
              <img
                src={Aeroswift_Login}
                alt="Aeroswift Login"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </a>
            <a href="https://github.com/Joao-Franca/AeroSwift" target="_blank" rel="noopener noreferrer">
              <img
                src={Aeroswift_Home}
                alt="Aeroswift Home"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </a>
            <a href="https://github.com/Joao-Franca/AeroSwift" target="_blank" rel="noopener noreferrer">
              <img
                src={Aeroswift_4}
                alt="Aeroswift 4"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </a>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="grid grid-rows-[1fr] min-h-screen w-full bg-white dark:bg-neutral-950 font-sans md:px-10 md:pt-20">
      <Timeline data={data} />
    </div>
  );
}

export default Projects;

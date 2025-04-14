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
import Bi1 from "../../assets/bi1.svg";
import Bi2 from "../../assets/bi2.svg"; 
import Bi3 from "../../assets/bi3.svg";
import Bi4 from "../../assets/bi4.svg";

function Projects () {
  const data = [
    {
      title: "VirtuaFab",
      content: (
        <div>
          <p className="text-black dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 font-roboto">
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
          <p className="text-black dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 font-roboto">
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
    {
      title: "Power BI",
      content: (
        <div>
          <p className="text-black dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 font-roboto">
          I am a Business Intelligence professional with extensive experience in creating interactive and highly customized dashboards. I work across all stages of the process—from data collection and transformation to the development of strategic indicators and the delivery of dashboards with exclusive designs tailored to each client.<br/>
          My key strength lies in transforming raw data into relevant, visually clear, and impactful insights that align with each business’s goals. I strive to combine performance, aesthetics, and usability so that each BI solution tells a story and supports smarter decision-making.<br/>
          I focus on results, personalization, and innovation—delivering unique visual solutions for every project, with close attention to detail and the specific needs of each client.
          </p>
          <div className="grid grid-cols-2 gap-4">

              <img
                src={Bi1}
                alt="Tela 1"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            
            
              <img
                src={Bi2}
                alt="Tela 2"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            
            
              <img
                src={Bi3}
                alt="Tela 3"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
           
            
              <img
                src={Bi4}
                alt="Tela 4"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
           
          </div>
        </div>
      ),
    }
  ];

  return (
    <div className="grid grid-rows-[1fr] min-h-screen w-full bg-white dark:bg-neutral-950 font-sans md:px-10 md:pt-20">
      <Timeline data={data} />
    </div>
  );
}

export default Projects;

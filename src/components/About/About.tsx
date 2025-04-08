import "../../App.css";
import Person from "../../assets/person.png";

const About = () => {
  return (
    <div className="p-0 m-0 h-screen bg-[url('/background.svg')] bg-cover bg-no-repeat flex items-center justify-center">
      {/* Container principal */}
      <div className="flex flex-col xl:flex-row-reverse items-center justify-center xl:justify-between p-5 gap-8 xl:gap-[120px] max-w-6xl w-full">
        
        {/* Imagem (fica em cima no mobile, à direita no xl) */}
        <div className="mt-6 xl:mt-0 xl:w-1/2 flex justify-center">
          <img
            src={Person}
            alt="João Pedro"
            className="h-40 w-40 xl:h-100 xl:w-100 rounded-full"
          />
        </div>

        {/* Texto (fica embaixo no mobile, à esquerda no xl) */}
        <div className="text-white text-center xl:text-left xl:w-1/2">
          {/* Título */}
          <h2 className="text-2xl md:text-4xl xl:text-5xl font-poppins font-bold mb-4">
            Hi, I'm João Pedro 
            Web and Mobile 
            Developer
          </h2>

          {/* Caixa com descrição */}
          <div className="bg-white text-black text-left font-roboto p-5 rounded-lg shadow-lg text-base md:text-xl xl:text-2xl">
            <p className="mb-4">
              Professionally connected with the development industry.
            </p>
            <p className="mb-4">
              Problem solver, well-organised person, loyal employee with high
              attention to detail.
            </p>
            <p>
              Interested in ambitious work and projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

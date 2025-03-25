import "../../App.css";
import Person from "../../assets/person.png";

const About = () => {
  return (
    <div className="p-0 m-0 h-screen bg-[url('/background.svg')] bg-cover bg-no-repeat flex items-center justify-center">
      {/* Contêiner que contém todos os elementos (imagem, título e texto) */}
      <div className="text-center flex flex-col md:flex-row items-center justify-center p-5 bg-opacity-70 rounded-lg">
        {/* Imagem centralizada */}
        <img src={Person} alt="" className="pt-2 h-40 w-40 mx-auto" />

        {/* Título */}
        <div>
          <h2 className="text-white text-2xl md:text-4xl font-poppins font-bold mx-5 my-2">
            Hi, I'm João Pedro Web and Mobile Developer
          </h2>
          {/* Texto */}
          <div className="bg-white text-black text-left font-roboto mx-5 my-2 p-5 rounded-lg shadow-lg">
            <p className="mx-1 my-1 text-base md:text-2xl font-roboto">
              Professionally connected with the development industry.
              <br />
              <br />
              Problem solver, well-organised person, loyal employee with high
              attention to detail.
              <br />
              <br />
              Interested in ambitious work and projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

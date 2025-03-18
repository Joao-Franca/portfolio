import "../../App.css";
import Person from "../../assets/person.png";


const About = () => {    
    return (
        <div className="p-0 m-0 h-screen bg-[url('/background.svg')] bg-cover bg-no-repeat">
      <img src={Person} alt="" className="pt-2 h-40 w-40 mx-auto " />
      <div className="flex flex-col items-center justify-center w-screen relative pt-5">
        <h2 className="bg-black text-white text-2xl text-center font-poppins font-bold align-center mx-5 my-0 ">
          Hi, I'm João Pedro Web and Mobile Developer
        </h2>
        <div className="bg-white text-black text-left font-roboto align-center mx-5 my-0 ">
          <p className="mx-1 my-1">
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
    );
}   

export default About;
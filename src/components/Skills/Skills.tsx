import "../../App.css";
import Javascript from '../../assets/javascript.svg';
import ReactIcon from '../../assets/react.svg';
import Nodejs from '../../assets/nodejs.svg';
import Html from '../../assets/html.svg';
import Css from '../../assets/css.svg';
import Tailwind from '../../assets/tailwind.svg';
import Java from '../../assets/java.svg';
import Figma from '../../assets/figma.svg';
import Sql from '../../assets/sql.svg';
import Git from '../../assets/git.svg';
import Boot from '../../assets/boot.svg';
import Vue from '../../assets/vue.svg';

const Skills = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center px-6 py-10 h-screen">
            {/* Títulos */}
            <h1 className="text-4xl md:text-7xl text-white font-poppins font-bold mb-4 ">Skills & Experience</h1>
            <h2 className="text-base md:text-2xl text-gray-300 font-roboto mb-8 md:mx-80 pb-5">
                I have experience in building Web and Mobile applications using React and its ecosystem, including the development of custom plugins, animations and interactive features. I am proficiently skilled in HTML, CSS, JavaScript, and modern frameworks, ensuring intuitive and responsive interfaces. In addition, I am knowledgeable in databases and data analysis, enabling efficient integration between front-end and back-end, query optimization, and development of scalable solutions. My focus is on creating high-performance and usability digital experiences, always striving for innovation and efficiency.
            </h2>

            {/* Ícones das Skills */}
            <div className="flex flex-wrap justify-center items-center gap-6 mt-8">
                {[Javascript, ReactIcon, Nodejs, Html, Css, Tailwind, Java, Figma, Sql, Git, Boot, Vue].map((icon, index) => (
                    <img key={index} src={icon} alt="Skill Icon" className="w-9 h-9 md:w-18 md:h-18 transition-transform duration-300 hover:scale-110" />
                ))}
            </div>
        </div>
    );
}

export default Skills;

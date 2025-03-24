import './App.css'
import About from './components/About/About'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'


function App() {

  return (
    <div className="bg-black overflow-x-hidden  h-full m-0 p-0">
      <Header />
      {/* Seção Principal */}
      <section id="home">
        <Main />
      </section>

      {/* Seção Sobre Mim */}
      <section id="about">
        <About />
      </section>

      {/* Seção Habilidades */}
      <section id="skills">
        <Skills />
      </section>
      

      {/* Seção Projetos */}
      <section id="projects">
        <Projects />
      </section>

      <div className="h-[500px] md:h-[1000px]" /> espaço entre seções

     {/* Seção Projetos */}
     <section id="contact">
        <Contact />
      </section>
    
   </div>


  )
}

export default App

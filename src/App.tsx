import './App.css'
import About from './components/About/About'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Skills from './components/Skills/Skills'

function App() {

  return (
    <div className="bg-black fixed overflow-x-hidden  h-full m-0 p-0">
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
   </div>
  )
}

export default App

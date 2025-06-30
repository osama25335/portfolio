import Header from "./components/header/Header.jsx"
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Skills from './components/skills/Skills.jsx'
import Services from './components/services/Services.jsx'
import Qualification from './components/qualification/Qualification.jsx'
import Contact from './components/contact/Contact.jsx'
import Footer from './components/footer/Footer.jsx'
import './index.css'
import 'boxicons'
import Scrollup from "./components/scrollup/Scrollup.jsx"
import Portfolio from "./components/portfolio/Portfolio.jsx"

function App() {

  return (
    <>
      <Header/>
      <main className="main">
        <Home/>
        <About/>
        <Skills/>
        <Services/>
        <Qualification/>
        <Portfolio/>
        <Contact/>
      </main>
      <Footer />
      <Scrollup/>

    </>
  )
}

export default App

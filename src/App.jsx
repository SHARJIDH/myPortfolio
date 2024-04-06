import Header from "./components/Header/Header"
import css from './styles/app.module.scss'
import Hero from "./components/hero/Hero";
import Experties from "./components/Experties/Experties";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import People from "./components/People/People";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Skills/Skills";
const App = () => {
  return <div className={`bg-primary ${css.container}`}>
    <Header />
    <Hero />
    <Experties />
    <Works />
    <Skills />
    <Portfolio />
    {/* <People/> */}
    <Footer />
  </div>
};

export default App;

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import ToTop from "./components/ToTop";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
      <ToTop />
    </div>
  );
}

export default App;

import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skil";
import Hero from "./components/Hero";
import Loading from "./components/Loading";
import Portfolio from "./components/Portfolio";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="min-h-screen bg-neutral-200 text-neutral-900 selection:bg-neutral-900 selection:text-white pt-16">
        <Loading />
        <Navbar />
        <Hero />
        <Skills />
        <Portfolio />
        <About />
        <Contact />
      </div>
    </>
  );
}

export default App;

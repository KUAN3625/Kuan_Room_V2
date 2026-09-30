import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <>
      <div className="bg-zinc-800 ">
        <Hero />
        <Experience />
        <About />
        <Portfolio />
        <Contact />
      </div>
    </>
  );
}

export default App;

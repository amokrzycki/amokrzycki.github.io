import "./App.css";
import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import Technologies from "./components/Technologies.tsx";
import Experience from "./components/Experience.tsx";
import Projects from "./components/Projects.tsx";
import Contact from "./components/Contact.tsx";

function App() {
  return (
    <div
      className="h-screen w-screen bg-slate-950 text-neutral-300 overflow-x-hidden antialiased selection:bg-cyan-300 selection:text-cyan-900 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"
      id={"main-wrapper"}
    >
      <div className={"container mx-auto px-8"}>
        <Navbar />
        <Hero />
        <Experience />
        <Technologies />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;

import About from "./components/About/About";
import Experience from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/projects/projects";

function App() {
  return (
    <div className="min-h-screen w-full overflow-hidden bg-background text-foreground">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App

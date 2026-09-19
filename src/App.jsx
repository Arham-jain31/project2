import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Gallery from "./components/Gallery";
import Articles from "./components/Articles";
import Tutorials from "./components/Tutorials";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />
      <Hero />
      <About />
      <Project />
      <Gallery />
      <Articles />
      <Tutorials />
      <Footer />
    </div>
  );
}

export default App;
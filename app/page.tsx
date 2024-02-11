import Contact from "@/components/Contact";
import Intro from "@/components/Intro";
import Projects from "@/components/projects";

export default function App() {
  return (
    <>
      <Intro />
      <div className="gradient"></div>
      <Projects />
      <div className="gradient"></div>
      <Contact />
    </>
  );
}

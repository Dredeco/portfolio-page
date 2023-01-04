import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";


export function App() {
  return (
    <div className="w-screen h-full">
      <Header />
      <Home />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
  }

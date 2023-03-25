import React, { useEffect } from "react";
import "./styles/styles.css";
import { Top } from "./components/top";
import { Stack } from "./components/stack";
import { Projects } from "./components/projects";
import { About } from "./components/about";
import { Links } from "./components/links";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <div className="App">
      <Top />

      <Stack />
      <Projects />
      <About />
      <Links />
     
    </div>
  );
};

export default App;

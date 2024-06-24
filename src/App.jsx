import React from "react";
import Header from "./components/Header/Header";
import Work from "./components/Work/Work";
import Time from "./components/Time/Time";
import Projects from "./components/Projects/Projects";
import Stacks from "./components/Stacks/Stacks";
import Socials from "./components/Socials/Socials";

function App() {
  return (
    <>
      <Header />
      <Work />
      <Socials />
      <Time />
      <Projects />
      <Stacks />
    </>
  );
}

export default App;

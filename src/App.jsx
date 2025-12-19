import React from "react";
import Hero from "./sections/Hero.jsx/Hero";
import Header from "./sections/Header/Header";
import Sponsers from "./sections/Sponsers/Sponsers";
import About from "./sections/About/About";
const App = () => {
  return (
    <main>
      <Header />
      <Hero />
      <Sponsers />
      <About />
    </main>
  );
};

export default App;

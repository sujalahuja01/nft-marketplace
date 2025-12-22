import React from "react";
import Hero from "./sections/Hero.jsx/Hero";
import Header from "./sections/Header/Header";
import Sponsers from "./sections/Sponsers/Sponsers";
import About from "./sections/About/About";
import Collections from "./sections/Collections/Collections";
import Features from "./sections/Features/features";
import Creators from "./sections/Creators/Creators";
const App = () => {
  return (
    <main>
      <Header />
      <Hero />
      <Sponsers />
      <About />
      <Collections />
      <Features />
      <Creators />
    </main>
  );
};

export default App;

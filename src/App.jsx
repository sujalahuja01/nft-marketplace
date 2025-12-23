import React from "react";
import Hero from "./sections/Hero.jsx/Hero";
import Header from "./sections/Header/Header";
import Sponsers from "./sections/Sponsers/Sponsers";
import About from "./sections/About/About";
import Collections from "./sections/Collections/Collections";
import Features from "./sections/Features/features";
import Creators from "./sections/Creators/Creators";
import FAQ from "./sections/FAQ/FAQ";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import Rights from "./sections/Rights/Rights";
const App = () => {
  return (
    <main>
      <Header />
      <Hero />
      <Sponsers />
      <About />
      <Collections />
      <Features />
      {/* <Creators /> */}
      {/* <FAQ /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
      {/* <Rights /> */}
    </main>
  );
};

export default App;

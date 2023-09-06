import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";

function page() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <ContactSection />
      <Footer />
    </>
  );
}
export default page;

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./componenet/Navbar/Navbar";
import Home from "./componenet/Home/Home";
import About from "./componenet/About/About";
import Skills from "./componenet/Skills/Skills";
import Qualification from "./componenet/Qualifications/Qualifications";
import Services from "./componenet/Services/Services";
import Portfolio from "./componenet/Portfolio/Portfolio";
import SingleProject from "./componenet/Portfolio/SingleProject";
import TestimonialsSlider from "./componenet/Sliders/TestimonialsSlider";
import ContactMe from "./componenet/Contact/ContactMe";
import Error from "./componenet/Error/Error";
import Footer from "./componenet/Footer/Footer";
import ScrollTop from "./componenet/ScrollTop/ScrollTop";
import Loader from "./componenet/Loader/Loader";

const App = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <Router>
      <Navbar />
      <main className="main">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/skills">
            <Skills />
            <Qualification />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
            <TestimonialsSlider />
          </Route>
          <Route path="/contact">
            <ContactMe />
          </Route>
          <Route path="/projects/:title" children={<SingleProject />}></Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
        <ScrollTop />
      </main>
      <Footer />
    </Router>
  );
};

export default App;

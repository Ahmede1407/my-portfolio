import React from "react";
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

const App = () => {
  return (
    <Router>
      <Navbar />
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
    </Router>
  );
};

export default App;

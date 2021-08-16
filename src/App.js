import React from "react";
import Navbar from "./componenet/Navbar/Navbar";
import Home from "./componenet/Home/Home";
import About from "./componenet/About/About";

const App = () => {
  return (
    <div>
      <Navbar />

      <main className="main">
        <Home />
        <About />
      </main>
    </div>
  );
};

export default App;

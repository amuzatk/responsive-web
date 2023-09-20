import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Find from "./components/Find/Find";
import Video from './components/Video'
import Driver from "./components/Driver/Driver";
import Luxury from "./components/Luxury/Luxury";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Find />
      < Driver />
      <Luxury />
      <Footer />
      {/* <Video /> */}
    </div>
  );
}

export default App;

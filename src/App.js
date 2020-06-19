import React from "react";
import "./App.css";

import Header from "./components/Header";
import SectionSpacing from "./components/SectionSpacing";
import Footer from "./components/Footer";
import MainResultSection from "./components/MainResultSection";

// ===============================================================================

function App() {

  // ================================================

  return (
    <div>
      <Header />
      <MainResultSection />
      <SectionSpacing />
      <Footer />
    </div>
  );
}

export default App;

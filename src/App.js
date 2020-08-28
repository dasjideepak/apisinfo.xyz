import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Header from "../src/components/Header";
import Hero from "../src/components/Hero";
import RandomAPI from "../src/components/RandomAPI";
import Category from "../src/components/Category";
// import AddAPI from "../src/components/AddAPI";
import Footer from "../src/components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <RandomAPI />
      <Category />
      {/* <AddAPI /> */}
      <Footer />
    </div>
  );
}

export default App;

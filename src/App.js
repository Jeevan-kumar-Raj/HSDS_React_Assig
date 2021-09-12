import React from "react";
import "./App.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import PostBody from "./PostBody";

function App() {
  return (
    <div className="app">
      <Navbar />
      <PostBody />
      <Footer />
    </div>
  );
}

export default App;

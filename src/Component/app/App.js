import React, { Component } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Content from "../body/content";

function App() {
  return (
    <div id="container">
      <Header />
      {/* this is content area */}
      <Content />
      {/* footer content */}
      <Footer />
    </div>
  );
}

export default App;


import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./compronents/shared/Header";
import Footer from "./compronents/shared/Footer";

function App() {
  return (
    <div className="App">
    <Header tatle="Gallery"/>
    <Footer company="Shopping Gallery" email="n.arunpoon@gmail.com"/>
    </div>
  );
}

export default App;

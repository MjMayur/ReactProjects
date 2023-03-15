import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import "./App.css";
import Profile from "./Profile.js";
import {  Routes, Route } from "react-router-dom";
import Footer from "./Footer";




function App() {

  return (
    <>
    < Navbar/>
      <Routes>
        <Route>
          
        <Route path="/" element={<Profile />} />
         
         
        </Route>
      </Routes>
    <Footer/>
    </>
  );
}
export default App;
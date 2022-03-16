import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import Home from "./pages/Home";
import Inner from "./pages/Inner";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Inner/:id' element={<Inner/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

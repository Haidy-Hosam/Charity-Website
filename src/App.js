import './App.css';
import React from 'react';
import SectionTitle from './components/common/Section_Line.js';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Home from './components/Home/Home.js';
import Container from "./components/Layout/Container";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
      <Router>
      <Header/>
        <Container>

        <div className="App">
        <switch>
          <Route path = "/" exact component = {Home}/>
          {/* <Route path = "/call" exact component = {callll}/> */}
        </switch>
        </div>

        </Container>

      <Footer/>
      </Router>
  );
}

export default App;

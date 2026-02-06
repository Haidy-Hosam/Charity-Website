import './App.css';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Home from './components/Home/Home.js';
import Container from "./components/Layout/Container";
import Campaigns from './components/campaigns/campaigns.js';
import AboutCharity from './components/AboutCharity/AboutCharity.js';
import Store from './components/Store/Store.js';
import CallUs from './components/CallUs/CallUs.js';
import News_and_Acrticles from './components/News_and_Acrticles/News_and_Acrticles';
import CardDetails from './components/News_and_Acrticles/CardDetails/CardDetails.js'
import ProductDetails from './components/Store/productDetails.js'
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton.js';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
      <Router>
      <Header/>
        <Container>

      <ScrollToTopButton />
        <div className="App">
        <Switch>
          <Route path = "/" exact component = {Home}/>
          <Route path = "/campaigns" exact component = {Campaigns}/>
          <Route path = "/aboutcharity" exact component = {AboutCharity}/>
          <Route path = "/store" exact component = {Store}/>
          <Route path = "/newsandarticles" exact component = {News_and_Acrticles}/>
          <Route path = "/callus" exact component = {CallUs}/>
          <Route path = "/newsandarticles/campaignDetails/:id" exact component = {CardDetails}/>
          <Route path = "/product/:id" exact component = {ProductDetails}/>
        </Switch>
        </div>

        </Container>

      <Footer/>
      </Router>
  );
}

export default App;

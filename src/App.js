import './App.css';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Home from './pages/Home/Home.js';
import Container from "./components/Layout/Container";
import Campaigns from './pages/campaigns/campaigns.js';
import AboutCharity from './pages/AboutCharity/AboutCharity.js';
import Store from './pages/store/Store.js';
import CallUs from './pages/CallUs/CallUs.js';
import News_and_Acrticles from './pages/News_and_Acrticles/News_and_Acrticles.js';
import CardDetails from './pages/CardDetails/CardDetails.js'
import ProductDetails from './pages/store/productDetails/productDetails.js'
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

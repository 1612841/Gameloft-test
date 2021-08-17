import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/register/Register';
import GameCommunity from './components/community/GameCommunity';
import Promotion from './components/promotion/Promotion';
import Exclusive from './components/exclusiveGame/Exclusive';
import Footer from './components/footer/Footer';
import ReactFullpage from '@fullpage/react-fullpage';

function App() {

  return(

  <ReactFullpage
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000} 
    scrollHorizontally = {true} 
    scrollHorizontallyKey = {'YOUR KEY HERE'}

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <Router>
              <Header />
            </Router>
          </div>
          <div className="section">
            <Router>
              <Register />
            </Router>
          </div>
          <div className="section">
            <Router>
              <GameCommunity />
            </Router>
          </div>
          <div className="section">
            <Router>
              <Promotion />
            </Router>
          </div>
          <div className="section">
            <Router>
              <Exclusive />
            </Router>
          </div>
          <div className="section">
            <Router>
              <Footer />
            </Router>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
  );
}
export default App;

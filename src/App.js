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


function App() {
  return (
    <>
      <Router>
        <Header />
        <Register />
        <GameCommunity />
        <Promotion />
        <Exclusive />
        <Footer />
      </Router>
    </>
  );
}

export default App;

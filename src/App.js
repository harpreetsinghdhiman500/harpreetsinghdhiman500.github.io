import React, { Component } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import './assets/css/main.css';
import './assets/css/aos.css';
import './assets/css/mdb.min.css';
import './assets/css/font-awesome/css/all.min.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Content from './components/Content';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content/>
        <Footer/>
      </div>
    );
  }
}

export default App;
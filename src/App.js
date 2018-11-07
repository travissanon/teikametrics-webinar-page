import React, { Component } from 'react';
// import './App.scss';
import './styles/main.scss';

import Header from './components/Header';
import Hero from './components/Hero'
import Footer from './components/Footer';
import Trial from './components/Trial';
import IncludedPlans from './components/IncludedPlans';
import Sellers from './components/Sellers';

class App extends Component {
  render() {
    return ( 
      <div className="App">
        <Header />
        <Hero />
        <Trial />
        <IncludedPlans />
        <Sellers />
        <Footer />
      </div>
    );
  }
}

export default App;

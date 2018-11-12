import React, { Component } from 'react';
import './styles/main.scss';

import Header from './components/Header';
import SubNav from './components/SubNav';
import Hero from './components/Hero'
import Footer from './components/Footer';
import Trial from './components/Trial';
import IncludedPlans from './components/IncludedPlans';
import Sellers from './components/Sellers';

class App extends Component {
  constructor(props) {
    super(props)

    this.handleNavChange = this.handleNavChange.bind(this);
    this.state = { selected: 1 }
  }

  handleNavChange(index) {
    this.setState({
      selected: index
    })
  }

  render() {
    return ( 
      <div className="App">
        <Header />
        <SubNav selected={this.state.selected} handleNavChange={this.handleNavChange} />
        <Hero selected={this.state.selected}/>
        <Trial />
        <IncludedPlans />
        <Sellers />
        <Footer />
      </div>
    );
  }
}

export default App;

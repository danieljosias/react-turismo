import React from 'react';
import Navbar from './components/Navbar.js';
import './components/Navbar.css';
import Section from './components/Section.js';
import './components/Section.css'
import Home from './components/pages/Home.js'
import CardItem from './components/CardItem.js'
import Footer from './components/Footer.js'

import  { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <div>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact component = {Home} />
                </Switch>
            </Router>
        </div>
    )
}

export default App;


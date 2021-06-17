import React from 'react'
import './App.css';
import Home from './Pages/Home'
import About from './Pages/About';
import Contact from './Pages/Contact';
import Service from './Pages/Service';
import Index from './Pages'
import PageNotFound from './Pages/PageNotFound';
import NavBar from './Pages/NavBar';
import Footer from './Pages/Footer'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/service" component={Service} />
          <Route path="*" component={PageNotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

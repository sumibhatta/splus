import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './component/Header'
import Footer from './component/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import {Container} from 'react-bootstrap'




function App() {
  return (
    <Router>
    <Container>
      <Header/>
    </Container>
    <Route path="/" component={HomeScreen} exact/>
    <Route path="/product/:id" component={ProductScreen}/>
    <Container>
      <Footer/>
    </Container>
    </Router>
  );
}

export default App;

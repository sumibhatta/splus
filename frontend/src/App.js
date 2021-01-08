import React from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import HomeScreen from './screens/HomeScreen'
import {Container} from 'react-bootstrap'


function App() {
  return (
    <>
    <Container>
      <Header/>
    </Container>
    <HomeScreen/>
    <Container>
      <Footer/>
    </Container>
    </>
  );
}

export default App;

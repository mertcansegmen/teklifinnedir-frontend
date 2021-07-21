import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen';
import Header from './components/Header';

function App() {
  return (

    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route
            path='/search/:keyword/page/:pageNumber'
            component={HomeScreen}
            exact
          />
          <Route path='/' component={HomeScreen} exact />
        </Container>
      </main>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;

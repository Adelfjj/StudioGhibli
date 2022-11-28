import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import CardInfo from './components/pages/CardInfo';
import Home from './components/pages/Home';
import News from './components/pages/News';
import About from './components/pages/About';

function App() {
  return (
    <Router>
      <Container>
        <Navbar/>
        <Routes>
          <Route path='/' element= {<Home/>}/>
          <Route path='/News' element= {<News/>}/>
          <Route path='/About' element= {<About/>}/>
          <Route path='/film/:id' element= {<CardInfo/>}/>
        </Routes>
      </Container>
    </Router>
  );
}

export default App;

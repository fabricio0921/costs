import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import NewProject from './components/pages/NewProject';
import Container from './components/layout/Container';
import NavBar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Projects from './components/pages/Projects';





function App() {
  return (
    <Router>
      <NavBar/>
      <Container customClass="min-height">
        <Routes>


          <Route path='/' element={<Home />} />
          


          <Route path='/company' element={<Company />} />
          <Route path='/projects' element={<Projects />} />

          <Route path='/contact' element={<Contact />} />

          <Route path='/newproject' element={<NewProject />} />




        </Routes>

      </Container>
      <Footer/>


    </Router>

  );
}

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import Home from './Components/Home/Home'
import About from './Components/About/About'
import Instructors from './Components/Instructors/Instructors'
import Schedule from './Components/Schedule/Schedule'
import Contact from './Components/Contact/Contact'
import News from './Components/News/News'
import Footer from './Components/Footer/Footer'

function App() {
  return (
  <div className="App">
      <BrowserRouter>
      <header>
        <Navbar className="NavBar" expand="lg" sticky="top">
            <Navbar.Brand href="/"><img src={process.env.PUBLIC_URL + './images/lvjj.png'} height="65" width="65"/></Navbar.Brand>
            <Navbar.Toggle id="navBar-toggle" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="justify-content-end" style={{ width: "100%" }}>
                <Nav.Link href="/" style={{color:"white"}} className="navBar-li">Home</Nav.Link>
                <Nav.Link href="/About" style={{color:"white"}} className="navBar-li">About</Nav.Link>
                <Nav.Link href="/Instructors" style={{color:"white"}} className="navBar-li">Instructors</Nav.Link>
                <Nav.Link href="/Schedule" style={{color:"white"}} className="navBar-li">Schedule</Nav.Link>
                <Nav.Link href="/News" style={{color:"white"}} className="navBar-li">News</Nav.Link>
                <Nav.Link href="/Contact" style={{color:"white"}} className="navBar-li">Contact</Nav.Link>
      
              </Nav>
              </Navbar.Collapse>
        </Navbar>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Instructors" element={<Instructors />} />
            <Route path="/Schedule" element={<Schedule />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/News" element={<News />} />
        </Routes>
      </header>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

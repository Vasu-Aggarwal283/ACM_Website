import './App.css';
import Navbar from './components/Navbar';
import Text from './components/Text';
import Blog from './components/Blog';
import About from './components/About';
import Events from './components/Events';
import Project from './components/Project';
import Team from './components/Team';
import Footer from './components/Footer'
import Template from './components/Template';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";



function App() {
  return (

    <>
    {/* <Navbar/>
    <Text/>
    <Footer/> */}
   <Router>
  
    <Routes>
          {/* <Route path="/About">
            <About />
          </Route> */}
          <Route path="/Blogs" element={<Blog />}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Events" element={<Events/>}/>
          <Route path="/project" element={<Project/>}/>
          <Route path="/Team" element={<Team/>}/>
          {/* <Route path="/Projects">
            <Projects />
            </Route> */}
            <Route path="/" element={<Template/>}/>
            
            {/* <Footer/>
     */}
        </Routes>
        
    </Router>
    </>
  );
}

export default App;

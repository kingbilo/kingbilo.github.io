import './App.css';
import React from 'react';
import { Link, Route, Routes, } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import LoginForm from './LoginForm'

function App() {

    return (
        <div>
            <nav>
                <ul id="navigation">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            {LoginForm()}
            <Routes>
                <Route path="/" element={<Home />}>
                </Route>
                    <Route path="/about" element={<About />}>
                </Route>
                <Route path="/contact" element={<Contact />}></Route>
            </Routes>
            
        </div>
  );
}

export default App;

import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Nav from './components/Nav';
import RandomJoke from './pages/RandomJoke';
import NeverEndingJokes from './pages/NeverEndingJokes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/main.css';


const App = () => {
    return (
        <Router>
            <div className="container">
                <Nav/>
                <div className="mt-5">
                    <Routes>
                        <Route path="/" element={<RandomJoke/>}/>
                        <Route path="/never-ending-jokes" element={<NeverEndingJokes/>}/>
                        <Route path="*" element={<h1>404 - Page Not Found</h1>}/>
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;

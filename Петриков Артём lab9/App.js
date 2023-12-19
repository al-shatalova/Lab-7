import './App.css';
import {HashRouter as Router, Route, Link, Routes} from "react-router-dom";
import MainPage from "./MainPage";
import Registration from "./Registration";
import React from "react";


function App() {
    return (
        <Router>
            <div className="App">
                <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-black">
                    <Link to="/" className="navbar-brand text-white namerest" >ВОПРОСЫ</Link>
                    <button className="navbar-toggler but" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link to="/" className="nav-link text-white">Главная страница <span className="sr-only"></span></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/registration" className="nav-link text-white">Регистрация</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <br/><br/><br/><br/><br/>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/registration" element={<Registration />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

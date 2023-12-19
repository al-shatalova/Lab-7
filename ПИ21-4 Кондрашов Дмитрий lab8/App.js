import './App.css';
import {HashRouter as Router, Route, Link, Routes} from "react-router-dom";
import MainPage from "./MainPage";
import TimerPage from "./TimerPage";
import LoginPage from "./LoginPage";

function App() {

    return (
        <>
            <Router>
                <div className="e1_3"></div>
                <Link to="/"><span className="e1_4">Habr</span></Link>
                {/*<Link to="/login"><span className="login">Логин</span></Link>*/}
                <div className="e1_5"></div>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/timer" element={<TimerPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                </Routes>
                <div className="e1_13"></div>
                <div className="e1_14"></div>
            </Router>
        </>
    );
}

export default App;

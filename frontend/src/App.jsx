import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Login from './Login'
import Create from './Create'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './Dashboard';

function App() {
  return (
    <Router>
      <div className="App container">
        <Navbar></Navbar>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route path="/signIn" element={<Login/>}></Route>
            <Route path="/signUp" element={<Create/>}></Route>
            <Route path="/dashboard" element={<Dashboard/>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

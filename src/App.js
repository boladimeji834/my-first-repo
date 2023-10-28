import logo from './logo.svg';
import './App.css';


import Home from './components/pages/Home';
import Contact from './components/pages/Contact'
import About from './components/pages/About'
import Greeting from "./components/Greeting";
import Navbar from './components/Navbar'
import Illustration from "./components/Illustration";
import Header from './components/Header'
import Achievements from "./components/Achievements";


function App() {
    return (
        <div className="App">
            <Navbar/>
            <Illustration/>
            <Header />
            <Achievements />

        </div>
    );
}

export default App;

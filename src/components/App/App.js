import logo from "../../assets/logo_header.svg";
import "./App.scss";
import Header from "../Header/Header";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Kasa</h1>
                <Header />
            </header>
        </div>
    );
}

export default App;

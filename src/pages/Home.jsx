import logo from "../assets/logo.svg";
import Header from "../components/Header";

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

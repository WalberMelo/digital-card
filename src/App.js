import logo from "../src/image/foto.png";
import "./App.css";
import Header from "./components/Header";
import Buttons from "./components/Buttons";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <div className="foto">
          <img src={logo} className="App-foto" alt="photo" />
        </div>
        <Header />
        <Buttons />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;

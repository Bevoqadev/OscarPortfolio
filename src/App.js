import "./App.css"; 
import NavBar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./components/Banner/Banner";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner/>
    </div>
  );
}

export default App;

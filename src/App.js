import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import QuantityPicker from "./components/quantityPicker";
import Catalog from "./pages/catalog";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Home from "./pages/home";
import About from "./pages/about.jsx";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Catalog></Catalog>
      <Footer></Footer>
    </div>
  );
}

export default App;


import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home"; 
import About from './pages/About';
import Fiche from './pages/Fiche';
import NotFound from './pages/NotFound';


function App() {
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/fiche" element={<Fiche />} />
    <Route path="/404" element={<NotFound />} />
  </Routes>
}

export default App;

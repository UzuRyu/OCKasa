
import './App.scss';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home"; 
import About from './pages/About';
import Fiche from './pages/Fiche';
import NotFound from './pages/NotFound';


function App() {
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/Fiche/:id"element={<Fiche />}/>
    <Route path="*" element={<NotFound />} />
  </Routes>
}

export default App;

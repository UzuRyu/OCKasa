
import './App.scss';
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from './pages/About';
import Fiche from './pages/Fiche';
import NotFound from './pages/NotFound';


function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Fiche/:id" element={<Fiche />} />
          <Route path="/404" component={<NotFound />} />
        <Route path="*" element={<Navigate to="/404"/>} />
      </Routes>
  )
}

export default App;

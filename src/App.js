import "./App.css";
import Home from "./Pages/Home";
import Collections from './Components/Collections'
import Trends from './Components/Trends'
import Designers from './Components/Designers'
// import Footer from "./Components/Footer";
import { Route, BrowserRouter, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/collections" element={<Collections/>}/>
        <Route path="/trends" element={<Trends/>}/>
        <Route path="/designers" element={<Designers/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;

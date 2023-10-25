import "./App.css";
import Home from "./Pages/Home";
import Collections from './Components/Collections'
import Trends from './Components/Trends'
import Designers from './Components/Designers'
import SignUp from './Components/SignUp'
import ContactUs from './Components/ContactUs'
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
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/ContactUs" element={<ContactUs/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;

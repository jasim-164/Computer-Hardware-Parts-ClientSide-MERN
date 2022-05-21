import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./pages/Shared/Navbar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/navbar" element={<Navbar/>}/>
      </Routes>
    </div>
  );
}

export default App;

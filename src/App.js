import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./pages/Shared/Navbar";
import Loading from "./pages/Shared/Loading";
import Login from "./pages/Login/Login";
import Blogs from "./pages/Blogs/Blogs";
import HardwareComponents from "./pages/HardwareComponents/HardwareComponents";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/navbar" element={<Navbar />} />
        <Route
          path="/hardwarecomponents"
          element={<HardwareComponents />}
        ></Route>
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
